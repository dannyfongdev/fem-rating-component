import React, { useState, useContext } from "react";
import StateContext from "./StateContext";

function Rating() {
  const { setRating, setHasSubmitted } = useContext(StateContext);

  const handleRatingClick = (e) => {
    // last character is rating number, e.g. "btn r1"
    const strClass = e.target.className;
    const theRating = strClass.charAt(strClass.length - 1);
    setRating(theRating);

    // set styles of buttons
    const newStyles = theStyles.map((aStyle, index) => {
      if (index === theRating - 1) {
        return { color: "#fff", backgroundColor: "hsl(216, 12%, 54%)" };
      } else {
        return {};
      }
    });
    setTheStyles(newStyles);
  };

  const handleSubmit = () => {
    // App.js reacts to this and changes view to ThankYou
    setHasSubmitted(true);
  };

  // use inline style to set the background color of the selected rating <a> tag.
  const [theStyles, setTheStyles] = useState([
    {},
    {},
    {},
    {},
    {},
  ]);

  return (
    <div className="wrapper"><div className="vertical-center">
    <div className="container container--rating">
      <img className="star-icon" src="./images/icon-star.svg" alt="star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback
        is appreciated to help us improve our offering!
      </p>
      <div className="rating">
        <button
          onClick={handleRatingClick}
          className="btn r1"
          style={theStyles[0]}
        >
          1
        </button>
        <button
          onClick={handleRatingClick}
          className="btn r2"
          style={theStyles[1]}
        >
          2
        </button>
        <button
          onClick={handleRatingClick}
          className="btn r3"
          style={theStyles[2]}
        >
          3
        </button>
        <button
          onClick={handleRatingClick}
          className="btn r4"
          style={theStyles[3]}
        >
          4
        </button>
        <button
          onClick={handleRatingClick}
          className="btn r5"
          style={theStyles[4]}
        >
          5
        </button>
      </div>
      <button onClick={handleSubmit} className="btn-submit">
        Submit
      </button>
    </div></div></div>
  );
}

export default Rating;
