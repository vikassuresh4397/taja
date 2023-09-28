import React, { useState } from "react";
import { store } from "../redux/store";
import { addAction } from "../redux/action";
import { redAction } from "../redux/action";
export const Counter = ()=>{
    const [render,setRender]=useState(0);
    console.log(store)
    const {getState,dispatch,subscribe} = store;
    // console.log(getState());

    subscribe(()=>{
        setRender((prev)=>prev+1);
        console.log("render",render) 
    })
    const add = ()=>{
    dispatch(addAction())
    }
    const red = ()=>{
        dispatch(redAction())
        }
    return (<>
        <h1>Count:{getState().counter}</h1>
        <button onClick={add}>Addition</button>
        <button onClick={red}>Reduction</button>
    </>)
}