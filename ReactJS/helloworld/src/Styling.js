import React from "react";
import MyDiv from "./MyDiv";
function Styling() {
  // npm install --save styled-components
  return (
    <MyDiv>
      <button
        style={{
          color: "blue",
          paddingRight: "20px",
          "margin-top": "20px",
          "margin-left": "30px",
          "padding-top": "10px",
        }}
      >
        Get Started
      </button>
    </MyDiv>
  );
}

export default Styling;
