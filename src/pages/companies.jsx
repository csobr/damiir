import React, { Component } from "react";
import data from "../pages/data/companiesList.json";
export default class Companies extends Component {
  render() {
  return (
    <div className="companies--wrapper">
      {data.map((company, index) => {
        return (
          <div key={index}> 
        <div className="cards">
          <div className="card">
            <button id="company--popup">
              <span></span>
            </button>

            <div className="circle--companay">
              <img
                src={company.logo}
                className="company--logo"
                alt="company logo"
              ></img>
            </div>
            <div className="company--text company--text__preview">{company.description}
            </div>
          </div>
            </div>
            </div>
      )})};
    </div>
  );
  }
  }
