import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>Change title</button>
    </>
  );
};

export default ErrorExample;


/* 
* here we can't change the title because we are not re-rendering the component
* useState keeps the value between the renders and also re-renders the current component and its children
*/
