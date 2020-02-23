"use strict";

// Created by David Walshe on 22/02/2020

// JSX - Javascript XML

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["One", "Two"],
    visible: true,
    details: "These are the boring app details"

};

// Submit a form without reload
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

// On-click listener
var removeAll = function removeAll() {
    app.options = [];
    render();
};

// OnClick listener
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];

    alert(option);
};

var showHideDetails = function showHideDetails() {
    app.visible = !app.visible;
    render();
};

// Get the root HTML for the react app to run in.
var appRoot = document.getElementById("app");

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove all"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    "Option: ",
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "type", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        ),
        React.createElement(
            "button",
            { onClick: showHideDetails },
            app.visible ? "Hide Details" : "Show details"
        ),
        app.visible ? React.createElement(
            "p",
            null,
            app.details
        ) : null
    );

    ReactDOM.render(template, appRoot);
};

render();
