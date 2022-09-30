import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(fullName && email){
      const person = { id: new Date().getTime().toString(), fullName, email }
      setPeople((people) => {
        return [...people, person]
      });
      setFullName('');
      setEmail('');
    } else {
      console.log('Invalid Values')
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name='firstName' value={fullName} onChange={(e) => setFullName(e.target.value)}/> 
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
            <button type="submit" className="btn">
            {/* <button type="submit" className="btn" onClicK={handleSubmit}>  */}
              Submit
            </button>
        </form>
        {
          people.map(person => {
            const {id, fullName, email} = person;
            return <div className="item" key={id}>
              <h3>{fullName}</h3>
              <p>{email}</p>
            </div>
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
