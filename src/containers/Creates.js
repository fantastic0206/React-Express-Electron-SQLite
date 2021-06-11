import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CreateDocModal from "../components/CreateDocModal";
import FileUploadModal from "../components/FileUploadModal";
import $ from "jquery";

import { addNote, updateNote } from "../actions/note";

import { store } from "react-notifications-component";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

function Creates(props) {
  const dispatch = useDispatch();
  const containerRef = useRef();

  const {
    papperType,
    papperColor,
    status,
    createTitle,
    propContent,
    noteId,
    pathImage,
  } = props.location.state ? props.location.state : "";

  const { isSaved } = useSelector((state) => state.noteData);

  const [showCreateDoc, setShowCreateDoc] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fontVal, setFontVal] = useState("Aa");
  const [fontTag, setFontTag] = useState("");

  const [imageBar, setImageBar] = useState(false);
  const [pencilBar, setPencilBar] = useState(false);
  const [brashBar, setBrashBar] = useState(false);
  const [fontTypeSelect, setFontTypeSelect] = useState(false);

  const [selectedTxt, setSelectedTxt] = useState("");
  const [divContent, setDivContent] = useState("");
  const [contents, setContents] = useState();

  const showImageBar = () => {
    setImageBar(!imageBar);
    setPencilBar(false);
    setBrashBar(false);
    setFontTypeSelect(false);
  };

  const showPencilBar = () => {
    setPencilBar(!pencilBar);
    setImageBar(false);
    setBrashBar(false);
    setFontTypeSelect(false);
  };

  const showBrashBar = () => {
    setBrashBar(!brashBar);
    setImageBar(false);
    setPencilBar(false);
    setFontTypeSelect(false);
  };

  const showFontTypeSelect = () => {
    let content = containerRef.current.innerHTML;
    setContent(content);

    setFontTypeSelect(!fontTypeSelect);
    setImageBar(false);
    setPencilBar(false);
    setBrashBar(false);
  };

  const handleCancel = () => {
    setShowCreateDoc(false);
    setShowFileUpload(false);
  };

  const changeDivValue = (e) => {
    setContent(e.target.value);
  };

  const sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1", "u"],
    allowedAttributes: { a: ["href"] },
  };

  const sanitize = () => {
    if (fontTag !== "") setContent(sanitizeHtml(content, sanitizeConf));
  };

  const onSave = () => {
    let content = containerRef.current.innerHTML;

    const sendData = {
      papperType: papperType,
      papperColor: papperColor,
      title: title,
      content: content,
    };

    dispatch(addNote(sendData));

    setShowCreateDoc(false);
  };

  const onUpdate = () => {
    let content = containerRef.current.innerHTML;

    const sendData = {
      papperType: papperType,
      papperColor: papperColor,
      title: title,
      content: content,
    };

    dispatch(updateNote(sendData, noteId));

    setShowCreateDoc(false);
  };

  const fileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = _handleReaderLoaded;
    reader.readAsBinaryString(file);
  };

  const _handleReaderLoaded = (readerEvt) => {
    let content = containerRef.current.innerHTML;
    let binaryString = readerEvt.target.result;
    let imageBaseData = `data:image/png;base64,${btoa(binaryString)}`;

    content = content + `<img class="attach-img" src="${imageBaseData}" />`;
    setContent(content);
  };

  const fontTypeSet = (e, tagname, tagval) => {
    console.log(window.getSelection().getRangeAt(0));
    console.log(
      "==============",
      window.getSelection().getRangeAt(0).cloneContents()
    );
    let tagName = tagname;
    let tagVal = tagval;
    let content = containerRef.current.innerHTML;

    setFontVal(tagVal);
    setFontTag(tagName);
    setContent(content);

    if (tagname === "del") document.execCommand("strikeThrough", false, null);
    else if (tagname === "u") document.execCommand("underline", false, null);
  };

  useEffect(() => {
    setTitle(createTitle ? createTitle : "");
    setContent(propContent ? propContent : "");
  }, [createTitle, propContent]);

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
                  <i className="fa radius p-3 bg-primary fa-chevron-left"></i>
                </Link>
              </div>
              <div className="home-icon btn ">
                <Link to={"note"}>
                  <i className="fa p-3 radius bg-primary fa-th-list"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="title-area">
        <div className="container-fluid creates">
          <div className="row">
            <div className="title-area">
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
              <ContentEditable
                className="text-content select--highlight--active"
                html={content}
                disabled={false}
                // tagName="pre"
                innerRef={containerRef}
                // onKeyDown={changeDivValue}
                onChange={changeDivValue}
                // tagName="pre"
                // onBlur={sanitize}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className={
            pencilBar
              ? "color-area bg-light box-shadow border-0 rounded d-block"
              : "color-area bg-light box-shadow border-0 rounded"
          }
        >
          <div className="color-area-wrap p-1">
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
      <section>
        <div
          className={
            brashBar
              ? "brash-color-area bg-light box-shadow border-0 rounded d-block"
              : "brash-color-area bg-light box-shadow border-0 rounded"
          }
        >
          <div className="p-1">
            <div className="row justify-content-center p-3">
              <div className="col-md-6 p-0 w-50">
                <h6 className="p-2">Color</h6>
                <div className="p-1">
                  <div className="color-1 brash-rounded mt-2"></div>
                  <div className="color-2 brash-rounded mt-2"></div>
                  <div className="color-3 brash-rounded mt-2"></div>
                  <div className="color-4 brash-rounded mt-2"></div>
                  <div className="color-5 brash-rounded mt-2"></div>
                  <div className="color-6 brash-rounded mt-2"></div>
                  <div className="color-7 brash-rounded mt-2"></div>
                  <div className="color-8 brash-rounded mt-2"></div>
                  <div className="color-9 brash-rounded mt-2"></div>
                </div>
              </div>
              <div className="col-md-6 p-0 w-50">
                <h6 className="p-2">Size</h6>
                <div className="p-1">
                  <div className="size-1 brash-rounded brash-size-color mt-3"></div>
                  <div className="size-2 brash-rounded brash-size-color mt-3"></div>
                  <div className="size-3 brash-rounded brash-size-color mt-3"></div>
                  <div className="size-4 brash-rounded brash-size-color mt-3"></div>
                  <div className="size-5 brash-rounded brash-size-color mt-3"></div>
                  <div className="size-6 brash-rounded brash-size-color mt-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          fontTypeSelect
            ? "font-type-select bg-light box-shadow border-0 rounded d-block"
            : "font-type-select bg-light box-shadow border-0 rounded"
        }
      >
        <button
          className="font-type"
          onClick={(e) => fontTypeSet(e, "del", "Aa")}
        >
          <del>Aa</del>
        </button>
        <button
          className="font-type"
          onClick={(e) => fontTypeSet(e, "u", "Aa")}
        >
          <u>Aa</u>
        </button>
        <button
          className="font-type"
          onClick={(e) => fontTypeSet(e, "div", "aa")}
        >
          aa
        </button>
        <button
          className="font-type"
          onClick={(e) => fontTypeSet(e, "div", "AA")}
        >
          AA
        </button>
        <button
          className="font-type"
          onClick={(e) => fontTypeSet(e, "div", "Aa")}
        >
          Aa
        </button>
      </section>
      <section className="custom-footer bg-primary fixed-bottom">
        <div className="container-fluid">
          <div className="row py-2">
            <div className="col-8">
              <ul className="text-area d-flex flex-row mb-0 pt-2">
                <li className="txt-size text-white mt-2">
                  <span className="p-2">17</span>
                </li>
                <li
                  className="select-fnt text-white"
                  onClick={showFontTypeSelect}
                >
                  <span className="p-2">
                    {fontTag === "del" ? (
                      <del>{fontVal}</del>
                    ) : fontTag === "u" ? (
                      <u>{fontVal}</u>
                    ) : (
                      fontVal
                    )}
                  </span>
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
                  <i className="fa fa-pencil"></i>
                </div>
                <div
                  className="image-icon p-2 p-md-3"
                  style={{ cursor: "pointer" }}
                  onClick={showBrashBar}
                >
                  <i className="fa fa-paint-brush"></i>
                </div>
                <div
                  className="image-icon-3 p-2 p-md-3"
                  style={{ cursor: "pointer" }}
                  onClick={showImageBar}
                >
                  <i className="fa fa-image"></i>
                </div>
              </ul>
              <div className={imageBar ? "icon-wrap d-block" : "icon-wrap"}>
                <div
                  className="folder-icon mb-2 bg-primary box-shadow border-0 rounded-circle"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowCreateDoc(true);
                  }}
                >
                  <i className="fa fa-folder text-white"></i>
                </div>
                <div
                  className="folder-icon bg-primary box-shadow border-0 rounded-circle"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowFileUpload(true);
                  }}
                >
                  <i className="fa fa-camera text-white"></i>
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
        updateDoc={onUpdate}
        docContent={content}
        title={title}
        status={status}
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
