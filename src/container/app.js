import React from "react";
import HomePage from "../components/homePage";
import { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import {getImagesAction} from '../data/actions/index'
import { connect } from "react-redux";

const App = ({dispatch}) =>{

  useEffect(()=>{
    dispatch(getImagesAction.getImages());
  },[])

    return (
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<HomePage />}/>
             <Route path="/home" element={<HomePage />}/>
          </Routes>            
        </BrowserRouter>
    )
}

const mapStateToProps = (state) =>{
  return{
    state
  }
} 

export default connect(mapStateToProps)(App);