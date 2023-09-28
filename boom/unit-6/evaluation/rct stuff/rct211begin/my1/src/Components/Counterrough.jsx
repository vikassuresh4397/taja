import React, { useEffect, useState } from "react"
export default function Counter(){
    const [count,setCount] = useState(0);
    console.log("component rerender")
    useEffect(()=>{
        const id = setInterval(()=>{
            console.log("Inside useEffect")
        },1000);

        return ()=>{
            clearInterval(id)
        }
       
    },[count])
     const add = ()=>{
        return(setCount(count+1));
     }

     const sub = ()=>{
        return(setCount(count-1));
     }

    return(<> 
    <h1>Counter : {count}</h1>
    <button onClick={add}>ADD</button>
    <button onClick={sub}>Reduce</button>
    </>)
}