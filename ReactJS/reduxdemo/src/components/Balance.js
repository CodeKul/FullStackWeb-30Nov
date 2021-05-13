import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  const storeState = useSelector((state) => state.banking);
  console.log(storeState);
  return (
    <div>
      <h1>{storeState.balance}</h1>
    </div>
  );
}

export default Balance;
