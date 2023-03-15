import React, { useEffect, useState } from "react";

import {
  MainContainer,
  FormTitle,
  ServicesList,
  Panell,
  Total,
  PopupText,
  PopupHeading,
} from "../app/styles";

import Counter from "../components/Counter/Counter";
import PopupWindow from "../components/PopupWindow/PopupWindow";

const savedData = localStorage.getItem("data");
const savedDataParse = savedData
  ? JSON.parse(savedData)
  : { webpage: false, seo: false, ads: false, webPagesNum: 0, languagesNum: 0 };
console.log("savedDataParse ", savedDataParse);

const Page2 = () => {
  const [webpage, setWebpage] = useState(false);
  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [webPagesNum, setWebPagesNum] = useState(0);
  const [languagesNum, setLanguagesNum] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const inputsObject = { webpage, seo, ads, webPagesNum, languagesNum };
    localStorage.setItem("data", JSON.stringify(inputsObject));
  }, [webpage, seo, ads, webPagesNum, languagesNum]);

  const webservices = 500 + webPagesNum * languagesNum * 30;
  const totalPrice =
    (webpage ? webservices : 0) + (seo ? 300 : 0) + (ads ? 200 : 0);

  // OPENING/CLOSING POPUP
  const togglePopup = () => {
    setPopupOpen((prev) => !prev);
  };
  /*
  // TEST EXERCICI 6
  useEffect(() => {
    document.addEventListener("click", togglePopup);
    return () => document.removeEventListener("click", togglePopup);
  }, []);
*/
  return (
    <MainContainer>
      <FormTitle>
        <h3>¿Qué quieres hacer?</h3>
      </FormTitle>
      <ServicesList>
        <li>
          <input
            type="checkbox"
            name="webpage"
            onChange={(e) => setWebpage(!webpage)}
          />
          <label htmlFor="webpage"> Una página web (500€) </label>
          {webpage ? (
            <Panell>
              <Counter
                setNumber={setWebPagesNum}
                txt="Número de páginas"
                val={webPagesNum}
                togglePopup={togglePopup}
              />

              <Counter
                setNumber={setLanguagesNum}
                txt="Número de idiomas"
                val={languagesNum}
                togglePopup={togglePopup}
              />
            </Panell>
          ) : (
            ""
          )}
        </li>
        <li>
          <input type="checkbox" name="seo" onChange={(e) => setSeo(!seo)} />
          <label htmlFor="seo"> Una consultoria SEO (300€)</label>
        </li>
        <li>
          <input type="checkbox" name="ads" onChange={(e) => setAds(!ads)} />
          <label htmlFor="ads"> Una campaña de Google Ads (200€) </label>
        </li>
        <li>
          <Total>Preu total: {totalPrice}€</Total>
        </li>
      </ServicesList>
      {popupOpen && (
        <PopupWindow
          id="popup"
          handleClose={togglePopup}
          content={
            <div>
              <PopupText>
                <PopupHeading>
                  <span role="img" aria-label="info">
                    ℹ️
                  </span>
                  Información de utilidad
                </PopupHeading>
                El sitio web que has seleccionado contendrá:{" "}
              </PopupText>
              <PopupText>
                {webPagesNum} página/s web y {languagesNum} idioma/s.
              </PopupText>
            </div>
          }
        />
      )}
    </MainContainer>
  );
};

export default Page2;
