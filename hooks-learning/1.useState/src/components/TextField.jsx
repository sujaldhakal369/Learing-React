import { useState } from "react";

const TextField = () => {
  const [text, setText] = useState("hello");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleResetButton = () => {
    setText("hello");
  };

  return (
    <>
      <div className="all_center">
        <input value={text} onChange={handleChange} />
        <p>you typed: {text}</p>
        <button onClick={handleResetButton}>Reset</button>
      </div>
      <hr />
    </>
  );
};

export default TextField;
