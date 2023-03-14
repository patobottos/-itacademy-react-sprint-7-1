import React, { useState } from "react";
import { Container, Label, WebDetailsInput } from "./Counter.styles";
import { Button } from "../../app/styles";
import InfoPopup from "../InfoPopup/InfoPopup";

const Counter = ({ setNumber, txt, val, togglePopup}) => {
  const [counter, setCounter] = useState(val);

  function adjustCounter(amount) {
    setCounter((currentState) => {
      if (currentState + amount < 1) alert("Números mayores a 0");
      return currentState + amount < 1
        ? alert("Números mayores a 0")
        : currentState + amount;
    });
  }

  setNumber(counter);

  return (
    <Container>
      <Label htmlFor="">{txt}</Label>
      <Button onClick={() => adjustCounter(-1)}> - </Button>
      <WebDetailsInput
        type="number"
        value={counter}
        min={1}
        pattern="^[1-9]"
        onChange={(e) => setCounter(e.target.valueAsNumber)}
      />
      <Button onClick={() => adjustCounter(1)}> + </Button>
      <InfoPopup 
        togglePopup={togglePopup} />
    </Container>
  );
};

export default Counter;
