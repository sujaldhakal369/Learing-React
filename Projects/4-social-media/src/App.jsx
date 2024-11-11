import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slidebar from "./components/Slidebar";

function App() {
  return (
    //just a comment
    <div className="app-container">
      <Slidebar></Slidebar>
      <div className="content">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
