import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p className="all_center text">{state}</p>
      <div className="all_center">
        <button
          className="button"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          INC
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          DEC
        </button>
      </div>

      <hr />
    </>
  );
};

export default Counter;
