import React, { Component } from 'react';
import PhoneForm from './components/phone_form';
import PhoneList from './components/phone_list';

class App extends Component {
  id = 1;
  state = {
    contacts: [
      {
        id: 0,
        name: '관리자',
        phone: '010-1111-1111'
      }
    ]
  }

  handleCreate = (data) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.concat({id: this.id++, ...data})
    })
  }

  // App.js 
  handleRemove = (selected_id) => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter(
        info => info.id !== selected_id
      )
    });
  }

  handleUpdate = (selected_id, data) => {
    const { contacts } = this.state;
    
    this.setState({
      contacts: contacts.map(
        item => selected_id === item.id
                   ? {...item, ...data}
                   : item //  기존 데이터를 변경 없음
      )
    })
  }  

  render() {
    return (
      <div className="App-header">
        <PhoneForm 
            onCreate={this.handleCreate}/>
        <PhoneList 
          data={this.state.contacts}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate} />
      </div>

    );
  }
}

export default App;
