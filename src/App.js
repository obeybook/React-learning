import React, { Component } from 'react';
import TodoForm from './todo/todoForm.js';
import TodoInfo from './todo/todoInfo.js';
import './index.css';

class App extends Component {
  state = {
      list: {
          id: 1,
          name: 'yong',
          phone: '01041088903',
          updating: false,
      }
  }

  listInsert = (data) => {
    const { list } = this.state;

    this.setState({
      list: list.concat.data,
    })
  }

  render() {
    return (
      <>
        <TodoForm insert={this.listInsert}/>
        <TodoInfo />
      </>
    );
  }
}

export default App;
