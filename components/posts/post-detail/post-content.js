import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";


function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <arcticle className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
    </arcticle>
  );
}

export default PostContent;
 