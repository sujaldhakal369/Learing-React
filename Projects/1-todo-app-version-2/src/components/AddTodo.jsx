function AddTodo() {
  return (
    <div classNameName="container text-center">
      <div classNameName="row kg-row">
        <div classNameName="col-4">
          <input type="text" placeholder="enter TODO Here" />
        </div>
        <div classNameName="col-4">
          <input type="date" />
        </div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-success kg-button kg-button button-margin"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
