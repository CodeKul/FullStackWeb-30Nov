import React, { useState } from "react";
import "./App.css";
import BooksList from "./components/Books/BooksList";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Navbar from "./components/Books/Navbar";
import { BookProvider } from "./components/Books/BookContext";

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
        <BooksList />
      </BookProvider>
    </div>
  );
}

export default App;
