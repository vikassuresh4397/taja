import Button from "./Button";
const styler = {
  color: "yellow",
  backgroundColor: "red",
};
// const { color, backgroundColor } = styler;
function App() {
  return (
    <div className="App">
      <Button style={{color:styler.color,backgroundColor:styler.backgroundColor}} text="hellom" name="vikas" />
    </div>
  );
}

export default App;

//now jott down Button.jsx for above code and also correct the code if anything is wrong in above code

import React from 'react';

const Button = ({style, text, name}) => {
  return (
    <button style={style}>
      {text} {name}
    </button>
  );
}

export default Button;
