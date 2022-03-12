import express from 'express';
import usersRouter from './users-routage';
import scoresRouter from './scores-routage';
import { Server } from 'ws';
import WebSocket, { WebSocketServer } from 'ws';

const wsServer = new Server({port:8085});

const app = express();
app.use(express.json())
app.use(express.static('./app/luminyscore'))
app.use('/users', usersRouter);
app.use('/score', scoresRouter);

app.get('/', function (req, res) {
 res.sendFile('index.html');
});
app.listen(8080);

wsServer.on('connection', function(ws) {
    ws.on('message', function(message) {
        wsServer.broadcast(message);
    });
    ws.send('You successfully connected to the websocket.');
});

wsServer.broadcast = function broadcast(data) {
    wsServer.clients.forEach(function each(client) {
        client.send(data);
    });
};
   