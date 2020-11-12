const express = require('express');
const app = express();
const router = express.Router();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


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

router.get('/', (req, res) => {
    console.log('red')
    res.json({color:'red'});
})

module.exports = router;