const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());

io.on('connection' , (socket) => {
    console.log("접속 완료");

    // socket.on('roomjoin', (userId) => {
    //     console.log(userId);
    //     socket.join(userId);
    // });

    socket.on('alert', (msg) => {
        console.log(msg);
        io.emit('message', msg);
    })
})

module.exports = io;