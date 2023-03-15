import styled , { css } from 'styled-components';

export const PopupBackground = styled.div`
  display: flex;
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : `opacity:0;
     visibility:hidden`};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
`

export const PopupOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  overflow: hidden;
`

export const PopupContentBox = styled.div`
  background: #b7bad2;
  border-radius: 12px;
  width: 90%;
  min-height: 30%;
  padding: 10px 30px 30px 30px;
  position: relative;
  font-size: 1.2rem;
  text-align: center;
  margin: 30vh auto;
  border: 4px solid	#455367;
  z-index: 9999;
    p,h1,h2{
    color:black
  }
  
  /* ANTIGUOS ESTILOS
  
  color: blueviolet;
  
  padding: 10px;
  overflow: auto;
  */
`
export const PopupTitle = styled.div`
  text-align: center;
  font-size: 1.8rem;
  color: #2c394e;
  font-weight: 500;
`

/* ANTIGUOS ESTILOS EX6 V.2 
export const PopupBox = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  border: 4px solid yellow;
`

export const Box = styled.div`
  position: relative;
  width: 80%;
  background-color: #b7bad2;
  text-align: center;
  margin: 60vh auto;
  color: blueviolet;
  border: 1px solid #76b5c5;
  border-radius: 6px;
  padding: 10px;
  overflow: auto;
  padding: 10px;
`

export const PopupBtnClose = styled.button`
  background-color: #555;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 28px;
  height: 28px;
  padding: 2px;
  font-weight: 400;
  cursor: pointer;
  font-size: 18px;  
  margin: auto 5px;
  position: absolute;
  top: 7px;
  right: 7px;
`
*/