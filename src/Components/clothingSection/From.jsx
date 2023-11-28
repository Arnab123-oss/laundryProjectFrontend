import React from "react";
import "./from.css";
const From = ({setIsOpen}) => {
  function toggleFlipped(element) {
    element.classList.toggle("flipped");
  }
  const handleFormSubmit = () => {
    console.log('Submitted')
  }
  return (
    <div className="form-container" onClick={() => setIsOpen(false)}>
      <section>
        <div className="book" onClick={(event) => event.stopPropagation()}>
        <h1 className="close-button" onClick={() => setIsOpen(false)}>X</h1>
          <div className="pg pg1">
            <div style={{ marginLeft: "10px" }}>
              <form className="clothing-form">
                <label for="name">Which type of clothing:</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Sharee or shirts or etc......"
                />
                <label for="mail">Brand Name:</label>
                <input
                  type="text"
                  id="mail"
                  name="user_email"
                  placeholder="ZARA or Gucci or Unknown......"
                />
                <label for="password">Password:</label>
                <input type="password" id="password" name="user_password" />
              </form>
              <span style={{ marginRight: "330px" }}></span>
              <button
                className="flip-button"
                onClick={() => toggleFlipped(document.querySelector(".book"))}
              >
                <svg
                  width="39"
                  height="20"
                  viewBox="0 0 92 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M91 21C91.2985 20.7501 68.5 16 64 1M91 21C91 21 68.5 26.5 64 39M91 21H0"
                    stroke="#7e6d91"
                    stroke-width="7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="pg pg2">
            {" "}
            <div>
              <form className="clothing-form">
                <label for="name">Which type of clothing:</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Sharee or shirts or etc......"
                />
                <label for="mail">Brand Name:</label>
                <input
                  type="text"
                  id="mail"
                  name="user_email"
                  placeholder="ZARA or Gucci or Unknown......"
                />
                <label for="password">Password:</label>
                <input type="password" id="password" name="user_password" />
              </form>
              <button
                className="flip-button"
                onClick={() => toggleFlipped(document.querySelector(".book"))}
              >
                <svg
                  width="39"
                  height="20"
                  viewBox="0 0 92 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00269 19C0.704223 19.2499 23.5027 24 28.0027 39M1.00269 19C1.00269 19 23.5027 13.5 28.0027 1M1.00269 19L92.0027 19"
                    stroke="#7e6d91"
                    stroke-width="7"
                  />
                </svg>
              </button>
              <span style={{ marginRight: "260px" }}></span>
              <button className="flip-buttons" type="submit"  onClick={() => setIsOpen(false)}>
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default From;
