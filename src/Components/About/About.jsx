import React from "react";
import { Link } from "react-router-dom";
// import { RiFindReplaceLine } from "react-icons/ri";
import "./About.css";
import about1 from "../../asset/about1.png";
import about2 from "../../asset/about2.png";
import about3 from "../../asset/about3.png";
import about4 from "../../asset/about4.png";

const About = () => {
  return (
    <section className="about">
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
    </section>
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
