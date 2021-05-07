import React, { useState, useContext } from "react";
import Book from "./Book";
import { BookContext } from "./BookContext";

function BooksList() {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div>
      <h1></h1>

      {books && books.map((book, id) => (
        <>
          <Book bookName={book.bookName} price={book.price} key={book.id}/>
        </>
      ))}
    </div>
  );
}

export default BooksList;
