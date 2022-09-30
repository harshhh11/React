import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const updateSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect")
    window.addEventListener('resize', updateSize)
    // return () => {
    //   console.log('Cleanup')
    //   window.removeEventListener('resize', updateSize)
    // }
  }, [])
  console.log('render')
  return (
  <>
  <h2>Window</h2>
  <h3>{size} PX</h3>
  </>
  );
};

export default UseEffectCleanup;
