import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/posts-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = () => {
  const { postList, Fetching } = useContext(PostListData);

  return (
    <>
      {Fetching && <LoadingSpinner />}
      {!Fetching && postList.length === 0 && <WelcomeMessage />}
      {!Fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default Postlist;
