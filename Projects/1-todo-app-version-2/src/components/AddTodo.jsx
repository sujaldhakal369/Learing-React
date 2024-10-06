function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input type="text" placeholder="enter TODO Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button kg-button button-margin"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
