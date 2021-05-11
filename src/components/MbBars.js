import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

function MbBars(props) {
  const { selectedData, selectGrid, selectedGrid } = props;

  const createIcon = () => {
    $(".icon-group").fadeToggle("slow");
  };

  const rotate = (e) => {
    $(e.target).toggleClass("down");
  };

  return (
    <section className="side-icon-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div
              className="creat-icon bg-primary box-shadow border-0 text-center rounded-circle"
              onClick={createIcon}
            >
              <i className="fa rotate fa-plus p-4" onClick={rotate}></i>
            </div>
          </div>
        </div>
        <div className="icon-group ">
          <div className="image-icon box-shadow p-3 bg-light mb-2 rounded-circle">
            <Link 
              to="/create"
              data-bs-target="#exampleModal"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              {" "}
              <i className="fa fa-image pr-0"></i>
            </Link>
          </div>
          <div className="image-icon box-shadow p-3 bg-light mb-2 rounded-circle">
            <a href="create.html">
              <i className="fa fa-paint-brush pr-0"></i>
            </a>
          </div>
          <div className="image-icon box-shadow p-3 bg-light rounded-circle">
            <Link
              to={{
                pathname: "/editnote",
                state: { selectedData: selectedData },
              }}
            >
              <i className="fa fa-pencil"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="right-bar-area" id="right-bar">
        <div className="bar-wrap bg-primary box-shadow border-0 ">
          <div className="bar-item ">
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                selectGrid("th");
              }}
            >
              <i
                className={
                  selectedGrid === "th" ? "fa fa-th active" : "fa fa-th"
                }
              ></i>
            </a>
          </div>
          <div className="bar-item ">
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                selectGrid("th-large");
              }}
            >
              <i
                className={
                  selectedGrid === "th-large"
                    ? "fa active fa-th-large"
                    : "fa fa-th-large"
                }
              ></i>
            </a>
          </div>
          <div className="bar-item border-bottom-0">
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                selectGrid("th-list");
              }}
            >
              <i
                className={
                  selectedGrid === "th-list"
                    ? "fa fa-bars active"
                    : "fa fa-bars"
                }
              ></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MbBars;
