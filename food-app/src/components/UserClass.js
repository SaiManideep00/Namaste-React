import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>Name is {this.props.name}</h1>
        <h2>Location is {this.props.location}</h2>
        <h3>Count is {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button>
      </div>
    );
  }
}
export default UserClass;
