import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// If we tried to count how many times our application renders using the useState Hook,
// we would be caught in an infinite loop since this Hook itself causes a re-render.

// useRef is object with a property of current

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  }
  useEffect(() => {
    console.log(refContainer);
    console.log(divContainer)
    refContainer.current.focus();
    })
  return <>
  <form className='form'>
    <input type="text" name="" id="" ref={refContainer}/>
    <button type='submit' onClick={handleSubmit}>Submit</button>
  </form>
  <div ref={divContainer}> hello world</div>
  </>;
};

export default UseRefBasics;
