import React, { useState, useEffect } from "react";

export const GuessContext = React.createContext();

function ContextProvider({ children }) {
  useEffect(() => {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    setRandom(randomNum);
  }, []);

  const [input, setInput] = useState("");

  const [guess, setGuess] = useState("");
  const [random, setRandom] = useState("");
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [show, setShow] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  const [guessHistoryItems, setGuessHistoryItems] = useState([]);

  const [heading, setHeading] = useState({
    heading: "DARE TO GUESS?",
    class: "",
  });

  const reset = () => {
    if (guessHistoryItems.length !== 0) {
      setHeading({ heading: "DARE TO GUESS?", class: "" });
      setWin(false);
      setGuessCount(0);
      setGuessHistoryItems([]);
      setRandom(Math.floor(Math.random() * 100) + 1);
      setGuess("");
      setLose(false);
    }
  };

  const guessSetter = (e) => {
    e.preventDefault();
    if (
      input &&
      !win &&
      input !== guess &&
      !lose &&
      !guessHistoryItems.includes(input)
    ) {
      setGuess(input);
      setGuessHistoryItems((prev) => [...prev, input]);
      setInput("");
      setGuessCount((prevGuessCount) => prevGuessCount + 1);
    }
  };

  useEffect(() => {
    if (guessCount === 10) {
      setLose(true);
    }
  }, [guessCount, setLose]);

  return (
    <GuessContext.Provider
      value={{
        guess,
        setGuess,
        random,
        setRandom,
        win,
        setWin,
        lose,
        setLose,
        guessCount,
        setGuessCount,
        guessHistoryItems,
        setGuessHistoryItems,
        heading,
        setHeading,
        reset,
        show,
        setShow,
        guessSetter,
        input,
        setInput,
      }}
    >
      {children}
    </GuessContext.Provider>
  );
}

export default ContextProvider;
