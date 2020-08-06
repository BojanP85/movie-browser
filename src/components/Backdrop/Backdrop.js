import React from 'react';
import ReactDOM from 'react-dom';

import { Wrapper } from './BackdropCSS';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <Wrapper showBackdrop={props.showBackdrop} onClick={props.removeModal}>
      {props.children}
    </Wrapper>,
    document.getElementById('backdrop')
  );
};

export default Backdrop;
