import React from "react";
import { store } from "../Redux/store";
import { handleAddActionObj,handleReduceActionObj } from "../Redux/action";

const CounterButtons = () => {
  const {dispatch}=store;
  const add = ()=>{
    dispatch(handleAddActionObj())
  }
  const red=()=>{
    dispatch(handleReduceActionObj())
  }
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={add}>ADD</button>
      <button data-testid="reduceButton" onClick={red}>REDUCE</button>
    </div>
  );
};

export {CounterButtons};
