import React, { useState } from "react";
import ComponentC from "./ComponentC";

export default function ComponentB({ myName }) {
  return (
    <div>
      <h1>Component B</h1>
      <ComponentC value={myName} />
    </div>
  );
}
