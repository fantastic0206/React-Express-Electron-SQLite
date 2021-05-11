import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Note from "../containers/Note";
import Create from "../containers/Create";

function Layout() {
  return (
    <Router>
      <Header />
      <section className="note-area" id="noteArea">
        <div className="container-fluid g-0  extra-mt">
          <div className="row">
            <div className="col-md-2 d-none d-xl-block">
              <Sidebar />
            </div>
            <div className="col-xl-10 col-12">
              <Switch>
                <Route path="/note" component={Note} />
                <Route path="/create" component={Create} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </Router>
  );
}

export default Layout;
