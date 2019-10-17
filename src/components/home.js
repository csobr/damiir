import React, { Component } from "react";
import sample from "../img/impact-hero.mp4";
import Globe from "./globe";

export default class Home extends Component {
  render() {
    return (
        <div className ="first--view">
      <div className="hero">
        <video className="videoTag" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>{" "}
        </div>      
         <Globe />
        <div className = "second--view">
        <h2>“Look for systems, not heroes.”</h2>
<p>― Hans Rosling, Factfulness: Ten Reasons We're Wrong About the World—and Why Things Are Better Than You Think</p>
 
        </div>
      </div>
    );
  }
}
