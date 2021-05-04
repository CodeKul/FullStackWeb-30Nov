import React, { useState } from "react";
import Book from "./Book";

function BooksList({ books }) {
  return (
    <div>
      {books.map((book, id) => (
        <Book bName={book.bookName} bPrice={book.price} />
      ))}
    </div>
  );
}

export default BooksList;
