import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import companies from "../pages/data/companiesList.json";
export default class Companies extends Component {
  renderCardData() {
    return companies.map((company, index) => {
      const { id, url, logo, description } = company;
      return (
        <div key={id}>
          <div className="card">
            <button id="company--popup">
              <span></span>
            </button>
            <div className="circle--companay">
              <img
                src={logo}
                className="company--logo"
                alt="company logo"
              ></img>
            </div>
            <div className="company--text company--text__preview">
              {description}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <HelmetProvider>
          <Helmet>
            <meta
              name="description"
              content="Work on impact driven software."
            />
            <meta name="keywords" content="Mission driven companies." />
            <title>Companies</title>
          </Helmet>
        </HelmetProvider>
        <div className="companies--wrapper">
          <div className="cards">{this.renderCardData()}</div>
        </div>
      </div>
    );
  }
}
