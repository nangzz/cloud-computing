import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  onInputChange = (event) =>{
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} />
        <div>Value of the input:{this.state.term}</div>
      </div>
    )
  }
}

export default SearchBar;