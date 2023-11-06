import React from 'react'
import Navbar from './Navbar';
import Header from "./Header.js";
import "./Home1.css";
import { Link, useNavigate } from "react-router-dom";
export default function Home1() {
  return (
    <div>
      <button className='headerbutton1'><Link className="headerbutton" to="/login">Login as Driver</Link></button>
     <Header/>
     <Navbar/>
     <div className='input'>
              <form className='inputlocations'>
                <input className='sourceinput' placeholder='Leaving from'></input>
                <input className='destinationinput' placeholder='Going to'></input>
                <input className='inputdate' type='date'></input>
              </form>
              <button className="home1button"><Link className="home1buttonlink" to="/List">Search</Link></button>
              
        </div>
        <br/>
    </div>
  )
}
