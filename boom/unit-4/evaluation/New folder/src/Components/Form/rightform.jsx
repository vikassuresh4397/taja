import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Center,
    Stack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import axios from "axios";
  
  export default function Form() {
    const [formData, setFormData] = useState({
      name: "",
      ownerName: "",
      address: "",
      areaCode: "",
      rent: "",
      isBachelorAllowed: false,
      isMarriedAllowed: false,
    });
  
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
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <Input
                  className="ownerName"
                  placeholder="Owners name"
                  value={formData.ownerName}
                  onChange={(e) =>
                    setFormData({ ...formData, ownerName: e.target.value })
                  }
                />
                <Input
                  className="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
                <Input
                  className="areaCode"
                  placeholder="Area code"
                  value={formData.areaCode}
                  onChange={(e) =>
                    setFormData({ ...formData, areaCode: e.target.value })
                  }
                />
                <Input
                  className="rent"
                  placeholder="Rent"
                  value={formData.rent}
                  onChange={(e) =>
                    setFormData({ ...formData, rent: e.target.value })
                  }
                />
                <Checkbox
                  className="bachelor"
                  type="checkbox"
                  value={formData.isMarriedAllowed}
                  isChecked={formData.isMarriedAllowed}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      isMarriedAllowed: e.target.checked,
                    })
                  }
                >
                  <FormLabel>Married Tenants Allowed</FormLabel>
                </Checkbox>
                <br />
                <Checkbox
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      isBachelorAllowed: e.target.checked,
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
  


  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'updateFormData':
        return {
          ...state,
          formData: {
            ...state.formData,
            [action.field]: action.value
          }
        };
      default:
        return state;
    }
  };