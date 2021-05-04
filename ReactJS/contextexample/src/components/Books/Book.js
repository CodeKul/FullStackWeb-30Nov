import React from "react";

function Book({ bName, bPrice }) {
  return (
    <div>
      <ul>
        <li>{bName}</li>
        <li>{bPrice}</li>
      </ul>
    </div>
  );
}

export default Book;
