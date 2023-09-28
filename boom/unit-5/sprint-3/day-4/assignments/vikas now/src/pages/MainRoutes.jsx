import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { PrivateRouter } from '../components/PrivateRouter';
import { Admin } from './Admin';
import {Homepage} from './Homepage';
import { Login } from './Login';

const MainRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Homepage></Homepage>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/admin" element={<PrivateRouter><Admin></Admin></PrivateRouter>}></Route>
   
    <Route path="*" element={<h1>404 Page Not Found !!</h1>}></Route>
    <Route></Route>
   </Routes>
  )
}

export default MainRoutes;