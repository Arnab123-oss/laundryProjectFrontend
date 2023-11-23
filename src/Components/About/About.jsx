import React from "react";
import { Link } from "react-router-dom";
// import { RiFindReplaceLine } from "react-icons/ri";
import "./About.css";
import about1 from "../../asset/about1.png";
import about2 from "../../asset/about2.png";
import about3 from "../../asset/about3.png";
import about4 from "../../asset/about4.png";

import pickup from "../../asset/Laundry-basket.gif";
import wash from "../../asset/Laundry-wash.gif";
import iron from "../../asset/Laundry-iron.gif";
import delivery from "../../asset/Laundry-purple-top.gif";

const About = () => {
  return (
    <div className="about-container">
        <div className="about">
      <div className="choseUsSection">
        <p>Why Choose Us?</p>
      </div>
      <div className="about-box-container">
        <AboutBox
          icon={<img src={about1} alt="Pick up" />}
          text="Explore our carefully curated selection of sustainable products, each
          designed to reduce your carbon footprint"
          heading="Sustainable Products"
        />
        <AboutBox
          icon={<img src={about2} alt="Pick up" />}
          text="Make conscious choices with our 
         eco-friendly products, knowing 
         that your purchases promote ethical 
         sourcing and responsible 
         manufacturing practices."
          heading="Affordable pricing"
        />
        <AboutBox
          icon={<img src={about3} alt="Pick up" />}
          text="Invest in long-lasting and reliable 
        products that meet our stringent 
        quality standards, ensuring your 
        satisfaction and the longevity of 
        your purchases."
          heading="High-Quality Selection"
        />
        <AboutBox
          icon={<img src={about4} alt="Pick up" />}
          text="Our sustainable packaging ensures 
        that your orders arrive safely 
        while minimizing their impact on 
        the planet."
          heading="Sustainable Packaging"
        />
      </div>
    </div>
    <div className="process">
    <div className="how-we-work">
          <h2>How We Work</h2>
      </div>
      <div className="process-animation">
      <img src={pickup}/>
        <img src={wash}/>
        <img src={iron}/>
        <img src={delivery}/> 
      </div>
     <div>

     </div>
    </div>
    </div>

  );
};

const AboutBox = ({ icon, text, heading }) => {
  return (
    <div className="about-box">
      <div className="about-iconBox">{icon}</div>
      <div className="about-box-text">
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default About;
