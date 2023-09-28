import React from "react";
import { useLocation } from "react-router-dom";
// accept the page name as prop here
export const Navbar = () => {
  const location=useLocation();
  console.log("lova",location);
  const wow=location.pathname==="/"?"Home Page":"Add Product Page";

  return (
    <div>
      <h2>Product List</h2>
     <div><a className="home-link" href="/"> Home
      </a></div> 
       
      <a className="add-product-link" href="/add-product">
        Add Product
      </a>
      <h3 data-testid="page-name">{wow}</h3>
    </div>
  );
};
