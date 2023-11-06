import React from "react";
import "./Home.css";
import Navbar from './Navbar';
import Header from "./Header.js"
import {useLocation,useNavigate } from "react-router-dom";
function Home(){
    const location=useLocation()

    return(
        <div className="homepage">
          <Header/>
          <Navbar/>
        </div>
    )
}
export default Home