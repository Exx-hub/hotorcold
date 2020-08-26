import React, { useContext, useEffect } from "react";
import { GuessContext } from "../contexts/Context";

function FlashComponent() {
  const { random, guess, setWin, heading, setHeading } = useContext(
    GuessContext
  );

  useEffect(() => {
    let diff = Math.abs(random - guess);
    if (guess) {
      if (diff === 0) {
        setHeading({ heading: "JACKPOT!", class: "jackpot" });
        setWin(true);
      }
      if (diff >= 1 && diff <= 5) {
        setHeading({ heading: "EXTREMELY HOT!", class: "volcanic" });
      }
      if (diff >= 6 && diff <= 10) {
        setHeading({ heading: "HOT!", class: "hot" });
      }
      if (diff >= 11 && diff <= 20) {
        setHeading({ heading: "WARM!", class: "warm" });
      }
      if (diff >= 21) {
        setHeading({ heading: "COLD!", class: "cold" });
      }
    }
  }, [guess, random, setWin, setHeading]);

  return (
    <p className={`flash-component ${heading.class}`}>{heading.heading}</p>
  );
}

export default FlashComponent;
