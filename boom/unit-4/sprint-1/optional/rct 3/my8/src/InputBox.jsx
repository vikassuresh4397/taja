import React, { useState } from "react";

function InputBox() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <h2>{text}</h2>
      <button onClick={handleClear}>CLEAR</button>
    </div>
  );
}

export default InputBox;
