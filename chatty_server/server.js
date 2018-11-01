const uuidv4 = require('uuid/v4');
const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');

const PORT = 3001;

const server = express()
    .use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server }); // create the WebSockets server

function broadcast(thing){
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(thing));
        }
    });
}
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', function (event) {
        const msg = JSON.parse(event);
        switch(msg.type) {

            case 'postNotification': 
            broadcast({
                id: uuidv4(),
                type: 'incomingNotification',
                currentUser: msg.username,
                content: msg.content
            });
        break;

            case 'postMessage':
                broadcast({
                    id: uuidv4(),
                    type: 'incomingMessage',
                    currentUser: msg.username,
                    content: msg.content
                });
            break;

            default:
                throw new Error('Unknown event type ' + msg.type);
        }

    });
    
    ws.on('close', () => console.log('Client disconnected')); // set up a callback for when a client closes the socket (aka, closed their browser)
});

