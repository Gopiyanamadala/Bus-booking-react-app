import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";


function Signup() {
    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [number,setNumber]=useState('')
    async function submit(e){
        e.preventDefault();

         try{

                await axios.post("http://127.0.0.1:8000/signup",{
                    email,password,number
                })
                .then(res=>{
                    if(res.data==="exist"){
                        alert("User already exists")
                    }
                    else if(res.data==="notexist"){
                        history("/busdetails")
                    }
                })
                .catch(e=>{
                    alert("wrong details")
                    console.log(e);
                })
    
            }
            catch(e){
                console.log(e);
    
            }

    }


    return (
        <div className="signup">

            <h1 className="signuptext">Signup</h1>

            <form action="POST">
                <input type="email" className="signupemail" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br/>
                <input type="password"className="signuppassword" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /><br/>
                <input type="number" className="signupnumber" onChange={(e) => { setNumber(e.target.value) }} placeholder="Number" /><br/>
                <input type="submit" className="signupsubmit"  onClick={submit} />

            </form>

            <br />
            <p className="signupor">OR</p>

            <Link className="signuplogin" to="/">Login Page</Link>

        </div>
    )
}

export default Signup