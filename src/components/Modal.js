import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={
      !!props.selectedOption
    }
    onRequestClose={props.closeModal}
    closeTimeoutMS={200}
    className="modal"
    contentLabel="Selected Option">
    <div className="modal-contents-container">

      <h3>We suggest you complete this task:</h3>
      <div className="selectedTask">{props.selectedOption}</div>
    </div>
    <button
      name="option"
      onClick={
        props.closeModal
      }>
      X
        </button>

  </Modal>

)

export default OptionModal;
