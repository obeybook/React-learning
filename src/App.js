import React, { Component } from 'react';
import InputPractice from './practice/practice5.js';

class App extends Component {
  infoOut = (name, num) => {
    console.log(name, num);
  }

  render() {
    return (
      <InputPractice onCreate={this.infoOut}/>
    );
  }
}

export default App;
