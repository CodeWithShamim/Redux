import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>All Posts</h1>
      <div>
        {isLoading && <h1>Loading.....</h1>}
        {error && <h1>{error}</h1>}
        {posts && posts.map((post) => <p key={post.id}>{post.title}</p>)}
      </div>
    </div>
  );
};

export default PostsView;
