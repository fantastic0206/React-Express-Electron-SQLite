import React from "react";

const logoImg = require("../assets/images/logo.png");

function Header() {
  return (
    <nav className="header navbar navbar-light fixed-top">
      <div className="container-fluid">
        <div className="logo-area d-flex flex-row">
          <div className="navbar-bars">
            <i className="fa fa-bars"></i>
          </div>
          <a className="navbar-brand text-center" href="">
            <img className="img-fluid logo" src={logoImg} alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
