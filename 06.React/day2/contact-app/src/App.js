import React, { Component } from 'react';
import PhoneForm from './components/phone_form';
import PhoneList from './components/phone_list';

class App extends Component {
  id = 1;
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 0,
          name: '관리자',
          phone: '010-1111-1111'
        }
      ],
      keyword: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
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
    const { contacts, keyword } = this.state;
    const filteredContacts = contacts.filter(v => v.name.indexOf(keyword) !== -1);

    return (
      <div className="App-header">
        <PhoneForm 
            onCreate={this.handleCreate}/>
        <p>
          <input placeholder="검색 할 이름을 입력하세요."
            onChange={this.handleChange}
            value={this.state.keyword}
          />
        </p>
        <PhoneList 
          data={filteredContacts}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate} />
      </div>

    );
  }
}

export default App;
