import { useContext } from "react";
// import { RiDeleteBin2Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ TodoName, TodoDate }) {
  const deleteItem = useContext(TodoItemsContext);

  return (
    <div classNameName="container">
      <div classNameName="row kg-row">
        <div classNameName="col-4">{TodoName}</div>
        <div classNameName="col-4">{TodoDate}</div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-danger kg-button button-margin"
            onClick={() => deleteItem(TodoName)}
          >
            <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
