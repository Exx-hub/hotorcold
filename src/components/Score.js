import React, { useContext, Fragment } from "react";
import { GuessContext } from "../contexts/Context";

function Score() {
  const { lose, win, guessCount } = useContext(GuessContext);
  if (lose) {
    return (
      <div className="score-board">
        GAME OVER! You failed to get the correct answer in 10 tries. Try again!{" "}
      </div>
    );
  } else if (win) {
    return (
      <div className="score-board">
        You guessed the number in less than 10 tries! {guessCount}/10! Good Job!
      </div>
    );
  }

  return <Fragment></Fragment>;
}

export default Score;
