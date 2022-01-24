import React from 'react';
import './Easyandfast.css'
import { FaTelegramPlane } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { GiLips } from "react-icons/gi";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EqualizerIcon from '@mui/icons-material/Equalizer';
function Easyandfast(props) {
  return (
    <div className='Easyandfast'>
      <div className="left-easy">
        <div className='easy-title'>Easy and Fast</div>
        <div className='easy-book'>Book your next trip 
in 3 easy steps</div>
        <div className='options'>
          <div className='graph-icon'>
          </div>
          <div> 
            <div className='graph-title'>Choose Destination</div>
            <div className='graph-content'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </div>
          </div>
        </div>
        <div className='options'>
          <div className='payment-icon'>
          </div>
          <div> 
            <div className='payment-title'>Make Payment</div>
            <div className='payment-content'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </div>
          </div>
        </div>
        <div className='options'>
          <div className='car-icon'>
          </div>
          <div> 
            <div className='car-title'>Reach Airport on Selected Date</div>
            <div className='car-content'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </div>
          </div>
        </div>
      </div>
      <div className="Trip-card">
          <div className='trip-content'>
            <img src="./triptogrees.png" alt="trip" />
            <div className='trip-title'>Trip To Greece</div>
            <div className="month-name">
              <div className="month">14-29 June|</div>
              <div className="name">by Robbin joseph</div>
            </div>
            <div className='Three-icons'>
              <div><GiLips/></div>
              <div><IoBookSharp/></div>
              <div><FaTelegramPlane/></div>
            </div>
            <div className="trip-footer">
              <div className='analys'>
              <div ><EqualizerIcon/></div>
              <div className="noofpeople">24 people going</div>
              </div>
              <div className="hear-icon"><FavoriteBorderIcon/></div>
            </div>
          </div>
          <div className="sub-card">
            <div><img src="./temple.png" alt="logo" height="40px" width="41px" className='temple'/></div>
            <div>
              <div className='ongoing'>Ongoing</div>
              <div className='triptorom'>Trip to rome</div>
              <div><span className='percent'>40% </span>completed</div>
              <div className='line'></div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Easyandfast;