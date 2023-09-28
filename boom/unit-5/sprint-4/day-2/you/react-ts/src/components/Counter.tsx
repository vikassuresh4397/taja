import React, { useState } from 'react';
import Button from './Button';

interface Props {}

const Counter: React.FC<Props> = () => {
  const [counterValue, setCounterValue] = useState(0);

  const handleAddClick = () => {
    setCounterValue(counterValue + 5);
  };

  const handleReduceClick = () => {
    setCounterValue(counterValue - 5);
  };

  return (
    <div>
      <div data-testid="counter-value">{counterValue}</div>
      <Button data-testid="add-button" onClick={handleAddClick}>ADD</Button>
      <Button data-testid="reduce-button" onClick={handleReduceClick}>REDUCE</Button>
    </div>
  );
};

export default Counter;
