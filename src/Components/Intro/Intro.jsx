import React from 'react'
import "./intro.css"
import Cool from '../../Image/doug.gif'
export default function Intro() {
  return (
    <div  className="intro">
        <div className="intro-left">
        <section className="intro-left-wrapper">
          <p>Hello, I'm</p>
          <p className="intro-name">Govind Maheshwari</p>
            <h2>Software Developer</h2>
            
                <img  className="intro-image"  alt="cool cool cool" src={require("../../Image/doug.gif")}/>
          
        </section>
      </div>
        </div>
  )
}
