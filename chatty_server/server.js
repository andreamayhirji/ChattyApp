const uuidv4 = require('uuid/v4');
const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');

const PORT = 3001;

const server = express()
    .use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server }); // create the WebSockets server

wss.on('connection', (ws) => {
    console.log('Client connected');
    // var id = uuidv4();
    // console.log(id);
    
    ws.on('message', function (event) {
        const msg = JSON.parse(event);
        const uniqueId = uuidv4();
        const message = {
            id: uniqueId,
            currentUser: msg.username,
            content: msg.content
        }

        console.log(`id: ${ message.id } name: ${message.currentUser} text: ${message.content}`);
       
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(message));
            }
        });
    });
    
    ws.on('close', () => console.log('Client disconnected')); // set up a callback for when a client closes the socket (aka, closed their browser)
});

