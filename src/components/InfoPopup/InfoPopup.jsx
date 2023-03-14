import React from "react";
import { ButtonInfo } from "./InfoPopup.styles";

const InfoPopup = props => {
  return (
    <ButtonInfo>
      <span role="img" aria-label="info" onClick={props.togglePopup}> ℹ️ </span>
    </ButtonInfo>
  );
};

export default InfoPopup;
