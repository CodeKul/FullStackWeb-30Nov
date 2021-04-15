import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function GamePage() {
  const history = useHistory();
  console.log(history);
  const [guess, setGuess] = useState("");
  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleClick = () => {
    if (guess === "React") {
      history.push("/winner");
    }
  };
  return (
    <div>
      <input type="text" value={guess} onChange={handleInputChange} />
      <button type="button" onClick={handleClick}>
        {" "}
        Guess
      </button>
    </div>
  );
}

export default GamePage;
