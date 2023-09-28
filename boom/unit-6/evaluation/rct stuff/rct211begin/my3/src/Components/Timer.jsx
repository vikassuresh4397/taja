import React, { useEffect, useState } from "react";

export const Timer=()=>{
    const[show,setShow]=useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setShow((prev)=>(!prev));
        },2000)
    },[]);
    
    return(<div>{show && <h1>This is Timer -1</h1>}</div>)
}