import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Counter init="10" />  // 초기값을  Counter component 에 전달 
    );
  }
}

export default App;
