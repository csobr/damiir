import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../styles/main.scss";
import sphere from "../assets/img/sphere.gif";
import storyImg1 from "../assets/img/zipline.svg";
import storyImg2 from "../assets/img/zipline.jpg";
import Toggle from "../components/toggle.jsx";
import Newsletter from "../components/newsletter.jsx";

export default () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Work on impact driven software." />
          <meta name="keywords" content=" I want to work for a good company" />
          <title>damiir</title>
        </Helmet>
      </HelmetProvider>
      <div className="home--wrapper">
        <section className="first--view">
          <div className="hero">
            <h1>Don't cause harm with your line of work.</h1>
          </div>
        </section>

        <section className="second--view ">
          <div className="circle">
            <img src={sphere} alt="sphere" />
            <p className="credit"> By Shurly</p>
          </div>

          <div className="mission">
            <h3>...</h3>
            <p className="mission--text">
              A lot us aim to do impactfull work but how do we go about finding
              that workplace. We want to help you find the company where your
              values and worldview align. We started this because for us our
              jobs should be an opportunity to reduce suffering in the world
              where we can.
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
              delivery drone, the world's largest autonomous logistics network,
              and a truly amazing team. {"\n"}We design and test our technology
              in Half Moon Bay, California. We assemble the drones and the
              technology that powers our distribution centers in South San
              Francisco. We perform extensive flight testing in Davis,
              California. We operate distribution centers around the planet with
              teams of local operators.
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
        </section>
      </div>
      <Newsletter />
    </div>
  );
};
