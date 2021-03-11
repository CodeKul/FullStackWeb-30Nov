import React from "react";
class Employee extends React.Component {
  constructor() {
    super();
  }

  UNSAFE_componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Did Mount");
  }
  render() {
    return (
      <div>
        <p>Inside Employee Component</p>
      </div>
    );
  }
}
export default Employee;
