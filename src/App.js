import React, { useState } from "react";
import { hot } from "react-hot-loader";
import "./sass/app.scss";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Thios flies reloads and keep state.</h1>
      <p>Count: {counter}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default hot(module)(App);
