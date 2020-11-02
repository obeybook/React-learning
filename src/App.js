import React, { Component } from 'react';
import TodoForm from './todo/todoForm.js';
import TodoInfo from './todo/todoInfo.js';
import './index.css';

class App extends Component {
  id = 1;

  state = {
      list: []
  }

  listInsert = (data) => {
    const { list } = this.state;

    this.setState({
      list: list.concat({id: this.id++, ...data}),
    })

    this.id++;
  }

  listDelete = (id) => {
    const { list } = this.state;

    this.setState({
      list: list.filter((item) => (
        item.id !== id
      )),
    })
  }

  render() {
    return (
      <>
        <TodoForm insert={this.listInsert}/>
        <TodoInfo data={this.state.list} onDelete={this.listDelete} />
      </>
    );
  }
}

export default App;
