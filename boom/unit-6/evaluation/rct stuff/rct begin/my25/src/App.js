import React, { createContext } from 'react';
import './App.css';
import { CompA } from './Components/ComA';

const first=createContext();
const last=createContext();

function App() {
  return (
    <div className="App">
<first.Provider value={"Vikas"}>
<last.Provider value={"Suresh"}>
<CompA></CompA>
</last.Provider>




</first.Provider>
     
    </div>
  );
}
export {first,last}
export default App;
