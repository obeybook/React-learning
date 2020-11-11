import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io('http://175.211.13.196:3000');

class Blue extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color: null,
        userId: 'hoon',
      }
    }

    componentDidMount() {
          
        // socket.emit('roomjoin', this.state.userId);
        socket.on('sam', (message) => {
            alert(message);
        })
        // fetch('http://localhost:3003/blue')
        //   .then( res => {
        //       res.json()
        //     })
        //   .then( data => this.setState({
        //         color: data.color
        //     }) 
        //   )
      }

    render() {
        return (
            <>
                <div>{this.state.color}</div>
            </>
        )
    }
}

export default Blue