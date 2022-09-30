//This Method is GOOD For Small Apps but for large app we would wanna have some kind of structure to it using reducer function
import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
    } else {
      setShowModal(true);
    }
  };
  return (
    <>
      {showModal && <Modal />}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">ADD</button>
      </form>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <div key={id}>
              <h4>{name}</h4>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Index;

