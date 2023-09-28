import './App.css';
import useTimeout from './hooks/useTimeout';
import useOnlineStatus from './hooks/useOnlineStatus';

function App() {
  const { ready } = useTimeout(5000);
  const isUserOnline = useOnlineStatus();

  return (
    <div className="App">
      <h1>Custom Hooks</h1>

      <h3>Timeout</h3>
      {/* Show this div if the ready variable is true */}
      {ready && <div data-testid="timeout-div">After the timeout</div>}

      <br />
      <h3>Online Status</h3>
      {/* If the user's network status is online, show this div only */}
      {isUserOnline && (
        <div data-testid="online-status" className="online">
          Online 🟢
        </div>
      )}

      {/* If the user's network status is offline, show this div only */}
      {!isUserOnline && (
        <div data-testid="offline-status" className="offline">
          Offline 🔴
        </div>
      )}
    </div>
  );
}

export default App;
