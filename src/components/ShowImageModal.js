import React from "react";
import Modal from "react-bootstrap/Modal";

function FileUploadModal(props) {
  const { show, handleCancel, pathImage } = props;

  return (
    <Modal
      show={show}
      onHide={handleCancel}
      dialogClassName="modal-90w fileupload-modal"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {pathImage && <img src={pathImage} width="100%" height="100%" />}
      </Modal.Body>
    </Modal>
  );
}

export default FileUploadModal;
