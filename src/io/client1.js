import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3003/');

class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: 'yong',
        };
    }
    componentWillMount() {
        socket.emit('roomjoin', this.state.userId);
    }
    onClick = (e) => {
        const str = "hoon";
        socket.emit('alert', str);
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>send Alert</button>
            </div>
        )
    }
}

export default Message