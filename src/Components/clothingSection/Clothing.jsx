import React, { useEffect, useState } from "react";
import "./Clothing.css";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";

const Clothing = () => {
  return (
    <div className="clothing-container">
      
      <div className="all-verity-box">
        <VerityBox heading="FOR WOMEN CLOTHING" />
        <VerityBox heading="FOR MEN CLOTHING" />
        <VerityBox heading="FOR BAG" />
      </div>
      <div className="all-verity-box">
        <VerityBox heading="FOR WOMEN CLOTHING" />
        <VerityBox heading="FOR MEN CLOTHING" />
        <VerityBox heading="FOR BAG" />
      </div>
    </div>
  );
};

const VerityBox = ({ heading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="clothing-box">
      <h1>{heading}</h1>
      <div className="clothing-box-action" onClick={openModal}>
        <AiOutlinePlus color="black" />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <div>
            <form className="clothing-from">
              <fieldset>
                <legend>
                  <span className="number">1</span> Clothing Type
                </legend>
                <label>Which type of clothing:</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Sharee or shirts or etc......"
                />
                <label>Brand Name:</label>
                <input
                  type="text"
                  id="mail"
                  name="user_email"
                  placeholder="ZARA or Gucci or Unknown......"
                />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="user_password" />
                <label>Age:</label>
                <input
                  type="radio"
                  id="under_13"
                  defaultValue="under_13"
                  name="user_age"
                />
                <label htmlFor="under_13" className="light">
                  Under 13
                </label>
                <br />
                <input
                  type="radio"
                  id="over_13"
                  defaultValue="over_13"
                  name="user_age"
                />
                <label htmlFor="over_13" className="light">
                  Over 13
                </label>
              </fieldset>
              <fieldset>
                <legend>
                  <span className="number">2</span> Describe Damages
                </legend>
                <label htmlFor="bio">Bio:</label>
                <textarea id="bio" name="user_bio" defaultValue={""} />
                <label htmlFor="job">Job Role:</label>
                <select id="job" name="user_job">
                  <optgroup label="Web">
                    <option value="frontend_developer">
                      Front-End Developer
                    </option>
                    <option value="php_developer">PHP Developer</option>
                    <option value="python_developer">Python Developer</option>
                    <option value="rails_developer">Rails Developer</option>
                    <option value="web_designer">Web Designer</option>
                    <option value="wordpress_developer">
                      Wordpress Developer
                    </option>
                  </optgroup>
                  <optgroup label="Mobile">
                    <option value="android_developer">Android Developer</option>
                    <option value="ios_developer">IOS Developer</option>
                    <option value="mobile_designer">Mobile Designer</option>
                  </optgroup>
                  <optgroup label="Business">
                    <option value="business_owner">Business Owner</option>
                    <option value="freelancer">Freelancer</option>
                  </optgroup>
                </select>
                <label>Interests:</label>
                <input
                  type="checkbox"
                  id="development"
                  defaultValue="interest_development"
                  name="user_interest"
                />
                <label className="light" htmlFor="development">
                  Development
                </label>
                <br />
                <input
                  type="checkbox"
                  id="design"
                  defaultValue="interest_design"
                  name="user_interest"
                />
                <label className="light" htmlFor="design">
                  Design
                </label>
                <br />
                <input
                  type="checkbox"
                  id="business"
                  defaultValue="interest_business"
                  name="user_interest"
                />
                <label className="light" htmlFor="business">
                  Business
                </label>
              </fieldset>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Clothing;
