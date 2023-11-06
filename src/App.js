// import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup";
import Home1 from "./components/Home1";
import Popular from "./components/Popular";
import Aboutus from "./components/Aboutus";
import List from "./components/List";
import Booking from "./components/Booking";
import Seatlayout from "./components/Seatlayout";
import Bookingdetails from "./components/Bookingdetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Busdetails from "./components/Busdetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/Popular" exact element={<Popular/>}/>
          <Route path="/" exact element={<Home1/>}/>
          <Route path="/Aboutus" exact element={<Aboutus/>}/>
          <Route path="/List" exact element={<List/>}/>
          <Route path="/Booking" exact element={<Booking/>}/>
          <Route path="/seatlayout" exact element={<Seatlayout/>}/>
          <Route path="/bookingdetails" exact element={<Bookingdetails/>}/>
          <Route path="/busdetails" exact element={<Busdetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
