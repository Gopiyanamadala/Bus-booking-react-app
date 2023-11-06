import React from 'react'
import axios from "axios";
import {useState} from "react";
import Header from './Header';
import Navbar from './Navbar';
import "./Bookingdetails.css"
export default function Bookingdetails() {
  const [seat, setSeat] = useState(null);
  const [age, setAge] = useState(null);
  const [user, setUser] = useState(null);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [msg,setMessage] = useState(null);
  const submit = async () => {
    try {
      const response = await fetch(`http://localhost:8000/seatlayout/${input}`);
      if (response.status === 200) {
        const data= await response.json();
        setUser(data.name);
        setAge(data.age);
        setSeat(data.seatNumber);
        console.log(data.name);

        setError(null);
      } else {
        setError('User not found');
      }
    } catch (error) {
      setError('Server error');
    }
  };
  const deleteuser = async () => {
    try {
      const response = await fetch(`http://localhost:8000/seatlayout/${input}`, {
        method: 'DELETE',
      });
      if (response.status === 200) {
        setMessage('User deleted successfully');
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Server error');
    }
  };
  return (
    <div className='bookingdetails'>
      <Header/>
      <Navbar/>
      <div className='bddiv'>
      <h4 className='bdh1'>Enter Your Mobile Number to get Your Ticket </h4>
        <input className='bdinput'  onChange={(e)=>{setInput(e.target.value)}} /><br/><br/>
        <button className='bdsubmit' onClick={submit}>Search</button>
        {error && <p>Error: {error}</p>}
       <div className='bookdetails'><h2 className='detailuser'>Name :{user}</h2><h2 className='detailage'>Age :{age}</h2><h2 className='detailseat'>SeatNumber :{seat}</h2></div>
      <button className='bdsubmit' onClick={deleteuser}>delete</button>
      <h1>{msg}</h1>
      </div>
    </div>
  )
}
