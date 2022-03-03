import { useContext } from "react";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/intro";
import Toggle from "./Components/Toggle/Toggle.jsx";
import NavBar from "./Components/NavBar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ThemeContext } from "./Context";
import Project from "./Components/MyProject/Project";
import {Routes,Route} from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
function App() {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div
      style={{
        backgroundColor: darkmode ? "#242B2E" : "#fff",
        color: darkmode ? "#fff" : "#0284c7",
      }}
    >
      {/* <NavBar />
      <Routes>
      <Route path="/" element={<Intro/>}/>
     
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes> */}
      <Toggle />
      <NavBar />
      <Intro />
      {/* <Project/> */}
      <Contact />
      <Footer/>
      {/* <ToastContainer/>
       <ToastContainer/> */}
    </div>
  );
}

export default App;
