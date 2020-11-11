import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io('http://175.211.13.196:3000');

class Red extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color: null,
        userId: 'yong',
      }
    }

    componentDidMount() {
        // socket.emit('emit', this.state.userId);
        // fetch('http://localhost:3003/red')
        //   .then( res => res.json() )
        //   .then( data => this.setState({
        //         color: data.color
        //     }) 
          // )
    }

    onClick = (e) => {
        const str = "hoon";
        socket.emit('alert', str);
    }

    render() {
        return (
            <>
                <div>{this.state.color}</div>
                <button onClick={this.onClick}>send Alert</button>
            </>
        )
    }
}

export default Red