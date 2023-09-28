import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
export default function Form() {
  const [n, setN] = useState("");
  const [ow, setOw] = useState("");
  const [add, setAdd] = useState("");
  const [area, setArea] = useState("");
  const [rent, setR] = useState("");
  const [bach, setBach] = useState(false);
  const [married, setMar] = useState(false);

  const handleSubmit = async () => {
    return await axios.post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`,
      {
        name: n,
        ownerName: ow,
        address: add,
        areaCode: area,
        rent: rent,
        isBachelorAllowed: bach,
        isMarriedAllowed: married,
      }
    );
  };
  return (
    <div className="addHouseContainer">
      <form className="form">
        <FormControl>
          <Input
            className="name"
            placeholder="Name"
            onChange={(e) => setN(e.target.value)}
          />
          <Input
            className="ownerName"
            placeholder="Owners name"
            onChange={(e) => setOw(e.target.value)}
          />
          <Input
            className="address"
            placeholder="Address"
            onChange={(e) => setAdd(e.target.value)}
          />
          <Input
            className="areaCode"
            placeholder="Area code"
            onChange={(e) => setArea(e.target.value)}
          />
          <Input
            className="rent"
            placeholder="Rent"
            onChange={(e) => setR(e.target.value)}
          />
          <Checkbox
            className="bachelor"
            onChange={(e) => setBach(e.target.checked)}
          >
            <FormLabel>Married Tenants Allowed</FormLabel>
          </Checkbox>
          <br />
          <Checkbox
            className="married"
            onChange={(e) => setMar(e.target.checked)}
          >
            <FormLabel>Bachelor Tenants Allowed</FormLabel>
          </Checkbox>
          <br />
          <Button className="submitBtn" onClick={handleSubmit}>
            {" "}
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
