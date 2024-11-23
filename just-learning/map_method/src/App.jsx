import "./App.css";

function App() {
  let foodItems = ["dal", "bhat", "eggs", "vegetables", "fruits"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul>
        {foodItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
