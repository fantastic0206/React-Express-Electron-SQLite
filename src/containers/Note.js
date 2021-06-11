import React, { useEffect, useState } from "react";
import MbBars from "../components/MbBars";

import dotImage from "../assets/images/dot.png";
import { useDispatch, useSelector } from "react-redux";

import { getNotes, searchNotes } from "../actions/note";

const Plain = {
  light: "#f8f9fa",
  darkd: "#545454",
  gray: "#C7C7C7",
  dangr: "#FF9191",
  prime: "#9AD0FF",
  scs: "#A7F6CE",
  war: "#FFF29B",
  inf: "#FFBC9A",
  straw: "#FFABCA",
  inver: "#E0C5FF",
};

const Lined = {
  light: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px, #f8f9fa 0.9px)",
  darkd: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px, #545454 0.9px)",
  gray: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px, #C7C7C7 0.9px)",
  dangr: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px, #FF9191 0.9px)",
  prime: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px, #9AD0FF 0.9px)",
  scs: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px, #A7F6CE 0.9px)",
  war: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px, #FFF29B 0.9px)",
  inf: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px, #FFBC9A 0.9px)",
  straw: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px, #FFABCA 0.9px)",
  inver: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px, #E0C5FF 0.9px)",
};

const Grid = {
  light:
    "linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, #f8f9fa 0.9px",
  darkd:
    "linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, #545454 0.9px",
  gray: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, #C7C7C7 0.9px",
  dangr:
    "linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, #FF9191 0.9px",
  prime:
    "linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, #9AD0FF 0.9px",
  scs: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, #A7F6CE 0.9px",
  war: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, #FFF29B 0.9px",
  inf: "linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, #FFBC9A 0.9px",
  straw:
    "linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, #FFABCA 0.9px",
  inver:
    "linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, #E0C5FF 0.9px",
};

const Dotted = {
  light: "radial-gradient(#8c8787 1px, #f8f9fa 0.5px)",
  darks: "radial-gradient(#8c8787 1px, #545454 0.5px)",
  gray: "radial-gradient(#8c8787 1px, #C7C7C7 0.5px)",
  dangr: "radial-gradient(#8c8787 1px, #FF9191 0.5px)",
  prime: "radial-gradient(#8c8787 1px, #9AD0FF 0.5px)",
  scs: "radial-gradient(#8c8787 1px, #A7F6CE 0.5px)",
  war: "radial-gradient(#8c8787 1px, #FFF29B 0.5px)",
  inf: "radial-gradient(#8c8787 1px, #FFBC9A 0.5px)",
  straw: "radial-gradient(#8c8787 1px, #FFABCA 0.5px)",
  inver: "radial-gradient(#8c8787 1px, #E0C5FF 0.5px)",
};

const typeArr = {
  Lined: "lined-bg",
  Grid: "grid-bg",
  Dotted: "dott-bg",
};

function Note() {
  const dispatch = useDispatch();

  const [selectedData, setSelectedData] = useState();
  const [selectedGrid, setSelectedGrid] = useState("th-large");
  const [selectedNote, setSelectedNote] = useState("");

  const { noteData } = useSelector((state) => state.noteData);

  const selectNote = (data) => {
    setSelectedNote(data.note_id);
    setSelectedData(data);
  };

  const searchData = (e) => {
    dispatch(searchNotes(e.target.value));
  };

  const selectGrid = (data) => {
    setSelectedGrid(data);
  };

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="search-wrap">
            <div className="mb-search mb-4">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => searchData(e)}
              />
            </div>
            <div className="search-icon">
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-resize">
        {selectedGrid === "th-large" &&
          noteData.map((data, index) => {
            return (
              <div
                className={`col-xl-2 col-resize col-lg-4 col-sm-4 col-4 mt-3`}
                key={index}
                onClick={() => selectNote(data)}
              >
                <div
                  className={`note-hover p-2 p-md-3 rounded-bg ${
                    typeArr[data.papperType]
                  } ${data.note_id == selectedNote ? "note-active" : ""}`}
                  style={
                    data.papperType === "Plain"
                      ? { backgroundColor: Plain[data.papperColor] }
                      : data.papperType === "Lined"
                      ? { backgroundImage: Lined[data.papperColor] }
                      : data.papperType === "Grid"
                      ? { backgroundImage: Grid[data.papperColor] }
                      : { backgroundImage: Dotted[data.papperColor] }
                  }
                >
                  <div className="note-dot d-flex flex-row">
                    <div className="nt-head">
                      <h5 className="text-primary">{data.title}</h5>
                    </div>
                    <div className="nt-icon ms-auto">
                      <a>
                        <img className="" src={dotImage} alt="" />
                      </a>
                    </div>
                  </div>
                  <p
                    className="mb-0 note-content-th"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  ></p>
                </div>
              </div>
            );
          })}
        {selectedGrid === "th" &&
          noteData.map((data, index) => {
            return (
              <div
                className={`col-xl-2 col-lg-6 col-sm-6 col-6 up-wd col-resize mt-3`}
                key={index}
                onClick={() => selectNote(data)}
              >
                <div
                  className={`note-th note-hover p-2 p-md-3 rounded-bg ${
                    typeArr[data.papperType]
                  } ${data.note_id == selectedNote ? "note-active" : ""}`}
                  style={
                    data.papperType === "Plain"
                      ? { backgroundColor: Plain[data.papperColor] }
                      : data.papperType === "Lined"
                      ? { backgroundImage: Lined[data.papperColor] }
                      : data.papperType === "Grid"
                      ? { backgroundImage: Grid[data.papperColor] }
                      : { backgroundImage: Dotted[data.papperColor] }
                  }
                >
                  <div className="note-dot d-flex flex-row">
                    <div className="nt-head">
                      <h5 className="text-primary">{data.title}</h5>
                    </div>
                    <div className="nt-icon ms-auto">
                      <a>
                        <img className="" src={dotImage} alt="" />
                      </a>
                    </div>
                  </div>
                  <p
                    className="mb-0 note-content-th"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  ></p>
                </div>
              </div>
            );
          })}
        {selectedGrid === "th-list" &&
          noteData.map((data, index) => {
            return (
              <div
                className="col-xl-8 col-lg-8 col-sm-10 offset-sm-1 col-12 mt-3"
                key={index}
                onClick={() => selectNote(data)}
              >
                <div
                  className={`note-th note-hover p-3 rounded-bg ${
                    typeArr[data.papperType]
                  } ${data.note_id == selectedNote ? "note-active" : ""}`}
                  style={
                    data.papperType === "Plain"
                      ? { backgroundColor: Plain[data.papperColor] }
                      : data.papperType === "Lined"
                      ? { backgroundImage: Lined[data.papperColor] }
                      : data.papperType === "Grid"
                      ? { backgroundImage: Grid[data.papperColor] }
                      : { backgroundImage: Dotted[data.papperColor] }
                  }
                >
                  <div className="note-dot d-flex flex-row">
                    <div className="nt-head">
                      <h5 className="text-primary">{data.title}</h5>
                    </div>
                    <div className="nt-icon ms-auto">
                      <a href="#">
                        <img className="" src={dotImage} alt="" />
                      </a>
                    </div>
                  </div>
                  <p
                    className="mb-0 note-content-th"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  ></p>
                </div>
              </div>
            );
          })}
      </div>
      <MbBars
        selectedData={selectedData}
        selectGrid={selectGrid}
        selectedGrid={selectedGrid}
      />
    </div>
  );
}

export default Note;
