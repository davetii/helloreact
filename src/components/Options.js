import React from 'react';
import Option from "./Option";

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
            props.items.map((o) => (
                <Option key={o} text={o}
                        onDeleteItem={props.onDeleteItem}
                />
            ))
        }
    </div>
);

export default Options;