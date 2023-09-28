import React from "react";
import { store } from "../Redux/store";
const CounterValue = () => {
  const {getState} = store;
  console.log("store",store);
  const counter = 0;
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
