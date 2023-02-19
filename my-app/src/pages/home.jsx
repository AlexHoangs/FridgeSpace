import React from 'react';
import DoEverything from '../components/DoEverything';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './../navbar.css';

function Home() {
    return (
        <div id = "homePage">
            <div id = "block">
                <div id = "uploadSlide">
                    <h1 id="mainHeader">Upload your grocery receipts.</h1>
                    <h3 id="subHeader">Build a library of the current food you have.</h3>
                    <li id = "foods">
                        <Link className = "theLinks" id = "foodsLink"to="/space">Next</Link>
                    </li>
                </div>
                <div id = "phone"> <DoEverything/></div>
            </div> 
        </div>

    );
}

export default Home;