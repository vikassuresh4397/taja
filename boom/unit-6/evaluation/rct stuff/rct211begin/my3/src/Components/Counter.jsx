import React, { useState } from "react";
export const Counter = ()=>{
const [count,setCount] = useState(0);
    return(
        <>
<div>Counter:{count}</div>
<button onClick={()=>setCount((prev)=>prev+1)}>CLick me</button>
        </>
    )
}