import React from 'react';
import Option from "./Option";

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Items</h3>
            <button className="button button-link" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        {props.items.length == 0 && <p className="widget__message">Please add an item to get started</p>}
        {
            props.items.map((o, index) => (
                <Option key={o} text={o} count={index+1}
                        onDeleteItem={props.onDeleteItem}
                />
            ))
        }
    </div>
);

export default Options;