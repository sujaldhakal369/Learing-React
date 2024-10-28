import { useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on: ${dueDate}`);
    todoNameElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="enter TODO Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} placeholder="" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button kg-button button-margin"
            onClick={handleAddButtonClicked}
          >
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
