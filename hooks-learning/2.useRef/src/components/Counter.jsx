import { useRef } from "react";

const Counter = () => {
  const num = useRef(0);

  const HandleOnClick = () => {
    num.current = num.current + 1;
    alert(`you pressed ${num.current} times.`);
  };

  return (
    <>
      <div className="all_center">
        <button onClick={HandleOnClick}>click</button>
      </div>
      <hr />
    </>
  );
};

export default Counter;
