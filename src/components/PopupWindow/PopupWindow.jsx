import React from 'react';
import { PopupBox, Box, PopupBtnClose } from './PopupWindow.styles';

const PopupWindow = props => {
  return (
    <PopupBox>
      <Box>
        <PopupBtnClose onClick={props.handleClose}> x </PopupBtnClose>
        {props.content}
      </Box>
    </PopupBox>
  );
}

export default PopupWindow;
