import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const handleOnClick = () => {
    setcount(count + 1);
  };

  return (
    <>
      <div className="all_center">
        <button onClick={handleOnClick}>you pressed {count} times.</button>
      </div>
      <hr />
    </>
  );
};

export default Counter;
