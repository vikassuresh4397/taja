
import './App.css';
import {Signup} from './components/Signup';
import {Login} from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { Notes } from './components/Notes';
import { NoteDisplay } from './components/NoteDisplay';
import { Individualpost } from './components/Individualpost';
function App() {
  return (
    <div className="App">
     <h1>Notes taking application</h1>
     <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/notes" element={<Notes></Notes>}></Route>
      <Route path="/notesdisplay" element={<NoteDisplay></NoteDisplay>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;
