import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  
  return (
    <>
    <h1>{text || 'John Doe'}</h1>
    <h1>{!text && 'Hello World'}</h1>
    {isError && <h1>Error...</h1>}
    <button className='btn' onClick={() => setIsError(!isError)}>Toggle Error</button>
    { isError ? <p>there is an error</p> : <div> 
        <h1>There is no Error...</h1>
      </div>}
    </>
  );
};

export default ShortCircuit;
