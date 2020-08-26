import React from "react";
import { Link } from "react-router-dom";

function Rules() {
  return (
    <div className="rules-container">
      This is a Number Guessing Game with the following rules:
      <ol>
        <li>
          The machine picks a random number between 1 to 100 and keeps it
          hidden.
        </li>
        <li>You need to guess until you can find the hidden secret number.</li>
        <li>
          You will get feedback on how close or far your guess is in the form of
          the following keywords ("cold", "warm", "hot", "extremely hot").
        </li>
      </ol>
      Everything clear?
      <Link to="/">
        <button>YES</button>
      </Link>
    </div>
  );
}

export default Rules;
