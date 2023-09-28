import { useSelector } from "react-redux";
import React from "react";


const CounterValue = () => {
  const { counter } = useSelector((state) => state.counter);
 
return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
