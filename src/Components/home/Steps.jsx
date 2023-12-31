import React from "react";
import "./steps.css";
import lwda from "../../asset/Pick up truck.gif";
import washdry from "../../asset/Laundry and dry cleaning.gif";
import iron from "../../asset/foldandiron.svg";
import delivery from "../../asset/Delivery.gif";

const Steps = () => {
  return (
    // <section className="steps">
    //   <div className="headings">
    //     <h2>HOW IT WORKS?</h2>
    //     <h1>Get it done in 4 steps</h1>
    //   </div>
    //   <div className="boxes">
    //     <Box number={1} heading="Pick up" icon={<img src={lwda} alt="Pick up"/> } />
    //     <Box number={2} heading="Wash & Dry" icon={<img src={washdry} alt="Pick up"/>} />
    //     <Box number={3} heading="Fold & Iron" icon={<img src={iron} alt="Pick up" />} />
    //     <Box number={4} heading="Delivery" icon={<img src={delivery} alt="Pick up"/>}/>

    //   </div>
    // </section>
    <section class="services">
    <div className="services-section">
        <h1>
          <u>What We Do</u>
        </h1>
    </div>
      <div class="s-box-container">
        <div class="s-box">

          <div class="bar"></div>
{/* 
          <img alt="1" src= "https://images.unsplash.com/photo-1469504512102-900f29606341?q=80&w=1825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}

          <h1>Clothes Cleaning</h1>

          <p>
            Track on your all daily expense and make your day to life easier.
          </p>

          <a class="s-btn" href="#">
            More
          </a>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          {/* <img alt="2" src="pexels-web-donut-19090.jpg" /> */}

          <h1>Clothes Ironing</h1>

          <p>Make a Budget That Fit Right With You And Can Do Most With It</p>

          <a class="s-btn" href="#">
            More
          </a>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          {/* <img alt="3" src="pexels-web-donut-19090.jpg" /> */}

          <h1>Clothes Stitching</h1>

          <p>
            We Store All Card Info And Money Safe To Make You Relax And Crazy
          </p>

          <a class="s-btn" href="#">
            More
          </a>
        </div>
      </div>

      <div class="s-box-container">
        <div class="s-box">
          <div class="bar"></div>

          {/* <img alt="1" src="pexels-web-donut-19090.jpg" /> */}

          <h1>Clothes Alteration</h1>

          <p>
            Track on your all daily expense and make your day to life easier.
          </p>

          <a class="s-btn" href="#">
            More
          </a>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          {/* <img alt="2" src="pexels-web-donut-19090.jpg" /> */}

          <h1>Home Cleaning</h1>

          <p>Make a Budget That Fit Right With You And Can Do Most With It</p>

          <a class="s-btn" href="#">
            More
          </a>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          {/* <img alt="3" src="pexels-web-donut-19090.jpg" /> */}

          <h1>Car Wash</h1>

          <p>
            We Store All Card Info And Money Safe To Make You Relax And Crazy
          </p>

          <a class="s-btn" href="#">
            More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Steps;

// const Box = ({ number, heading, icon }) => {
//   return (
//     <>
//       <div className="box">
//         <div className="box-icon abs">
//           <h4>{number}</h4>
//         </div>
//         <h3>{heading}</h3>
//         <div className="box-icon">{icon}</div>
//       </div>
//     </>
//   );
// };
