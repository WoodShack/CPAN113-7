//Variables
let mouseEventElement = document.getElementById("mouse-event-btn");
let mouseEventStatus = document.getElementById("mouse-event-status");

//Functions
function addMouseEvent(status){
    mouseEventStatus.innerHTML = "Status: "+status;
}

//Mouse event
mouseEventElement.addEventListener("click", function(event) {
    addMouseEvent("Mouse click");
});

mouseEventElement.addEventListener("mouseenter", function(event) {
    addMouseEvent("Mouse enter");
});

mouseEventElement.addEventListener("mouseleave", function(event) {
    addMouseEvent("Mouse leave");
});