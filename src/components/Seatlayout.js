import React,{ useState } from 'react'
import "./Seatlayout.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
export default function Seatlayout() {
    const [seatNumber, setSeatNumber] = useState(null);
    const [price, setPrice] = useState(null);
    const handleSeatSelection = (event) => {
      setSeatNumber(event.target.value);
      setPrice("Price=150");
    };
    const history=useNavigate();
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [gender,setGender]=useState('')
    const [mobile,setPhonenumber]=useState('')
    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/seatlayout",{
                name,age,gender,mobile,seatNumber
            })
            window.alert("tickets booked");
        }
        catch(e){
            console.log(e);

        }

    }
  
    return (
      <div>
          <div className='seatlayout'>
            <div className='layout'>
              <div className='col1'>
                <button className='seat' value="1" onClick={handleSeatSelection}>01</button><br/>
                <button className='seat' value="2" onClick={handleSeatSelection}>02</button><br/>
                <button className='seat' value="3" onClick={handleSeatSelection}>03</button><br/>
                <button className='seat' value="4" onClick={handleSeatSelection}>04</button><br/>
                <button className='seat' value="5" onClick={handleSeatSelection}>05</button><br/>
                <button className='seat' value="6" onClick={handleSeatSelection}>06</button><br/>
                <button className='seat' value="7" onClick={handleSeatSelection}>07</button><br/>
                <button className='seat' value="8" onClick={handleSeatSelection}>08</button><br/>
                <button className='seat' value="9" onClick={handleSeatSelection}>09</button><br/>
                <button className='seat' value="10" onClick={handleSeatSelection}>10</button>
              </div>
              <div className='col2'>
                <button className='seat' value="11" onClick={handleSeatSelection}>11</button><br/>
                <button className='seat' value="12" onClick={handleSeatSelection}>12</button><br/>
                <button className='seat' value="13" onClick={handleSeatSelection}>13</button><br/>
                <button className='seat' value="14" onClick={handleSeatSelection}>14</button><br/>
                <button className='seat' value="15" onClick={handleSeatSelection}>15</button><br/>
                <button className='seat' value="16" onClick={handleSeatSelection}>16</button><br/>
                <button className='seat' value="17" onClick={handleSeatSelection}>17</button><br/>
                <button className='seat' value="18" onClick={handleSeatSelection}>18</button><br/>
                <button className='seat' value="19" onClick={handleSeatSelection}>19</button><br/>
                <button className='seat' value="20" onClick={handleSeatSelection}>20</button><br/>
              </div>
              <div className='col3'>
                <button className='seat' value="21" onClick={handleSeatSelection}>21</button><br/>
                <button className='seat' value="22" onClick={handleSeatSelection}>22</button><br/>
                <button className='seat' value="23" onClick={handleSeatSelection}>23</button><br/>
                <button className='seat' value="24" onClick={handleSeatSelection}>24</button><br/>
                <button className='seat' value="25" onClick={handleSeatSelection}>25</button><br/>
                <button className='seat' value="26" onClick={handleSeatSelection}>26</button><br/>
                <button className='seat' value="27" onClick={handleSeatSelection}>27</button><br/>
                <button className='seat' value="28" onClick={handleSeatSelection}>28</button><br/>
                <button className='seat' value="29" onClick={handleSeatSelection}>29</button><br/>
                <button className='seat' value="30" onClick={handleSeatSelection}>30</button><br/>
              </div>
              <div className='col4'>
                <button className='seat' value="31" onClick={handleSeatSelection}>31</button><br/>
                <button className='seat' value="32" onClick={handleSeatSelection}>32</button><br/>
                <button className='seat' value="33" onClick={handleSeatSelection}>33</button><br/>
                <button className='seat' value="34" onClick={handleSeatSelection}>34</button><br/>
                <button className='seat' value="35" onClick={handleSeatSelection}>35</button><br/>
                <button className='seat' value="36" onClick={handleSeatSelection}>36</button><br/>
                <button className='seat' value="37" onClick={handleSeatSelection}>37</button><br/>
                <button className='seat' value="38" onClick={handleSeatSelection}>38</button><br/>
                <button className='seat' value="39" onClick={handleSeatSelection}>39</button><br/>
                <button className='seat' value="40" onClick={handleSeatSelection}>40</button><br/>
              </div>
              <div className="passdetails">
               <form action="POST">
          
                <input className='pasname' type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name"  /><br/>
                <input className='pasage' type="number" onChange={(e) => { setAge(e.target.value) }} placeholder="Age" /><br/>
                <input className='pasgender' type="text" onChange={(e) => { setGender(e.target.value) }} placeholder="Gender" /><br/>
                <input className='pasnumber' type="text" onChange={(e) => { setPhonenumber(e.target.value) }} placeholder="phonenumber" /><br/>
                <input className='passeatno' type="text" value={seatNumber}/><br/>
                <input className='passprice' type='' value={price}/><br/>
                <input className='passubmit' type="submit" onClick={submit} />
              </form>
        </div>
            </div>
              <div className='last'>
                <button className='seat1' value="41" onClick={handleSeatSelection}>41</button><br/>
                <button className='seat1' value="42" onClick={handleSeatSelection}>42</button><br/>
                <button className='seat1' value="43" onClick={handleSeatSelection}>43</button><br/>
                <button className='seat1' value="44" onClick={handleSeatSelection}>44</button><br/>
                <button className='seat1' value="45" onClick={handleSeatSelection}>45</button><br/>
              </div>
          </div>
       
      </div>
    )  
}
