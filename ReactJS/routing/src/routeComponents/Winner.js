import React from "react";
import { useHistory } from "react-router-dom";
function Winner() {
  let history = useHistory();
  const handleClick = () => {
    history.goBack("/gamepage");
  };
  return (
    <div>
      You Won!!
      <button type="button" onClick={handleClick}>
        Play Again
      </button>
    </div>
  );
}

export default Winner;
