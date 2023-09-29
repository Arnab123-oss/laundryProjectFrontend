import React from "react";
import "./home.css";
import Steps from "./Steps";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      {/* <section className="home">
        <div className="captions">
          <p className="caption-large">A better you start with clean clothes</p>
          <p className="caption-small">
            The main concept of MissEnough is quality, simplicity and
            accessibility.
          </p>
          <button>View More</button>
        </div>
      </section> */}

      <Carousel />
      <Steps />
    </>
  );
};

export default Home;
