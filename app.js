const http = require('http');
const fs = require('fs');
const url = require('url');
const util = require('util');
const WebSOcket = require('ws');
const httpport = 80;
const websocketport = 8000;

// websocket
const ws_server = new WebSOcket.Server({
    port : websocketport
});

let sockets = [];

ws_server.on('connection', function(socket) {
    sockets.push(socket);
    socket.on('message', function(msg) {
        var json_data = JSON.parse(msg);
        console.log(json_data);
        sockets.filter(s => s !== socket).forEach(s => s.send(JSON.stringify(json_data)));
        console.log("recieved ws msg");
    });
    socket.on('close', function() {
        sockets = sockets.filter(s => s !== socket);
    });
});

function afterDotToFileType(afterDot) {
    switch (afterDot) {
        case "ico" :
            return "image/vnd.microsoft.icon";
            break;
        case "js" :
            return "text/javascript";
            break;
        case "html" :
            return "text/html";
            break;
        case "css" :
            return "text/css";
            break;
    }
};


// the function to call every time it recieves request
const server = http.createServer(function(req, res) {
    console.log('got a request!');
    let path = url.parse(req.url, true);
    let file_requested = "." + path.pathname;
    if (file_requested == "./") { file_requested = "index.html"}
    let file_afterdot = file_requested.split(".").pop();
    console.log(path);
    console.log(afterDotToFileType(file_afterdot));

    res.writeHead(200, { 'Content-Type': afterDotToFileType(file_afterdot) });
    fs.readFile(file_requested, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('error: something in this server has gone wrong');
        } else { res.write(data); };
        res.end();
    });
});

// to set up the server to listen on the port
server.listen(httpport, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port :' + httpport)
    }
});
