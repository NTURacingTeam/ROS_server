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
    {name:["FWS","L"],value:0.0}, // front left wheel speed
    {name:["FWS","R"],value:0.0}, // front right wheel speed
    {name:["FWT","L1"],value:0.0},
    {name:["FWT","L2"],value:0.0},
    {name:["FWT","R1"],value:0.0},
    {name:["FWT","R2"],value:0.0},
    {name:["BRK","N"],value:0.0}, // breaking pedal
    {name:["THR","A"],value:0.0}, // accelration pedal A
    {name:["THR","B"],value:0.0}, // accelration pedal B
    {name:["STR","N"],value:0.0}, // steering wheel angle
    {name:["FSS","L"],value:0.0},
    {name:["FSS","R"],value:0.0},
    {name:["OPR","N"],value:0.0},
    {name:["RWS","L"],value:0.0}, // rear left wheel speed
    {name:["RWS","R"],value:0.0}, // rear right wheel speed
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
    {name:["MTL","N"],value:0.0},
    {name:["GPS","X"],value:0.0}, // GPS longitude
    {name:["GPS","Y"],value:0.0} // GPS latitude
]





// construct graph
/// egg graph canvas
var egg_c_width ;
var egg_c ;

function egg_c_update(acceleration_x, acceleration_y){
    egg_c.animateLayer("data_dot", {
        x: egg_c_width/2 + acceleration_x, y: egg_c_width/2 - acceleration_y,
    })
};

function egg_c_init(){
    egg_c_width = $("#egg_graph").width();
    $("#egg_graph").text("").append($("<canvas></canvas>").attr("width", egg_c_width.toString()).attr("height", egg_c_width.toString()));
    egg_c = $("#egg_graph > canvas");
    egg_c.addLayer({
        type: "arc",
        strokeStyle: "black",
        strokeWidth: 5,
        x: egg_c_width/2, y: egg_c_width/2,
        radius: egg_c_width*0.45
    }).addLayer({
        type: "line",
        strokeStyle: "black",
        strokeWidth: "4",
        x1:0, y1:egg_c_width/2,
        x2:egg_c_width, y2:egg_c_width/2
    }).addLayer({
        type: "line",
        strokeStyle: "black",
        strokeWidth: "4",
        y1:0, x1:egg_c_width/2,
        y2:egg_c_width, x2:egg_c_width/2
    });
    egg_c.addLayer({
        name: "data_dot",
        type: "arc",
        fillStyle: "red",
        x: egg_c_width/2, y: egg_c_width/2,
        radius: egg_c_width*0.03
    }).drawLayers();
}


/// steering angle canvas
var steer_c_width ;
var steering_arrow_length ;
var steer_c ;
function steer_c_update(steer_ang){
    steer_c.animateLayer("data_arrow", {
        x2: 0 + steering_arrow_length * Math.cos(steer_ang),
        y2: 0 - steering_arrow_length * Math.sin(steer_ang)
    }, 10)
};

function steer_c_init(){
    steer_c_width = $("#steering_angle").width();
    steering_arrow_length = steer_c_width * 0.4;
    $("#steering_angle").text("").append($("<canvas></canvas>").attr("width", steer_c_width.toString()).attr("height", steer_c_width.toString()));
    steer_c = $("#steering_angle > canvas");
    steer_c.drawArc({
        layer: true,
        strokeStyle: "black",
        strokeWidth: 5,
        x: steer_c_width/2, y: steer_c_width/2,
        radius: steer_c_width*0.45
    }).drawArc({
        layer: true,
        fillStyle: "black",
        x: steer_c_width/2, y: steer_c_width/2,
        radius: steer_c_width*0.03
    });
    steer_c.drawLine({
        layer: true,
        name: "data_arrow",
        strokeStyle: '#000',
        strokeWidth: 4,
        rounded: true,
        endArrow: true,
        arrowRadius: 15,
        arrowAngle: 90,
        translateX: steer_c_width/2,
        translateY: steer_c_width/2,
        x1: 0, y1: 0,
        x2: 0 ,
        y2: - steering_arrow_length
    }).drawLayers();
};


/// brake pedal
var brake_c_width ;
var brake_c_height ;
var brake_c ;

function brake_c_update(data){
    brake_c.animateLayer("data_slider", {
        y:brake_c_height * 0.95 - data
    });
};
function brake_c_init(){
    brake_c_width = $("#brake_pedal").width();
    brake_c_height = brake_c_width * 4;
    $("#brake_pedal").text("").append($("<canvas></canvas>").attr("width", brake_c_width.toString()).attr("height", brake_c_height.toString()));
    brake_c = $("#brake_pedal > canvas");

    brake_c.drawLine({
        layer: true,
        strokeStyle: "black",
        strokeWidth: 5,
        y1:0, x1:brake_c_width/2,
        y2:brake_c_height, x2:brake_c_width/2
    });
    brake_c.drawRect({
        layer: true,
        name: "data_slider",
        fillStyle: "red",
        x:brake_c_width/2, y:brake_c_height * 0.95,
        width: brake_c_width/2, height: brake_c_height/10
    }).drawLayers();
};


/// acc pedal
var acc_c_width ;
var acc_c_height ;
var acc_c ;

function acc_c_update(data){
    acc_c.animateLayer("data_slider", {
        y:acc_c_height * 0.95 - data
    });
};
function acc_c_init(){
    acc_c_width = $("#acc_pedal").width();
    acc_c_height = acc_c_width * 4;
    $("#acc_pedal").text("").append($("<canvas></canvas>").attr("width", acc_c_width.toString()).attr("height", acc_c_height.toString()));
    acc_c = $("#acc_pedal > canvas");

    acc_c.drawLine({
        layer: true,
        strokeStyle: "black",
        strokeWidth: 5,
        y1:0, x1:acc_c_width/2,
        y2:acc_c_height, x2:acc_c_width/2
    });
    acc_c.drawRect({
        layer: true,
        name: "data_slider",
        fillStyle: "red",
        x:acc_c_width/2, y:acc_c_height * 0.95,
        width: acc_c_width/2, height: acc_c_height/10
    }).drawLayers();
};

/// max battery temperature
var max_battery_temp_c_width ;
var max_battery_temp_c_height ;
var max_battery_temp_c ;

function max_battery_temp_c_update(data){
    max_battery_temp_c.animateLayer("data_bar", {
        y:max_battery_temp_c_height/2 + data
    });
};
function max_battery_temp_c_init(){
    max_battery_temp_c_width = $("#max_battery_temp").width();
    max_battery_temp_c_height = max_battery_temp_c_width * 4;
    $("#max_battery_temp").text("").append($("<canvas></canvas>").attr("width", max_battery_temp_c_width.toString()).attr("height", max_battery_temp_c_height.toString()));
    max_battery_temp_c = $("#max_battery_temp > canvas");
    max_battery_temp_c.drawRect({
        layer: true,
        name: "data_bar",
        fillStyle: "red",
        x:max_battery_temp_c_width/2, y:max_battery_temp_c_height/2,
        width: max_battery_temp_c_width, height: max_battery_temp_c_height
    });
    max_battery_temp_c.drawRect({
        layer: true,
        strokeStyle: "black",
        strokeWidth: 10,
        x:max_battery_temp_c_width/2, y:max_battery_temp_c_height/2,
        width: max_battery_temp_c_width, height: max_battery_temp_c_height
    }).drawLayers();
};

$(document).ready(function(){ // or you can type "$(function(){}"
    data_list.forEach(function(content, index){
        $("#data-name").append($("<p></p>").attr("class","bg-body").attr("id",content.name[0]+"-"+content.name[1]+"-name").text(content.name));
        $("#data-value").append($("<p></p>").attr("class","bg-body").attr("id",content.name[0]+"-"+content.name[1]+"-value").text(content.value));
    });
    $("#control-tower div").addClass("bg-info border text-white text-center");

    egg_c_init();
    egg_c_update(10,20);

    steer_c_init();
    steer_c_update(0.2);

    brake_c_init();
    brake_c_update(40);

    acc_c_init();
    acc_c_update(80);

    max_battery_temp_c_init();
    max_battery_temp_c_update(50);

});

