import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import NotePapper from "../components/NotePapper";
import NoteColor from "../components/NoteColor";

function EditNote(props) {
  const history = useHistory();
  const { selectedData } = props.location.state;

  const [papperType, setPapperType] = useState("Plain");
  const [color, setColor] = useState("light");
  const [createTitle, setCreateTitle] = useState("");
  const [content, setContent] = useState("");
  const [pathImage, setPathImage] = useState();
  const [imageName, setImageName] = useState("");

  const [selectedType, setSelectedType] = useState("Plain");
  const [noteId, setNoteId] = useState();

  const setType = (type) => {
    setPapperType(type);
    setSelectedType(type);
  };

  const selectColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    setSelectedType(selectedData.papperType);
    setColor(selectedData.papperColor);
    setCreateTitle(selectedData.title);
    setContent(selectedData.content);
    setNoteId(selectedData.note_id);
    setPathImage(selectedData.imagePath);
    setImageName(selectedData.imageName);
  }, [selectedData]);

  return (
    <div className="container  ">
      <div className="row">
        <div className="col-xl-6">
          <div className="search-wrap">
            <div className="mb-search mb-2">
              <input
                type="text"
                placeholder="Write tittle here.."
                value={createTitle}
                onChange={(e) => {
                  setCreateTitle(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-5 d-none d-xl-block ">
          <Link to="/note">
            <div className="home-back btn home-xl-back p-3 radius bg-primary">
              <i className="fa text-white fa-th-list"></i>
            </div>
          </Link>
        </div>
      </div>
      <div className="row mt-4 mb-2">
        <div className="col">
          <h3 className="paper-heading">Choose paper</h3>
        </div>
      </div>
      <div className="row text-resize create-row">
        <NotePapper
          papperType="Plain"
          selectedType={setType}
          bodyClass={
            selectedType === "Plain"
              ? "create p-4 rounded-bg bg-light box-shadow extra-wd crp-wd divColor"
              : "create p-4 rounded-bg bg-light box-shadow extra-wd crp-wd"
          }
        />
        <NotePapper
          papperType="Lined"
          selectedType={setType}
          bodyClass={
            selectedType === "Lined"
              ? "create p-4 rounded-bg box-shadow lined-bg crp-wd divColor"
              : "create p-4 rounded-bg box-shadow lined-bg crp-wd"
          }
        />
        <NotePapper
          papperType="Grid"
          selectedType={setType}
          bodyClass={
            selectedType === "Grid"
              ? "create p-4 rounded-bg box-shadow grid-bg crp-wd divColor"
              : "create p-4 rounded-bg box-shadow grid-bg crp-wd"
          }
        />
        <NotePapper
          papperType="Dotted"
          selectedType={setType}
          bodyClass={
            selectedType === "Dotted"
              ? "create p-4 rounded-bg box-shadow dott-bg crp-wd divColor"
              : "create p-4 rounded-bg box-shadow dott-bg crp-wd"
          }
        />
      </div>
      <div className="row mt-4 mb-2">
        <div className="col">
          <h3 className="paper-heading">Choose colour</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="d-flex flex-row create-color justify-content-between">
            <NoteColor
              papperColor="light"
              selectedColor={selectColor}
              bodyClass={
                color === "light" ? "bg-light bg-wd divColor" : "bg-light bg-wd"
              }
            />
            <NoteColor
              papperColor="darkd"
              selectedColor={selectColor}
              bodyClass={
                color === "darkd" ? "bg-darkd bg-wd divColor" : "bg-darkd bg-wd"
              }
            />
            <NoteColor
              papperColor="gray"
              selectedColor={selectColor}
              bodyClass={
                color === "gray" ? "bg-gray bg-wd divColor" : "bg-gray bg-wd"
              }
            />
            <NoteColor
              papperColor="dangr"
              selectedColor={selectColor}
              bodyClass={
                color === "dangr" ? "bg-dangr bg-wd divColor" : "bg-dangr bg-wd"
              }
            />
            <NoteColor
              papperColor="prime"
              selectedColor={selectColor}
              bodyClass={
                color === "prime" ? "bg-prime bg-wd divColor" : "bg-prime bg-wd"
              }
            />
          </div>
          <div className="d-flex flex-row create-color justify-content-between mt-4 mb-0 mb-md-5">
            <NoteColor
              papperColor="scs"
              selectedColor={selectColor}
              bodyClass={
                color === "scs" ? "bg-scs bg-wd divColor" : "bg-scs bg-wd"
              }
            />
            <NoteColor
              papperColor="war"
              selectedColor={selectColor}
              bodyClass={
                color === "war" ? "bg-war bg-wd divColor" : "bg-war bg-wd"
              }
            />
            <NoteColor
              papperColor="inf"
              selectedColor={selectColor}
              bodyClass={
                color === "inf" ? "bg-inf bg-wd divColor" : "bg-inf bg-wd"
              }
            />
            <NoteColor
              papperColor="straw"
              selectedColor={selectColor}
              bodyClass={
                color === "straw" ? "bg-straw bg-wd divColor" : "bg-straw bg-wd"
              }
            />
            <NoteColor
              papperColor="inver"
              selectedColor={selectColor}
              bodyClass={
                color === "inver" ? "bg-inver bg-wd divColor" : "bg-inver bg-wd"
              }
            />
          </div>
        </div>
        <div className="col-lg-4 col-12 text-center mt-3 mt-lg-5">
          <div className="create-btn d-grid d-lg-inline mt-0 mt-lg-5">
            <Link
              to={{
                pathname: "/creates",
                state: {
                  papperType: selectedType,
                  papperColor: color,
                  createTitle: createTitle,
                  propContent: content,
                  status: "edit",
                  noteId: noteId,
                  pathImage: pathImage,
                  imageName: imageName,
                },
              }}
              className="text-white btn-res btn bg-primary "
            >
              Create <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNote;
