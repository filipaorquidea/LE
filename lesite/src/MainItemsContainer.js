import React from "react";
import {useState} from "react";

import Draggable from "react-draggable";


import { useNavigate } from "react-router-dom";


export default function MainItemsContainer(props){
  let isDragging = false;
  const navigate = useNavigate();

  const [modalWarning, setModalW] = useState(true);
  const [modalAbout, setModalAb] = useState(false);
  const [modalContacts, setModal] = useState(false);

  const toggleModalW = () => {
    if(!isDragging){
      setModalW(false);
    }
  }
  const toggleModalAb = () => {
    if(!isDragging){
      setModalAb(!modalAbout);
    }
  }

  const toggleModal = () => {
    if(!isDragging){
      setModal(!modalContacts);
    }
      
  }

  function onDrag(e) {
    console.log("onDrag");
    isDragging = true;
  }

  function onStop(e) {
    console.log("onStop");
    setTimeout(() => (isDragging = false), 0);
  }

  function onClickArt(e) {
    if (!isDragging) {
      navigate("/art")
    }
  }
  

  return (
      <div className="main_items_container">
        <section className="main_items_container_child">
          <div className="container-content left"  style={props.styleFirst}>
          <div className="container-content-block">
              1
            </div>
            <div className="container-content-block">
              2
            </div>
            <div className="container-content-block">
              3
            </div>
            <div className="container-content-block">
              4
            </div>
            
              
          </div>
        </section>
        <section className="main_items_container_child">
          <div className="container-content right" style={props.styleSecond}>
          <div className="container-content-block">
              1
            </div>
            <div className="container-content-block">
              2
            </div>
            <div className="container-content-block">
              3
            </div>
            <div className="container-content-block">
              4
            </div>
            
            
          </div>
        </section>
        <div className="Container" >
        <div className="Alta">
            <text> Alta</text>
          </div>
          <div className="Baixa">
            <text>Baixa</text>
          </div>
        </div>
        </div>
  )
}
