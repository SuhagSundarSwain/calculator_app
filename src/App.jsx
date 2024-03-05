import ButtonContainer from "./components/CalculatorButton/ButtonContainer.jsx";
import styles from "./App.module.css";
import Display from "./components/CalculatorDisplay/Display.jsx";
import { useState } from "react";

function App() {
  const buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const [value, setValueState] = useState("");
  function onClick(buttonText) {
    if (buttonText === "C") {
      setValueState("");
    } else if (buttonText === "=") {
      setValueState(eval(value));
    } else {
      setValueState(value + buttonText);
    }
  }
  return (
    <div className={styles.calculator}>
      <center>
        <Display value={value} />
        <ButtonContainer buttonList={buttonList} onClick={onClick} />
      </center>
    </div>
  );
}

export default App;
