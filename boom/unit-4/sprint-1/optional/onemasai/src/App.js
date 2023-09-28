import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
  }, []);


  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={() => {
          async function fetchData() {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            setPosts(data);
          }
          fetchData();
        }}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>


  );
}

export default App;
