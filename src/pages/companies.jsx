import React, { Component } from "react";
import companies from "../pages/data/companiesList.json";
export default class Companies extends Component {
                 renderCardData() {
            return companies.map((company, index) => {
              const { id, name, url, logo, description } = company;
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
                     <div className="companies--wrapper">
                       <div className = "cards">
                             {this.renderCardData()}
                       </div>
                       </div>
           


                   );
                 }
               }
