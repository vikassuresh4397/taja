import { useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({});

  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" data-testid="form-wrapper">
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" data-testid="user-email" />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" data-testid="user-password" />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
      <div>
        <div data-testid="submitted-data-email">User Email:</div>
        <div data-testid="submitted-data-password">User Password:</div>
      </div>

      <div data-testid="no-details-container"></div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
