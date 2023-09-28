import React, { useReducer, useState } from "react";
import {ProjectList} from "./ProjectList";

const initialState = {
  name: "",
  tech_stack: "",
  assigned_to: "",
  status: "pending",
};

const reducer = (state, {type, payload}) => {
    switch (type) {
      case "NAME":
        return { ...state, name: payload };
      case "TECH_STACK":
        return { ...state, tech_stack: payload };
      case "ASSIGNED_TO":
        return { ...state, assigned_to: payload };
      case "STATUS":
        return { ...state, status: payload };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

export const AddProject = () => {
     const [project, setProject] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setProject([...project, state]);
      dispatch({ type: "RESET" });
    };

  return (
    <div>
      <h1>Add Project</h1>
      <div className="form-wrapper" data-testid="form-wrapper">
        <form data-testid="form-element" onSubmit={handleSubmit}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Project Name</label>
            {/* Add Input box here */}
            <input  name="name"  type="text" 
            value={state.name} 
            onChange={(e)=>
                dispatch({type:"NAME", payload:e.target.value})
            }
            />
          </div>
     <div className="tech-stack-wrapper" data-testid="tech-stack-wrapper">
            <label>Tech Stack</label>
        {/* Provide select tag with name attribute `name="tech_stack"` */}
          <select 
          name="tech_stack" 
          value={state.tech_stack} 
          onChange={(e)=>
            dispatch({type:"TECH_STACK",payload:e.target.value})
        }
            data-testid="tech-stack-select"
          >
            <option value="">--Choose Tech Stack--</option>
            <option value="react">React</option>
            <option value="node">Node</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>

          </div>
          <div
            className="assigned-to-wrapper"
            data-testid="assigned-to-wrapper"
          >
            <label>Assignmed to</label>
         
            <select 
            name="assigned_to"  
            value={state.assigned_to}
           onChange={(e)=>
            dispatch({type:"ASSIGNED_TO",payload:e.target.value})
        }
           data-testid="assigned-to-select"
            >
              <option value="">Choose Asigned to</option>
              <option value="nrupul">Nrupul</option>
              <option value="albert">Albert</option>
              <option value="aman">Aman</option>
            </select>

          </div>
          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status</label>
            {/* Provide checkbox  with name attribute `name="status"` */}
            <input 
            type="checkbox" 
            name="status" 
            checked={state.status==="completed"} 
            onChange={(e)=>
            dispatch({
                type:"STATUS",
                payload:e.target.checked?"completed":"pending"
            })
                }
                ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <h1>Project List</h1>
      {/* Show the project list here using `ProjectList` component */}
      <ProjectList project={project} setProject={setProject} />
    </div>
  );
};

export { initialState, reducer };
