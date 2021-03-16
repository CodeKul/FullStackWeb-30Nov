import React from "react";
class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  // UNSAFE_componentWillMount() {
  //   console.log("Will Mount");
  // }

  // componentDidMount() {
  //   console.log("DidMount");
  // }

  // shouldComponentUpdate() {
  //   console.log("should Update");
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log("did update");
  // }

  render() {
    //console.log(this.props.person);
    // const {firstName,city}=this.props.person
    // console.log(firstName)
    return (
      <div>
        <div>
          <p>Inside Employee Component</p>

          <button type="button" onClick={this.incrementCounter}>
            Increment
          </button>
          <p>{this.state.counter}</p>
          {/* <p>{this.props.name}</p> */}
          {/* <h4>{this.props.numbers[0]}</h4> */}
        </div>
        <div>
          <p>Name is:{this.props.person.firstName}</p>
          <p>City is:{this.props.person.city}</p>
        </div>
        <div>
          <p>Salary is:{this.props.employee.salary}</p>
          <p>Emp id is:{this.props.employee.empid}</p>
          <ul>
            <p>
              {this.props.numbers.map((item) => (
                
                <li>{item}</li>
              ))}
            </p>
          </ul>
        </div>
      </div>
    );
  }
}
export default Employee;
