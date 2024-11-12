// CounterApp.js
import React, { useState } from "react";
import './styles.css';  // Importing external CSS

const CounterApp = () => {
  // State to manage the count
  const [count, setCount] = useState(0);

  // Functions for increment, decrement, and reset
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>React Counter App</h1>
      
      {/* Counter display */}
      <div className="counter-box">
        {count}
      </div>

      {/* Buttons */}
      <div>
        <button onClick={increment} className="button">Increment</button>
        <button 
          onClick={decrement} 
          className="button"
          disabled={count === 0}  // Disable if count is 0
        >
          Decrement
        </button>
        <button onClick={reset} className="button button-reset">Reset</button>
      </div>
    </div>
  );
};

export default CounterApp;