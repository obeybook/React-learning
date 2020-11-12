import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://175.211.13.196:3001');

class Red extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message: null,
        userId: 'yong',
        color: null,
      }
    }

    componentDidMount() {
        fetch('http://175.211.13.196:3001/red')
            .then(res => res.json())
            .then(data => {
                    this.setState({
                    color: data.color,
                    });
                    
                    
                }
            )
            .then( () => socket.on('alert', this.state.userId))
    }

    onClick = (e) => {
        const str = "hoon";
        socket.emit('alert', str);
    }

    render() {
        return (
            <>
                <div>{this.state.color}</div>
                <div>{this.state.message}</div>
                <button onClick={this.onClick}>send Alert</button>
            </>
        )
    }
}

export default Red