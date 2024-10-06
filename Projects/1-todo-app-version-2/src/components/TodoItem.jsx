function TodoItem({ TodoName, TodoDate }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button button-margin"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
