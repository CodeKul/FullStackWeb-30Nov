import React, { useEffect, useState } from "react";
import "./BooksList.css";
import apicalls from "../service/apicalls";
import { Link } from "react-router-dom";
import EditBook from "./EditBook";
function BooksList() {
  const [bookList, setBookList] = useState([]);

  const loadBooks = async () => {
    let response = await apicalls.get("/books");
    setBookList(response.data);
  };
  useEffect(() => {
    loadBooks();
  }, []);
  return (
    <div class="container">
      <div class="addBtn">
        <Link to="/addbook" class="btn btn-dark">
          Add Book
        </Link>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((element, id) => (
            <tr key={id}>
              <td>{element.bookName}</td>
              <td>{element.authorName}</td>
              <td>{element.rating}</td>
              <td><EditBook/></td>
              <td> <button className="btn btn-dark btn-sm">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
