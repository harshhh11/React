import React, { useEffect } from 'react';

const Modal = ({modalContent, closeModel}) => {
  useEffect(() => {
    setTimeout(() => {
      closeModel();
    }, 3000)
  });
  return <div className='modal'>{modalContent}</div>;
};

export default Modal;
