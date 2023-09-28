import React, { useEffect, useState } from "react";
                              
export default function Counter(){
                              
    const [count,setCount] = useState(0);
                              
    console.log("A");
                                 
    useEffect(()=>{
        console.log("1");
        return ()=>{
            console.log("2");
        }
    },[])
                                     
    console.log("B");
                                    
    useEffect(()=>{
        console.log("3");
        return ()=>{
            console.log("4");
        }
    },[])
                                         
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
                                           