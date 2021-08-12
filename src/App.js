import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route path="*" component={NoMatch} />
      </div>
    </Router>
  );
}

export default App;
