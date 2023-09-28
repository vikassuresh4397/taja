
import './App.css';
import {Signup} from './components/Signup';
import {Login} from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { Notes } from './components/Notes';
import { NoteDisplay } from './components/NoteDisplay';
import { Individualpost } from './components/Individualpost';
import Dashboard from './components/Dashboard';
import DoctorForm from './components/Doctorsform';
import DoctorDashboard from './components/DoctorsDashboard';
function App() {
  return (
    <div className="App">
     <h1>Doctors Application</h1>
     <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/" element={<Dashboard></Dashboard>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
  
      <Route path="/doctorform" element={<DoctorForm></DoctorForm>}></Route>
      <Route path="/appointments" element={<DoctorDashboard></DoctorDashboard>}></Route>
      
      
     </Routes>

     

     <div></div>

     
    </div>
  );
}

export default App;
