import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";
// import React from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Vegetables", "fruits", "meat", "egg", "fish", "Dal"];

  // if (foodItems.length === 0) {
  //   return <h3>Food list not found!!!</h3>;
  // }

  // let emptymessage =
  //   foodItems.length === 0 ? <h3>Food list not found!!!</h3> : null;
  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
