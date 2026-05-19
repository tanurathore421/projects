import { useState } from "react";
import "./calculator.css";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  function clear(){
    setDisplay("");
  }

  function delLast(){
    setDisplay(display.slice(0,-1));
  }

  function addValue(value){
    setDisplay(display+value);
  }

  function calculate(){
    setDisplay(eval(display).toString());
  }

  return (
    <div className="container">
      <input id="display" type="text" value={display} readOnly />

      <div className="buttons">
        <button id="clear" onClick={clear}>AC</button>
        <button id="delete" onClick={delLast}>del</button>
        <button onClick={()=>addValue('%')}>%</button>
        <button onClick={()=>addValue('*')}>*</button>

         <button onClick={()=>addValue('1')}>1</button>
        <button onClick={()=>addValue('2')}>2</button>
        <button onClick={()=>addValue('3')}>3</button>
        <button onClick={()=>addValue('/')}>/</button>

         <button onClick={()=>addValue('4')}>4</button>
        <button onClick={()=>addValue('5')}>5</button>
        <button onClick={()=>addValue('6')}>6</button>
        <button onClick={()=>addValue('+')}>+</button>

         <button onClick={()=>addValue('7')}>7</button>
        <button onClick={()=>addValue('8')}>8</button>
        <button onClick={()=>addValue('9')}>9</button>
        <button onClick={()=>addValue('-')}>-</button>

         <button onClick={()=>addValue('.')}>.</button>
        <button id="zero" onClick={()=>addValue('0')}>0</button>
        <button id="equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}
