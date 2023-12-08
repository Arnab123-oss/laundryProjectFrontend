import React, { useEffect, useRef, useState } from "react";
import "./carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      img: " https://images.unsplash.com/photo-1604335398549-1b80aadd00a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      title: "LAUNDRY SERVICES",
      subtitle: "We Clean anything & Everything",
      link: "/clothes",
      btnname:"Book now"
    },
    {
      img: "https://images.unsplash.com/photo-1607729715312-5ace53575064?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HOME SERVICES",
      subtitle: "We Clean anything & Everything",
      link: "/bwda",
      btnname:"Book now"
    },
    {
      img: "https://images.unsplash.com/photo-1598453527201-a9b82a34f7d9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "CAR CLEANING",
      subtitle: "We Clean anything & Everything",
      link: "/cwda",
      btnname:"Book now"
    },
    {
      img: "https://unsplash.it/900?random",
      title: "TAILORING SERVICES",
      subtitle: "Stitch your own comfort",
      link: "/fwda",
      btnname:"Book now"
    },
    {
      img: "https://unsplash.it/1200?random",
      title: "PROPS",
      subtitle: "BUY YOUR OWN COLLECTION",
      link: "/vwda",
      btnname:"Buy now"
    },
  ];
  const trackRef = useRef(null);

  useEffect(() => {
    changeSlide(currIndex, slides.length);
  }, [currIndex, slides.length]);

  const changeSlide = (index, length) => {
    const track = trackRef.current;
    if (index >= length) {
      setCurrIndex(0);
    } else if (index < 0) {
      setCurrIndex(length - 1);
    } else {
      track.style.transform = `translateX(-${100 * index}vw)`;
    }
  };

  const readHandler = (link) => {
    navigate(link);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-btn">
        <FontAwesomeIcon
          icon={faCaretLeft}
          onClick={() => setCurrIndex((prevIndex) => prevIndex - 1)}
        />
        <FontAwesomeIcon
          icon={faCaretRight}
          onClick={() => setCurrIndex((prevIndex) => prevIndex + 1)}
        />
      </div>
      <div className="carousel-track" ref={trackRef}>
        {slides.map((item, index) => (
          <div
            className="carousel-slide"
            style={{ background: `url(${item.img}) center/cover` }}
          >
            <div className="carousel-curve"></div>
            <div className="content">
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
              {/*<button onClick={() => readHandler(item.link)}>Read More</button>*/}

              <button
                className="c-button c-button--gooey"
                onClick={() => readHandler(item.link)}
              >
              {item.btnname}
                <div className="c-button__blobs">
                  <div />
                  <div />
                  <div />
                </div>
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                style={{ display: "block", height: 0, width: 0 }}
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation={10}
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel__indicators">
        {slides.map((slide, index) => (
          <label
            key={index}
            className={`carousel__indicator ${
              currIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
