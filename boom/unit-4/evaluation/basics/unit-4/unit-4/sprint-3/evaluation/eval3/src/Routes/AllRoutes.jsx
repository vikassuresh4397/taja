import {Routes,Route} from "react-router-dom"
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";
import SingleProductPage from "./SingleProductPage";
function AllRoutes() {

  return (
    // <div>
    // </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/products/:id" element={<SingleProductPage/>}/>
    </Routes>
  );
}

export default AllRoutes;
