import React, {useState, useCallback, useEffect} from "react";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import MainItemsContainer from "./MainItemsContainer";
import jquery from "jquery";
import "./App.css";
import CapaAlta from "./media/CAPAALTA.png";
import CapaBaixa from "./media/CAPABAIXA.png";

export default function App() {
  const [deltaY, setDeltaY] = useState(0)
  const [maxDelta, setMaxDelta] = useState(0)

  

  const scrollHandler = useCallback(event => {
    setDeltaY(currentDeltaY => {
      let newDeltaY = currentDeltaY + event.deltaY*0.5;

      newDeltaY = Math.max(0, newDeltaY);
      newDeltaY = Math.min(maxDelta, newDeltaY);

      return newDeltaY;
    });
  }, [maxDelta])

  useEffect(() => {
    window.addEventListener("wheel", scrollHandler);

    const maxDelta = jquery(".container-content").height() - window.innerHeight;

    setMaxDelta(maxDelta);

    return () => {
      window.removeEventListener("wheel", scrollHandler);
    }
  }, [scrollHandler])

  let style_first = {
    transform: `translateY(-${maxDelta - deltaY}px)`
  };

  let style_second = {
    transform: `translateY(-${deltaY}px)`
  };


  return (
    <div className="App">
      

      
      <div class="column left">

        <img id="slide" src={CapaAlta} />
      
        <div class="content">
          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</div>
        
      </div>
        
      <div class="column right">
      <img id="slideBaixa" src={CapaBaixa} />
        <div class="content">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</div>
      </div>
      
    </div>
    
  );
}