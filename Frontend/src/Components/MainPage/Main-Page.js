import React from "react";

import "./Main-Page.css";
import Navbar from "../Navbar/Navbar";

import mainPagePic from "../../images/main-page-pic.jpg";

function App() {
  return (
    <div className="mainPage">
      <div className="mainPage-container">
        <Navbar />
        <div className="main-page-content-container">
          <div style={{ textAlign: "center" }}>
            <img
              className="mainPagePic"
              src={mainPagePic}
              alt="Girl learning using laptop"
            />
          </div>
          <div className="main-page-content">
            <p>
              <span>ONLINE</span>
              <span>EXAMINATION</span>
              <span>SYSTEM</span>
            </p>
            <button className="mainButton">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
