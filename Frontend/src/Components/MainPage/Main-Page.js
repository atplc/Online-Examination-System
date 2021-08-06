import React from "react";

import "./Main-Page.css";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../Navbar/Navbar-Mobile/NavbarMobile";
import MainButton from "../Reusable/Main-Button/MainButton";

import mainPagePic from "../../images/main-page-pic.jpg";

function App() {
  return (
    <div className="mainPage">
      <div className="mobileNavbar">
        <MobileNavbar />
      </div>

      <div className="mainPage-container">
        <Navbar />
        <div className="main-page-content-container">
          <div style={{ textAlign: "center" }}>
            <img
              className="mainPagePic"
              src={mainPagePic}
              alt="Student learning using laptop"
            />
          </div>
          <div className="main-page-content">
            <p>
              <span>ONLINE</span>
              <span>EXAMINATION</span>
              <span>SYSTEM</span>
            </p>
            <div className="learnMore-container">
              <MainButton name={"Learn More"} />
            </div>
          </div>
        </div>
        <div className="mobileLearnMore">
          <MainButton name={"Learn More"} />
        </div>
      </div>
    </div>
  );
}

export default App;
