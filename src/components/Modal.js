import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
        <Modal 
        isOpen={
        !!props.selectedOption
        }
        onRequestClose={props.closeModal}
        contentLabel="Selected Option"><h3>The action you will take today is: {props.selectedOption}</h3>
        <button
          name="option"
          onClick={
            props.closeModal
          }>
          Close
        </button>
</Modal>
   
)

export default OptionModal;
