import React, { useState, useCallback, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import MainItemsContainer from "./MainItemsContainer";
import jquery from "jquery";
import "./App.css";
import CapaAlta from "./media/CAPAALTA.png";
import CapaBaixa from "./media/CAPABAIXA.png";
import downarrow from "./media/down-arrow-svgrepo-com.svg";
import alta1 from "./media/artigo1/LE_ALTO.png";
import alta2 from "./media/artigo1/LE_ALTO2.png";
import alta3 from "./media/artigo1/LE_ALTO3.png";
import alta4 from "./media/artigo1/LE_ALTO4.png";
import alta5 from "./media/artigo1/LE_ALTO5.png";
import alta6 from "./media/artigo1/LE_ALTO6.png";
import alta7 from "./media/artigo1/LE_ALTO7.png";
import alta8 from "./media/artigo1/LE_ALTO8.png";
import alta9 from "./media/artigo1/LE_ALTO9.png";
import alta10 from "./media/artigo1/LE_ALTO10.png";
import alta11 from "./media/artigo1/LE_ALTO11.png";
import alta12 from "./media/artigo1/LE_ALTO12.png";
import alta13 from "./media/artigo1/LE_ALTO13.png";
import alta14 from "./media/artigo1/LE_ALTO14.png";
import alta15 from "./media/artigo1/LE_ALTO15.png";
import alta16 from "./media/artigo1/LE_ALTO16.png";
import alta17 from "./media/artigo1/LE_ALTO17.png";
import alta18 from "./media/artigo1/LE_ALTO18.png";
import alta19 from "./media/artigo1/LE_ALTO19.png";
import alta20 from "./media/artigo1/LE_ALTO20.png";
import baixa1 from "./media/artigo2/titulo.png";
import baixa3 from "./media/artigo2/artigo2_final2.png";
import baixa4 from "./media/artigo2/artigo2_final3.png";
import baixa5 from "./media/artigo2/artigo2_final4.png";
import baixa6 from "./media/artigo2/artigo2_final5.png";
import baixa7 from "./media/artigo2/artigo2_final6.png";
import baixa8 from "./media/artigo2/artigo2_final7.png";
import baixa9 from "./media/artigo2/artigo2_final8.png";
import baixa10 from "./media/artigo2/artigo2_final9.png";
import baixa11 from "./media/artigo2/artigo2_final10.png";
import baixa12 from "./media/artigo2/artigo2_final11.png";
import baixa13 from "./media/artigo2/artigo2_final12.png";
import baixa14 from "./media/artigo2/artigo2_final13.png";
import baixa15 from "./media/artigo2/artigo2_final14.png";
import baixa16 from "./media/artigo2/artigo2_final15.png";
import baixa17 from "./media/artigo2/artigo2_final16.png";
import baixa18 from "./media/artigo2/artigo2_final17.png";
import baixa19 from "./media/artigo2/artigo2_final18.png";
import baixa20 from "./media/artigo2/artigo2_final19.png";
import baixa21 from "./media/artigo2/artigo2_final20.png";
import baixa22 from "./media/artigo2/artigo2_final21.png";
import baixa23 from "./media/artigo2/artigo2_final22.png";
import baixa24 from "./media/artigo2/artigo2_final23.png";
import baixa25 from "./media/artigo2/artigo2_final24.png";
import baixa26 from "./media/artigo2/artigo2_final25.png";
import altabaixa from "./media/LOGOS-23.png";
import revista from "./media/LOGOS-24.png";
import logo from "./media/LOGOS-25.png";
export default function App() {

  const section1 = useRef();
  const section2 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({
      behavior:
        "smooth"
    })
  }


  return (
    <div className="App">
      <div className="section one" ref={section1}>
      <div className="logoAB">
          <img alt="logoAB" id="logoAB" src={altabaixa} ></img>
        </div>
        <div className="logo">
          <img alt="logo" id="logo" src={logo} ></img>
        </div>
        <div className="textoRevista">
          <img alt="textoRevista" id="textoRevista" src={revista}></img>
        </div>
        

        <button id="botao" onClick={() => scrollTo(section2)}></button>

      </div>
      <div className="section two" ref={section2}>
        <button id="botao2" onClick={() => scrollTo(section1)}></button>
        <div class="column left">
        
          <img alt="capaAlta" id="slide" src={CapaAlta} />

          <div class="content">
            <img alt="alta1" id="imgContent" src={alta1}></img>
            <img alt="alta2" id="imgContent" src={alta2}></img>
            <img alt="alta3" id="imgContent" src={alta3}></img>
            <img alt="alta4" id="imgContent" src={alta4}></img>
            <img alt="alta5" id="imgContent" src={alta5}></img>
            <img alt="alta6" id="imgContent" src={alta6}></img>
            <img alt="alta7" id="imgContent" src={alta7}></img>
            <img alt="alta8" id="imgContent" src={alta8}></img>
            <img alt="alta9" id="imgContent" src={alta9}></img>
            <img alt="alta10" id="imgContent" src={alta10}></img>
            <div className="coisoetal"><img alt="alta11" id="imgContent" src={alta11}></img></div>

            <img alt="alta12" id="imgContent" src={alta12}></img>
            <img alt="alta13" id="imgContent" src={alta13}></img>
            <img alt="alta14" id="imgContent" src={alta14}></img>
            <img alt="alta15" id="imgContent" src={alta15}></img>
            <img alt="alta16" id="imgContent" src={alta16}></img>
            <img alt="alta17" id="imgContent" src={alta17}></img>
            <img alt="alta18" id="imgContent" src={alta18}></img>
            <img alt="alta19" id="imgContent" src={alta19}></img>
            <img alt="alta20" id="imgContent" src={alta20}></img>

          </div>
        </div>
        <div class="column right">
          <img alt="capaBaixa" id="slideBaixa" src={CapaBaixa} />
          <div class="content">
            <img alt="baixa1" id="imgContent" src={baixa1}></img>
            <img alt="baixa2" id="imgContent" src={baixa3}></img>
            <img alt="baixa3" id="imgContent" src={baixa4}></img>
            <img alt="baixa4" id="imgContent" src={baixa5}></img>
            <img alt="baixa5" id="imgContent" src={baixa6}></img>
            <img alt="baixa6" id="imgContent" src={baixa7}></img>
            <img alt="baixa7" id="imgContent" src={baixa8}></img>
            <img alt="baixa8" id="imgContent" src={baixa9}></img>
            <img alt="baixa9" id="imgContent" src={baixa10}></img>
            <img alt="baixa10" id="imgContent" src={baixa11}></img>
            <img alt="baixa11" id="imgContent" src={baixa12}></img>
            <img alt="baixa12" id="imgContent" src={baixa13}></img>
            <img alt="baixa13" id="imgContent" src={baixa14}></img>
            <img alt="baixa14" id="imgContent" src={baixa15}></img>
            <img alt="baixa15" id="imgContent" src={baixa16}></img>
            <img alt="baixa16" id="imgContent" src={baixa17}></img>
            <img alt="baixa17" id="imgContent" src={baixa18}></img>
            <img alt="baixa18" id="imgContent" src={baixa19}></img>
            <img alt="baixa19" id="imgContent" src={baixa20}></img>
            <img alt="baixa20" id="imgContent" src={baixa21}></img>
            <img alt="baixa21" id="imgContent" src={baixa22}></img>
            <img alt="baixa22" id="imgContent" src={baixa23}></img>
            <img alt="baixa23" id="imgContent" src={baixa24}></img>
            <img alt="baixa25" id="imgContent" src={baixa25}></img>
            <img alt="baixa26" id="imgContent" src={baixa26}></img>
          </div>
        </div>
      </div>

    </div>

  );
}