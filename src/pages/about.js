import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Work on impact driven software." />
          <meta name="keywords" content="I want to work for a good company" />
          <title>About</title>
        </Helmet>
      </HelmetProvider>
      <div className="about--wrapper">
        <div className="damiir--story">
          <p>
            A lot us aim to do impactfull work but how do we go about finding
            that workplace. We want to help you find the company where your
            values and worldview align. We started this because for us our jobs
            should be an opportunity to reduce suffering in the world where we
            can.
          </p>
        </div>
      </div>
    </div>
  );
};
