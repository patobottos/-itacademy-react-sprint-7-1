import React, { useEffect, useState } from "react";

import {
  MainContainer,
  FormTitle,
  ServicesList,
  Panell,
  Total,
  ButtonHome,
} from "../app/styles";

import Counter from "../components/Counter/Counter";
import PopupWindow from "../components/PopupWindow/PopupWindow";
import PopupContents from "../app/PopupContents"

const savedData = localStorage.getItem("data");
const savedDataParse = savedData
  ? JSON.parse(savedData)
  : { webpage: false, seo: false, ads: false, webPagesNum: 0, languagesNum: 0 };
console.log("savedDataParse ", savedDataParse);

const Page2 = () => {
  const [budgetNumber, setBudgetNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
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

  const togglePopup = () => {
    setPopupOpen((prev) => !prev);
  };


  return (
    <MainContainer>
      <ServicesList>
        <li>
          <label htmlFor="budgetnumber">Número de presupuesto</label>
          <input
            type="text"
            id="budgetnumber"
            name="budgetnumber"
            maxLength="60"
            value={budgetNumber}
            onChange={(e) => setBudgetNumber(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="customername">Nombre y apellidos: </label>
          <input
            type="text"
            id="customername"
            name="customername"
            maxLength="70"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </li>
      </ServicesList>
      <FormTitle>
        <h2>¿Qué quieres hacer?</h2>
      </FormTitle>
      <ServicesList>
        <li>
          <input
            type="checkbox"
            id="webpage"
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
          <input
            type="checkbox"
            id="seo"
            name="seo"
            onChange={(e) => setSeo(!seo)}
          />
          <label htmlFor="seo"> Una consultoria SEO (300€)</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="ads"
            name="ads"
            onChange={(e) => setAds(!ads)}
          />
          <label htmlFor="ads"> Una campaña de Google Ads (200€) </label>
        </li>
        <li>
          <Total><h3>Preu total: {totalPrice}€</h3></Total>
        </li>

        <li>
          <ButtonHome>
            Registrar presupuesto
          </ButtonHome>
        </li>
      </ServicesList>
      {popupOpen && (
        <PopupWindow
        visible={popupOpen}
        setVisible={() => setPopupOpen(false)}
        >
        <PopupContents 
          webPagesNum={webPagesNum}
          languagesNum={languagesNum}
        />
        </PopupWindow>

      )}
    </MainContainer>
  );
};

export default Page2;
