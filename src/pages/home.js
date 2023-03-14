import React from "react";
import { Link } from "react-router-dom";
import {
  MainContainerHome,
  HomeMainTitle,
  HomeText,
  ButtonHome,
} from "../app/styles";

const Home = () => (
  <MainContainerHome>
    <HomeMainTitle>¡Bienvenido, bienvenida!</HomeMainTitle>
    <HomeText>¿Cansado de tus proveedores de servicios web?</HomeText>
    <HomeText>
      ¡Calcula tu presupuesto alternativo de manera inmediata y pásate con
      nosotros!
    </HomeText>
    <ButtonHome>
      <Link to="/page2">¡Comienza a ahorrar!</Link>
    </ButtonHome>
  </MainContainerHome>
);

export default Home;
