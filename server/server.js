const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/index');
const cors = require('cors');

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3002;

app.use(bodyParser.json());

app.use(cors());
app.use('/api', api);

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

app.listen(port, () => console.log(`Listening on port ${port}`));