import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(state);
    dispatch({ type: "reset" });
  };

  const [submittedData, setSubmittedData] = useState({});

  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" onSubmit={handleSubmit} data-testid="form-wrapper">
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" data-testid="user-email" value={state.email} onChange={(event) => dispatch({ type: "email", payload: event.target.value })} />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" data-testid="user-password" value={state.password} onChange={(event) => dispatch({ type: "password", payload: event.target.value })} />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData.email && submittedData.password ? (
        <div>
          <div data-testid="submitted-data-email">User Email: {submittedData.email}</div>
          <div data-testid="submitted-data-password">User Password: {submittedData.password}</div>
        </div>
      ) : (
        <div data-testid="no-details-container">No details found</div>
      )}
    </div>
  );
}

export default App;
export { reducer, initialState };