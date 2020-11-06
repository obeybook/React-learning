import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3003/');

class Message2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: 'hoon',
        };
    }
    componentWillMount() {
        socket.emit('roomjoin', this.state.userId);
        socket.on('sam', (message) => {
            alert(message);
        })
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Message2