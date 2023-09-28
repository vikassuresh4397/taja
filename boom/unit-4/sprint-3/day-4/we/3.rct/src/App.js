import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" render={() => <h1>Home Page - /</h1>} />
      <Route exact path="/contact" render={() => <h1>Contact Page - /contact</h1>} />
      <Route exact path="/about-us" render={() => <h1>About Page - /about-us</h1>} />
      <Route exact path="/services" render={() => <h1>Services Page - /services</h1>} />
      <Route exact path="/login" render={() => <h1>Login Page - /login</h1>} />
    </BrowserRouter>
  );
}

export default App;