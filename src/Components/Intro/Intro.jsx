import React from "react";
import "./intro.css";
import ReactPlayer from "react-player";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <section className="intro-left-wrapper">
          <p>Hello, I'm</p>
          <p className="intro-name">Govind Maheshwari</p>
          <h2>Software Developer</h2>

          <div className="intro-image" alt="cool cool cool">
            <ReactPlayer
              className="react-player fixed-bottom"
              url="videos/doug.mp4"
              width="100%"
              height="100%"
              controls={false}
              playing={true}
              loop={true}
              autoplay={true}
              muted={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
