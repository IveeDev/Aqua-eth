import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import Modal from "../../components/modal/Modal";
import logo from "../../assets/images/logo.png";
import Overlay from "../../components/overlay/Overlay";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleConnectWallet = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className={`nav__links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "link")}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/launchpad"
            className={({ isActive }) => (isActive ? "active" : "link")}
            onClick={closeMenu}
          >
            Lauchpad
          </NavLink>
          <NavLink
            to="/airdrop"
            className={({ isActive }) => (isActive ? "active" : "link")}
            onClick={closeMenu}
          >
            Airdrop
          </NavLink>
          <NavLink
            to="/claims"
            className={({ isActive }) => (isActive ? "active" : "link")}
            onClick={closeMenu}
          >
            Claims
          </NavLink>
        </div>

        <div className="nav__btn">
          <button onClick={handleConnectWallet}>Connect Wallet</button>
        </div>

        <div className="burger" onClick={handleClick}>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
      </div>

      {isModalOpen && (
        <>
          <Overlay />
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
      )}
    </nav>
  );
};

export default NavBar;
