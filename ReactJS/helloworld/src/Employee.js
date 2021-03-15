import React from "react";
class Employee extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      fruits: [],
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  UNSAFE_componentWillMount() {
    console.log("Will Mount");
  }

  componentDidMount() {
    console.log("DidMount");
  }

  shouldComponentUpdate() {
    console.log("should Update");
    return true;
  }

  componentDidUpdate() {
    console.log("did update");
  }

  render() {
    return (
      <div>
        <div>
          <p>Inside Employee Component</p>

          <button type="button" onClick={this.incrementCounter}>
            Increment
          </button>
          <p>{this.state.counter}</p>
          <p>{this.props.name}</p>
          <h4>{this.props.numbers}</h4>
        </div>
        <div>
          <p>Name is:{this.props.person.firstName}</p>
          <p>City is:{this.props.person.city}</p>
        </div>
      </div>
    );
  }
}
export default Employee;
