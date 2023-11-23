import React, { useEffect, useState } from "react";
import "./Clothing.css";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import wash from "../../asset/washing-banner-removebg-preview.png";
import lundry from "../../asset/image-processing unscreen.gif"; 


const Clothing = () => {
  return (
    <div className="clothing-container">
      <div className="banner">
          <img src={wash}/>
      </div>
      <div className="all-verity-box">
        <VerityBox heading="FOR WOMEN CLOTHING" />
        <VerityBox heading="FOR MEN CLOTHING" />
        <VerityBox heading="FOR BAG" />
      </div>
      <div className="all-verity-box">
        <VerityBox heading="FOR WOMEN CLOTHING" />
        <VerityBox heading="FOR MEN CLOTHING" />
        {/* <VerityBox heading="FOR BAG" /> */}
      </div>
    </div>
  );
};

const VerityBox = ({ heading }) => {
  
 return(
  <div>
    <div class="clothing-card">
      <div className="clothing-card-pic">

      </div>
      <div>

      </div>
    </div>
  </div>
 )
 
};

export default Clothing;
