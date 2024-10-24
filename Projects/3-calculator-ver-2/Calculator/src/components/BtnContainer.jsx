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
    <div className={styles.btnContainer}>
      {buttonName.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
