// websocket
wb_url = "ws://localhost:8000";
const socket = new WebSocket(wb_url);

socket.onopen = function(event) {
    console.log('Socket connected successfully');
    console.log(event);
    setTimeout(function() {
        socket.send(JSON.stringify(
            {name:"GPS",value:1.1,time:123.4}
        ));
    }, 1000);
};

socket.onmessage = function(event) {
    console.log("got ws msg");
    console.log(event);
    var data = JSON.parse(event.data);
    console.log(data);
    $("#"+data.name+"-value").text(data.value.toString());
};

// data
const data_name = {
    FB1:{name:"FB1",value:1.0},
    FB2:{name:"FB2",value:1.0},
    RB1:{name:"RB1",value:1.0},
    RB2:{name:"RB2",value:0.0},
    DB1:{name:"DB1",value:0.0},
    DB2:{name:"DB2",value:0.0},
    MCM:{name:"MCM",value:0.0},
    BMS:{name:"BMS",value:0.0},
    HIS:{name:"HIS",value:0.0},
    HIA:{name:"HIA",value:0.0},
    HIG:{name:"HIG",value:0.0},
    OIS:{name:"OIS",value:0.0},
    OIA:{name:"OIA",value:0.0},
    OIG:{name:"OIG",value:0.0},
    OIC:{name:"OIC",value:0.0},
    GPS:{name:"GPS",value:0.0}
};

function forEach(callback) {
   for (let prop in this.container) {
      // Call the callback as: callback(key, value)
      callback(prop, this.container[prop]);
   }
}


$(document).ready(function(){ // or you can type "$(function(){}"
    // data_name.forEach((frame,content) => setupdata(frame,content));
    for (const [frame, content] of Object.entries(data_name)) {
        // $("#data-name").append($("<p></p>").attr("class","bg-body".attr("id",content.name)));
        $("#data-name").append($("<p></p>").attr("class","bg-body").attr("id",content.name+"-name").text(content.name));
        $("#data-value").append($("<p></p>").attr("class","bg-body").attr("id",content.name+"-value").text(content.value));
    }
});
