// Created by David Walshe on 23/02/2020

import React from "react";

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={() => props.handleDeleteOption(props.optionText)}>
                remove
            </button>
        </div>
    )
};

export default Option;