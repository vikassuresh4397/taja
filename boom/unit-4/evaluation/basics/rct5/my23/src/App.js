import './App.css';
import React from 'react';

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

function App() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState(false);

  async function fetchData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.error(`Fetch error: ${error}`);
    }
  }

  return (
    <div className="App">
      <h1>POST</h1>
      <button onClick={fetchData}>FETCH Data</button>
      <div>
        <ul>
          {posts.map((e) => (
            <li key={e.id}>{e.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
