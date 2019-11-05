import React, { useState } from "react";

export default () => {
  const [showField, setShowField] = useState(false);
  return (
    
    <div className="company--selection">
      <div className="select--field">
        <label htmlFor="healthcare" className="select--item select--item-green">
          Healthcare
          <input
            type="button"
            id="healthcare"
            onClick={() => setShowField(!showField)}
          />
        </label>

        <label htmlFor="security" className="select--item select--item-pink">
          Security
        </label>
        <input
          type="button"
          id="security"
          onClick={() => setShowField(!showField)}
        />

        <label htmlFor="enviroment" className="select--item select--item-green">
        Environment
        </label>
        <input
          type="button"
          id="enviroment"
          onClick={() => setShowField(!showField)}
        />

        <label htmlFor="education" className="select--item select--item-pink">
          Education
        </label>
        <input
          type="button"
          id="education"
          onClick={() => setShowField(!showField)}
        />

        <label htmlFor="economics" className="select--item select--item-green">
          Economics
        </label>
        <input
          type="button"
          id="economics"
          onClick={() => setShowField(!showField)}
        />

        <label htmlFor="law" className="select--item select--item-pink">
          Law
        </label>
        <input
          type="button"
          id="law"
          onClick={() => setShowField(!showField)}
        />
        <label htmlFor="politics" className="select--item select--item-green">
         Politics
        </label>
        <input
          type="button"
          id="politics"
          onClick={() => setShowField(!showField)}
        />

      
        <label htmlFor="socialimpact" className="select--item select--item-pink">
       
          Social impact
        </label>
        <input
          type="button"
          id="socialimpact"
          onClick={() => setShowField(!showField)}
        />

        <label htmlFor="communications" className="select--item select--item-green">
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
          
          <div id="select-field--info">
            <h6>Oh,But first!</h6>
            <p>
              Let’s play a game called: Mission failed!{"\n"}
              You will be presented with a couple famous mission statments your
              task is to guess what company said what.
            </p>
            <button type="submit" id="start"  >
             Start</button>
              
         </div> 
         
        </div>
      )}
    </div>
  );
};
