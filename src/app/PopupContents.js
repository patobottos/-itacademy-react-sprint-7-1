import React from "react";
import { PopupTitle } from "../components/PopupWindow/PopupWindow.styles";
import { PopupText } from "./styles";

const PopupContents = ({webPagesNum, languagesNum}) => {
  return (
    <div>
      <PopupTitle>
      <span role="img" aria-label="info"> ℹ️ </span> 
      Información de interés:
      </PopupTitle>
      <PopupText>El sitio web que has seleccionado contendrá: </PopupText>
      <PopupText>
        {webPagesNum} página/s web y {languagesNum} idioma/s.
      </PopupText>
    </div>
  );
};

export default PopupContents;
