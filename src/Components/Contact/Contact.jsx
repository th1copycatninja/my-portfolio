import React, { useRef,useContext } from 'react';
import "./Contact.css"
import Mail from "../../Image/message.png";
import Address from "../../Image/address.png";
import Github from "../../Image/github.png";
import LinkedIn from "../../Image/linkedin.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../Context';
export default function Contact() {
    const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;

    const formRef = useRef();

    const handleSubmit = (e) =>{
            e.preventDefault();
            emailjs.sendForm('service_dsq5txp', 'template_k9yxavn', formRef.current, 'user_xKCk8ezVwJzqp0ictUPBy')
            .then((result) => {
                console.log(result.text);
                formRef.current.reset();
                alert("Thanks")
            }, (error) => {
                console.log(error.text);
            });
    }
  return <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                <div className="c-info">
                    <div className="c-info-item">
                      
                        <img src={Mail} alt="" className="c-icon" />
                        govind302034@gmail.com
                        
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Jaipur,Rajasthan,India
                    </div>
                    {/* <div className="c-info-item"> */}
                        <a className="c-info-item"  href="https://github.com/govind1530" target="_blank" rel="noreferrer">
                        <img src={Github} alt="" className="c-icon" />
                        GitHub
                        </a>
                    {/* </div> */}
                    {/* <div className="c-info-item"> */}
                    <a className="c-info-item"  href="https://www.linkedin.com/in/govind-maheshwari-75ab32b3/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="" className="c-icon" />
                        LinkedIn
                        </a>
                    {/* </div> */}
                </div>
                </div>
                <div className="c-right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkmode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor:darkmode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor:darkmode && "#333"}}   type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor:darkmode && "#333"}} name="message"  rows="5" placeholder="Message"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
  </div>;
}
