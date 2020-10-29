import React, { Component } from 'react';
import Form from './practice/form.js';
import List from './practice/list.js';
import './index.css';

class App extends Component {
  id = 2;
  state = {
      list: [
          {
              id: 1,
              name: 'oh',
              number: '01041088903',
              updating: false,
          }
      ] 
  }

  setInfo = (name, number) => {
    const { list } = this.state;

    this.setState({
      list: list.concat({ id: this.id++, name, number })
    })
  }

  remove = (id) => {
    const { list } = this.state;

    this.setState({
      list: list.filter(item => item.id !== id)
    })
  }

  update = (id) => {
    const { list } = this.state;
    this.setState({
      list: list.map(
          item => item.id === id
            ? { ...item, updating: true }
            : { ...item }
        )
    })
  }

  render() {
    return (
      <>
        <Form onCreate={this.setInfo}/>
        <List onDelete={this.remove} onUpdate={this.update} data={this.state.list} />
      </>
    );
  }
}

export default App;
