import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 100,
    info: {
      name: 'React',
      age: 10
    }
  }

  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1
    });
  }  

  handleDecrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  }  

  handleChangeInfo  = () => {
    // 1. this.state.info의 name을 변경 
    // 2. this.state.info의 name을 변경 (전개 연산자) ...info
    this.setState({
      info: {
        ...this.state.info,
        name: 'Dowon'
      }
    });
  }
 
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <button onClick={this.handleChangeInfo}>Change info name</button>

        {this.state.info.name}/{this.state.info.age}
      </div>
    );
  }
}

export default Counter;