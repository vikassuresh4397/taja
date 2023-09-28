import React, { useReducer } from "react";
import axios from "axios";
import { Center, Square, Circle } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';


const initialState = {
  formData: {
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    isBachelorAllowed: false,
    isMarriedAllowed: false,
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFormData':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      }
    default:
      return state
  }
}

export default function Form() {
  const [state, dispatch] =   useReducer(reducer, initialState)
  const { formData } = state
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`,
        {
          ...formData,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Center>
      <div className="addHouseContainer">
        <form className="form" onSubmit={handleSubmit}>
          <FormControl width="500px">
            <Stack spacing={3}>
              <Input
                className="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  dispatch({
                    type: 'updateFormData',
                    field: 'name',
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
                    type: 'updateFormData',
                    field: 'ownerName',
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
                    type: 'updateFormData',
                    field: 'address',
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
                    type: 'updateFormData',
                    field: 'areaCode',
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
                    type: 'updateFormData',
                    field: 'rent',
                    value: e.target.value,
                  })
                }
              />
              <Checkbox
                className="bachelor"
                type="checkbox"
                value={formData.isMarriedAllowed}
                isChecked={formData.isMarriedAllowed}
                onChange={(e) =>
                  dispatch({
                    type: 'updateFormData',
                    field: 'isMarriedAllowed',
                    value: e.target.checked,
                  })
                }
              >
                <FormLabel>Married Tenants Allowed</FormLabel>
              </Checkbox>
              <br />
              <Checkbox
                onChange={(e) => {
                  dispatch({
                    type: 'updateFormData',
                    field: 'isBachelorAllowed',
                    value: e.target.checked,
                  });
                }}
                className="married"
                type="checkbox"
                value={formData.isBachelorAllowed}
                isChecked={formData.isBachelorAllowed}
              >
                <FormLabel>Bachelor Tenants Allowed</FormLabel>
              </Checkbox>
              <br />
              <Button className="submitBtn" onClick={handleSubmit}> Submit</Button>
            </Stack>
          </FormControl>
        </form>
      </div>
    </Center>
  );
}