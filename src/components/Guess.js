import React, { useContext, Fragment } from "react";
import { GuessContext } from "../contexts/Context";

function Guess() {
  const { guessCount, guessHistoryItems } = useContext(GuessContext);
  return (
    <Fragment>
      <h2 className="guess-list-title">Guess #{guessCount}</h2>
      <div className="guess-history">
        {guessHistoryItems.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </Fragment>
  );
}

export default Guess;
