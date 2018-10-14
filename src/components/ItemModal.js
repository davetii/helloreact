import React from 'react';
import Modal from 'react-modal';

const ItemModal = (props) => (
    <Modal isOpen={!!props.selectedItem} contentLabel="Selected Option" ariaHideApp={false}>
        <h3>Selected Option</h3>
        {props.selectedItem && <p>{props.selectedItem}</p>}
        <button onClick={props.onCloseModal}>Okay</button>
    </Modal>
)
export default ItemModal;
