import React from "react"
import { useDispatch, useSelector } from "react-redux";

import { addAction,redAction } from "../redux/action";
export const Counter=()=>{
   
    const count = useSelector((state)=>{
   console.log(state.counter);

    return state.counter;
   });

    const dispatch = useDispatch()

    const handleAdd = ()=>{
       dispatch(addAction(1))
    };
    
    const handleReduce = ()=>{
        dispatch(redAction(1))
    };

    return(<>
        <h1>Counter:{count}</h1>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleReduce}>REDUCE</button>
    </>)
}