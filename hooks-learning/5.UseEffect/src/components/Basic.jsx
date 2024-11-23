import { useState } from "react";
import { useEffect } from "react";

const Basic = () => {
  const [count, setCount] = useState(0);

  // case 1: Run on every render.
  useEffect(() => {
    alert("I will run on every render.");
  });

  //case 2: Run only on first render.
  useEffect(() => {
    alert("This is first render.");
  }, []);

  //case 2: i will run when certain value changes.
  useEffect(() => {
    alert(
      "I am running because button is clicked and the value of count is being rendered."
    );
  }, [count]);

  const handleButton = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleButton}>Button</button>

      <h1>{count}</h1>
    </>
  );
};

export default Basic;
