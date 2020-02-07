import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder="이름"
          value={this.state.name}
          name="name"
          onChange={this.handleChange} />
        <input 
          placeholder="연락처"
          value={this.state.phone}
          name="phone"
          onChange={this.handleChange} />
        <button type="submit">등록</button>
      </form>
    );
  } 
}

export default PhoneForm;