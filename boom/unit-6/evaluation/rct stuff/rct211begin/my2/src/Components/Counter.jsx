// import React, {useState} from "react";
import { useReducer } from "react";
let initialvalue = {
    counter:0,
    timer:2,
};
let reducer = (state,{type,payload})=>{
switch(type){
    case "ADD" : return {...state,counter:state.counter+payload};
    case "SUB" : return {...state,counter:state.counter-payload};
    default : return state.counter;
}
}

export const Counter = ()=>{
    // const [count,setCount]= useState(0);
    const [count,dispatch]= useReducer(reducer,initialvalue);

    const handleClickADD=()=>{
        dispatch({type:"ADD",payload:1});
        console.log(count);
    }
    const handleClickSUB=()=>{
        dispatch({type:"SUB",payload:1});
        console.log(count);
    }
 

    return (
        <>
        <h1>Counter:{count.counter}</h1>
        <button onClick={()=>handleClickADD()}>Add</button>
        <button onClick={()=>handleClickSUB()}>Sub</button>
        </>
    )
}