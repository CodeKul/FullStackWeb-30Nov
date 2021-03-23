import React, { useState, useEffect } from "react";

function Counter() {
  //   const counter = useState(0);
  //   const ctr=counter[0]
  //   const setCounter= counter[1]
  const [ctr, setCounter] = useState(10);
  const [ctrOne, setCtrOne] = useState(0);
  const [firstName, setFirstName] = useState("");
  const addCounter = () => {
    setCounter(ctr + 1);
  };

  const addByFive = () => {
    setCtrOne(ctrOne + 5);
  };

  const handleInputChange = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <div>
      <button onClick={addCounter}>{ctr}</button>
      <button onClick={addByFive}>{ctrOne}</button>
      <input type="text" value={firstName} onChange={handleInputChange} />
      <h5>{firstName}</h5>
    </div>
  );
}

export default Counter;
