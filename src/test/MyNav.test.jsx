import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyNav from '../components/MyNav'
import { ThemeProvider } from '../context/contextTheme';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

const renderNav = (pathname = '/') => {
  const mockCategoria = vi.fn();
  const mockSearch = vi.fn();

  render(
    <MemoryRouter initialEntries={[pathname]}>
      <ThemeProvider>
        <MyNav
          categoria="Fantasy"
          handleCategoria={mockCategoria}
          handleSearch={mockSearch}
          searchValue=""
          booksData={{ Fantasy: [], Horror: [] }}
        />
      </ThemeProvider>
    </MemoryRouter>
  );

  return { mockCategoria, mockSearch };
};

describe("Testiamo la Navbar,Select e ricerca", () => {
it ('mostra select e input ricerca sulla home', () => {
  renderNav('/');
  expect(screen.getByRole('combobox')).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/ricerca/i)).toBeInTheDocument();
});
it('nasconde select e ricerca su pagina dettagli', () => {
  renderNav('/books/123');
  expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
  expect(screen.queryByPlaceholderText(/ricerca/i)).not.toBeInTheDocument();
});

it('cambia categoria quando seleziono', async () => {
  const { mockCategoria } = renderNav('/');
  const select = screen.getByRole('combobox');
  await userEvent.selectOptions(select, 'Horror');
  expect(mockCategoria).toHaveBeenCalled();
});

it('scrivendo nella ricerca chiama handleSearch', async () => {
  const { mockSearch } = renderNav('/');
  const input = screen.getByPlaceholderText(/ricerca/i);
  await userEvent.type(input, 'harry');
  expect(mockSearch).toHaveBeenCalled();
});
});