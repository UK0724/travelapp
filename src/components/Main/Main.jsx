import React from 'react';
import "./Main.css"
import { BsPlayCircle } from "react-icons/bs";

function Main(props) {
  return (
    <div className='Hero'>
      <div className="left">
        <div className='des'>Best Destinations around the world</div>
        <div className='travel'>Travel,  <span className='enjoy'>enjoy</span>  <span className='underline'></span>
        <span className='underline1'></span>
        <span className='underline2'></span>
        <span className='underline3'></span>
        <span className='underline4'></span>
          and live a new
          and full life</div>
        <div className='sports'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</div>
        <div className='bottom-button'>
        <button className='Find-btn'>Find out more</button>
        <span ><BsPlayCircle className='play'/></span>
        <span className='play-des'>Play Demo</span>
        </div>
      </div>
      <div className="right">

      </div>
    </div>
  );
}

export default Main;