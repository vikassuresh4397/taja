import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import AllProducts from './AllProducts';
import PrivateRoute from './Routes/PrivateRoute';

const AllRoutes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/products" component={AllProducts} />
  </>
);

export default AllRoutes;
