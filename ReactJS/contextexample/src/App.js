import React, { useState } from "react";
import "./App.css";
import BooksList from "./components/Books/BooksList";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Navbar from "./components/Books/Navbar";
import { BookProvider } from "./components/Books/BookContext";
import AddBook from "./components/Books/AddBook";
import Counter from "./components/USEReducer/Counter";

function App() {
  // const [myName, setMyName] = useState("ABC");

  return (
    // <div className="App">
    //   <ComponentA myName={myName} />
    //   <ComponentB myName={myName} />
    // </div>

    <div className="App">
      <BookProvider>
        <Navbar />
        <AddBook />
        <BooksList />
      </BookProvider>

      <Counter />
    </div>
  );
}

export default App;
