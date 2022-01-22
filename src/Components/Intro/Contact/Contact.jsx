import React, { useRef,useState } from 'react';
import "./Contact.css"
import Mail from "../../../Image/message.png";
import Address from "../../../Image/address.png";
import Github from "../../../Image/github.png";
import LinkedIn from "../../../Image/linkedin.png";
import emailjs from '@emailjs/browser';
export default function Contact() {
    const formRef = useRef();

    // const [name,setName] = useState('');
    // const [subject,setSubject] = useState('');
    // const [email,setEmail] = useState('');
    // const [message,setMessage] = useState('');
    const handleSubmit = (e) =>{
            e.preventDefault();
            emailjs.sendForm('service_dsq5txp', 'template_k9yxavn', formRef.current, 'user_xKCk8ezVwJzqp0ictUPBy')
            .then((result) => {
                console.log(result.text);
                formRef.current.reset();
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
                    <div className="c-info-item">
                        <img src={Github} alt="" className="c-icon" />
                        GitHub
                    </div>
                    <div className="c-info-item">
                        <img src={LinkedIn} alt="" className="c-icon" />
                        LinkedIn
                    </div>
                </div>
                </div>
                <div className="c-right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input   type="text" placeholder="Email" name="user_email"/>
                        <textarea name="message"  rows="5" placeholder="Message"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
  </div>;
}
