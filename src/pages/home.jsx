import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../styles/main.scss";
import fun from "../assets/img/town.gif";
import storyImg from "../assets/img/quote-Jennifer.png";
import Toggle from "../components/toggle.jsx";

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
            <h1>
              “Be kind, for whenever kindness becomes part of something, it
              beautifies it. Whenever it is taken from something, it leaves it
              tarnished.”
            </h1>
            <p className="credit"> Prophet Muhammad (peace be upon him)</p>
          </div>
        </section>

        <section className="second--view ">
          <div className="mission--image">
            <img src={fun} alt="Amir B Jahanbin work" />
            <p> By Amir B Jahanbin</p>
          </div>
          <div className="mission">
            <h2>...</h2>
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
            <h3> Be My Eyes</h3>
            <p className="story__company__name">
              Is a free mobile app with one main goal: to make the world more
              accessible for blind and low-vision people.
            </p>
            <p className="story--company__text">
              The app connects blind and low-vision individuals with sighted
              volunteers and companies from all over the world through a live
              video call. Since we launched in January 2015, more than 2,000,000
              volunteers have signed up to assist blind and low-vision users. Be
              My Eyes users can request assistance in over 180 languages making
              the app the biggest online community for blind and low-vision
              people as well as one of the largest micro-volunteering platforms
              in the world! Every day, volunteers sign onto Be My Eyes to lend
              their sight to blind and low-vision individuals to tackle
              challenges and solve problems together.
            </p>
          </div>
          <div className="story--images">
            <img src={storyImg} alt="company of the month" />
          </div>
        </section>
        <section className="fourth--view fourth--view-four">
          <h5>Select field</h5>
          <Toggle />
        </section>
      </div>
    </div>
  );
};
