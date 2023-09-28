
import {Button, FormControl, Input } from "@chakra-ui/react"
import { useReducer } from "react"
import axios from "axios";




const initialState = {

  formData: {

    name: "",

    cost: "",

    likes: "",

    description: "",

    breed: "", 

  }

}

const reducer = (state, action) => {
  switch(action.kya){
    
    case "datalehloh" : {
      return {
        ...state,

        formData : {

          ...state.formData,

          [action.field] : action.value

        }
      }
    }
    default : 
    return state
  }
}





export default function Form() {


  const [state, dispatch] = useReducer(reducer, initialState)

  const {formData} = state;

  const handleSubmit = (dataaa) => {
    dataaa.preventDefault();
    axios
      .post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats`, {...formData})
      .then((res) => {console.log(res)})
      .catch((err)=>{console.log(err)})

  }



  return (
    <div className="addCatContainer">
      <form className="form" onSubmit={handleSubmit}>
        <FormControl>
          <Input className="name" placeholder="Name"
         
          onChange={(e)=> {dispatch({kya : "datalehloh", field: "name", value: e.target.value})
          }}
          value={formData.name}
          />


          <Input className="cost" placeholder="Cost" type="number" 
          
          onChange={(e)=> { dispatch({kya : "datalehloh", field: "cost", value: e.target.value})
          }}
          value={formData.cost}
          />

          <Input className="likes" placeholder="Likes" type="number" 
          
          onChange={(e)=> {dispatch({kya : "datalehloh", field: "likes", value: e.target.value})
          }}
          value={formData.likes}
          />

          <Input className="description" placeholder="Description" 
         onChange={(e)=> {dispatch({kya : "datalehloh", field: "description", value: e.target.value})
          }}
          value={formData.description}
          />

          <Input className="breed" placeholder="Breed" 
         onChange={(e)=> {dispatch({kya : "datalehloh", field: "breed", value: e.target.value})
          }}
          value={formData.breed}
          />

          <Button colorScheme={"green"} className="submitBtn" onClick={handleSubmit} >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}