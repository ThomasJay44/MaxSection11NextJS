import PostItem from "./post-item";

import classes from "./posts-grid.module.css";

function PostsGrid() {
  const { posts } = props;

  return (
    <ul className="classes.gid">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
