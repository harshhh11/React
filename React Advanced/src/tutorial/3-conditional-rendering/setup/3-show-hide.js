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
    return () => {
      window.addEventListener("resize", changeSize);
      window.removeEventListener("resize", changeSize);
    };
  });
  return (
    <React.Fragment>
      <div>
        <h3>Window</h3>
        <h4>Size: {size}</h4>
      </div>
    </React.Fragment>
  );
};

export default ShowHide;
