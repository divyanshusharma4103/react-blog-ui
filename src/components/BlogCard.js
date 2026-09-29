import React from "react";

function BlogCard({ post }) {
  return (
    <div className="card">
      <h2>{post.title}</h2>
      <span className="category">{post.category}</span>
      <p>{post.description}</p>
    </div>
  );
}

export default BlogCard;