import { useState } from "react";

import "./App.css";
import StateContext from "./StateContext";
import Rating from "./Rating";
import ThankYou from "./ThankYou";

function App() {
  const [rating, setRating] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <StateContext.Provider value={{ rating, setRating, setHasSubmitted }}>
      { !hasSubmitted && <Rating />}
      { hasSubmitted && <ThankYou />}
    </StateContext.Provider>
  );
}

export default App;
