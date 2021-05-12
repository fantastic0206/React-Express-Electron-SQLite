import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CreateDocModal from "../components/CreateDocModal";
import FileUploadModal from "../components/FileUploadModal";
import $ from "jquery";

import { addNote, updateNote } from "../actions/note";

import { store } from "react-notifications-component";

function Creates(props) {
  const dispatch = useDispatch();

  const {
    papperType,
    papperColor,
    status,
    createTitle,
    propContent,
    noteId,
    pathImage,
    imageName,
  } = props.location.state ? props.location.state : "";

  const { isSaved } = useSelector((state) => state.noteData);

  const [showCreateDoc, setShowCreateDoc] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fileData, setFileData] = useState();

  const [fileName, setFileName] = useState();

  const showImageBar = () => {
    $(".icon-wrap").fadeToggle("slow");
  };

  const showPencilBar = () => {
    $(".color-area").fadeToggle("slow");
  };

  const handleCancel = () => {
    setShowCreateDoc(false);
    setShowFileUpload(false);
  };

  const onSave = () => {
    const sendData = new FormData();

    sendData.append("papperType", papperType);
    sendData.append("papperColor", papperColor);
    sendData.append("title", title);
    sendData.append("content", content);
    sendData.append("file", fileData);

    if (status === "create") dispatch(addNote(sendData));
    else if (status === "edit") dispatch(updateNote(sendData, noteId));

    setShowCreateDoc(false);
  };

  const fileUpload = (file) => {
    console.log(file);
    setFileName(file.name);
    setFileData(file);
  };

  useEffect(() => {
    setTitle(createTitle);
    setContent(propContent);
    setFileName(imageName);
  }, [createTitle, propContent, imageName]);

  useEffect(() => {
    if (isSaved) {
      store.addNotification({
        title: "Success!",
        message: "Save Success",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  }, [isSaved]);

  return (
    <div>
      <section className="custom-page">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="d-flex flex-row justify-content-between ">
              <div className="back-arrow">
                <Link to={"create"}>
                  <i className="fa fa radius bg-primary fa-chevron-left"></i>
                </Link>
              </div>
              <div className="home-icon btn ">
                <Link to={"note"}>
                  <i className="fa  p-3 radius bg-primary  fa-th-list"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tittle-area">
        <div className="container">
          <div className="row">
            <div className="title-area">
              {/* <div className="tittle text-center">
                <h2 className="heading">Title</h2>
                <hr />
              </div> */}
              <div className="editable-tittle text-muted mt-5">
                <div className="mb-title mb-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="content-area">
              <textarea
                rows={20}
                placeholder="Content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div>
              <p>{fileName}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="color-area bg-light box-shadow border-0 rounded  ">
          <div className="color-area-wrap p-1 ">
            <div className="color-text text-primary text-center">
              Make Color
            </div>
            <div className="color-wrap d-flex flex-row justify-content-center">
              <div className="color-1 bg-dark rounded"></div>
              <div className="color-1 bg-primary rounded"></div>
              <div className="color-1 bg-danger rounded"></div>
              <div className="color-1 bg-success rounded"></div>
              <div className="color-1 marr bg-warning rounded"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-footer bg-primary fixed-bottom">
        <div className="container-fluid ">
          <div className="row py-2">
            <div className="col-8">
              <ul className="text-area d-flex flex-row mb-0 ">
                <li className="txt-size text-white">
                  <span className="p-2 ">17</span>
                </li>
                <li className="select-fnt text-white">
                  <select className="bg-primary" name="" id="">
                    <option className="bg-light selected" value="1">
                      AA
                    </option>
                    <option className="bg-light" value="">
                      {/* <del>Aa</del> */}
                      Aa
                    </option>
                    <option className="bg-light" value="">
                      {/* <ul>Aa</ul> */}
                      Aa
                    </option>
                    <option className="bg-light" value="">
                      aa
                    </option>
                    <option className="bg-light  " value="">
                      Aa
                    </option>
                  </select>
                </li>
                <li className="selected-fnt  text-primary rounded">
                  <div className="font-list bg-light rounded p-2">
                    Roboto
                    <i className="fa  fa-arrow-up"></i>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul className=" text-area icon-area d-flex flex-row ms-auto">
                <div
                  className="image-icon pencil-wrap p-2 p-md-3 rounded-circle"
                  style={{ cursor: "pointer" }}
                  onClick={showPencilBar}
                >
                  <a>
                    <i className="fa fa-pencil"></i>
                  </a>
                </div>
                <div className="image-icon p-2 p-md-3 ">
                  <Link to={"create"}>
                    <i className="fa fa-paint-brush"></i>
                  </Link>
                </div>
                <div
                  className="image-icon-3 p-2 p-md-3"
                  style={{ cursor: "pointer" }}
                  onClick={showImageBar}
                >
                  <a>
                    {" "}
                    <i className="fa fa-image"></i>
                  </a>
                </div>
              </ul>
              <div className="icon-wrap">
                <div
                  className="folder-icon mb-2 bg-primary box-shadow border-0 rounded-circle"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowCreateDoc(true);
                  }}
                >
                  <a>
                    {" "}
                    <i className="fa fa-folder text-white"></i>
                  </a>
                </div>
                <div
                  className="folder-icon bg-primary box-shadow border-0 rounded-circle"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowFileUpload(true);
                  }}
                >
                  <a>
                    {" "}
                    <i className="fa fa-camera text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CreateDocModal
        show={showCreateDoc}
        handleCancel={handleCancel}
        papperType={papperType}
        papperColor={papperColor}
        addDoc={onSave}
      />
      <FileUploadModal
        show={showFileUpload}
        handleCancel={handleCancel}
        fileUpload={fileUpload}
        pathImage={pathImage}
      />
    </div>
  );
}

export default Creates;
