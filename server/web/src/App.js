import logo from './logo.svg';
import './App.css';
import { baseUrl } from "./core"
import axios from 'axios';
import { useState, useEffect, useRef } from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';



import Splash from "./components/splashScreen/index"
import Login from "./components/login/index"
import Signup from "./components/signup/index"
import Dashboard from "./components/dashboard/index"
import Profile from "./components/profile/index"
import LiveSocket from "./components/live-socket/index";
import LiveAdmin from "./components/live-admin/index";

import { GlobalContext } from './context/Context';
import { useContext } from "react";





function App() {

  let history = useHistory();
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#"> Cricket app </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => { history.push("/") }}>Scoreboard</Nav.Link>
            <Nav.Link onClick={() => { history.push("/admin") }}>Dashboard</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Switch>
      <Route exact path="/" component={LiveSocket} />
      <Route path="/admin" component={LiveAdmin} />

      <Redirect to="/" />
    </Switch>
  </>
  );
}

export default App;
