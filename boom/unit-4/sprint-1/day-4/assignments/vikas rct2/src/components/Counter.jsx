import React,{useState} from "react"


export default function Counter(){
const [count,setCnt]=useState(0);
return (
    <div>
        <h2 data-testid ="counter-header">Counter</h2>
        <h3 data-testid = "count">{count}</h3>
        <button data-testid = "add-btn" onClick={()=>setCnt(count+1)}>+</button>
        <button data-testid = "subtract-btn" onClick={()=>setCnt(count-1)}>-</button>
        <button data-testid = "double-btn" onClick={()=>setCnt(count*2)}>Double</button>
    </div>
)



}