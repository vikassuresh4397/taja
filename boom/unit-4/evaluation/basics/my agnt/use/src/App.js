import { useReducer, useState } from "react";
// import { act } from "react-dom/test-utils";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  switch(action.type){
    case "email":{
      return {...state ,email:action.payload}
    }case "password":{
      return {...state,password:action.payload}
    }
    case "reset":{
      return initialState
    }
    default:{
      return state;
    }
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({});
  const [state,dispatch]=useReducer(reducer,initialState);


  const handleChange=(e)=>{
    dispatch({
      type : e.target.type,
      payload: e.target.value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSubmittedData(state);
    dispatch({
      type:"reset"
    })
  }
  console.log(state)
  const {email,password}=submittedData
  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" data-testid="form-wrapper" 
      onSubmit={handleSubmit}
      >
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" data-testid="user-email"
          onChange={handleChange}
          value={state.email}
          />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" data-testid="user-password" 
          onChange={handleChange}
          value={state.password}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
      {
        submittedData.email && submittedData.password?  
        <div>
        <div data-testid="submitted-data-email">User Email:{email}</div>
        <div data-testid="submitted-data-password">User Password:{password}</div>
      </div>:
      <div data-testid="no-details-container">No details found</div>
      }
      
    </div>

  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
