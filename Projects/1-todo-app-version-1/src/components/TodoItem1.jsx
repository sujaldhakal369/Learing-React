function TodoItem1() {
  let TodoName = "Buy Milk";
  let TodoDate = "1/10/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-4">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button button-margin">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
