import React from "react";
import { Link } from 'react-router-dom'

const noteImg = require("../assets/images/note.png");
const importantImg = require("../assets/images/important.png");
const createImg = require("../assets/images/create.png");
const categoryImg = require("../assets/images/category.png");

function Sidebar() {
  return (
    <div className="sidebar d-none d-xl-block">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <img className="menu-icon img-fluid" src={noteImg} alt="" />
          <Link to={"/note"}>Notes</Link>
        </li>
        <li className="sidebar-item">
          <img className="menu-icon img-fluid" src={importantImg} alt="" />
          <a href="#">Important</a>
        </li>
        <li className="sidebar-item">
          <img className="menu-icon img-fluid" src={createImg} alt="" />
          <Link to={"/create"}>Create New</Link>
        </li>
        <li className="sidebar-item">
          <img className="menu-icon img-fluid" src={categoryImg} alt="" />
          <a href="#">Catagories</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
