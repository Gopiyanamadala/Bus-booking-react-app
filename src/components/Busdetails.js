import React,{ useState } from 'react'
import "./Busdetails.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
export default function Busdetails() {
    const [busno,setNo]=useState('')
    const [source,setStart]=useState('')
    const [destination,setDest]=useState('')
    const [starttime,setStime]=useState('')
    const [reachtime,setRtime]=useState('')
    const [totalkm,setTkm]=useState('')
    const [date,setDate]=useState('')
    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/busdetails",{
                busno,source,destination,starttime,reachtime,totalkm,date
            })
        }
        catch(e){
            console.log(e);

        }

    }
  
  return (
    <div>
      <div className='detailsform'>
        <form>
          <h1 className='bdh'>Route Details</h1>
          <br/>
        <label for="busno">Bus Number:</label>
            <input type="text" className='busno' onChange={(e) => { setNo(e.target.value) }}></input><br/>
            <label for="source">Starting From:</label>
            <input type="text" className='source' onChange={(e) => { setStart(e.target.value) }}></input><br/>
            <label for="destination">Destination:</label>
            <input type="text" className='destination' onChange={(e) => { setDest(e.target.value) }}></input><br/>
            <label for="starttime">Starting Time:</label>
            <input type="text" className='starttime' onChange={(e) => { setStime(e.target.value) }}></input><br/>
            <label for="reachtime">Reaching Time:</label>
            <input type="text" className='reachtime' onChange={(e) => { setRtime(e.target.value) }}></input><br/>
            <label for="totalkm">Total Kilometers travel:</label>
            <input type="text" className='totalkm' onChange={(e) => { setTkm(e.target.value) }}></input><br/>
            <label for="date">Date:</label>
            <input type="date" className='date' onChange={(e) => { setDate(e.target.value) }}></input><br/>
            <button className='submitbusdetails' onClick={submit}> Submit</button>
        </form>
      </div>
    </div>
  )
}
