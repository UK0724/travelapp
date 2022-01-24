import React from 'react';
import "./NavFooter.css";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
function NavFooter(props) {
  return (
    <div className='NavFooter'>
      <div>
        <div className='Nav-logo'>Jadoo.</div>
        <div className='Navfooter-des'>Book your trip in minute, get full
Control for much longer.
</div>
      </div>
      <div>
        <div className='head'>Company</div>
        <div className='Navfooter-content'>
        <div>About</div>
        <div>Careers</div>
        <div>Mobile</div>
        </div>
      </div>
      <div>
        <div className='head'>Contact</div>
        <div className='Navfooter-content'>
        <div>Help/FAQ</div>
        <div>Press</div>
        <div>Affilates</div>
        </div>
      </div>
      <div>
        <div className='head'>More</div>
        <div className='Navfooter-content'>
        <div>Airlinefees</div>
        <div>Airline</div>
        <div>Low fare tips</div>
        </div>
      </div>
      <div>
        <div className='socialmeadia-icons'>
          <div><FaFacebookF/></div>
          <div><GrInstagram/></div>
          <div><AiOutlineTwitter/></div>
        </div>
        <div className='social-des'>Discover our app</div>
        <div>
        <img
            alt="app store"
            height="70px"
            width="70px"
            style={{paddingright:"10px",}}
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="70px"
            width="70px"
            style={{paddingleft:"10px",}}
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>
      </div>
    </div>
  );
}

export default NavFooter;