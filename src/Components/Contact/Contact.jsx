import React, { useRef, useContext, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import {toast } from 'react-toastify';
import { Oval } from  'react-loader-spinner';
import { BsGithub,BsLinkedin,BsTwitter ,BsFillHouseFill,BsMailbox2} from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
export default function Contact() {
  
    const [isLoader,setLoader] = useState(false)
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;

  const formRef = useRef();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      subject: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(30, "Full Name must be less than 30 charters")
        .required("Full name is required"),
      subject: Yup.string()
        .max(15, "Subject must be less than 15 charters")
        .required("subject is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("email is required"),
      message: Yup.string()
        .max(70, "Message must be less than 70 characters")
        .required("message is required"),
    }),
    onSubmit: (values,{resetForm}) => {
      console.log("formik values", values);
      handleSubmit(values,resetForm)
    },
  });

    const handleSubmit = (e,resetForm) => {
     setLoader(true)
      try{
      emailjs.send(process.env.REACT_APP_Email_Js_ServiceId,
         process.env.REACT_APP_Email_Js_TemplateId,
          e,
           process.env.REACT_APP_Email_Js_UserId)
      .then((result) => {
          console.log(result);
          if(result.status === 200){
            toast.info('Thank you for contacting me i will be back to you soon.', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          }
          resetForm()
          setLoader(false)
      }, (error) => {
        setLoader(false)
          console.log(error);
      });
    }
    catch (error) {
      console.log(error)
    }
    };
 
  return (
    <div className="c">
      {/* <div className="c-bg"></div> */}
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-info">
            <div className="c-info-item">
              <Icon as={BsMailbox2} alt="mail" className="c-icon" />
              govind302034@gmail.com
            </div>
            <div className="c-info-item">
              <Icon as={BsFillHouseFill} alt="home" className="c-icon" />
              Jaipur,Rajasthan,India
            </div>
            {/* <div className="c-info-item"> */}
            <a
              className="c-info-item"
              href="https://github.com/govind1530"
              target="_blank"
              rel="noreferrer"
              style={{ color:darkmode ?"#fff" :"#0284c7"}}
            >
              <Icon  as={BsGithub} alt="github" className="c-icon" />
          
              GitHub
            </a>
            <a
              className="c-info-item"
              href="https://www.linkedin.com/in/govind-maheshwari-75ab32b3/"
              target="_blank"
              rel="noreferrer"
              style={{ color:darkmode ?"#fff" :"#0284c7"}}
            >
              <Icon as={BsLinkedin} alt="linkedin" className="c-icon" />
              LinkedIn
            </a>
            {/* </div> */}
          </div>
        </div>
        <div className="c-right">
          <form ref={formRef} onSubmit={formik.handleSubmit}>
            <div
              className="c-p-container"
              data-error={
                formik.touched.fullName && formik.errors.fullName
                  ? formik.errors.fullName
                  : null
              }
            >
              <input
                style={{ backgroundColor: darkmode && "#333" }}
                onChange={formik.handleChange}
                value={formik.values.fullName}
                id="fullName"
                type="text"
                placeholder="Name"
                name="fullName"
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className="c-p-container"
              data-error={
                formik.touched.subject && formik.errors.subject
                  ? formik.errors.subject
                  : null
              }
            >
              <input
                style={{ backgroundColor: darkmode && "#333" }}
                onChange={formik.handleChange}
                value={formik.values.subject}
                id="subject"
                type="text"
                placeholder="Subject"
                name="subject"
                onBlur={formik.handleBlur}
              />
            </div>
            {/* {formik.touched.subject && formik.errors.subject ? (
              <p className="c-p-container">{formik.errors.subject}</p>
            ) : null} */}
            <div
              className="c-p-container"
              data-error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            >
              <input
                style={{ backgroundColor: darkmode && "#333" }}
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                onBlur={formik.handleBlur}
              />
            </div>
            {/* {formik.touched.email && formik.errors.email ? (
              <p className="..c-p-container">{formik.errors.email}</p>
            ) : null} */}
            <div
              className="c-p-container"
              data-error={
                formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : null
              }
            >
              <textarea
                style={{ backgroundColor: darkmode && "#333" }}
                onChange={formik.handleChange}
                value={formik.values.message}
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            {isLoader
            ?
            <div className="loader-button">
                <Oval color="#00BFFF" height={20} width={20} />
            </div>
            :
            // <button>Submit</button>
            <button   className="submit-button">
               <p style={{color:darkmode ? "#fff":"#0284c7"}}>Submit</p>
            </button>
            }
           
          </form>
        </div>
      </div>
    </div>
  );
}
