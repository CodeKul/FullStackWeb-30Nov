import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

function RefInputFocus() {
  const inputRef = useRef("");
  useEffect(() => {
    console.log("Without empty array");
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" name="search" ref={inputRef} />
    </div>
  );
}

export default RefInputFocus;
