import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {
  // let foodItems = [];
  let foodItems = ["Vegetables", "Fruits", "Dal", "Milk", "Egg", "Ghee"];

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>We should always eat healthy foods.</p>
      </Container> */}
    </>
  );
}

export default App;
