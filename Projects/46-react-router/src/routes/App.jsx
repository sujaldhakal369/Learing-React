import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Slidebar from "../components/Slidebar";
import CreatePost from "../components/CreatePost";
import Postlist from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/posts-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Slidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Slidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
