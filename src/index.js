import React from "react";
import ReactDOM from "react-dom";
import App from ".//App";

//tag name
const element = <h1>Hello</h1>;

//component
const element2 = <App nama="React App" />;

//React Fragment
const element3 = (
  <React.Fragment>
    <h1>Hello</h1>
    <h2>World</h2>
    <p>React is Amazing!</p>
  </React.Fragment>
);

const domElement = document.getElementById("root");

ReactDOM.render(element2, domElement);
