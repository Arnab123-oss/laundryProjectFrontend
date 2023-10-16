import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h1>Clothing</h1>
          <button className="modal-close" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <button className="modal-save" onClick={handleClose}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
