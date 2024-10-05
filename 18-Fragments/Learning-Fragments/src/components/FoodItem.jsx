import Item from "./Item";

const FoodItems = () => {
  // let foodItems = [];
  let foodItems = ["Vegetables", "fruits", "meat", "egg", "fish", "Dal"];

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item foodItems={item}> </Item>
      ))}
    </ul>
  );
};

export default FoodItems;
