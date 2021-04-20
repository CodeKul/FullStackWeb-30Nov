import React, { useEffect, useState } from "react";
import apicalls from "../service/apicalls";
import { useParams, useHistory } from "react-router-dom";
function EditBook() {
  const { id } = useParams();
  const history = useHistory();
  const [updatebook, setUpdateBook] = useState({
    bookName: "",
    authorName: "",
    rating: "",
  });

  const loadBook = async () => {
    let res = await apicalls.get(`/books/${id}`);
    console.log(res);
    setUpdateBook(res.data);
  };
  useEffect(() => {
    loadBook();
  }, []);

  const updateBook = () => {
    apicalls.put(`/books/${id}`, updatebook);
    history.push("/");
  };

  const handleInputChange = (e) => {
    setUpdateBook({ ...updatebook, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            name="bookName"
            value={updatebook.bookName}
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
            value={updatebook.authorName}
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
            value={updatebook.rating}
            id="exampleFormControlInput1"
            placeholder="Enter rating(out of 5)"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-dark" onClick={updateBook}>
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBook;
