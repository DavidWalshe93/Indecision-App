// Created by David Walshe on 22/02/2020
console.log("Here");

// JSX - Javascript XML

let user = {
    // name: "Mike",
    age: 27,
    location: "Ireland"
};

const getLocation = (location) => {
    if (location !== undefined) {
        return <p>Location: {location}</p>;
    }
};

let template = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
