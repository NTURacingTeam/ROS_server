const http = require('http');
const fs = require('fs');
const url = require('url');
const util = require('util');
const WebSocket = require('ws');
const websocketport = 8000;
const httpport = 80;

var count = 0.0 ;
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });

    function sendJSON() {
        if (connection.connected) {
            connection.send(JSON.stringify(
                {name:["FWS","L"],value:count,time:123.4}
            ));
            count += 1;
            setTimeout(sendJSON, 1000);
        }
    }
    sendJSON();
});

client.connect('ws://localhost:8000/', 'echo-protocol');
