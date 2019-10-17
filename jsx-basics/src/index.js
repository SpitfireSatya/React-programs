
// import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {

  function getButtonText() {
    return "Click on me too!"
  }

  let buttonText = "Click me!"
  let numbersWork = 12345;
  let arraysWork = ["HI", "THERE"];
  // Use parenthesis for multiline html as a convention
  // use {{}} for properties and enter them as a json. Use camel case for variables.
  // Use {} for bindings/interpolation
  // Use htmlFor instead of for (in label)
  return (
    <div>
      <label className="label" htmlFor="name">Enter Name</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white"}}>
        {buttonText}
      </button>
      <button style={{ backgroundColor: "blue", color: "white"}}>
        {getButtonText()}
      </button>
      <div>{numbersWork}</div>
      <div>{arraysWork}</div>

      <div>But Objects dont work!!</div>

    </div>
  )
}

// show the react component
ReactDOM.render(<App />, document.getElementById('root'));
