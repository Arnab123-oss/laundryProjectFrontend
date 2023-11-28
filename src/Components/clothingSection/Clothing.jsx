import React, { useEffect, useState } from "react";
import "./Clothing.css";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import wash from "../../asset/washing-banner-removebg-preview.png";
import lundry from "../../asset/image-processing unscreen.gif";
import From from "./From";

const Clothing = () => {
  const VerityBox = ({ heading }) => {
    return (
      <div class="wash-card">
        <div class="text">
          <span>{heading}</span>
          <p class="subtitle">Vivamus nisi purus</p>
        </div>
        <div class="icons">
          <button class="btn" onClick={setIsOpen}>
            <svg
              width="50"
              height="20"
              viewBox="0 0 92 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91 21C91.2985 20.7501 68.5 16 64 1M91 21C91 21 68.5 26.5 64 39M91 21H0"
                stroke="#01195A"
                stroke-width="6"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="clothing-container">
      <div className="banner">
        <img src={wash} />
      </div>
      <div className="all-verity-box">
        <VerityBox heading="Dry Cleaning" />
        <VerityBox heading="Premium laundry" />
        <VerityBox heading="Shoe cleaning" />
      </div>
      <div className="all-verity-box">
        <VerityBox heading="Steam ironing" />
        <VerityBox heading="Bag cleaning" />
      </div>
      {isOpen && <From setIsOpen={setIsOpen}/>}
    </div>
  );
  
};

export default Clothing;
