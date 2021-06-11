import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

import Note from "./containers/Note";
import Create from "./containers/Create";
import Creates from "./containers/Creates";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import EditNote from "./containers/EditNote";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const showSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  const hideSide = () => {
    if (showSideBar === true) setShowSideBar(false);
  };

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/creates" component={Creates} />
        <Route path="/">
          <Header showSidebar={showSidebar} />
          <section className="note-area" id="noteArea">
            <div className="container-fluid g-0 extra-mt">
              <div className="row">
                <Sidebar showSideBar={showSideBar} />
                <div className="note-content" onClick={hideSide}>
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
    </HashRouter>
  );
}

export default App;
