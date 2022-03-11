import React from "react";
import HomePage from "../components/homePage";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const App = () =>{
    return (
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<HomePage />}/>
             <Route path="/home" element={<HomePage />}/>
          </Routes>            
        </BrowserRouter>
    )
}

export default App;