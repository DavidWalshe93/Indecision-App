// Created by David Walshe on 22/02/2020

// JSX - Javascript XML

let count = 0;

// Event Listeners
const addOne = () => {
    count++;
    console.log("addOne");
    renderCounderApp();
};

const minusOne = () => {
    count--;
    console.log("minusOne");
    renderCounderApp();
};

const reset = () => {
    count = 0;
    console.log("reset");
    renderCounderApp();
};

// Get the root HTML for the react app to run in.
let appRoot = document.getElementById("app");

// Setup basic re-render function
const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

// Initial render
renderCounterApp();