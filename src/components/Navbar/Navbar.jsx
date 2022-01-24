import React from 'react';
import "./Navbar.css"
import { RiArrowDropDownLine } from "react-icons/ri";
function Navbar(props) {

    return (
        <>
        <nav>
           <img className='logo' src='./Logo.png' alt="logo" height='35px' width="115px" />
           <div className="orangecolor"></div>
           <ul>
               <li><span>Destination</span></li>
               <li><span>Hotels</span></li>
               <li><span>flights</span></li>
               <li><span>Booking</span></li>
               <li><span>Login</span></li>
               <li><button>Signup</button></li>
               <li><span>EN <RiArrowDropDownLine/></span></li>
           </ul>
           
        </nav>
        <div className='background'></div>
        <div className='flight-second'></div>
        <div className='flight-one'></div>
        </>
    );
}

export default Navbar;