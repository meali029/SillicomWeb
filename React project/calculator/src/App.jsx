import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [display, setdisplay] = useState(0);

  return (
    <>
      <h1>Calculator</h1>
  <div id="calculator">
    <input type="text" id="display" disabled />
   
        <button onClick={clear} id="clear">Clear</button>
        <button onClick={backspace} id="backspace">C</button>
        <button name="/" onClick={handleClick}>&#247;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>&#215;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>&#8722;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}  >2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>&#43;</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>&#46;</button>
        <button onClick={calculate} id="result">=</button>
        
   
  </div>

    </>
  );
}

export default App;
