import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const buyButtonClick = (event) => {
    console.log(event);
    console.log(`${foodItem} being Brought.`);
  };

  return (
    <li className="List-group-item">
      {foodItem}

      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => buyButtonClick(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
4;
