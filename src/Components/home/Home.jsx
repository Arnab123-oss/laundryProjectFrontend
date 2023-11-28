import React from "react";
import "./home.css";
import Steps from "./Steps";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <Carousel />

      <Steps />
      <div className="review-section">
        <div className="review-border">
        <div className="review-line"></div>
          <h1>
            <u>Reviews </u>
          </h1>
          <div className="review-line"></div>
        </div>

        <div className="reviews">
          <div class="card">
            <div class="card__content">
              <div class="card__image">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="card image"
                />
              </div>
              <span class="card__name">
                <b>
                  <u>David Murphy</u>
                </b>
              </span>
              <p class="card__text">
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                veritatis labore provident non tempora odio est sunt, ipsum "
              </p>
            </div>
          </div>
          <div class="card">
            {/* <div class="card swiper-slide"> */}

            <div class="card__content">
              <div class="card__image">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="card image"
                />
              </div>
              <span class="card__name">
                <b>
                  <u>David Murphy</u>
                </b>
              </span>
              <p class="card__text">
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                veritatis labore provident non tempora odio est sunt, ipsum "
              </p>
            </div>
            {/* </div> */}
          </div>
          <div class="card">
            <div class="card__content">
              <div class="card__image">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="card image"
                />
              </div>
              <span class="card__name">
                <b>
                  <u>David Murphy</u>
                </b>
              </span>
              <p class="card__text">
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                veritatis labore provident non tempora odio est sunt, ipsum "
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card__content">
              <div class="card__image">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="card image"
                />
              </div>
              <span class="card__name">
                <b>
                  <u>David Murphy</u>
                </b>
              </span>
              <p class="card__text">
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                veritatis labore provident non tempora odio est sunt, ipsum "
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card__content">
              <div class="card__image">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="card image"
                />
              </div>
              <span class="card__name">
                <b>
                  <u>David Murphy</u>
                </b>
              </span>
              <p class="card__text">
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                veritatis labore provident non tempora odio est sunt, ipsum "
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
