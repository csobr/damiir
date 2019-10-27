import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "../assets/styles/main.scss";
import hero from "../assets/img/hero.mp4";
import earth from "../assets/img/earth.gif";
import storyImg from "../assets/img/zipline.jpg";
import storyImg2 from "../assets/img/zipline.svg";
import Toggle from "../components/toggle.jsx";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>damiir</title>
          <meta name="description" content="sleep good at night" />
          <meta name="keywords" content="work for a good company" />
        </Helmet>
        <div className="home--wrapper">
          <div className="first--view">
            <div className="hero">
              <h1></h1>
              <video className="videoTag" autoPlay loop muted>
                <source src={hero} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="second--view  second--view-one">
            <h2>“Look for systems, not heroes.”</h2>
            <p className="qoute">
              ― Hans Rosling, Factfulness: Ten Reasons We're Wrong About the
              World—and Why Things Are Better Than You Think
            </p>
          </div>
          <div className="second--view second--view-two ">
            <img src={earth} alt="earth" />
            <div className="mission">
              <h3>Mission</h3>
              <p className="mission--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div className="third--view third--view-three ">
            <div className="story--month">
              <p className="story--month-feature">Company of the month</p>
              <h4> Zipline </h4> 
       
              <p className="story__company__name">
                Delivers medicine to those who need it most
              </p>
              <p className="story--company__text">
                Since then, we've built the world's fastest and most reliable
                delivery drone, the world's largest autonomous logistics
                network, and a truly amazing team. {"\n"}We design and test our
                technology in Half Moon Bay, California. We assemble the drones
                and the technology that powers our distribution centers in South
                San Francisco. We perform extensive flight testing in Davis,
                California. We operate distribution centers around the planet
                with teams of local operators.</p>
          
            </div>
            <div className="story--images">
              <img src={storyImg} alt="zipline" />
              <img src={storyImg2} alt="zipline" />
            </div>
          </div>
          <div className="fourth--view fourth--view-four">
            <h5>Select field</h5>
            <Toggle />
          </div>
        </div>
      </div>
    );
  }
}
