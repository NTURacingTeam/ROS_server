// websocket
// wb_url = "ws://localhost:8000";
wb_url = "ws://124.218.222.22:8080";
const socket = new WebSocket(wb_url);

socket.onopen = function(event) {
    console.log('Socket connected successfully');
    console.log(event);
    setTimeout(function() {
        socket.send(JSON.stringify(
            {name:"accelerator_1",value:1.1,time:123.4}
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
const data_list = [
    {name:"accelerator_1", value:0.0},
    {name:"accelerator_2", value:0.0},
    {name:"accelerator_micro", value:0.0},
    {name:"brake", value:0.0}
]





// construct graph
/// egg graph canvas
let egg_class = class {
    c_width;
    c;
    c_update(acceleration_x, acceleration_y){
        this.c.animateLayer("data_dot", {
            x: this.c_width/2 + acceleration_x, y: this.c_width/2 - acceleration_y,
        });
    }
    c_init(){
        this.c_width = $("#egg_graph").width();
        $("#egg_graph").text("").append($("<canvas></canvas>")
            .attr("width", this.c_width.toString()).attr("height", this.c_width.toString()));
        this.c = $("#egg_graph > canvas");
        this.c.addLayer({
            type: "arc",
            strokeStyle: "black",
            strokeWidth: 5,
            x: this.c_width/2, y: this.c_width/2,
            radius: this.c_width*0.45
        }).addLayer({
            type: "line",
            strokeStyle: "black",
            strokeWidth: "4",
            x1:0, y1:this.c_width/2,
            x2:this.c_width, y2:this.c_width/2
        }).addLayer({
            type: "line",
            strokeStyle: "black",
            strokeWidth: "4",
            y1:0, x1:this.c_width/2,
            y2:this.c_width, x2:this.c_width/2
        });
        this.c.addLayer({
            name: "data_dot",
            type: "arc",
            fillStyle: "red",
            x: this.c_width/2, y: this.c_width/2,
            radius: this.c_width*0.03
        }).drawLayers();
    }
};
let egg = new egg_class();


/// steering angle canvas
let steer = class {
    c_width;
    steering_arrow_length;
    c;
    c_update(steer_ang){
        steer_c.animateLayer("data_arrow", {
            x2: 0 + steering_arrow_length * Math.cos(steer_ang),
            y2: 0 - steering_arrow_length * Math.sin(steer_ang)
        }, 10)
    };
}

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

/// speed
var GPS_data = 0;
var Hall_effect_data = 0;
var lineChartData = [
  { label: "GPS", values: [] },
  { label: "Hall effect", values: [] }
];
var chart ;
function speed_c_update(){
    var now = (new Date()).getTime() /1000 |0;
    GPS_data = now%11;
    Hall_effect_data = now%7;
}; // to be continued ...
setInterval(function() {speed_c_update()}, 1000);

function speed_c_init(){
    $("#speed_c").css("width", $("#speed").width().toString()).css("height", ( $("#speed").width()/2 ).toString()).attr("class", "epoch category10");
    $(function() {
        function nextData(){
            var now = (new Date()).getTime() /1000 |0;
            //console.log(now);
            return [
                {time:now, y: GPS_data},
                {time:now, y: Hall_effect_data}
            ];
        };
        chart = $("#speed_c").epoch({
            type: "time.line",
            data: lineChartData,
            axes: ["left", "bottom", "right"]
        });

        setInterval(function() { chart.push(nextData()) }, 1000);
        chart.push(nextData());
    })
}

$(document).ready(function(){ // or you can type "$(function(){}"
    data_list.forEach(function(content, index){
        $("#data-name").append($("<p></p>").attr("class","bg-body").attr("id",content.name+"-name").text(content.name));
        $("#data-value").append($("<p></p>").attr("class","bg-body").attr("id",content.name+"-value").text(content.value));
    });
    $("#control-tower div").addClass("bg-info border text-white text-center");

    // egg_c_init();
    // egg_c_update(10,20);

    egg.c_init();
    egg.c_update(10,20);

    steer_c_init();
    steer_c_update(0.2);

    brake_c_init();
    brake_c_update(40);

    acc_c_init();
    acc_c_update(80);

    max_battery_temp_c_init();
    max_battery_temp_c_update(50);
    speed_c_init();
});

