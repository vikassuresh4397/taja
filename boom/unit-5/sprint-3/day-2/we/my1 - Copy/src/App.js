import { Admin } from './pages/Admin';
import './App.css';
import {MainRoutes} from './pages/MainRoutes';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <MainRoutes></MainRoutes>
  
    </div>
  );
}

export default App;
