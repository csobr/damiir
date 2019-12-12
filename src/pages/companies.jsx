import React from "react";
import Karma from "../assets/companies/karma/karma.png";

export default () => {
  return (
    <div className="companies--wrapper">
      <div className="cards">
        <div className="card">
          <button id="company--popup">
            <span></span>
          </button>
          <div className="circle">
            <img src={Karma} className="company--logo" alt="company logo"></img>
          </div>
          <div className="company--text company--text__preview">
            Karma is the award-winning food app for buying delicious surplus
            food, at half the usual price. Simple and convenient, Karma
            highlights surplus food in your local area to buy, collect and
            enjoy.
          </div>
        </div>
      </div>
    </div>
  );
};
