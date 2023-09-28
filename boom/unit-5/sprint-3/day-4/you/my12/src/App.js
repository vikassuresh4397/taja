import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import Post from "./Post";


function App() {

  const [timer, setTimer] = useState(0);

  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTitleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleBodyChange = useCallback((e) => {
    setBody(e.target.value);
  }, []);

  const handleAddPost = useCallback(() => {
    const newPost = {
      id: posts.length + 1,
      title,
      body,
      verifyPost: false,
      color: getRandomColor(),
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  }, [posts, title, body]);

  const handleVerifyPost = useCallback(
    (id) => {
      const newPosts = [...posts];
      const postIndex = newPosts.findIndex((post) => post.id === id);
      newPosts[postIndex].verifyPost = !newPosts[postIndex].verifyPost;
      setPosts(newPosts);
    },
    [posts]
  );

  const getRandomColor = useCallback(() => {
    const colors = [
      "red",
      "green",
      "blue",
      "yellow",
      "purple",
      "orange",
      "pink",
      "black",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  const memoizedPosts = useMemo(() => {
    return posts.map((post) => (
      <Post
        key={post.id}
        post={post}
        handleVerifyPost={handleVerifyPost}
        getRandomColor={getRandomColor}
      />
    ));
  }, [posts, handleVerifyPost, getRandomColor]);

  return (
    <div className="App" data-testid="app">
      <div data-testid="timer">
        Timer: {timer}
      </div>
      <div>
        <input
          placeholder="Enter post title"
          data-testid="title-input"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <textarea
          placeholder="Enter post body"
          data-testid="post-input"
          value={body}
          onChange={handleBodyChange}
        ></textarea>
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
