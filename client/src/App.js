import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <NavbarBrand>React + Google Books</NavbarBrand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/saved">Saved</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
            <Route path="" component={NoMatch} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
