import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/posts-list-store";
import WelcomeMessage from "./WelcomeMessage";

const Postlist = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Postlist;
