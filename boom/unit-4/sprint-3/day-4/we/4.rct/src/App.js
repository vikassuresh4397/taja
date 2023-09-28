import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AllRoutes from './Routes/AllRoutes';
import './App.module.css';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <AllRoutes />
    </Switch>
  </Router>
);

export default App;
