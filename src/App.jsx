import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/Welcome.jsx";
import Footer from "./components/Footer.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import fantasy from "./books/fantasy.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";
import history from "./books/history.json";
import {  useState } from "react";
import { SelectedProvider } from "./context/selectedContext.jsx";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./components/NotFound.jsx";
import BooksDetails from "./components/BooksDetails.jsx";
import { ThemeProvider,  } from "./context/contextTheme.jsx";
import About from "./components/About.jsx";

const booksData = {
  Fantasy: fantasy,
  Horror: horror,
  Romance: romance,
  SciFi: scifi,
  History: history,
};
function App() {
  const [categoria, setCategoria] = useState("Fantasy");
  const [searchValue, setSearchValue] = useState("");
  const [filteredBook, setFilteredBook] = useState(booksData[categoria]);
  
 
  
  


  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const books = booksData[categoria].filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBook(books);
  };

  const handleCategoria = (e) => {
    setSearchValue("");
    setCategoria(e.target.value);
    setFilteredBook(booksData[e.target.value]);
  };
  return (
    <>
    <BrowserRouter>
    <ThemeProvider>
        <MyNav
          categoria={categoria}
          handleCategoria={handleCategoria}
          handleSearch={handleSearch}
          searchValue={searchValue}
          filteredBook={filteredBook}
          booksData={booksData}
          
         />

        <Welcome searchValue={searchValue} filteredBook={filteredBook} />
         <SelectedProvider>
         <Container fluid className="p-0" >  
         <Routes> 
          <Route path="/" element={ <AllTheBooks
          filteredBook={filteredBook}
        />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/books/:asin" element={<BooksDetails books={filteredBook}/>}/>
          <Route path="*" element={<NotFound />} />

       
        
        
        </Routes>
        </Container>
        </SelectedProvider>
        <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
