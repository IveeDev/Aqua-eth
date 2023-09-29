import React from "react";
import "./Modal.scss";
import trust from "../../assets/images/vertical_blue.png";
import meta from "../../assets/images/MetaMask_Fox.svg.png";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2 className="text-primary">Connect Wallet</h2>
        <button className="connect-wallets connect-wallets--trust">
          <img src={trust} alt="trust" />
          <h2>Trust Wallet</h2>
        </button>

        <button className="connect-wallets connect-wallets--meta">
          <img src={meta} alt="trust" />
          <h2>MetaMasks</h2>
        </button>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
