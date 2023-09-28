
import './App.css';



function App() {
  return (
    <div className="App">
      <ImagePreview></ImagePreview>
    </div>
  );
}


import React, { useState } from 'react';

const ImagePreview = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileSelect = e => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <form>
        <input type="file" onChange={handleFileSelect} />
      </form>
      {preview && <img src={preview} alt="Preview" />}
    </div>
  );
};



export default App;
