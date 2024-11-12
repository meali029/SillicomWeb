import React, { useState } from 'react';
import './Sohail.css'; // Import the CSS file

function Sohail() {
  const [num, setNum] = useState(0);
  const [event, setEvent] = useState('');

  const addValue = () => {
    if (num === 20) {
      setNum(0);
      setEvent("You reached maximal Limit");
    } else {
      setNum(num + 1);
    }
  };

  const removeValue = () => {
    setNum(num - 1 < 0 ? 0 : num - 1);
    setEvent("You reached Minimum Limit");

  };

  return (
    <div className="container">
      <h1 className="heading">Sohail's First Project in React</h1>
      <h1 className="counter">Counter Clock: {num}</h1>
      <button className="button" onClick={addValue}>Add Value</button>
      <br />
      <button className="button" onClick={removeValue}>Remove Value</button>
      <h1>{event} </h1>
    </div>
  );
}

export default Sohail;
