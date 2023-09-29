import React from "react";
import ethereum from "../../assets/images/ethereum.png";
import bnb from "../../assets/images/bnb.png";
import dash from "../../assets/images/dash.png";
import l from "../../assets/images/l.png";
import air from "../../assets/images/air.png";
import polygon from "../../assets/images/polygon.png";
import trust from "../../assets/images/trust.png";
import crossChain from "../../assets/images/cross-chain.png";
import "./BlockChains.scss";

const BlockChains = () => {
  return (
    <section className="blockchain">
      <div className="container">
        <h1>Supported BlockChains</h1>
        <div className="blockchain__icons">
          <img src={ethereum} alt="ethereum" />
          <img src={bnb} alt="bnb" />
          <img src={dash} alt="dash" />
          <img src={l} alt="l" />
          <img src={air} alt="empty" />
          <img src={polygon} alt="polygon" />
        </div>

        <div className="row">
          <div className="col col--1">
            <img src={trust} alt="trust" />
            <div className="text-box">
              <h2>Transparency and trust</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                dolore alias, quidem placeat odit dolores facere ipsam tenetur,
                corporis error sequi illum amet! Accusamus quo laudantium ipsam
                perspiciatis sequi unde!
              </p>
            </div>
          </div>

          <div className="col col--2">
            <img src={crossChain} alt="cross-chain" />
            <div className="text-box">
              <h2>Cross-chain Technology</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                dolore alias, quidem placeat odit dolores facere ipsam tenetur,
                corporis error sequi illum amet! Accusamus quo laudantium ipsam
                perspiciatis sequi unde!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockChains;
