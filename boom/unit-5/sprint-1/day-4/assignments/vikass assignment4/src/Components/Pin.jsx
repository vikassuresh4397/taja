import React, { useState } from "react";

export const Pin = ({ maxChar }) => {
  const [pin, setPin] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;
    if (input.length <= maxChar) {
      setPin(input);
    }
  };

  return <input data-testid="pin-input" value={pin} onChange={handleChange} maxLength={maxChar} />;
};

// Check maxChar prop here
Pin.propTypes = {
  maxChar: PropTypes.number.isRequired,
};
