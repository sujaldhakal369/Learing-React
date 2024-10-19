import styles from "./BtnContainer.module.css";

const BtnContainer = () => {
  const btnName = [
    "%",
    "CE",
    "C",
    "DEL",
    "7",
    "8",
    "9",
    "X",
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
      {btnName.map((btnName) => (
        <button key={btnName} className={styles.button}>
          {btnName}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
