function TodoItem1() {
  let TodoName = "Buy Milk";
  let TodoDate = "1/10/2024";
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

export default TodoItem1;
