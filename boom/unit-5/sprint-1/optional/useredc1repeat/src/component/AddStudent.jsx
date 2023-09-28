
import React, { useReducer } from "react";


export const reducer = (state, {type,payload}) => {
  switch(type){
    case "NAME" : 
    return { ...state, 
      name:payload}
    case "BATCH" : 
    return {...state, 
      batch:payload}
    case "COURSE" : return {...state, 
      course:payload}
    case "IMAGE" :
       return {...state, 
        image:payload}
    case "RATING" : 
    return {...state, 
      rating:payload}
    case "STATUS" : 
    return {...state, 
      status:payload ? "active" : "inactive"}
    case "RESET" : return initialState;
    default:
      return state;
  }
};

export const initialState = {
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive",
};



export const AddStudent = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <form data-testid="input-form" onSubmit={handleSubmit}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Name : </label>
         
            <input name="name" type="text"  
            value={state.name} 
            onChange={(e)=>
            dispatch({type:"NAME", payload: e.target.value})} />
          </div>

          <div className="batch-wrapper" data-testid="batch-wrapper">
            <label>Batch : </label>
         
            <input name="batch"
             type="text"  
             value={state.batch} 
             onChange={(e)=>
             dispatch({type:"BATCH", payload: e.target.value})} />
          </div>

          <div className="course-wrapper" data-testid="course-wrapper">
            <label>Course : </label>
     
            <input name="course" 
            type="text"  
            value={state.course} 
            onChange={(e)=>
            dispatch({type:"COURSE", payload: e.target.value})} />
          </div>

          <div className="image-wrapper" data-testid="image-wrapper">
            <label>Image : </label>
          
            <input name="image" 
            type="text"  
            value={state.image} 
            onChange={(e)=>dispatch({type:"IMAGE", payload: e.target.value})} />
          </div>

          <div className="rating-wrapper" data-testid="rating-wrapper">
            <label>Rating : </label>
           
            <select name="rating" onChange={(e)=>dispatch({type:"IMAGE", payload: e.target.value})} data-testid="rating-select">
              <option value="">choose</option>

              <option value="1">1</option>

              <option value="2">2</option>

              <option value="3">3</option>

              <option value="4">4</option>

              <option value="5">5</option>

            </select>
          </div>

          <div className="current-status-wrapper" data-testid="current-status-wrapper" >
            <label>Current Status :</label>
            <div>
             
              <label>Active</label>
              <input name="status"  type="checkbox"  
              checked=
              {state.status === "active" ? true : false} 
              onChange={(e)=>
              dispatch({type:"STATUS",payload: e.target.checked  })} />
            </div>
          </div>

       
      
          <input type="submit" />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};











