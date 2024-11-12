import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      classNameName={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
