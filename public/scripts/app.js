"use strict";

// Created by David Walshe on 22/02/2020

// JSX - Javascript XML

var count = 0;

// Event Listeners
var addOne = function addOne() {
    count++;
    console.log("addOne");
    renderCounderApp();
};

var minusOne = function minusOne() {
    count--;
    console.log("minusOne");
    renderCounderApp();
};

var reset = function reset() {
    count = 0;
    console.log("reset");
    renderCounderApp();
};

// Get the root HTML for the react app to run in.
var appRoot = document.getElementById("app");

// Setup basic re-render function
var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );

    ReactDOM.render(template, appRoot);
};

// Initial render
renderCounderApp();
