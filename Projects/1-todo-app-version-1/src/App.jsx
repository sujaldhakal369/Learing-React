import AppName from "./components/AppNmae";

function App() {
  return (
    <center>
      <AppName> </AppName>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            <input type="text" placeholder="enter TODO Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              ADD
            </button>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col-4">Buy Milk</div>
          <div class="col-4">1/10/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col-4">Go to College</div>
          <div class="col-4">1/10/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
