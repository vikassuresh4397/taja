import React, { useState } from 'react';
import InputTags from './components/InputTags';
import './App.css';

function App() {
  const [superheroList, setSuperheroList] = useState([]);

  return (
      <div className="App">
        <InputTags superheroList={superheroList} setSuperheroList={setSuperheroList} />
      </div>
  );
}

export default App;