import React, { useState } from "react";

export default () => {
  const [showField, setShowField] = useState(false);
  return (
    <div className="company--selection">
      <div className="select--field">
        <label for="healthcare" className="select--item select--item-green">
          Healthcare
          <input
            type="button"
            id="healthcare"
            onClick={() => setShowField(!showField)}
          />
        </label>

        <label for="security" className="select--item select--item-pink">
          Security
        </label>
        <input
          type="button"
          id="security"
          onClick={() => setShowField(!showField)}
        />

        <label for="enviroment" className="select--item select--item-green">
          Enviroment
        </label>
        <input
          type="button"
          id="enviroment"
          onClick={() => setShowField(!showField)}
        />

        <label for="education" className="select--item select--item-pink">
          Education
        </label>
        <input
          type="button"
          id="education"
          onClick={() => setShowField(!showField)}
        />

        <label for="economics" className="select--item select--item-green">
          Economics
        </label>
        <input
          type="button"
          id="economics"
          onClick={() => setShowField(!showField)}
        />

        <label for="law" className="select--item select--item-pink">
          Law
        </label>
        <input
          type="button"
          id="law"
          onClick={() => setShowField(!showField)}
        />

        <label for="" className="select--item select--item-green">
          Politics
        </label>
        <input type="button" onClick={() => setShowField(!showField)} />

        <label for="socialimpact" className="select--item select--item-pink">
       
          Social impact
        </label>
        <input
          type="button"
          id="socialimpact"
          onClick={() => setShowField(!showField)}
        />

        <label for="communications" className="select--item select--item-green">
          Communications
        </label>
        <input
          type="button"
          id="communications"
          onClick={() => setShowField(!showField)}
        />
      </div>
      {showField && (
        <div>
          <div id="field--info">
            <h6>Oh,But first!</h6>
            <p>
              Let’s play a game called: Mission failed!{"\n"}
              You will be presented with a couple famous mission statments your
              task is to guess what company said what.
            </p>
            <button type="submit" id="start" onClick="document.getElementById('field--info').style.display = 'none' ;" >
              Start
            </button> </div>
            <div id="quiz"></div>
            <button id="submit--quiz">Submit Quiz</button>
            <div id="results"></div>
         
        </div>
      )}
    </div>
  );
};
