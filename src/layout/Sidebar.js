import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const noteImg = require("../assets/images/note.png");
const importantImg = require("../assets/images/important.png");
const createImg = require("../assets/images/create.png");
const categoryImg = require("../assets/images/category.png");

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function Sidebar(props) {
  const history = useHistory();

  const [selectItem, setSelectItem] = useState("/note");
  const [showSide, setShowSide] = useState(false);
  const width = useWindowSize();

  const goPage = (pageName) => {
    history.push(pageName);
    setSelectItem(pageName);
  };

  const hideSide = () => {
    console.log("fsafdsf");
  }

  useEffect(() => {
    setSelectItem(window.location.pathname);
  }, [window.location]);

  useEffect(() => {
    setShowSide(!showSide)
  }, [props.showSideBar]);

  return (
    <div className={width > 900 ? `sidebar d-block` : showSide ? `sidebar d-none` : `sidebar d-block`}>
      <ul className="sidebar-nav">
        <li
          className={
            selectItem === "/note"
              ? "sidebar-item sidebar-item-active"
              : "sidebar-item"
          }
          onClick={() => goPage("/note")}
        >
          <img className="menu-icon img-fluid" src={noteImg} alt="" />
          <a
            className={
              selectItem === "/note"
                ? "sidebar-item-font-active"
                : "sidebar-item-font"
            }
          >
            Notes
          </a>
        </li>
        <li
          className={
            selectItem === "/important"
              ? "sidebar-item sidebar-item-active"
              : "sidebar-item"
          }
          onClick={() => goPage("/important")}
        >
          <img className="menu-icon img-fluid" src={importantImg} alt="" />
          <a
            className={
              selectItem === "/important"
                ? "sidebar-item-font-active"
                : "sidebar-item-font"
            }
          >
            Important
          </a>
        </li>
        <li
          className={
            selectItem === "/create"
              ? "sidebar-item sidebar-item-active"
              : "sidebar-item"
          }
          onClick={() => goPage("/create")}
        >
          <img className="menu-icon img-fluid" src={createImg} alt="" />
          <a
            className={
              selectItem === "/create"
                ? "sidebar-item-font-active"
                : "sidebar-item-font"
            }
          >
            Create New
          </a>
        </li>
        <li
          className={
            selectItem === "/catagory"
              ? "sidebar-item sidebar-item-active"
              : "sidebar-item"
          }
          onClick={() => goPage("/catagory")}
        >
          <img className="menu-icon img-fluid" src={categoryImg} alt="" />
          <a
            className={
              selectItem === "/catagory"
                ? "sidebar-item-font-active"
                : "sidebar-item-font"
            }
          >
            Catagories
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
