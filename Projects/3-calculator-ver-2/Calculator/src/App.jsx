import styles from "./App.module.css";
import Display from "./components/display";
import BtnContainer from "./components/BtnContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "CE") {
      setCalVal("");
    } else if (buttonText === "CE") {
    } else if (buttonText === "=") {
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div classNameName={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <BtnContainer onButtonClick={onButtonClick}></BtnContainer>
      </div>
    </>
  );
}

export default App;
