import React, { useContext } from "react";
import { BookContext } from "./BookContext";

function Navbar() {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h1>Nav</h1>
      <p>No of books:{books.length}</p>
    </div>
  );
}

export default Navbar;
