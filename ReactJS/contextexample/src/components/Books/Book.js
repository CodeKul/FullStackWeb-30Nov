import React from "react";

function Book({ bookName ,price,id}) {
  return (
    <div>
      <ul>
        <li key={id}>{bookName}</li>
        <li>{price}</li>
      </ul>
    </div>
  );
}

export default Book;
