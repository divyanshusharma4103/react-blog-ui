import React, { useState } from "react";
import "./App.css";
import posts from "./data/posts.json";
import BlogCard from "./components/BlogCard";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || post.category === category)
  );

  return (
    <div className="container">
      <h1>✨ Modern React Blog</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search Posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
        </select>
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;