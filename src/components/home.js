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
        </video>
        </div>      
    
        <div className = "second--view  second--view--one">
        <h2>“Look for systems, not heroes.”</h2>
<p className = "qoute">― Hans Rosling, Factfulness: Ten Reasons We're Wrong About the World—and Why Things Are Better Than You Think</p></div>
  <div className = "second--view second--view--two ">
  {/* <Globe />  */}
  <span className = "circle"></span>
<div className = "mission">  
<h3>Mission</h3>

        <p className = "mission--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        </div>
      </div>
    );
  }
}
