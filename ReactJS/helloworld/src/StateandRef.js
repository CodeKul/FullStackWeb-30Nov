import React, { useState, useRef } from "react";

function StateandRef() {
  const [num, SetNum] = useState(0);
  const inputRef = useRef(0);
  const inputRefTwo = useRef(null);

  const getNum = () => {
    console.log(inputRef.current);
    inputRef.current.style.backgroundColor = "green";
  };

  const handleNumChange = (e) => {
    SetNum(e.target.value);
  };

  const getFocus = () => {
    inputRefTwo.current.focus();
  };
  return (
    <div>
      <input
        type="number"
        ref={inputRef}
        value={num}
        onChange={handleNumChange}
      />
      <p>{num}</p>
      <input type="text" ref={inputRefTwo} />
      <button onClick={getNum}>Button1</button>
      <button onClick={getFocus}>Button2</button>
    </div>
  );
}

export default StateandRef;
