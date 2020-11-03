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
      list: list.concat({id: this.id++, updating: false, ...data}),
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

  listUpdate = (id) => {
    const {list} = this.state;

    this.setState({
      list: list.map((item) => (
        item.id === id
        ? { ...item, updating: true }
        : { ...item }
      )),
    })
  }

  onSubmit = (id, data) => {
    const {list} = this.state;
    const { name, number } = data;

    this.setState({
      list: list.map((item) => (
        item.id === id
        ? { ...item, name: name, number: number, updating: false }
        : { ...item }
      )),
    })
  }

  onChange = (data) => {
    const { id, name, number } = data;
    const {list} = this.state;

    this.setState({
      list: list.map((item) => (
        item.id === id
        ? { ...item, name: name, number: number }
        : { ...item }
      )),
    })
  }

  render() {
    return (
      <>
        <TodoForm insert={this.listInsert}/>
        <TodoInfo data={this.state.list} onDelete={this.listDelete} onUpdate={this.listUpdate} onChange={this.onChange} onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default App;
