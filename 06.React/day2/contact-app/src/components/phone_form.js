import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return(
      <div>
        <input 
          onChange={this.handleChange} />
        <div>입력한 값: {this.state.value}</div>
      </div>
    );
  } 
}

export default PhoneForm;