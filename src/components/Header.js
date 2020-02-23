// Created by David Walshe on 23/02/2020

import React from "react";

const Header = (props) => (
    <div className={"header"}>
        <div className={"container"}>
            <h1 className={"header__title"}>{props.title}</h1>
            {props.subtitle && <h2 className={"header__subtitle"}>{props.subtitle}</h2>}
        </div>
    </div>
);

// Assign default props to Header Component
Header.defaultProps = {
    title: "some default"
};

export default Header;
