import React from "react";
import { Link } from "react-router-dom";
// import { RiFindReplaceLine } from "react-icons/ri";
import "./About.css";
import me from "../../asset/cutecat.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="choseUsSection">
        <h1>why Choose Us?</h1>
      </div>
    <banner />
    </section>
  );
};



export default About;


const banner = () => {
    return (
      <>
        <div className="box">
          <div className="box-icon abs">
            <h4>hgfhuygdf</h4>
          </div>
          <h3>jkhnsdjk</h3>
          <div className="box-icon">{me}</div>
        </div>
      </>
    );
  };