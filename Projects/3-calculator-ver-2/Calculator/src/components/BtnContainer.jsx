import styles from "./BtnContainer.module.css";

const BtnContainer = ({ onButtonClick }) => {
  const buttonName = [
    "%",
    "CE",
    "CLR",
    "DEL",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "/",
    "=",
  ];

  return (
    <div classNameName={styles.btnContainer}>
      {buttonName.map((buttonName) => (
        <button
          key={buttonName}
          classNameName={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
