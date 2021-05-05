import React from "react";

function Book({ bookName ,price}) {
  return (
    <div>
      <ul>
        <li>{bookName}</li>
        <li>{price}</li>
      </ul>
    </div>
  );
}

export default Book;
