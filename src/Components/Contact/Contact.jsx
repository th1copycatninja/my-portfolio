import React, { useRef, useContext, useState } from "react";
import "./Contact.css";
import Mail from "../../Image/message.png";
import Address from "../../Image/address.png";
import Github from "../../Image/github.png";
import LinkedIn from "../../Image/linkedin.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../Context";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Contact() {
  //   const [fullName, setFullName] = useState("");
  //   const [subject, setSubject] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");
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
    onSubmit: (values) => {
      console.log("formik values", values);
    },
  });

  //   const handleSubmit = (e) => {
  //     console.log("formik values",formik.values);
  //     e.preventDefault();
  //     // emailjs.sendForm('service_dsq5txp', 'template_k9yxavn', formRef.current, 'user_xKCk8ezVwJzqp0ictUPBy')
  //     // .then((result) => {
  //     //     console.log(result.text);
  //     //     formRef.current.reset();
  //     //     alert("Thanks")
  //     // }, (error) => {
  //     //     console.log(error.text);
  //     // });
  //   };
  console.log("formik errors", formik.errors);
  return (
    <div className="c">
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
            <a
              className="c-info-item"
              href="https://github.com/govind1530"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="" className="c-icon" />
              GitHub
            </a>
            {/* </div> */}
            {/* <div className="c-info-item"> */}
            <a
              className="c-info-item"
              href="https://www.linkedin.com/in/govind-maheshwari-75ab32b3/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="" className="c-icon" />
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
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
