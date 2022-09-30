import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
// reducer takes the old state and spits the new state 
// dispatch passes the action object to reducer which changes the state 
const reducer = (state, action) => {

}

const defaultState = {
  people: data,
  isModelOpen: true,
  modalContent: 'hello world',
}

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState)
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return <>
  {state.isModelOpen && <Modal modalContent={state.modalContent}/>}
  <form className='form' onSubmit={submitHandler}>
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
      <button type='submit'>ADD</button>
  </form>
  {
    state.people.map(person => {
      const {id, name} = person;
      return <>
      <div key={id}>
        <h4>{name}</h4>
      </div>
      </>;
    })
  }
  </>;
};

export default Index;

