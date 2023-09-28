import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases

const reducer = (state, action) => {
   switch(action.type){
    case "name":
      return {
        ...state,
        name:action.payload,
      };

      case "gender" : 
      return {
        ...state,
        gender:action.payload,
      };

      case "role" : 
      return {
        ...state,
        role:action.payload,
      };

      case "maritalStatus" :
        return{
          ...state,
          maritalStatus:action.payload,
        };

        case "reset" : 
        return{
          ...initialState,
        };

        default:
          return state;
   }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
const [formData,dispatch] = useReducer(reducer,initialState);
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
   
    dispatch({type:"reset"});

    // console.log(submittedData)
  };
 
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input 
              type="text"
               name="name"
               onChange={(e)=>dispatch({type:"name",payload:e.target.value})}
              
              value={formData.name}
              placeholder="NAme"

               />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" data-testid="gender-select"
              onChange={(e)=>{
                dispatch({type:"gender",payload:e.target.value})
              }}
              value={formData.gender}
              
              >
                <option>Male</option>
                <option>Female</option>
                <option>Prefer Not to say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" data-testid="role-select"
              onChange={(e)=>{
                dispatch({type:"role",payload:e.target.value})
              }}
              value={formData.role}
              >
                <option>FrontEnd Developer</option>
                <option>BackEnd Developer</option>
                <option>FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} 
                   name="maritalStatus"
                   onChange={(e)=>dispatch({type:"maritalStatus",payload:e.target.checked})}
                   value={formData.maritalStatus}
                />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
         
            {
              submittedData.length > 0?(
               <table>
                <thead>
                <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Marital Status</th>
          </tr>
                </thead>
                <tbody>
{
  
  submittedData.map((e)=>(<UserRow name={e.name} gender={e.gender} role={e.role} maritalStatus={e.maritalStatus} id={e.id}></UserRow>))
}
                </tbody>
               </table>
              ):(<h2 data-testid="no-user-container">No users found</h2>)
            }
         
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export {reducer, initialState}

