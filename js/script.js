//Variables
let mouseEventElement = document.getElementById("mouse-event-btn");
let mouseEventStatus = document.getElementById("mouse-event-status");
let keyboardEventElement = document.getElementById("keyboard-event-input");
let keyboardEventStatus = document.getElementById("keyboard-event-status");

//Functions
function addMouseEvent(status){
    mouseEventStatus.innerHTML = "Status: "+status;
}

function addKeyboardEvent(status){
    keyboardEventStatus.innerHTML = keyboardEventStatus.innerHTML+"<br>Status: "+status;
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

//Keyboard event
keyboardEventElement.addEventListener("keydown", function(event) {
    addKeyboardEvent(event.key+ " Key down");
});

keyboardEventElement.addEventListener("keyup", function(event) {
    addKeyboardEvent(event.key+" Key up");
});

keyboardEventElement.addEventListener("input", function(event) {
    addKeyboardEvent("Input changed");
});