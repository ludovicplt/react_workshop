import logo from './logo.svg';
import './App.css';
import Navbar from './nav_bar';
import Home from './Home'
import Menu from './Menu'
import Contact from "./Contact"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Menu" component={Menu}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
