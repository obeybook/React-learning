import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Client1 from '../src/io/client1';
import Client2 from '../src/io/client2';
import './index.css';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Route path='/client1' Component={Client1}/>
          <Route path='/client2' Component={Client2}/>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
