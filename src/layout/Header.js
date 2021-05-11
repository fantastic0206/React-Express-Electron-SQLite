import React from "react";

const logoImg = require("../assets/images/logo.png");
const logoImg2 = require("../assets/images/logo2.png");

function Header() {
  return (
    <div>
      <nav className="navbar  navbar-light bg-primary fixed-top d-none d-xl-block">
        <div className="container-fluid">
          <div className="logo-area d-flex flex-row">
            <div className="navbar-bars">
              <i className="fa fa-bars"></i>
            </div>
            <a className="navbar-brand text-center " href="">
              <img className="img-fluid logo" src={logoImg} alt="" />
            </a>
          </div>
        </div>
      </nav>
      <header className=" mb-nav  nav-bg  d-block d-xl-none">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 text-center">
              <img className="logo" src={logoImg2} alt="" />
            </div>
            <div className="col-12">
              <div className="d-flex flex-row p-3 ">
                <div className="mb-bars text-white">
                  <i className="fa fa-bars "></i>
                </div>
                <div className="mb-search-item">
                  <div className="mb-search2">
                    <input type="text" placeholder="Search..." />
                  </div>
                  <div className="mb-search-icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
