import React, { Component } from 'react';

class MyIntro extends Component {
  render() {
    const css = {
      color: 'red',
      fontSize: '40px'
    };

    return (
      <div style={css}>
  안녕하세요, 제 이름은 <b>{this.props.card.name}, {this.props.card.email},{this.props.card.phone}</b> 입니다. 
      </div>
    );
  }
}

export default MyIntro;