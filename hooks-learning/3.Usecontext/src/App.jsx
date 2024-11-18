import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./state/NoteState";

function App() {
  return (
    <NoteState>
      <Home />
      <About />
    </NoteState>
  );
}

export default App;
