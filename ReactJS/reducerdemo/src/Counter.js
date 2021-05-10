import React, { useReducer } from "react";
function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.incBy, incBy: state.incBy };
    case "decrement":
      return { ...state, count: state.count - state.incBy, incBy: state.incBy };
    case "reset":
      return { ...state, count: 0, incBy: state.incBy };
    case "update":
      return { ...state, count: state.count, incBy: action.payload };
    default:
      return { count: state.count };
  }
}
function Counter() {
  const [count, sendAction] = useReducer(countReducer, {
    count: 0,
    incBy: 1,
  });
  return (
    <div>
      <h1>Counter</h1>
      <span>{count.incBy}</span>
      <input
        type="range"
        name="number"
        min="1"
        max="20"
        value={count.incBy}
        onChange={(e) => {
          sendAction({ type: "update", payload: Number(e.target.value) });
        }}
      />
      <h4>{count.count}</h4>

      <button onClick={() => sendAction({ type: "increment" })}>+</button>
      <button onClick={() => sendAction({ type: "decrement" })}>-</button>
      <button onClick={() => sendAction({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
