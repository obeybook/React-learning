const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());

io.on('connection' , (socket) => {
    console.log("접속 완료");

    socket.on('roomjoin', (userId) => {
        console.log(userId);
        socket.join(userId);
    });

    socket.on('alert', (toUserId) => {
        io.to(toUserId).emit('sam', toUserId);
    })
})

module.exports = io;