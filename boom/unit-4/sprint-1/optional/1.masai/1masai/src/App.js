import React, { useState } from "react";
import "./App.css";
import Post from "./Components/Post";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  return (
    <div className="App">
      <button id="get-posts-btn" onClick={fetchPosts}>
        GET POSTS
      </button>
      <div id="post-container">
        {posts.map((el) => (
          <Post key={el.id} title={el.title} body={el.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
