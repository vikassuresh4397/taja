import { useReducer, useState } from "react";
import "./App.css";
import {Heading,Box,Button,Center,Checkbox,FormControl,FormLabel,Input,Select} from "@chakra-ui/react"
import { UserRow } from "./Component/UserRow";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react'
const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  switch(action.type){
    case "name":{
      return {...state,name:action.payload}
    }
    case "gender":{
      return {...state,gender:action.payload}
    }
    case "role":{
      return {...state,role:action.payload}
    }
    case "maritalStatus":{
      return {...state,maritalStatus:action.payload}
    }
    case "reset":{
      return initialState;
    }
    default:{
      return state;
    }
  }

};

function App() {
  // note : Remove below const and instead import them from chakra import the following components from
  // const Box = () => <div />;
  // const Button = () => <div />;
  // const Center = () => <div />;
  // const Checkbox = () => <div />;
  // const FormControl = () => <div />;
  // const Heading = () => <div />;
  // const FormLabel = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // use Table Component from chakra ui to display the details
  // const TableContainer = () => <div />;

  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);
  const [state,dispatch]=useReducer(reducer,initialState)
  const [isSubmit,setIssubmit]=useState(false)
  const handleChange=(e)=>{
    dispatch({
      type:e.target.name,
      payload:e.target.name==="maritalStatus"?e.target.checked:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmittedData([...submittedData,state]);
    dispatch({
      type:"reset"
    })
    setIssubmit(true)
  }
  console.log(submittedData)
  return (
    <div >
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element" onSubmit={handleSubmit} >
          <FormControl>
            <FormLabel>Name</FormLabel>

            <Input type="text" name="name" value={state.name} onChange={handleChange} />
            <FormLabel>Gender</FormLabel>
            <Select name="gender" data-testid="gender-select" value={state.gender}  onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer Not to Say</option>
            </Select>
            <FormLabel>Role</FormLabel>
            <Select name="role" data-testid="role-select" value={state.role} onChange={handleChange}>
              <option>FrontEnd Developer</option>
              <option>BackEnd Developer</option>
              <option>FullStack Developer</option>
            </Select>

            <Checkbox name="maritalStatus" isChecked={state.maritalStatus} onChange={handleChange}>Married</Checkbox>
            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
      {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
      {
        isSubmit?

        <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>S. No</Th>
              <Th>User</Th>
              <Th>Gender</Th>
              <Th>Role</Th>
              <Th >maritalStatus</Th>
            </Tr>
          </Thead>
         <Tbody>
      {
    submittedData?.map((el,i)=>{
          return <UserRow key={i}  name={el.name} gender={el.gender} maritalStatus={el.maritalStatus?"married":"unmarried"} role={el.role} id={i+1} />
        })
      }
    </Tbody>
  </Table>
</TableContainer>







        : <Heading data-testid="no-user-container">no users found</Heading>
      }
      


    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
