import React, { useState } from "react";


 export default () => {  
  const [showField, setShowField] = useState(false);
  return (
    <div className="company--selection">
      <div className="select--field">
        <button type="button" className="select--item select--item-green" onClick={() => setShowField(!showField)}>
          Healthcare
        </button>
        <button type="button" className="select--item select--item-pink" onClick={() => setShowField(!showField)}>
          Security
        </button>
        <button type="button" className="select--item select--item-green" onClick={() => setShowField(!showField)}>
          Enviroment
        </button>
        <button type="button" className="select--item select--item-pink" onClick={() => setShowField(!showField)}>
          {" "}
          Education
        </button>
        <button type="button" className="select--item select--item-green" onClick={() => setShowField(!showField)}>
          Economics
        </button>
        <button type="button" className="select--item select--item-pink" onClick={() => setShowField(!showField)}>
          Law
        </button>
        <button type="button" className="select--item select--item-green" onClick={() => setShowField(!showField)}>
          Politics
        </button>
        <button type="button" className="select--item select--item-pink" onClick={() => setShowField(!showField)}>
          Social impact
        </button>
        <button type="button" className="select--item select--item-green" onClick={() => setShowField(!showField)}>
          Communications
        </button>
      </div>
      {showField && ( 
        <div>
           <div id="field--info">
              <h6>Oh,But first!</h6>
              <p>
                Let’s play a game called: Mission failed!{"\n"}
                You will be presented with a couple famous mission statment your
                task is to guess what company said what.
              </p>
              <button type = "sumbmit" id="start">
                Start
              </button>
           
            </div>
        </div>
      )}
    </div>
  );
}
