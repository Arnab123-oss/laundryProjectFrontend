import React, { useEffect, useState } from "react";
import "./Clothing.css";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";

const Clothing = () => {
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
    <div className="clothing-container">
      <div className="clothing-box">
        <div className="clothing-box-action" onClick={openModal}>
          <AiOutlinePlus color="black" />
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <form className="modal-Box">
            <label>
              <textarea type="text" placeholder="Comments" />
            </label>
            <label>
              <input type="text" placeholder="Password" />
            </label>
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>

            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>

            <label>
              <input type="radio" name="gender" value="other" /> Other
            </label>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Clothing;
