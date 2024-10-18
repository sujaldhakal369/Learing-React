import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import Foodinput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([]);

  console.log(`Current value of textState:${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("food value is " + newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>

        <Foodinput handleonKeyDown={onKeyDown}> </Foodinput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
