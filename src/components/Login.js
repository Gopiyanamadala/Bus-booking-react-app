import React,{useEffect,useState} from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function Login(){
    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function submit(e){
        e.preventDefault();
         try{
                const resp=await axios.post("http://localhost:8000/login",{
                    email,password
                }).then(res=>{
                    if(res.data==="exist"){
                        history("/busdetails")
                    }
                    else if(res.data==="notexist"){
                        alert("User have not sign up")
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
    return(
        <div className="login">
              <h1 className="logintext">Login</h1>
              <br/>
              <form action="post">
                <input className="loginemail" type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""/>
                <br/>
                <br/>
                <input className="loginpassword" type="password" onChange={(e)=>{setPassword(e.target.value) }} placeholder="password" name="" id=""/>
                <br/>
                <br/>
                <br/>
              <input className="loginsubmit" type="submit" onClick={submit}/>
              </form>
              <br/>
              <p className="loginor">or</p>
              <Link className="loginsignup" to="/signup">signup here</Link>
        </div>
    )
}
export default Login