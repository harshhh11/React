import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter - dependency list (an array)
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    if(value >= 1){
      document.title = `New Messages${value}`;
    }
  }, [])
  return (
    <>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  );
};

export default UseEffectBasics;
//useState preserves the value between the renders and it triggers rerender.
//useEffect is used when we want to some side effect and that is some work outside of component 
//think data fetching, listening for events, signing up for subscriptions
//it runs after every render
//Hooks can't be used conditionally 
