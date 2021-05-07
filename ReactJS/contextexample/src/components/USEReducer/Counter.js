import React, { useState, useReducer } from "react";

function counterReducer(state, action) {
  console.log(state);
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
function Counter() {
  // const[count,setCount]=useState()
  const [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <h4>{state}</h4>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
    </div>
  );
}

export default Counter;
