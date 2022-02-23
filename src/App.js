import { useContext } from "react";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Toggle from "./Components/Toggle/Toggle.jsx";
import NavBar from "./Components/NavBar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeContext } from "./Context";
import Project from "./Components/MyProject/Project";
function App() {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div
      style={{
        backgroundColor: darkmode ? "#222" : "#fff",
        color: darkmode ? "#fff" : "#0284c7",
      }}
    >
      <Toggle />
      <NavBar />
      <Intro />
      <Project/>
      <Contact />
    </div>
    // <>
    // <Project/>
    // </>
  );
}

export default App;
