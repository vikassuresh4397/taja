



































import { useState } from "react";
import "./App.css";

import Input from "./Components/Input";

import UserCard from "./Components/UserCard";

import useDarkMode from "./hooks/useDarkMode";

function App() {
  //import the useDark mode hook here
  const [isDarkMode, toggleDarkMode] = useDarkMode()
  const [text, setText] = useState("")
  const handle = (val) => {
    setText(val.target.value)
  }


 

  return (
    // add the dark-mode class name along with App depending on the boolean value of isDarkMode //---> style={{background:"black"}}
    <div data-testid="app-component" className="App" >
    
      <button onClick={toggleDarkMode} >Dark</button>

     
      <UserCard 
        name={"user 1"} description={"description"} 
      backgroundColor ={"blue"} 
      title={"software developer"}
      avatarShape={"round"}
      imageURL={"https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60"}
      />

      <br />
      
      <Input size={"sm"} 
      type={"text"} 
      variant={"outline"} 
      value={text} 
      handle={(val)=>handle(val)}/>

      <div data-testid="input-value"> {text}</div>
    </div>
  );
}

export default App;

