import React from 'react';
import DoEverything from '../components/DoEverything';

function Home() {
    return (
        <div id = "homePage">
            <div id = "uploadSlide">
                <h1 id="mainHeader">Upload your grocery receipts.</h1>
                <h3 id="subHeader">Build a library of the current food you have.</h3>
                <DoEverything/>
            </div>
        </div>

    );
}

export default Home;