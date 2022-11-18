import WebSocket, { WebSocketServer } from 'ws';
const websocketport = 8080;

const ws_server = new WebSocketServer({
    port : websocketport
});

let sockets = [];

ws_server.on('connection', function(socket) {
    sockets.push(socket);
    console.log("sockets length: ", sockets.length);
    socket.on('message', function(msg) {
        try {
            var json_data =     JSON.parse(msg);
            console.log("racieved message: ", json_data);
        } catch(error) {
            console.log("not json");
            console.log("error: " + error.message);
            console.log("message: \n" + msg);
            return 0;
        };
        const json_to_send = JSON.stringify(json_data);
        // sockets.filter(s => s !== socket).forEach(s => s.send(json_to_send));
        sockets.forEach(s => s.send(json_to_send));
        // console.log("recieved ws msg");
    });
    socket.on('close', function() {
        sockets = sockets.filter(s => s !== socket);
        console.log("one discontected, remaing sockets: ", sockets.length)
    });
});


console.log("websocket on: " + websocketport);