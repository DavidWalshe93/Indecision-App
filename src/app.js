// Created by David Walshe on 22/02/2020

// JSX - Javascript XML

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["One", "Two"],
    visible: true,
    details: "These are the boring app details"

};

// Submit a form without reload
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }

};

// On-click listener
const removeAll = () => {
    app.options = [];
    render();
};

// OnClick listener
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);

};

const showHideDetails = () => {
    app.visible = !app.visible;
    render();
};

// Get the root HTML for the react app to run in.
let appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>Option: {option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="type" name="option"/>
                <button>Add Option</button>
            </form>
            <button onClick={showHideDetails}>{app.visible ? "Hide Details" : "Show details"}</button>
            {app.visible ? <p>{app.details}</p> : null}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();