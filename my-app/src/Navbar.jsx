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
      <ul id ="list">
        <li id = "home">
          <Link className = "theLinks" to="/">Home</Link>
        </li>
        <li id = "recipes">
          <Link className = "recipeLinks" to="/recipes">Recipes</Link>
        </li>
        <li id = "foods">
          <Link className = "theLinks" id = "foodsLink"to="/space">MyFoods</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;