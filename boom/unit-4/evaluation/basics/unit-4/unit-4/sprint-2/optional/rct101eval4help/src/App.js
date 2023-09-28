import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import {Button} from "@chakra-ui/react"
import Form from "./Components/Form/Form";
import { useState } from "react";
function App() {

  const [val,setval]=useState(false)

  return <div className="App">
      <Button width = "150px"className = "toggleForm" onClick={()=>setval(!val)} >
        Toggle Form 
      </Button>
      {
        val?<Form/>:<Dashboard/>
      }
      

  </div>;
}

export default App;
