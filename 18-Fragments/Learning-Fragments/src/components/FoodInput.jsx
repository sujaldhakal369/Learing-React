import styles from "./FoodInput.module.css";

const FoodInput = ({ handleonKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter food items here"
      classNameName={styles.FoodInput}
      onKeyDown={handleonKeyDown}
    />
  );
};

export default FoodInput;
