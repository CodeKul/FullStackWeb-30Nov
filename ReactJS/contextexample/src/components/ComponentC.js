import React from "react";
import ComponentD from "./ComponentD";

function ComponentC({ value }) {
  return (
    <div>
      <h1>Component C </h1>
      <ComponentD value={value} />
    </div>
  );
}

export default ComponentC;
