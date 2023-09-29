import React from "react";
import "./HomePage.scss";
import logo from "../../assets/images/logo.png";
import BlockChains from "../../components/blockchains/BlockChains";
import Launch from "../../components/launch/Launch";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="col col--1">
            <h1>Empower your Project With Aquapad</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam atque excepturi fugiat itaque, quaerat quibusdam culpa
              harum qui doloremque neque amet dolorum reprehenderit, facilis
              aspernatur consectetur illum, similique aut ea?
            </p>
            <button className="hero-btn">Launch App</button>
          </div>

          <div className="col col--2">
            <img src={logo} alt="hero-img" />
          </div>
        </div>
      </div>
      {/* Supported BlockChain */}
      <BlockChains />

      {/* Launch section */}
      <Launch />
    </>
  );
};

export default HomePage;
