# react-usereducer-student-info

## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Installation

- you can use any node version >= 14 and <=16
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - run `npm install --engine-strict` to install the node modules
  - `npm start`
  - `npm run test` -> to run the test

## Maximum Marks - 10

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Reducer initialstate should match the initial state as per problem  - 2 mark
 ✅ Form is present with proper input fields to take input of student-data - 1 mark
 ✅ Reducer should update on typing name in the input box - 1 mark
 ✅ Reducer should update on typing batch in the input box - 1 mark
 ✅ Reducer should update on typing course in the input box  - 1 mark
 ✅ Reducer should update on typing image in the input box - 1 mark
 ✅ Reducer should update on selecting rating from the options - 1 marks
 ✅ Reducer should update on checking the status checkbox - 1 mark
```

## Folder Structure (Important Files)

```
>Src
├── >Components
│    └── AddStudent.jsx
│    └── Navbar.jsx
└── App.js
```

## Problem Statement

Create a dashboard where you can add students information like name, image, batch, course, rating and active status. The reducer should update accordingly.

#### useReducer

- The initial state will be as

```
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive",
```

- The following action types will be triggered for corresponding values

```
"NAME"
"BATCH"
"COURSE"
"IMAGE"
"RATING"
"STATUS"
"RESET" - (For resetting the state)
```

#### AddStudent.jsx

- Create a form where the user will enter all the student details
- Provide input boxes for following :-

```
Name: -
Batch: -
Course: -
Image: -
```

- Provide the input tags below `label` tag within the wrapper `div` provided

- Provide a select tag for rating with the following options and corresponding values
- This select tag will have `data-testid="rating-select"`

```
`Option`-`Value`
- 1   -  "1"
- 2   -  "2"
- 3   -  "3"
- 4   -  "4"
- 5   -  "5"
```

- Provide a checkbox for current status, if the checked status will be `active`, and if not it will be `inactive`

- Provide a submit button for submitting the form.
- After submitting the form both the form and the reducer state should be reset.

<img width="1728" alt="Screenshot 2023-04-09 at 11 12 38 AM" src="https://user-images.githubusercontent.com/74458714/230784948-35539485-c797-4dc0-b4b6-8c20068b063f.png">

### Note : The submissions are invalid if `useReducer` hook is not used.

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time























import React, { useReducer, useState } from "react";

export const initialState = {
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive",
};
// "NAME"
// "BATCH"
// "COURSE"
// "IMAGE"
// "RATING"
// "STATUS"
// "RESET" - (For resetting the state)
export const reducer = (state, {type,payload}) => {
  switch(type){
    case "NAME" : return { ...state, name:payload}
    case "BATCH" : return {...state, batch:payload}
    case "COURSE" : return {...state, course:payload}
    case "IMAGE" : return {...state, image:payload}
    case "RATING" : return {...state, rating:payload}
    case "STATUS" : return {...state, status:payload ? "active" : "inactive"}
    case "RESET" : return initialState
    default:
      return state
  }
};

export const AddStudent = () => {
  const [list, setList] = useState(initialState)
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const handleSubmit = (e) => {
    e.preventDefault()
    // setList([...list, state])
    // dispatch({type:"RESET"})
  }


  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <form data-testid="input-form" onSubmit={handleSubmit}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Name : </label>
            {/* Provide Input tag Here */}
            <input type="text" name="name" value={state.name} onChange={(e)=>dispatch({type:"NAME", payload: e.target.value})} />
          </div>

          <div className="batch-wrapper" data-testid="batch-wrapper">
            <label>Batch : </label>
            {/* Provide Input tag Here */}
            <input type="text" name="batch" value={state.batch} onChange={(e)=>dispatch({type:"BATCH", payload: e.target.value})} />
          </div>

          <div className="course-wrapper" data-testid="course-wrapper">
            <label>Course : </label>
            {/* Provide Input tag Here */}
            <input type="text" name="course" value={state.course} onChange={(e)=>dispatch({type:"COURSE", payload: e.target.value})} />
          </div>

          <div className="image-wrapper" data-testid="image-wrapper">
            <label>Image : </label>
            {/* Provide Input tag Here */}
            <input type="text" name="image" value={state.image} onChange={(e)=>dispatch({type:"IMAGE", payload: e.target.value})} />
          </div>

          <div className="rating-wrapper" data-testid="rating-wrapper">
            <label>Rating : </label>
            {/* Provide Select tag Here */}
            <select name="rating" onChange={(e)=>dispatch({type:"IMAGE", payload: e.target.value})} data-testid="rating-select">
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status :</label>
            <div>
              {/* Provide checkbox Here */}
              <label>Active</label>
              <input type="checkbox" name="status" checked={state.status === "active"?true:false} onChange={(e)=>dispatch({type:"STATUS",payload: e.target.checked  })} />
            </div>
          </div>

          {/* Provide Button to submit Here */}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};