// Created by David Walshe on 23/02/2020

import React from "react";

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
};

// Assign default props to Header Component
Header.defaultProps = {
    title: "some default"
};

export default Header;
