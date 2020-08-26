import React, { Fragment } from "react";
import FlashComponent from "./FlashComponent";
import Form from "./Form";
import Guess from "./Guess";
import Buttons from "./Buttons";
import Score from "./Score";

function Index() {
  return (
    <Fragment>
      <FlashComponent />
      <Form />
      <Guess />
      <Buttons />
      <Score />
    </Fragment>
  );
}

export default Index;
