import React from "react";

function Navbar({ books }) {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h1>Nav</h1>
      <p>No of books:{books.length}</p>
    </div>
  );
}

export default Navbar;
