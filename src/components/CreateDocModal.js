import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import NoteDoc from "../components/NoteDoc";

function CreateDocModal(props) {
  const {
    show,
    handleCancel,
    papperType,
    papperColor,
    addDoc,
    updateDoc,
    docContent,
    title,
    status,
  } = props;

  const [backColor, setBackColor] = useState();

  useEffect(() => {
    if (papperColor === "light") setBackColor("#f8f9fa");
    else if (papperColor === "darkd") setBackColor("#545454");
    else if (papperColor === "gray") setBackColor("#C7C7C7");
    else if (papperColor === "dangr") setBackColor("#FF9191");
    else if (papperColor === "prime") setBackColor("#9AD0FF");
    else if (papperColor === "scs") setBackColor("#A7F6CE");
    else if (papperColor === "war") setBackColor("#FFF29B");
    else if (papperColor === "inf") setBackColor("#FFBC9A");
    else if (papperColor === "straw") setBackColor("#FFABCA");
    else if (papperColor === "inver") setBackColor("#E0C5FF");
  }, [papperType, papperColor]);

  return (
    <Modal
      show={show}
      onHide={handleCancel}
      dialogClassName="modal-90w create-doc-modal"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <NoteDoc
          papperType={papperType}
          backColor={backColor}
          docContent={docContent}
          title={title}
        />
      </Modal.Body>
      <Modal.Footer>
        {status === "create" ? (
          <>
            <button
              type="button"
              className="btn btn-primary"
              disabled
              onClick={updateDoc}
            >
              ADD TO DOCUMENT
            </button>
            <button type="button" className="btn btn-primary" onClick={addDoc}>
              CREATE NEW DOCUMENT
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={updateDoc}
            >
              ADD TO DOCUMENT
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled
              onClick={addDoc}
            >
              CREATE NEW DOCUMENT
            </button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default CreateDocModal;
