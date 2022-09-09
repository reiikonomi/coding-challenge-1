import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="text-lg text-black border-y-2 border-slate-400 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-800">
      <Link to={`/post/${post.fact}`}>
        <h2>{post.fact}</h2>
      </Link>
    </article>
  );
};

export default Post;
