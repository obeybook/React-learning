const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const red = require('./routes/red');
const blue = require('./routes/blue');
const green = require('./routes/green');

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3003;

app.use(bodyParser.json());

app.use(cors());
app.use('/red', red);
app.use('/blue', blue);
app.use('/green', green);

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