import React, { useState } from 'react';
/* 
  *  useState is function that accepts a state value as argument and 
  *  returns an array populated with that state value and function
  *  function returns controls the value of state 
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

 


