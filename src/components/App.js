import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About image={blogData.image} about={blogData.about} /> {/* Make sure this is rendered */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
