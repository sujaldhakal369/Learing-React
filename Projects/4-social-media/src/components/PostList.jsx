import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/posts-list-store";

const Postlist = () => {
  const { postList } = useContext(PostListData);

  return (
    <>
      {postList.map((post) => (
        <Post />
      ))}
    </>
  );
};

export default Postlist;
