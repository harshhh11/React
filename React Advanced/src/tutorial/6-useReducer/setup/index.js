import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
// reducer takes the old state and spits the new state
// reducer always have to return a state otherwise BIG ERROR 
// dispatch passes the action object to reducer which changes the state
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModelOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModel = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModelOpen && (
        <Modal closeModel={closeModel} modalContent={state.modalContent} />
      )}
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
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <div key={id} className="item">
              <h4>{name}</h4>
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
              >
                remove
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Index;
