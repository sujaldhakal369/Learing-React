import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  return currentPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "going to Mumbai",
    body: "Hi i am in Mumbai",
    reactions: 10,
    userId: "user-3",
    tags: ["vacation", "mumbai"],
  },

  {
    id: "2",
    title: "going to college",
    body: "Hi i am learning",
    reactions: 108,
    userId: "user-6",
    tags: ["college", "learn"],
  },
];

export default PostListProvider;
