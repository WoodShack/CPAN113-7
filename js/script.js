//Variables
let mouseEventElement = document.getElementById("mouse-event-btn");
let mouseEventStatus = document.getElementById("mouse-event-status");
let keyboardEventElement = document.getElementById("keyboard-event-input");
let keyboardEventStatus = document.getElementById("keyboard-event-status");
let formEventElement = document.getElementById("form-event-form");
let formEventStatus = document.getElementById("form-event-status");
let focusEventElement = document.getElementById("focus-event-input");
let focusEventStatus = document.getElementById("focus-event-status");

//Functions
function addMouseEvent(status){
    mouseEventStatus.innerHTML = "Status: "+status;
}

function addKeyboardEvent(status){
    keyboardEventStatus.innerHTML = keyboardEventStatus.innerHTML+"<br>Status: "+status;
}

function addFormEvent(status){
    formEventStatus.innerHTML = "Status: "+status;
}

function addFocusEvent(status){
    focusEventStatus.innerHTML = "Status: "+status;
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

//Form event
formEventElement.addEventListener("submit", function(event) {
    event.preventDefault();
    addFormEvent("Submitted");
});

formEventElement.addEventListener("change", function(event) {
    addFormEvent("Changed");
});

//Focus event
focusEventElement.addEventListener("focus", function(event) {
    addFocusEvent("Has Focus");
});

focusEventElement.addEventListener("blur", function(event) {
    addFocusEvent("Lost Focus");
});