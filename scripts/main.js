$("head").append("link").attr("rel", "icon").attr("type", "image/ico").attr("href", "images/favicon.ico") ;
home_path = "/index.html" ;

// navbar
const nav_elements = [
    [ "404", "index4.html" ],
]
function set_nav(item, index) {
    $(".navbar-nav").append($("<li></li>").attr("class", "nav-item").append($("<a></a>").attr("class", "nav-link").text(item[0]).attr("href", item[1]))) ;
}

$(document).ready(function(){ // or you can type "$(function(){}"
    $("nav")
        .attr("class", "navbar navbar-expand-sm bg-dark navbar-dark sticky-top")
        .append($("<div></div>") .attr("class", "container-fluid")
                .append($("<a></a>") .attr("class", "navbar-brand") .text("Logo") .attr("href", home_path))
                .append($("<button></button>")
                    .attr("type", "button")
                    .attr("class", "navbar-toggler ml-auto float-xs-right pull-right navbar-toggler-right")
                    .attr("data-toggle", "collapse")
                    .attr("data-target", "#navbar")
                    .attr("aria-expanded", "false")
                    .attr("aria-controls", "navbar")
                    .attr("aria-label", "Toggle navigation")
                        .append($("<span></span>") .attr("class", "navbar-toggler-icon")))
            .append($("<div></div>") .attr("class", "navbar-collapse collapse") .attr("id", "navbar")
                .append($("<ul></ul>") .attr("class", "navbar-nav ")))) ;
    nav_elements.forEach(set_nav) ;
});

