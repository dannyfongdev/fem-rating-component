import { useContext } from "react";
import StateContext from "./StateContext";

const ThankYou = () => {
  const { rating } = useContext(StateContext);
  return (
    <div className="wrapper"><div className="vertical-center">
    <div className="container container--thank-you">
      <img src="./images/illustration-thank-you.svg" alt="thank you" />
      <h2>You selected {rating} out of 5</h2>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&#8217;t hesitate to get in touch!
      </p>
    </div>
    </div></div>
  );
};

export default ThankYou;
