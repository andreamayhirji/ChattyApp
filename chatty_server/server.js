const express = require('express');
const SocketServer = require('ws').Server;

const PORT = 3001;

const server = express()
    .use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server }); // create the WebSockets server

// set up a callback that will run whan a client connects to the server
// when a client connects they are assigned a socket, represented by the ws parameter in the callback

wss.on('connection', (ws) => {
    console.log('Client connected');
    // ws.send("hello friendo");
    // ws.onmessage = (evt) => {console.log("I do not care what they say.  Oh, fine, it was this:", evt.data);}
    ws.on('close', () => console.log('Client disconnected')); // set up a callback for when a client closes the socket (aka, closed their browser)
});

