import React, { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";

const api = "http://localhost:3000";

function FileUploadModal(props) {
  const { show, handleCancel, fileUpload, pathImage } = props;
  const containerRef = useRef(null);

  const [image, setImage] = useState(null);

  const uploadEvent = () => {
    containerRef.current.click();
  };

  const getFileData = ({ target: { files } }) => {
    const cancel = !files.length;
    if (cancel) return;
    setImage(URL.createObjectURL(files[0]));

    const fileInfo = files[0];
    fileUpload(fileInfo);
  };

  useEffect(() => {
    if (pathImage) {
      let pathImageName = pathImage.replace(/\\/g, "/");
      if (pathImageName[0] !== "/") pathImageName = "/" + pathImageName;
      setImage(api + pathImageName);
    }
  }, [pathImage]);

  return (
    <Modal
      show={show}
      onHide={handleCancel}
      dialogClassName="modal-90w fileupload-modal"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{image && <img src={image} width="100%" />}</Modal.Body>
      <Modal.Footer>
        <input
          type="file"
          name="file"
          className="d-none"
          ref={containerRef}
          onChange={getFileData}
        />
        <div className="modal-image" onClick={uploadEvent}>
          <i className="fa fa-camera text-white"></i>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default FileUploadModal;
