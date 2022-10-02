import React from "react";
import ReactDom from "react-dom";

// Components always return JSX(Object)
// function Greeting() {
//   return <h4>this is harsh and this is my first component</h4>;
// }

// const Greeting = () => {
                              // (element, prop, children)
//   return React.createElement('h1', {}, 'hello world')
// }


// function Greeting() {
//   return (
//   <div>
//     <h1>hello world</h1>
//   </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
// }

// Nested Components 
function Greeting() {
  return (
    <>
      <Person/>
      <Message/> 
    </>
  );
}

const Person = () => <h2>Harsh Bhadu</h2>;
const Message = () => {
  return <p>Hello World</p>;
}

ReactDom.render(<Greeting/>, document.getElementById("root"));
