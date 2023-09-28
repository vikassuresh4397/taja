import React from "react";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location=useLocation();
  const wow=location.pathname==="/"?"Home Page":"Add New Book";
  console.log(wow);
  return (
    <div>
      <h2>Library Management</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-book-link" href="/add-book">
        Add New Book
      </a>
      <h3 data-testid="page-name">{wow}</h3>
    </div>
  );
};
