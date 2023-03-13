import { useEffect, useState } from "react";
import "./App.css";
import { MainContainer, Panell } from "./app/styles";
import Counter from "./components/Counter";

const savedData = localStorage.getItem("data");
const savedDataParse = savedData
  ? JSON.parse(savedData)
  : { webpage: false, seo: false, ads: false, webPagesNum: 0, languagesNum: 0 };
console.log("savedDataParse ", savedDataParse);

function App() {
  const [webpage, setWebpage] = useState(false);
  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [webPagesNum, setWebPagesNum] = useState(0);
  const [languagesNum, setLanguagesNum] = useState(0);

  useEffect(() => {
    const inputsObject = { webpage, seo, ads, webPagesNum, languagesNum };
    localStorage.setItem("data", JSON.stringify(inputsObject));
  }, [webpage, seo, ads, webPagesNum, languagesNum]);

  const webservices = 500 + webPagesNum * languagesNum * 30;
  const totalPrice =
    (webpage ? webservices : 0) + (seo ? 300 : 0) + (ads ? 200 : 0);

  return (
    <div className="App">
      <MainContainer>
        <h3 className="form-title">¿Qué quieres hacer?</h3>
        <ul className="services-list">
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
                />

                <Counter
                  setNumber={setLanguagesNum}
                  txt="Número de idiomas"
                  val={languagesNum}
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
            <div className="total">Preu total: {totalPrice}€</div>
          </li>
        </ul>
      </MainContainer>
    </div>
  );
}

export default App;
