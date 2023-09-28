import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
    return (
      <div className="navbar">
          <h1>Product List</h1>
          <Link to={"/"}>Home</Link>
          <Link to={"/add-product"}>Admin Page</Link>
          <Link to={"/login"}>LOgin Page</Link>
          <Link to={"/edit"}>Edit Page</Link>
      </div>
    )
  }
  
