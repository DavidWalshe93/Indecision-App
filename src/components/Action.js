// Created by David Walshe on 23/02/2020

import React from "react";

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};

export default Action;