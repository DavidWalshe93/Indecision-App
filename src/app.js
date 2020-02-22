// Created by David Walshe on 22/02/2020
console.log("Here");

// JSX - Javascript XML
let template = (
    <div>
        <h1>Indecision App</h1>
        <p>DOes this change</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <div>
            <h1>Dave Walshe</h1>
            <p>Age: 26</p>
            <p>Location: Ireland</p>
        </div>
    </div>
);
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
