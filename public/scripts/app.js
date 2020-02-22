"use strict";

// Created by David Walshe on 22/02/2020
console.log("Here");

// JSX - Javascript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "DOes this change"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    ),
    React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Dave Walshe"
        ),
        React.createElement(
            "p",
            null,
            "Age: 26"
        ),
        React.createElement(
            "p",
            null,
            "Location: Ireland"
        )
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
