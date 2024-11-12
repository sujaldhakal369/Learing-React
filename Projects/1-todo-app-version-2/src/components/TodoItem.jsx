function TodoItem({ TodoName, TodoDate }) {
  return (
    <div classNameName="container">
      <div classNameName="row kg-row">
        <div classNameName="col-4">{TodoName}</div>
        <div classNameName="col-4">{TodoDate}</div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-danger kg-button button-margin"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
