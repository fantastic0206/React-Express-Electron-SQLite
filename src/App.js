import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/style.css";
import { getTestData } from "./actions/test";
import "font-awesome/css/font-awesome.min.css";

import Note from "./containers/Note";
import Create from "./containers/Create";
import Creates from "./containers/Creates";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import EditNote from "./containers/EditNote";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/creates" component={Creates} />
        <Route path="/">
          <Header />
          <section className="note-area" id="noteArea">
            <div className="container-fluid g-0  extra-mt">
              <div className="row">
                <div className="col-md-2 d-none d-xl-block">
                  <Sidebar />
                </div>
                <div className="col-xl-10 col-12">
                  <Switch>
                    <Route exact path="/note" component={Note} />
                    <Route exact path="/create" component={Create} />
                    <Route exact path="/editnote" component={EditNote} />
                  </Switch>
                </div>
              </div>
            </div>
          </section>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
