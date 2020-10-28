import React, { Component } from 'react';
import Form from './practice/form.js';
import List from './practice/list.js';
import './index.css';

class App extends Component {
  state = {
      list: [
          {
              name: 'oh',
              number: '01041088903',
          }
      ] 
  }

  setInfo = (name, number) => {
    const { list } = this.state;

    this.setState({
      list: list.concat({ name, number })
    })
  }

  render() {
    return (
      <>
        <Form onCreate={this.setInfo}/>
        <List data={this.state.list}/>
      </>
    );
  }
}

export default App;
