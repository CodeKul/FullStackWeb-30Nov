import React, { useRef, useState } from "react";

function RefComponent() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);
  const handleClick = () => {
    counterRef.current++;
    setCounter((c) => c + 1);

    console.log(counterRef.current);
    // setCounter((c) => c + 1);
  };
  return (
    <div>
      {console.log("Re-render")}
      <p>{counterRef.current}</p>
      <p>{counter}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default RefComponent;
