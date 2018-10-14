import React from 'react';
const Option = (props) => (
    <div>
        {props.text}
        <button onClick={(e) => {
            props.onDeleteItem(props.text);
        }}>remove item</button>
    </div>
);

export default Option;