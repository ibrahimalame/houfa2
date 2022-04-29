import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
/* import 'semantic-ui-css/semantic.min.css'*/

/* Fontawesome icones  */
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
/* BootStrap 5.1  */
import  '../node_modules/bootstrap/dist/css/bootstrap.css'
import  '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {format} from "date-fns";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
