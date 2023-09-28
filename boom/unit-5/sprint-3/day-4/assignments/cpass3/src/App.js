import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import Post from "./components/Post.jsx";

function App() {
  const [timer, setTimer] = useState(0);
  const [posts, setPosts] = useState([]);

  // Memoized delay function that returns a random color after a given delay
  const getDelayedColor = useCallback(
    (delay) =>
      new Promise((resolve) => {
        setTimeout(() => {
          const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
          resolve(colors[Math.floor(Math.random() * colors.length)]);
        }, delay);
      }),
    []
  );

  // Memoized function to create a new post
  const createNewPost = useCallback(
    async (title, body) => {
      const color = await getDelayedColor(1000);
      const newPost = {
        id: Date.now(),
        title,
        body,
        verifyPost: false,
        color,
      };
      setPosts((prevState) => [...prevState, newPost]);
    },
    [getDelayedColor]
  );

  // Memoized function to toggle the verifyPost state of a post
  const togglePostVerification = useCallback(
    (postId) => {
      setPosts((prevState) =>
        prevState.map((post) =>
          post.id === postId
            ? { ...post, verifyPost: !post.verifyPost }
            : post
        )
      );
    },
    []
  );

  // Memoized array of Post components with the required props
  const memoizedPosts = useMemo(
    () =>
      posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          verifyPost={post.verifyPost}
          togglePostVerification={togglePostVerification}
          color={post.color}
        />
      )),
    [posts, togglePostVerification]
  );

  // Increment timer every second
  useState(() => {
    const intervalId = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleAddPost = () => {
    const title = document.querySelector('[data-testid="title-input"]').value;
    const body = document.querySelector('[data-testid="post-input"]').value;
    createNewPost(title, body);
  };

  return (
    <div className="App" data-testid="app">
      <div data-testid="timer">Timer: {timer}s</div>
      <div>
        <input placeholder="Enter post title" data-testid="title-input" />
        <br />
        <textarea placeholder="Enter post body" data-testid="post-input" />
        <br />
        <button data-testid="add-post-button" onClick={handleAddPost}>
          Add Post
        </button>
      </div>

      <hr />
      <h1>Posts</h1>
      <div data-testid="posts-container">{memoizedPosts}</div>
    </div>
  );
}

export default App;
