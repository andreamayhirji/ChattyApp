const express = require('express');
const SocketServer = require('ws').Server;

const PORT = 3001;

const server = express()
    .use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server }); // create the WebSockets server

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    ws.on('message', function (event) {
        var msg = JSON.parse(event)

        // var message = {
        //     username: msg.username,
        //     content: msg.content
        // }

        console.log('received data:', msg.username, msg.content);
        wss.clients.forEach(client => {
            if (client.readyState === SocketServer.OPEN) {
                client.send(message);
            }
        });
    });
    
    ws.on('close', () => console.log('Client disconnected')); // set up a callback for when a client closes the socket (aka, closed their browser)
});

