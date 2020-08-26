import React, { useContext } from "react";
import { GuessContext } from "../contexts/Context";

import { Link } from "react-router-dom";

function Buttons() {
  const { reset } = useContext(GuessContext);

  return (
    <div className="buttons">
      <button onClick={reset}>Reset</button>
      <Link to="/Rules">
        <button> HOW TO PLAY</button>
      </Link>
    </div>
  );
}

export default Buttons;
