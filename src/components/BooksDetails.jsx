import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {  useTheme } from "../context/contextTheme";
import CommentArea from "./CommentArea";
import { Col, Container, Row } from "react-bootstrap";

function BooksDetails({books}) {
  const { asin } = useParams();
  const { theme,colorText } = useTheme();
  
  
  console.log(books.asin)
  const book =books.find(l=>l.asin ===asin)

  if (!book) {
    
    return (
      <Container className="text-center py-5">
        
        <h4>Libro non trovato</h4>
      </Container>
    );
  }

  return (
    <Container fluid className={`${theme==='dark' ? 'bg-dark':'bg-light'} 'py-5`}>
       <Row> 
        <Col md={9} >
      <h1 className={` text-center ${colorText} `}  >{book.title}</h1>
      <div className="d-flex justify-content-center gap-5 ">
      <img src={book.img} alt={book.title} className="img-fluid" style={{width: '35%'}} />
      <div className="align-content-center" >
      <p className={colorText}><strong>Categoria:</strong> {book.category}</p>
      <p className={colorText}><strong>Prezzo:</strong> {book.price} €</p>
      <p className={colorText}>{book.description || "Nessuna descrizione disponibile."}</p>
      </div>
      </div>
      </Col>
      <Col md={3}>
      <CommentArea asin={asin}/>
      </Col>
      </Row>
    </Container>
  )
}

export default BooksDetails;
