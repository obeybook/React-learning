import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Red from './Color/Red';
import Green from './Color/Green';
import Blue from './Color/Blue';
import Header from './header';

class Routes extends Component {
    render(){
        return (
            <Router>
                <Header />
                <Route path="/red" component={Red} />
                <Route path="/green" component={Green} />
                <Route path="/blue" component={Blue} />
            </Router>
        )
    }
}

export default Routes