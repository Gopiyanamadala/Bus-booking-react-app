import React from 'react'
import Navbar from './Navbar';
import Header from "./Header.js";
import "./Popular.css"
export default function Popular() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='popular'>
      <ul className='popularul1'>
        <li className='popularli'>Vijayawada-Hyderabad</li>
        <li className='popularli'>vijayawada-Banglore</li>
        <li className='popularli'>Vijayawada-Chennai</li>
        <li className='popularli'>Hyderabad-Banglore</li>
        <li className='popularli'>Hyderabad-Mumbai</li>
        <li className='popularli'>Hyderabad-Delhi</li>
      </ul>
      <ul className='popularul2'>
        <li className='popularli'>Tirupati-Hyderabad</li>
        <li className='popularli'>Mumbai-Banglore</li>
        <li className='popularli'>Banglore-Chennai</li>
        <li className='popularli'>Chennai-Banglore</li>
        <li className='popularli'>Delhi-Mumbai</li>
        <li className='popularli'>Hyderabad-Delhi</li>
      </ul>
      </div>
    </div>
  )
}
