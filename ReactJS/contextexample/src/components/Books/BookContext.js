import { createContext, useState } from "react";

export const BookContext = createContext();
console.log(BookContext);

export function BookProvider(props) {
  const [books, setBooks] = useState([
    {
      bookName: "Book1",
      price: "399",
      id: "1",
    },
    {
      bookName: "Book2",
      price: "199",
      id: "1",
    },
  ]);
  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
}
