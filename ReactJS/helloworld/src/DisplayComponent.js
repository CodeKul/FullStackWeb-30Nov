import React from "react";
function DisplayComponent() {
  let person = {
    firstName: "Peter",
    lastName: "Doe",
  };

  function displayPerson(person) {
    return person.firstName + " " + person.lastName;
  }

  let element = (
    <div>
      <span>Inside Span</span>
      <a href="">Click here</a>
    </div>
  );

  return (
    <div>
      <a href="https://www.google.com">LEarn React</a>
      <div>{displayPerson(person)}</div>
      {element}
    </div>
  );
}

export default DisplayComponent;
