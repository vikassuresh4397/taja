import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {HomePage} from './HomePage'
import { Admin } from './Admin'
import {Login} from './Login'
import PrivateRoute from '../components/PrivateRoute'
import { EditPage } from './EditPage'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/add-product" element={<PrivateRoute><Admin></Admin></PrivateRoute>} />
        <Route path="/login"  element={<Login></Login>} />
        <Route path="/edit"  element={<PrivateRoute><EditPage></EditPage></PrivateRoute>} />
        
        <Route path="*" element={<h3>404 PAge not found</h3>}/>
    </Routes>
  )
}

