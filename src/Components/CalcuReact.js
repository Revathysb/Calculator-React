import React, { useState } from "react";
import "./calcu.css";

const CalcuReact = () => {
  const [val, setVal] = useState("");

  const buttons = (va) => {
    if (
      (va === "*" || va === "+" || va === "/" || va === "-") &&
      (val.slice(-1) === "*" ||
        val.slice(-1) === "+" ||
        val.slice(-1) === "/" ||
        val.slice(-1) === "-"||val.slice(-1) === "%")
    ) {
      setVal(val);
    } else if (
      (va === "*" || va === "+" || va === "/" || va === "-"||va=== "%") &&
      (val.slice(0) === " " || val.slice(0) === "")
    ) {
      setVal(val);
    } else {
      setVal(val + va);
    }
  };
  const resett = () => {
    //document.getElementById("screen").value="";
    setVal(" ");
  };
  const equalck = () => {
    if (
      val.slice(-1) === "*" ||
      val.slice(-1) === "+" ||
      val.slice(-1) === "/" ||
      val.slice(-1) === "-"||val.slice(-1) === "%")
     {
      setVal(val);
    } else if (val.slice(0) === " " || val.slice(0) === "") {
      setVal(val);
    } else {
      var txt = document.getElementById("screen").value;
      var result = eval(txt);
      document.getElementById("screen").value = result;
    }
  };
  const alter=()=>
  {
    if (val>0)
    {
       
        setVal(-val)
    }
  }

  return (
    <div>
      <div className="rootdiv">
        <div className="calc4">
          <div className="output">
            <input type="text" id="screen" value={val}></input>
          </div>
          <div>
            <div className="rows">
              <button onClick={resett} className="btn">
                AC
              </button>
              <button
                onClick={alter}
                className="btn"
              >
                +/-
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                %
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn bts"
              >
                /
              </button>
            </div>
            <div className="rows">
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                7
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                8
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                9
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn bts"
              >
                *
              </button>
            </div>
            <div className="rows1">
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                4
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                5
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                6
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn bts"
              >
                -
              </button>
            </div>
            <div className="rows">
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                1
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                2
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                3
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn bts"
              >
                +
              </button>
            </div>
            <div className="rows">
              
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn2"
              >
                0
              </button>
              <button
                onClick={(e) => {
                  buttons(e.target.innerText);
                }}
                className="btn"
              >
                .
              </button>
              <button onClick={equalck} className="btn bts">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcuReact;
