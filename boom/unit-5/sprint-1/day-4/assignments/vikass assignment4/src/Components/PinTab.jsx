import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Pin } from "./Pin";

export const PinTab = ({ length, maxChar, setOtp }) => {
  const [pins, setPins] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !pins[index]) {
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        inputRefs.current[prevIndex].focus();
      }
    }
  };

  const handleChange = (index, event) => {
    const input = event.target.value;
    if (input.length <= maxChar) {
      const newPins = [...pins];
      newPins[index] = input;
      setPins(newPins);
      const otp = newPins.join("");
      setOtp(otp);
      const nextIndex = index + 1;
      if (nextIndex < length) {
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("Text");
    const pastedLength = pastedData.length;
    const pinLength = Math.floor(pastedLength / length);
    const newPins = Array(length).fill("").map((_, index) => {
      const start = index * pinLength;
      const end = start + pinLength;
      return pastedData.slice(start, end);
    });
    setPins(newPins);
    setOtp(pastedData);
    inputRefs.current[0].focus();
  };

  return (
    <div data-testid="pin-tab" onPaste={handlePaste}>
      {pins.map((pin, index) => (
        <Pin
          key={index}
          maxChar={maxChar}
          value={pin}
          ref={(el) => (inputRefs.current[index] = el)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onChange={(event) => handleChange(index, event)}
        />
      ))}
    </div>
  );
};

// Check length and maxChar props here
PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number.isRequired,
  setOtp: PropTypes.func.isRequired,
};
