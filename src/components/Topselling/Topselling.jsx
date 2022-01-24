import React from 'react';
import './Topselling.css'
import { FaTelegramPlane } from "react-icons/fa";
function Topselling(props) {
  return (
    <div className='Topselling'>
      <div className='TopSelling-title'>Top Selling</div>
      <div className="destinationa">Top Destinations</div>
      <div className="destination-tips">
        <div className="item1">
          <div className='price-content'>
          <div className='country-price'> 
          <div className="country-city">Rome,Italty</div>
          <div className="price">$5,42k</div>
          </div>
          <div className="days">
          <span className='telegram-icon'><FaTelegramPlane/></span>
            10 Days Trip
          </div>
          </div> 
        </div>
        <div className="item2">
        <div className='price-content'>
        <div className='country-price'> 
          <div className="country-city">Rome,Italty</div>
          <div className="price">$5,42k</div>
          </div>
          <div className="days">
            <span className='telegram-icon'><FaTelegramPlane/></span>
            10 Days Trip
          </div>
          </div> 
        </div>
        <div className="item3 spiral-parent">
        <div className='price-content'>
        <div className='country-price'> 
          <div className="country-city">Rome,Italty</div>
          <div className="price">$5,42k</div>
          </div>
          <div className="days">
          <span className='telegram-icon'><FaTelegramPlane/></span>
            10 Days Trip
          </div>
          <div className='spiral'></div> 
        </div>
        </div>
      </div>
    </div>
  );
}

export default Topselling;<div className='TopSelling-title'>Top Selling</div>