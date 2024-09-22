import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleCounterInc = this.handleCounterInc.bind(this);
    this.handleCounterDec = this.handleCounterDec.bind(this);
  }
  handleCounterInc() {
    // console.log(this);
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }
  handleCounterDec() {
    console.log(this);
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }
  render() {
    const date = new Date("22 Aug 2024");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleCounterDec}>-</button>
        <span>
          {date.toDateString()} ({this.state.count})
        </span>
        <button onClick={this.handleCounterInc}>+</button>
      </div>
    );
  }
}
export default Counter;
