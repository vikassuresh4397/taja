import React from "react";
export default function Addtodo(props){
    const {handlechange}=props;
    const [text,setText]=React.useState("");

    function wow(e){
      
        setText(e.target.value);
    }
    return( <>
        <input placeholder="add todo" value={text} onChange={wow}></input>
        <button onClick={()=>{
        handlechange(text)
        setText("");
        }}>click me</button>
        </>)
}