import "./App.css";
import About from "./components/About";
import Home from "./components/home";
// import NoteState from "./state/NoteState";
import NoteContext from "./components/noteContext";

function App() {
  return (
    <>
      {/* <NoteState> */}
      <Home></Home>
      <About></About>
      {/* <NoteContext></NoteContext> */}
      {/* </NoteState> */}
    </>
  );
}

export default App;
