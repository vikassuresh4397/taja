import {
    Button,
    Input,
    Table,
    TableContainer,
    Tbody,
    Thead,
    Th,
    Tr,
    Td,
    Center,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useState, useEffect } from "react";
  
  const getData = () => {
    return axios.get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`
    );
  };
  export default function Dashboard() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [order, setOrder] = useState("");
  
    const fetchAndUpdateData = () => {
      setLoading(true);
      getData()
        .then((res) => {
          setData(res.data);
          setLoading(false);
          console.log(res);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          setError(true);
        });
    };
  
    useEffect(() => {
      fetchAndUpdateData();
    }, []);
  
    const handleDelete = (id) => {
      axios
        .delete(
          `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses/${id}`
        )
        .then((res) => {
          fetchAndUpdateData();
        });
    };
  
    const handleSortOrder = (order) => {
      if (order === "asc") {
        let sortedData = [...data].sort((a, b) => a.rent - b.rent);
        setData(sortedData);
      } else if (order === "desc") {
        let sortedData = [...data].sort((a, b) => b.rent - a.rent);
        setData(sortedData);
      }
    };
    useEffect(() => {
      handleSortOrder(order);
    }, [order]);
  
    const getHouses = (searchQuery) => {
      console.log("getHouses is called");
      const params = searchQuery ? { q: searchQuery } : {};
      axios
        .get(
          `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`,
          {
            params,
          }
        )
        .then((res) => {
          console.log(res, "inside getHouses");
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getHouses(searchQuery);
    }, [searchQuery]);
  
    return loading ? (
      <h1>...loading</h1>
    ) : error ? (
      <h1>...something went wrong</h1>
    ) : (
      <div>
        <div className="sortingButtons">
          <Button className="sortByRentAsc" onClick={() => setOrder("asc")}>
            {" "}
            Sort by Asc{" "}
          </Button>
          <Button className="sortByRentDesc" onClick={() => setOrder("desc")}>
            {" "}
            Sort by Desc{" "}
          </Button>
        </div>
  
        <Center>
          <Input
            className="searchAddress"
            placeholder="Search Data"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            width="500px"
          />
        </Center>
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
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((el) => (
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
                  <Td className="delete" onClick={() => handleDelete(el.id)}>
                    {" "}
                    Delete{" "}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  