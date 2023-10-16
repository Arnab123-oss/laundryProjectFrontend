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
        <div className="modal-Box">
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.ghjjjjjjjjjjjjjjjjjjjjjjjjj</p>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p> <h2>Modal Content</h2>
            <p>This is the content of the modal.</p> <h2>Modal Content</h2>
            <p>This is the content of the modal.</p> <h2>Modal Content</h2>
            <p>This is the content of the modal.</p> <h2>Modal Content</h2>
            <p>This is the content of the modal.</p> <h2>Modal Content</h2>
            <p>This is the content of the modal.</p> <h2>Modal Content</h2>
            <p>This is the content of the modal.</p> <h2>Modal Content</h2>
            <p>This is the content of the modal.</p> <h2>Modal Content</h2>
  
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Clothing;
