import React from 'react';
const Option = (props) => {
    return (
        <div>
            {props.text}
            <button onClick={(e) => {
                props.onDeleteItem(props.text);
            }}>remove item</button>
        </div>
    );
};
export default Option;