
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
     <div class="area" >  
     <ul class="circles">
   
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
    </ul>
       
 </div>  
  </React.StrictMode>,
  rootElement
);