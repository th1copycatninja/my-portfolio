import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./Context";
import ReactGA from 'react-ga'
ReactGA.initialize("UA-196802944-1")

ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(
  <BrowserRouter >
  {/* <React.StrictMode> */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  {/* </React.StrictMode> */}
  </BrowserRouter>,
  document.getElementById("root")
);
