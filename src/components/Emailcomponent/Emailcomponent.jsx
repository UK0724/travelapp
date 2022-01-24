import React from 'react';
import "./Emailcomponent.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
function Emailcomponent(props) {
  return (
    <div className='emailcomponent'>
    <div  className='con'>
      <div  item className='main-email'>
      <div className="subscribe-title">Subscribe to get information, latest news and other
interesting offers about Cobham</div>
      <div className='email-icon'>
      <div><input type="email" placeholder='Your email' className='email'/>
      <HiOutlineMail className='mail-icon'/></div>
      <button className='subscribe-btn' >Subscribe</button>
      </div>
      <div className='Telegram'><FaTelegramPlane/></div>
      </div>
    </div>
    </div>
  );
}

export default Emailcomponent;