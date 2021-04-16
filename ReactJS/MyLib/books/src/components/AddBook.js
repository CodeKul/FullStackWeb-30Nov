import React from "react";

function AddBook() {
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
            id="exampleFormControlInput1"
            placeholder="Enter book name"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter author name"
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
            id="exampleFormControlInput1"
            placeholder="Enter rating(out of 5)"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-dark">Save Book</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
