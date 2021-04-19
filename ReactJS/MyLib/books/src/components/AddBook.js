import React, { useState } from "react";
import apicalls from "../service/apicalls";
import {useHistory} from 'react-router-dom'

function AddBook() {
  let history = useHistory()
  const [newBook, setNewBook] = useState({
    bookName: "",
    authorName: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const saveBook = (e) => {
    e.preventDefault();
    apicalls.post("/books", newBook);
    history.push("/")

  };
  return (
    <div className="container">
      <h1 className="text-center">Add a new book</h1>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            name="bookName"
            value={newBook.bookName}
            id="exampleFormControlInput1"
            placeholder="Enter book name"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            name="authorName"
            value={newBook.authorName}
            id="exampleFormControlInput1"
            placeholder="Enter author name"
            onChange={handleInputChange}
          />
        </div>
        {/* margin- m,padding-p ,ml-*,mr,mb,mt*,pl-*,pr,pb,pt*/}
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Rating
          </label>
          <input
            type="number"
            className="form-control"
            name="rating"
            value={newBook.rating}
            id="exampleFormControlInput1"
            placeholder="Enter rating(out of 5)"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-dark" onClick={saveBook}>
            Save Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
