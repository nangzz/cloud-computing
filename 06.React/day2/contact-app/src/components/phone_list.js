import React, { Component } from 'react'
import PhoneItem from './phone_item';

class PhoneList extends Component {
  render() {
    const {data, onRemove, onUpdate} = this.props; 
    const list = data.map(value => (
      <PhoneItem 
        key={ value.id} 
        info={value} 
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    )
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneList;