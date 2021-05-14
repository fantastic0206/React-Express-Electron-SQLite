import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            <div className="container-fluid g-0 extra-mt">
              <div className="row">
                <Sidebar />
                <div className="note-content">
                  <Switch>
                    <Route exact path="/" component={Note} />
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
