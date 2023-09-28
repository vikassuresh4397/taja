import {
  Button,
  Input,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [p, setp] = useState([]);
  const getD = async () => {
    let r = await axios.get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`
    );
    setData(r.data);
  };
  const getData =async () => {
    const r =await axios.get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses?q=${text}`
    );
    setp(r.data);
  };

  const handledlt = (id) => {
    return axios.delete(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses/${id}`
    );
  };

  const handleAsc=()=>{
   data.sort((a,b)=>a.rent-b.rent)
  //  return data
    console.log(data)
  }
  const handleDec=()=>{
     data.sort((b,a)=>a.rent-b.rent)
    //  return data
    console.log(data)
  }

  useEffect(() => {
    getData();
    getD();
  }, [text,data]);
  return (
    <div>
      <div className="sortingButtons">
        <Button className="sortByRentAsc" onClick={handleAsc}> Sort by Asc </Button>
        <Button className="sortByRentDesc" onClick={handleDec}> Sort by Desc </Button>
      </div>

      <Input
        className="searchAddress"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Search Data"
      />

      <TableContainer>
        <Table className="table">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Owner's Name</Th>
              <Th>Address</Th>
              <Th>Area Code</Th>
              <Th>Rent</Th>
              <Th>Bachelor Tenants Allowed</Th>
              <Th>Married Tenants Allowed</Th>
            </Tr>
          </Thead>
          <Tbody>
            {text !== ""
              ? p?.map((el) => {
                  return (
                    <Tr className="houseDetails" key={el.id}>
                      <Td className="name">{el.name}</Td>
                      <Td className="ownersName">{el.ownerName}</Td>
                      <Td className="address">{el.address}</Td>
                      <Td className="areaCode">{el.areaCode}</Td>
                      <Td className="rent">{el.rent}</Td>
                      <Td className="isBachelorAllowed">
                        {el.isBachelorAllowed ? "Yes" : "No"}
                      </Td>
                      <Td className="isMarriedAllowed">
                        {el.isMarriedAllowed ? "Yes" : "No"}
                      </Td>
                      <Td className="delete" onClick={() => handledlt(el.id)}>
                        {" "}
                        Delete{" "}
                      </Td>
                    </Tr>
                  );
                })
              : data?.map((el) => {
                  return (
                    <Tr className="houseDetails" key={el.id}>
                      <Td className="name">{el.name}</Td>
                      <Td className="ownersName">{el.ownerName}</Td>
                      <Td className="address">{el.address}</Td>
                      <Td className="areaCode">{el.areaCode}</Td>
                      <Td className="rent">{el.rent}</Td>
                      <Td className="isBachelorAllowed">
                        {el.isBachelorAllowed ? "Yes" : "No"}
                      </Td>
                      <Td className="isMarriedAllowed">
                        {el.isMarriedAllowed ? "Yes" : "No"}
                      </Td>
                      <Td className="delete" onClick={() => handledlt(el.id)}>
                        {" "}
                        Delete{" "}
                      </Td>
                    </Tr>
                  );
                })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
