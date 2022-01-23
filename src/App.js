import { useContext } from "react";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Toggle from "./Components/Toggle/Toggle.jsx";
import { ThemeContext } from "./Context";
function App() {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div
      style={{
        backgroundColor: darkmode ? "#222" : "#fff",
        color: darkmode && "#fff",
      }}
    >
      <Toggle />
      <Intro />
      <Contact />
    </div>
  );
}

export default App;
