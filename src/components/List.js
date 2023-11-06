import React from 'react'
import Home1  from "./Home1"
import "./List.css"
import { Link, useNavigate } from "react-router-dom";
export default function List() {
  return (
    <div>
        <Home1/>
        <Link  className="listlink" to="/Booking">
        <table className='list1'>
            <tr>
                <th>Tirupathi</th>
                <th>to</th>
                <th>chennai</th>
                <th>Price:200</th>
            </tr>
        </table>
        </Link>
        <Link  className="listlink" to="/Booking">
        <table className='list1'>
            <tr>
                <th>vijayawada</th>
                <th>to</th>
                <th>Hyderabad</th>
                <th>Price:200</th>
            </tr>
        </table>
        </Link>
        <table className='list2'>
            <tr>
                <th>Banglore</th>
                <th>to</th>
                <th>Hyderabad</th>
                <th>Price:170</th>
            </tr>
        </table>
        <br/>
        <br/>
        <br/>
        <div className='s1'>
        <h3 className='s1h1'>10000+ Trips</h3>
        </div>
        <img className='s1im1' src='https://tse3.mm.bing.net/th?id=OIP.v0ucfFP4dHA4RWwDEBRPsAHaFW&pid=Api&P=0&h=180'/>
        <br/>
        <br/>
        <br/>
        <div className='s2'>
           <h3 className='s2h2'>1Lakh+ Happy Customers</h3>
        </div>
        <img className='s2im2' src='https://tse1.mm.bing.net/th?id=OIP.6ZdnZgiUJKL2EZBlXJnEVgHaE7&pid=Api&P=0&h=180'/>
    </div>
  )
}
