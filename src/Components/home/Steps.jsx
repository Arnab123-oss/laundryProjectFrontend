import React from "react";
import "./steps.css";
import lwda from "../../asset/pin.png"
import washdry from "../../asset/washdry.png"
 import iron from "../../asset/iron.png"
 import delivery from "../../asset/delivery.png"

const Steps = () => {
  return (
    <section className="steps">
      <div className="headings">
        <h2>HOW IT WORKS?</h2>
        <h1>Get it done in 4 steps</h1>
      </div>
      <div className="boxes">
        <Box number={1} heading="Pick up" icon={<img src={lwda} alt="Pick up"/> } />
        <Box number={2} heading="Wash & Dry" icon={<img src={washdry} alt="Pick up"/>} />
        <Box number={3} heading="Fold & Iron" icon={<img src={iron} alt="Pick up" />} />
        <Box number={4} heading="Delivery" icon={<img src={delivery} alt="Pick up"/>}/>
        
      </div>
    </section>
  );
};

export default Steps;

const Box = ({ number, heading, icon }) => {
  return (
    <>
      <div className="box">
        <div className="box-icon abs">
          <h4>{number}</h4>
        </div>
        <h3>{heading}</h3>
        <div className="box-icon">{icon}</div>
      </div>
    </>
  );
};
