import React from 'react';
import Modal from 'react-modal';

const ItemModal = (props) => (
    <Modal isOpen={!!props.selectedItem} contentLabel="Selected Option" ariaHideApp={false} className="modal">
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedItem && <p className="modal__body">{props.selectedItem}</p>}
        <button className="button" onClick={props.onCloseModal}>Okay</button>
    </Modal>
)
export default ItemModal;
