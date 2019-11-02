import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "../styles/main.scss";
import hero from "../assets/img/swans.mp4";
import earth from "../assets/img/earth.gif";
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
              <video className="video--bg" autoPlay loop muted>
                <source src={hero} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="second--view  second--view-one">
            <h1>“Look for systems, not heroes.”</h1>
            <p className="qoute">
              ― Hans Rosling, Factfulness: Ten Reasons We're Wrong About the
              World—and Why Things Are Better Than You Think
            </p>
          </section>
          <section className="second--view second--view-two ">
            <div className="circle">
              <img src={earth} alt="earth" />
            </div>
            <div className="mission">
              <h3>Mission</h3>
              <p className="mission--text">
                A lot us want to do impactfull work but how do we go about that.
                We aim to help you find that company where your values and
                worldview align. We started this because for us our jobs should
                be an opportunity to make a good change.
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
            <div id="quiz--wrapper">
              <section id="quiz--mission"></section>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
