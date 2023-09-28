import { Button, Input, Table, Tbody, Th, Thead, Tr, TableContainer } from "@chakra-ui/react";
import { useEffect, useReducer } from "react";



const reducer = (state,action)=>{
    switch (action.type) {
        case "FETCH_DATA":
          return {
            ...state,
            loading: true,
          };
        case "FETCH_DATA_SUCCESS":
          return {
            ...state,
            loading: false,
            data: action.payload,
          };
        case "FETCH_DATA_ERROR":
          return {
            ...state,
            loading: false,
            error: true,
          };
        case "SET_ORDER":
          return {
            ...state,
            order: action.payload,
          };
        case "SET_SEARCH":
          return {
            ...state,
            searchQuery: action.payload,
          };
        case "DELETE":
          return {
            ...state,
            data: state.data.filter((el) => el.id !== action.payload),
          };
        default:
          return state;
      }
}

const getData = () => {
    return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`)
}

export default function Dashboard() {

const initialState={
    data:[],
    loading:false,
    error:false,

}


const fetchAndUpdateData = () => {
    dispatch({type:"FETCH DATA"})
    getData()
    .then((res)=>{
        dispatch({type:"FETCH_DATA_SUCCESS",
    payload:res.data});
    console.log(res)
    })
}

useEffect(()=>{
    fetchAndUpdateData();
},[])


const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <div className="sortingButtons">
          <Button className = "sortByRentAsc" >  Sort by Asc </Button>
          <Button className = "sortByRentDesc"> Sort by Desc </Button>
        </div>

        <Input className = "searchAddress"  placeholder = "Search Data" />

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
              {/* Map the below container against your data */}
              {/* <Tr className = "houseDetails"  >
                  <Td className = "name" ></Td>
                  <Td className = "ownersName" ></Td>
                  <Td className = "address" ></Td>
                  <Td className = "areaCode" ></Td>
                  <Td className = "rent" ></Td>
                  <Td className = "isBachelorAllowed" ></Td>
                  <Td className = "isMarriedAllowed" ></Td>
                  <Td className = "delete" > Delete </Td>
              </Tr> */}
            </Tbody>
          </Table>
        </TableContainer>
    </div>
  );
}
