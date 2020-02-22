"use strict";

// Created by David Walshe on 22/02/2020
console.log("Here");

// JSX - Javascript XML

var user = {
    // name: "Mike",
    age: 27,
    location: "Ireland"
};

var getLocation = function getLocation(location) {
    if (location !== undefined) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
