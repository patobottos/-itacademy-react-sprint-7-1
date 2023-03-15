import React from 'react';
import { PopupBackground, PopupOverlay, PopupContentBox, PopupTitle } from './PopupWindow.styles';

const PopupWindow = ({ children, title, visible, setVisible }) => {
  return (
    <PopupBackground visible={visible}>
      <PopupOverlay onClick={() => setVisible(false)}>
        <PopupContentBox>
          <PopupTitle>{title}</PopupTitle>
          {children}
        </PopupContentBox>
      </PopupOverlay>
    </PopupBackground>
  );
}

export default PopupWindow;
