import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    
   
  } from "@chakra-ui/react";
  
  import axios from "axios";
  import React, { useReducer } from "react";
  
  const initialState ={
    formData:{
      name:"",
      ownerName:"",
      address : "",
      areaCode:"",
      rent:"",
      isBachelorAllowed:false,
      isMarriedAllowed:false,
    }
  }
  
  const reducer = (state,action) =>{
  switch(action.type){
      case "updateFormData" : return {
        ...state,formData:{
          ...state.formData,
          [action.field]:action.value
        }
      }
      default : return state;
  }
  
  
  }
  export default function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { formData } = state;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`, {
          ...formData,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <div className="addHouseContainer">
        <form className="form">
          <FormControl>
            <Input
              className="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                dispatch({
                  type: "updateFormData",
                  field: "name",
                  value: e.target.value,
                })
              }
            />
  
            <Input
              className="ownerName"
              placeholder="Owners name"
              value={formData.ownerName}
              onChange={(e) =>
                dispatch({
                  type: "updateFormData",
                  field: "ownerName",
                  value: e.target.value,
                })
              }
            />
  
            <Input
              className="address"
              placeholder="Address"
              value={formData.address}
              onChange={(e) =>
                dispatch({
                  type: "updateFormData",
                  field: "address",
                  value: e.target.value,
                })
              }
            />
  
            <Input
              className="areaCode"
              placeholder="Area code"
              value={formData.areaCode}
              onChange={(e) =>
                dispatch({
                  type: "updateFormData",
                  field: "areaCode",
                  value: e.target.value,
                })
              }
            />
  
            <Input
              className="rent"
              placeholder="Rent"
              value={formData.rent}
              onChange={(e) =>
                dispatch({
                  type: "updateFormData",
                  field: "rent",
                  value: e.target.value,
                })
              }
            />
  
            <Checkbox
              className="bachelor"
              isChecked={formData.isMarriedAllowed}
              onChange={(e) =>
                dispatch({
                  type: "updateFormData",
                  field: "isMarriedAllowed",
                  value: e.target.isChecked,
                })
              }
            >
              <FormLabel>Married Tenants Allowed</FormLabel>
            </Checkbox>
  
            <br />
  
            <Checkbox
              className="married"
              isChecked={formData.isBachelorAllowed}
              onChange={(e) =>
                dispatch({
                  type: "updateFormData",
                  field: "isBachelorAllowed",
                  value: e.target.isChecked,
                })
              }
            >
              <FormLabel>Bachelor Tenants Allowed</FormLabel>
            </Checkbox>
  
            <br />
  
            <Button className="submitBtn" onClick={handleSubmit}>
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
  
  