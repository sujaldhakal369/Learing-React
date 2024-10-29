import styles from "./App.module.css";
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";

function App() {
  return (
    <>
      <h1>Calculator</h1>
      <div className={styles.calculator}>
        <Display></Display>
        <BtnContainer></BtnContainer>
      </div>
    </>
  );
}

export default App;
