import React from 'react';
import './modal.css';

const Modal = ({ onClose, title, children }) => {
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
