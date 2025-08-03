import { render, screen } from '@testing-library/react';


import { expect, it } from 'vitest';
import { ThemeProvider} from '../context/contextTheme';
import { MemoryRouter } from 'react-router';
import BooksDetails from '../components/BooksDetails';


it('carica i commenti dopo click su libro con recensioni', async () => {
  
   const theme = {theme:'dark'};
   const colorText= {colorText:'white'};

  render(
    <MemoryRouter>
    <ThemeProvider value={{theme , colorText}}>
   <BooksDetails Book={[
    {
    "asin": "0316438960",
    "title": "The Last Wish: Introducing the Witcher",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    "price": 9.59,
    "category": "fantasy"
  },
  {
    "asin": "0316389706",
    "title": "Sword of Destiny (The Witcher)",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg",
    "price": 10.39,
    "category": "fantasy"
  }, 
  ]}
/>
</ThemeProvider>
</MemoryRouter>
  );

 

  // Aspetta che i commenti compaiano nel DOM
  const comments = await screen.findAllByTestId('singleComment');
  expect(comments.length).toBeGreaterThan(0);
});