import React, { useState } from "react";
import { store } from "../Redux/store";

const CounterValue = () => {
  const [state,setState] = useState(0);
  
  // console.log(store);
  const {getState,subscribe} = store;
  // console.log(getState().counter);
  
  const forceUpdate = ( ) => setState(prev=>prev+1)
  subscribe(forceUpdate);
  
  // const counter = 0; //get the counter value from the Redux store
  return <div data-testid="counterValue">{getState().counter}</div>;
};

export {CounterValue};
