import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "../styles/main.scss";
import hero from "../assets/img/darkwater.gif";
import sphere from "../assets/img/sphere.gif";
import storyImg1 from "../assets/img/zipline.svg";
import storyImg2 from "../assets/img/zipline.jpg";
import Toggle from "../components/toggle.jsx";
import "../components/quiz.jsx";
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
          <section className="first--view">
            <div className="hero">
              {/* <video className="video--bg" autoPlay loop muted>
                <source src={hero} type="video/mp4" />
              </video> */}
              <img src={hero} className="hero--bg" alt ="hero"></img>
              <div className="hero--text">
              <h1>“Look for systems, not heroes.”</h1>
              <p className="qoute">
                ― Hans Rosling, Factfulness: Ten Reasons We're Wrong About the
                World—and Why Things Are Better Than You Think
              </p>
              </div>
            </div>
          </section>

         
          <section className="second--view ">
            <div className="circle">
              <img src={sphere} alt="sphere" />
           <p className = "credit"> By Shurly</p>
            </div>   
            
            <div className="mission">
              <h3>Why?</h3>
              <p className="mission--text">
                A lot us want to do impactfull work but how do we go about that.
                We aim to help you find the company where your values and
                worldview align. We started this because for us our jobs should
                be an opportunity to reduce suffering in the world where we can.
              </p>
            </div>
          </section>
          <section className="third--view third--view-three ">
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
                with teams of local operators.
              </p>
            </div>
            <div className="story--images">
              <img src={storyImg1} alt="zipline" />
              <img src={storyImg2} alt="zipline" />
            </div>
          </section>
          <section className="fourth--view fourth--view-four">
            <h5>Select field</h5>
            <Toggle />
             <div className="quiz--wrapper">
              <section id="quiz--mission"></section>
            </div> 
          </section>
        </div>
      </div>
    );
  }
}
