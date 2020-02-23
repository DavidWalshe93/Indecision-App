// Created by David Walshe on 23/02/2020

import Option from "./Option";
import React from "react";

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove all options</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
            props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
        <p>Length = {props.options.length}</p>
    </div>
);

export default Options;