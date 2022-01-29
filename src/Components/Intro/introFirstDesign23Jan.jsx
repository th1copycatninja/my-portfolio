import React from 'react';
import './intro.css';
function Intro() {
  return <div className='intro'>
      <div className='intro-left'>
          <div className='intro-left-wrapper'>
              <h2 className='intro-intro '>Hi! 🤚  My name is</h2>
              <h1 className='intro-name'>Govind Maheshwari</h1>
          <div className='intro-title'>
                    <div className="intro-title-wrapper">
                        <div className="intro-title-item">React Native Developer</div>
                        <div className="intro-title-item">React.js Developer</div>
                    </div>
          </div>
          <p className="intro-desc"> 
            I am a software developer I am here to help to develop software that is going to meet individual client needs. I am improving my skills day by day to a more clean and optimized code. I believe in constant learning and exploring new things. a bit about me, I like to travel and i am big foodie
          </p>
          </div>
      </div>
      <div className='intro-right'>
        <div className="intro-image-bg"></div>
        {/* <img className="intro-me" src={Me} alt=""/> */}
      </div>
  </div>;
}

export default Intro;
