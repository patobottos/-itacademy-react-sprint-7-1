import styled from 'styled-components';

export const PopupBox = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
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