import React from "react";
import NavBar from "../NavBar/NavBar";
import "./intro.css";
export default function Intro() {
  return (
    <div className="intro">
      {/* <NavBar/> */}
      <div className="intro-left">
        <section className="intro-left-wrapper">
          <p>Hello, I'm</p>
          <p className="intro-name">Govind Maheshwari</p>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <p className="intro-title-item">React Native Developer</p>
              <p className="intro-title-item">React.js Developer</p>
            </div>
          </div>
          <a className="intro-button-resume">
            Download Resume   
          </a>
        </section>
      </div>
      <div className="intro-right">
      <div className="intro-image-bg"></div>
      </div>
    </div>
  );
}
