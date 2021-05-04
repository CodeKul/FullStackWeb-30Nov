import React, { useState } from "react";
import "./App.css";
import BooksList from "./components/Books/BooksList";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Navbar from "./components/Books/Navbar";

function App() {
  // const [myName, setMyName] = useState("ABC");

  return (
    // <div className="App">
    //   <ComponentA myName={myName} />
    //   <ComponentB myName={myName} />
    // </div>

    <div className="App">
      <Navbar />
      <BooksList />
    </div>
  );
}

export default App;
