import React from 'react'
import {Routes,Route} from 'react-router-dom';


import Dashboard from './Dashboard';
import { Login } from './Login';

const MainRoute = () => {
  return (
    <div>
      <Routes>
       <Route path={'/login'} element={<Login/>}></Route>
        <Route path={'/'} element={<Dashboard/>} />
        <Route path={'/notes'} element={<Notes />} />
        <Route path={'/signup'} element={<Signup/>} />
      
      </Routes>
    </div>
  )
}

export default MainRoute