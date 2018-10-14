import React from 'react';
import Header from "./Header";

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.onPick}
                disabled={!props.hasOptions}
            >
                What should I do
            </button>
        </div>
    );
};

export default Action;