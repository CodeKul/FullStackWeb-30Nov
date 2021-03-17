import React from "react";
const FunComponent = ({ employee, lastName }) => {
  let a = 100;
  let b = 300;
  let total = a + b;
  return (
    <div>
      {total}
      <p>{employee.salary}</p>
      <p>{lastName}</p>{" "}
    </div>
  );
};
export default FunComponent;
