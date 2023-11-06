import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
const Nav =styled.div`
.nav-item{
         display:flex;
         flex-direction:row;
         text-decoration:none;
         font-size: 25px;
         color:white;
         font-family: Georgia, serif;;
         list-style-type:none;

}
ul{
  margin-left:26%;
  display:flex;
  flex-direction:row;
  gap:60px;
  list-style-type: none;
}
`;
const Navbar=() => {
  return (
    <Nav>
    <ul>
    <li><NavLink to="/" className="nav-item">Home</NavLink></li>
    <li><NavLink to="/Popular" className="nav-item">Popular Routes</NavLink></li>
    <li><NavLink to="/bookingdetails" className="nav-item">bookingdetails</NavLink></li>
    <li><NavLink to="/Aboutus" className="nav-item">About Us</NavLink></li>
    </ul>
    </Nav>
  );
}

export default Navbar;