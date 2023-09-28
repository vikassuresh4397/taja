
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import {Box,
   Button,
    Center, 
    Img,
    SimpleGrid, 
    Text, 
    VStack,
  Select, 
  Spinner
 } from "@chakra-ui/react"




const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch(action.type){
    case "Request" : {
      return {
        ...state,
        isLoading : true,
        error: false,
        order: ""
      }
    }
    case "Successand" : {
      return {
        ...state,
        isLoading : false,
        data : action.payload
      }
    }
    case "Failure" : {
      return {
        ...state,
        isLoading : false,
        error: true
      }
    }
    case "SORT_ORDER" :
      let sortedData = 
      action.payload === "asc" ?
      [...state.data].sort((a,b) => a.cost - b.cost) :
      [...state.data].sort((a, b)=> b.cost - a.cost) 
    return {
      ...state,
      data: sortedData
    }
    default : {
      throw new Error()
    }
  }
};


const getData = ({page , limit, sort, order}) => {

  return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats`,{
    params : {
      pg : page,

      lim : limit,

      boom : sort,

      od : order
    }
  })
}

const DeleteCart = (id) => {
  return axios({
    method: "delete",
    url : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats/${id}`
  })
}


export default function Dashboard() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState("")
  
  const datafetch = () => {
    dispatch({type : "Request"});
      getData({page: page, limit : 5,sort: "cost", order: sortBy})
        .then((res) => {
          dispatch({type : "Successand", payload : res.data})
          // console.log(res)
        })
        .catch((error) => {
          dispatch({type : "Failure"});
          console.log(error)
        })
  }

  useEffect(()=> {
    datafetch()
  }, [])

  const handleDelete = (id) => {
    DeleteCart(id)
    .then(()=>{

      datafetch()

    })
  }


  const handleSortOrder = (sortBy) => {

    dispatch({type : "SORT_ORDER", payload: sortBy})
  }
  // console.log(sortBy)


 return state.isLoading ? (

  <h1>.loading</h1>

 ) : state.error ? (
  <h1>...something went wrong</h1>
 ) :  (
    <div>
      <div className="sortingButtons">
        <Button colorScheme={"green"} className="sortByCostAsc"
        onClick={()=> handleSortOrder("asc")}
        >
          sort by Asc
        </Button>
        <Button colorScheme={"red"} className="sortByCostDesc" m={2}
        onClick={()=> handleSortOrder("dec")}
        >
         sort by Desc
        </Button>
      </div>
      
      <Center>
        <Select placeholder="select option">
          <option value="Peterbald">Peterbald</option>
          <option value="Nebelung">Nebelung</option>
          <option value="Persian">Persian</option>
          <option value="Birman">Birman</option>
          <option value="Himalayan">Himalayan</option>
        </Select>
      </Center>

      {/* Map the below container against your data */}
          <Spinner />
      <SimpleGrid className="main_container">

        {


          state.data.map((e)=> (

          
        <Box className="catsDetails" key={e.id} > 
       
          <Center>

            <Img src={e.image} />

          </Center>

          <VStack spacing={2} p={2}>
            <Text className="name" fontSize={"20px"} fontWeight="bold">{e.name}</Text>

            <Text className="cost">{e.cost}</Text>

            <Text className="likes">{e.likes}</Text>

            <Text className="breed">{e.breed}</Text>

            <Text className="description">{e.description}</Text>

            <Button className="delete" onClick={()=> handleDelete(e.id)}>Delete</Button>

          </VStack>
        </Box>
        ))
      }
      </SimpleGrid>
    </div>
  );
}