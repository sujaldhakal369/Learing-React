function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-4">
          <input type="text" placeholder="enter TODO Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success kg-button kg-button button-margin"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
