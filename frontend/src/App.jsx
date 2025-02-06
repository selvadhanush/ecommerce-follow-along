import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
  // Import the CSS file
import Home from './Pages/Home';
import Login from './Pages/login';
import Navbar from './Pages/Navbar';
import Signup from './Pages/Signup';
function app() {
  return (
     <BrowserRouter>
        <Navbar/>
       <Routes>
            <Route  path="/"  element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/> 

       </Routes>
     </BrowserRouter>
  );
}

export default app;