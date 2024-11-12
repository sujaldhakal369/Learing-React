import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slidebar from "./components/Slidebar";
import CreatePost from "./components/CreatePost";
import Postlist from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/posts-list-store";

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
          {selectedTab === "Home" ? (
            <Postlist></Postlist>
          ) : selectedTab === "Create Post" ? (
            <CreatePost></CreatePost>
          ) : null}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
