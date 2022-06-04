// websocket
// wb_url = "ws://localhost:8000";
wb_url = "ws://124.218.222.22:8080";
const socket = new WebSocket(wb_url);

socket.onopen = function(event) {
    console.log('Socket connected successfully');
    console.log(event);
    setTimeout(function() {
        socket.send(JSON.stringify(
            {name:["FWS","L"],value:1.1,time:123.4}
        ));
    }, 1000);
};

socket.onmessage = function(event) {
    console.log("got ws msg");
    console.log(event);
    var data = JSON.parse(event.data);
    console.log(data);
    $("#"+data.name[0]+"-"+data.name[1]+"-value").text(data.value.toString());
};

// data

const data_list = [
    {name:["FWS","L"],value:0.0},
    {name:["FWS","R"],value:0.0},
    {name:["FWT","L1"],value:0.0},
    {name:["FWT","L2"],value:0.0},
    {name:["FWT","R1"],value:0.0},
    {name:["FWT","R2"],value:0.0},
    {name:["BRK","N"],value:0.0},
    {name:["THR","A"],value:0.0},
    {name:["THR","B"],value:0.0},
    {name:["STR","N"],value:0.0},
    {name:["FSS","L"],value:0.0},
    {name:["FSS","R"],value:0.0},
    {name:["OPR","N"],value:0.0},
    {name:["RWS","L"],value:0.0},
    {name:["RWS","R"],value:0.0},
    {name:["RWT","L1"],value:0.0},
    {name:["RWT","L2"],value:0.0},
    {name:["RWT","R1"],value:0.0},
    {name:["RWT","R2"],value:0.0},
    {name:["RSS","L"],value:0.0},
    {name:["RSS","R"],value:0.0},
    {name:["HIS","P"],value:0.0},
    {name:["HIS","R"],value:0.0},
    {name:["HIA","X"],value:0.0},
    {name:["HIA","Y"],value:0.0},
    {name:["HIA","Z"],value:0.0},
    {name:["HIG","X"],value:0.0},
    {name:["HIG","Y"],value:0.0},
    {name:["HIG","Z"],value:0.0},
    {name:["HIC","X"],value:0.0},
    {name:["HIC","Y"],value:0.0},
    {name:["HIC","Z"],value:0.0},
    {name:["OIS","P"],value:0.0},
    {name:["OIS","R"],value:0.0},
    {name:["OIA","X"],value:0.0},
    {name:["OIA","Y"],value:0.0},
    {name:["OIA","Z"],value:0.0},
    {name:["OIG","X"],value:0.0},
    {name:["OIG","Y"],value:0.0},
    {name:["OIG","Z"],value:0.0},
    {name:["OIC","X"],value:0.0},
    {name:["OIC","Y"],value:0.0},
    {name:["OIC","Z"],value:0.0},
    {name:["MTC","N"],value:0.0},
    {name:["MSC","N"],value:0.0},
    {name:["MDC","N"],value:0.0},
    {name:["MIE","N"],value:0.0},
    {name:["MID","N"],value:0.0},
    {name:["MSM","N"],value:0.0},
    {name:["MTL","N"],value:0.0}
]


$(document).ready(function(){ // or you can type "$(function(){}"
    // data_name.forEach((frame,content) => setupdata(frame,content));
    data_list.forEach(function(content, index){
        $("#data-name").append($("<p></p>").attr("class","bg-body").attr("id",content.name[0]+"-"+content.name[1]+"-name").text(content.name));
        $("#data-value").append($("<p></p>").attr("class","bg-body").attr("id",content.name[0]+"-"+content.name[1]+"-value").text(content.value));
    });
});
