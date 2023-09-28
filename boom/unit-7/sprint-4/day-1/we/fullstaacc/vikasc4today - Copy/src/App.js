import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Provider
import {store} from './Redux/store';



import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import BlogList from './Pages/BlogList';
import BlogForm from './Pages/BlogForm';
import Navbar from './Pages/Navbar';

function App() {
  return (
  <>
  <Navbar />
      <Routes>
  
  <Route path="/" element={<Signup></Signup>}></Route>
  <Route path="/signup" element={<Signup></Signup>}></Route>
   <Route path="/blogs" element={<BlogList></BlogList>}></Route>
   <Route path="/signin" element={<Signin />}></Route>
   {/* <Route path="*" element={<h3>404 page not found</h3>} /> */}
 </Routes>
  </>

  );
}

export default App;
