import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './navbar.css';
import logo from './images/logo.png';

function Navbar() {
  return (
    <nav>
      <div className="logo-image">
            <img id = "logoSize"src={logo} class="img-fluid"></img>
      </div>
      <div class="title">
            <h1>Fridge Space</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/space">MySpace</Link>
        </li>
        <li id = "recipes">
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/recipes">MyAccount</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;