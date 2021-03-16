import React from "react";
class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }
  tick = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };

  render() {
    return (
      <div>
        <span>{this.props.message}</span>
        {this.state.time}
      </div>
    );
  }
}

export default Clock;
