import React, { Component } from 'react';

class Green extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color: null
      }
    }

    componentDidMount() {
        fetch('http://localhost:3003/green')
          .then( res => res.json() )
          .then( data => this.setState({
                color: data.color
            }) 
          )
      }

    render() {
        return (
            <>
            <div>{this.state.color}</div>
            </>
        )
    }
}

export default Green