import React, { useState, useRef } from "react";

function StopWatchRef() {
  const [count, setCount] = useState(0);
  const timerId = useRef(0);
  const startCounter = () => {
    timerId.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    console.log(timerId.current);
  };
  const stopCounter = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    console.log(timerId.current);
  };

  const resetCounter = () => {
    clearInterval(timerId.current);
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default StopWatchRef;
