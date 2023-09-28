import React from "react";
export default function Appcreate(props) {

let wow = props.items.map((el, index) => (<li key={index}>{el}</li>));
return (React.createElement("ul",{},wow))
  }
  