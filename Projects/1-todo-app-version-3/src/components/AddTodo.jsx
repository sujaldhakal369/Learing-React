import { useContext, useState } from "react";
// import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDatwChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div classNameName="container text-center">
      <form classNameName="row kg-row" onSubmit={handleAddButtonClicked}>
        <div classNameName="col-4">
          <input
            type="text"
            // ref={todoNameElement}
            placeholder="enter TODO Here"
          />
        </div>
        <div classNameName="col-4">
          <input
            type="date"
            // ref={dueDateElement}
            placeholder=""
          />
        </div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-success kg-button kg-button button-margin"
            onClick={handleAddButtonClicked}
          >
            {/* <IoMdAddCircleOutline /> */}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
