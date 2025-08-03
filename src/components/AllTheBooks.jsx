import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import Pages from "./Pages";
import { useState } from "react";
import { useTheme } from "../context/contextTheme";

const itemsPerPage = 12;


function AllTheBooks({ filteredBook}) {


 const [currentPage, setCurrentPage] = useState(1);
 const startIndex = (currentPage-1) * itemsPerPage;
 const currentBooks = filteredBook.slice(startIndex, startIndex+itemsPerPage);
 const {theme}= useTheme()




  return (
    <Container fluid className={`${theme==='dark' ? 'bg-dark':'bg-light'}`}>
       <Row>
        {currentBooks.map((book) => (
          <SingleBook key={book.asin} book={book}  />
        ))}
         <Pages
        totalItems={filteredBook.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
        </Row>
        
    </Container>
  );
}

export default AllTheBooks;
