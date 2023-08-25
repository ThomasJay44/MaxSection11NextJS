import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";

function AllPostsPage(props) {
  return <AllPosts posts={props.post} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
