import React,{useEffect} from "react";
import apicalls from "../service/apicalls";

function EditBook() {
    const loadBook=()=>{
        apicalls.get('/books/')
    }
 useEffect(() => {
     
    
 }, [])
  return (
    <div>
      <button
        type="button"
        class="btn btn-dark btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Edit
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Edit a book
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Book Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="bookName"
                    // value={newBook.bookName}
                    id="exampleFormControlInput1"
                    placeholder="Enter book name"
                    // onChange={handleInputChange}
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
                    // value={newBook.authorName}
                    id="exampleFormControlInput1"
                    placeholder="Enter author name"
                    // onChange={handleInputChange}
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
                    // value={newBook.rating}
                    id="exampleFormControlInput1"
                    placeholder="Enter rating(out of 5)"
                    // onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Update Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
