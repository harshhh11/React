import React, { useState } from 'react';
/* 
  *  useState is function that accepts a initial state as argument and 
  *  returns an array populated with that current state and function that updates the state
  *  State generally refers to data or properties that needs tracking in an application.
*/
const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [title, setTitle] = useState('One Piece'); 
  const handler = () => {
    if (title === 'One Piece') {
      setTitle('Chainsaw Man');
    } else {
      setTitle('One Piece')
    }
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handler}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;

 


