import WebSocket, { WebSocketServer } from 'ws';
import express from 'express';
import cors from 'cors';
import * as fs from 'fs';
import path from 'path';
import ObjectToCSV from 'object-to-csv';
import keys from './keys.js';

const websocketport = 21543;
const httpport = 21544;

const ws_server = new WebSocketServer({
    port : websocketport
});

let sockets = [];

const http_server = express();

http_server.use(cors());
http_server.use(express.json());
http_server.use(express.static('./records'));
http_server.get("/", (req, res) => {
    res.send("GET");
});

let manual_start = false;
let manual_recording = false;
let manual_filename = "0";
http_server.put('/manual-record', (req, res) => {
    console.log("receive http request " + req.method)
    if (manual_recording) {
        if (req.body.control === "start") {
            res.send("Someone is still recording. Need to be stop first.");
            console.log("receive start recording");
        }
        else if (req.body.control === "stop") {
            manual_recording = false;
            manual_start = false;
            res.send("Stop recording succeed.");
            console.log("receive stop recording");
        }
    }
    else {
        if (req.body.control === "start") {
            manual_recording = false;
            manual_start = true;
            res.send("Start recording succeed.");
            console.log("receive start recording");
        }
        else if (req.body.control === "stop") {
            res.send("No one is recording. No need to stop");
            console.log("receive stop recording");
        }
    }
})

const getFiles = (dir, files = []) => {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = `${dir}/${file}`;
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files);
        }
        else if (name.indexOf('.csv') !== -1) {
            files.push({
                title: file,
                href: name.slice(9)
            })
        }
    }
    return files
}

http_server.get('/get-records/auto', (req, res) => {
    const files = getFiles('./records/auto');
    console.log(files);
    res.send(files);
})
http_server.get('/get-records/manual', (req, res) => {
    const files = getFiles('./records/manual');
    console.log(files);
    res.send(files);
})

http_server.get('/get-recording-status', (req, res) => {
    res.send(manual_recording);
})

http_server.listen(httpport, () => {
    console.log("http server listen on port " + httpport);
});

let recording = false;
let filename = "0";

ws_server.on('connection', function(socket) {
    sockets.push(socket);
    console.log("sockets length: ", sockets.length);
    socket.on('message', function(msg) {
        try {
            // msg = msg.replaceAll('nan', "null");
            var json_data = JSON.parse(msg);
            console.log("recieved message");
        } catch(error) {
            console.log("not json");
            console.log("error: " + error.message);
            console.log("message: \n" + msg);
            return 0;
        };

        const json_to_send = JSON.stringify(json_data);
        if (json_data.hasOwnProperty("batch")) {
            var json_to_write = [json_data.batch];
            json_to_write[0].timestamp = json_data["timestamp"];
            if (manual_recording) {
                let otc = new ObjectToCSV({keys, data: json_to_write});
                otc.quote = '';
                let csv = otc.getCSV().split('\n').slice(1).join('\n');
                fs.writeFileSync('./records/manual/' + manual_filename + '-manual' + '.csv' , csv, {flag: "a+"});
            }
            else {
                if (manual_start) {
                    manual_start = false;
                    manual_recording = true;
                    let record_start_time = new Date(1000*json_data["timestamp"]);
                    manual_filename= record_start_time.getFullYear() + '-' + record_start_time.getMonth()+1 + '-' + record_start_time.getDate() + '-' + record_start_time.getHours() + '-' + record_start_time.getMinutes() + '-' + record_start_time.getSeconds();
                    let otc = new ObjectToCSV({keys, data: json_to_write});
                    otc.quote = '';
                    let csv = otc.getCSV();
                    fs.writeFileSync('./records/manual/' + manual_filename + '-manual' + '.csv' , csv, {flag: "a+"});
                }
            }
            if (recording) {
                if (json_to_write[0].vcu_status != 2 && json_to_write[0]['vcu_status'] != 3) {
                    recording = false;        
                }
                let otc = new ObjectToCSV({keys, data: json_to_write});
                otc.quote = '';
                let csv = otc.getCSV().split('\n').slice(1).join('\n');
                fs.writeFileSync('./records/auto/' + filename + '-auto' + '.csv' , csv, {flag: "a+"});
            }
            else {
                if (json_to_write[0]['vcu_status'] == 2 || json_to_write[0]['vcu_status'] == 3) {
                    recording = true;
                    let record_start_time = new Date(1000*json_data["timestamp"]);
                    filename = record_start_time.getFullYear() + '-' + record_start_time.getMonth()+1 + '-' + record_start_time.getDate() + '-' + record_start_time.getHours() + '-' + record_start_time.getMinutes() + '-' + record_start_time.getSeconds();
                    let otc = new ObjectToCSV({keys, data: json_to_write});
                    otc.quote = '';
                    let csv = otc.getCSV();
                    fs.writeFileSync('./records/auto/' + filename + '-auto' +'.csv' , csv, {flag: "a+"});
                }
            }
        }
        sockets.filter(s => s !== socket).forEach(s => s.send(json_to_send));
        // console.log("recieved ws msg");
    });
    socket.on('close', function() {
        sockets = sockets.filter(s => s !== socket);
        console.log("one discontected, remaing sockets: ", sockets.length);
    });
});


console.log("websocket on: " + websocketport);
