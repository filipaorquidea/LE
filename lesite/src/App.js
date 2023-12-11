import React, {useState, useCallback, useEffect, useRef} from "react";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import MainItemsContainer from "./MainItemsContainer";
import jquery from "jquery";
import "./App.css";
import CapaAlta from "./media/CAPAALTA.png";
import CapaBaixa from "./media/CAPABAIXA.png";
import downarrow from "./media/down-arrow-svgrepo-com.svg";

export default function App() {
  
  const section1 = useRef();
  const section2 = useRef();
  function scrollTo(section){
    section.current.scrollIntoView({behavior:
    "smooth" })
  }


  return (
    <div className="App">
      

      <div className="section" ref={section1}>
        <div class="column left">

          <img id="slide" src={CapaAlta} />

          <div class="content">
          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</div>

        </div>

        <div class="column right">
          <img id="slideBaixa" src={CapaBaixa} />
          <div class="content">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</div>
        </div>

        <button></button>
        
      </div>
      <div className="section" ref={section2}>
        <text>AAAAAAAAAAA</text>
      </div>
      
    </div>
    
  );
}