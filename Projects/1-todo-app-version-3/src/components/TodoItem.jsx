import { RiDeleteBin2Fill } from "react-icons/ri";

function TodoItem({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button button-margin"
            onClick={() => onDeleteClick(TodoName)}
          >
            <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
