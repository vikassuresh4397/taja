import { useState } from "react";
import "./App.css";
import { PinTab } from "./Components/PinTab";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div data-testid="app-component" className="App">
      <PinTab length={6} maxChar={1} setOtp={setOtp} />
      <h3 data-testid="otp">OTP: {otp}</h3>
    </div>
  );
}

export default App;
