import React, { useState } from 'react';
import Stopwatch from './Stopwatch';
import Timer from './Timer';

function App() {
  const [selectedTab, setSelectedTab] = useState('stopwatch');
  const [stopwatch, setStopwatch] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const handleTabChange = tab => {
    setSelectedTab(tab);
  };

  const handleStopwatch = () => {
    // logic for stopwatch
  };

  const handleTimer = () => {
    // logic for timer
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleTabChange('stopwatch')}>Stopwatch</button>
        <button onClick={() => handleTabChange('timer')}>Timer</button>
      </nav>
      {selectedTab === 'stopwatch' && <Stopwatch stopwatch={stopwatch} handleStopwatch={handleStopwatch} />}
      {selectedTab === 'timer' && <Timer timer={timer} handleTimer={handleTimer} />}
    </div>
  );
}

export default App;

