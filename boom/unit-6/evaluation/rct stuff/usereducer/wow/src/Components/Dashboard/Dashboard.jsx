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
  import { useReducer, useEffect } from "react";
  
  const initialState = {
    loading: false,
    error: false,
    searchQuery: "",
    order: "",
    data: []
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          loading: true,
          error: false
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          loading: false,
          error: true
        };
      case "SORT_ORDER":
        const sortedData =
          action.payload === "asc"
            ? [...state.data].sort((a, b) => a.rent - b.rent)
            : [...state.data].sort((a, b) => b.rent - a.rent);
        return {
          ...state,
          data: sortedData
        };
      case "SEARCH_QUERY":
        return {
          ...state,
          searchQuery: action.payload
        };
      default:
        throw new Error();
    }
  };
  
  const getData = () => {
    return axios.get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`
    );
  };
  
  export default function Dashboard() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const fetchAndUpdateData = () => {
      dispatch({ type: "FETCH_INIT" });
      getData()
        .then((res) => {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
          console.log(res);
        })
        .catch((error) => {
          dispatch({ type: "FETCH_FAILURE" });
          console.log(error);
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
      dispatch({ type: "SORT_ORDER", payload: order });
    };
  
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
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getHouses(state.searchQuery);
    }, [state.searchQuery]);
  
    return state.loading ? (
      <h1>...loading</h1>
    ) : state.error ? (
      <h1>...something went wrong</h1>
    ) : (
      <div>
        <div className="sortingButtons">
          <Button className="sortByRentAsc" onClick={() => handleSortOrder("asc")}>
            {" "}
            Sort by Asc{" "}
          </Button>
          <Button className="sortByRentDesc" onClick={() => handleSortOrder("desc")}>
            {" "}
            Sort by Desc{" "}
          </Button>
        </div>
  
        <Center>
          <Input
            className="searchAddress"
            placeholder="Search Data"
            value={state.searchQuery}
            onChange={(e) => dispatch({ type: "SEARCH_QUERY", payload: e.target.value })}
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
              {state.data?.map((el) => (
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