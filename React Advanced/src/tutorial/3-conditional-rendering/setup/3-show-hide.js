import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const changeSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);
  return (
      <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size : {size}</h2>
      </div>
  );
};

export default ShowHide;
