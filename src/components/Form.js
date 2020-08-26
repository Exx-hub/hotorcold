import React, { useContext } from "react";
import { GuessContext } from "../contexts/Context";

function Form() {
  const { random, win, lose, input, setInput, guessSetter } = useContext(
    GuessContext
  );
  console.log(random);

  return (
    <form className="form" onSubmit={guessSetter}>
      <input
        readOnly={win || lose}
        type="number"
        value={input}
        placeholder="Enter a number from 1 -100 :)"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Guess</button>
    </form>
  );
}

export default Form;
