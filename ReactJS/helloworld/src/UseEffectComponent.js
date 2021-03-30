import React, { useState, useEffect } from "react";

function UseEffectComponent() {
  const [counter, setCounter] = useState(0);
  const [firstName, setFirstName] = useState("");
  useEffect(() => {
    console.log({ firstName });
  }, [firstName]);

  const incrementCount = () => {
    setCounter((counter) => counter + 1);
  };

  const changeName = () => {
    setFirstName("abc");
  };
  return (
    <div>
      <h3>Use Effect</h3>
      <p>{counter}</p>

      <p>{firstName}</p>
      <button onClick={incrementCount}>Click</button>
      <button onClick={changeName}>ChangeName</button>
    </div>
  );
}

export default UseEffectComponent;
