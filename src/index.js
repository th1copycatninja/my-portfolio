import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./Context";
import {ColorModeScript,ChakraProvider } from '@chakra-ui/react'
import ChakraApp from './Chakra_App';
import theme from "./New_Design_With_Chakra/theme"
import ReactGA from 'react-ga'
ReactGA.initialize("UA-196802944-1")

ReactGA.pageview(window.location.pathname + window.location.search);
//With Out Chakra Ui Design
// ReactDOM.render(
//   <BrowserRouter >
//   {/* <React.StrictMode> */}
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   {/* </React.StrictMode> */}
//   </BrowserRouter>,
//   document.getElementById("root")
// );
ReactDOM.render(
<ChakraProvider>
<ColorModeScript initialColorMode={theme.config.initialColorMode} />

    <ChakraApp/>
    </ChakraProvider>
,document.getElementById("root"))
