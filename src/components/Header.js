import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom'; 
export default function Header() {
  return (
    <div className='header'>
      <h1 className='headerappname'>Gopi's Travels</h1>
      <h3 className='headerquote'>Explore world on Roads</h3>
    </div>
  )
}
