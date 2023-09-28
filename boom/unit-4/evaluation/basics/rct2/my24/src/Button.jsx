import React from 'react';

function Button(props){
  console.log(props)
const {style, text, name}=props;

return (
  <button style={style}>
    {text} {name}
  </button>
);
}

export default Button;