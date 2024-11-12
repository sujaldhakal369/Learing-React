import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li classNameName={`list-group-item ${bought && "active"}`}>
      {foodItem}

      <button
        classNameName={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
4;
