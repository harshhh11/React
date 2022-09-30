import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Cookie",
    interest: "Web Development",
    recentAnime: "Sonny Boy",
  });
  const { name, interest, recentAnime } = people;
  const handler = () => {
    setPeople({ ...people, interest: 'Machine Learning' })
  }
  
  
  return (
  <>
  <h3>{name}</h3>
  <h3>{interest}</h3>
  <h3>{recentAnime}</h3>
  <button className="btn" onClick={handler}>Change</button>
  </>
  );
};

export default UseStateObject;
