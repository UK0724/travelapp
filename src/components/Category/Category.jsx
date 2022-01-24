import React from 'react';
import "./Category.css"

function Category(props) {

  return (
    <div className='Category'>
      <div className='category-title'>CATEGORY</div>
      <div className='category-offer'>We Offer Best Services</div>
      <div className='container'>
        <div className='item'>
          <div className='icons'>
            <img src="./antena.png" alt="satelite" />
            <div className='div1'></div>
          </div>
          <div className='category-head'>Calculated Weather </div>
          <div className='category-des'>Built Wicket longer admire do barton vanity itself do in it.</div>
        </div>
        <div className='item colered'>
          <div className='icons'>
            <img src="./flight.png" alt="flight" />
            <div className='div2'></div>
          </div>
          <div className='category-head'>Calculated Weather </div>
          <div className='category-des'>Built Wicket longer admire do barton vanity itself do in it.</div>
        </div>
        <div className='item'>
          <div className='icons'>
            <img src="./mic.png" alt="mic" />
            <div className='div3'></div>
          </div>
          <div className='category-head'>Calculated Weather </div>
          <div className='category-des'>Built Wicket longer admire do barton vanity itself do in it.</div>
        </div>
        <div className='item'>
          <div className='icons'>
            <img src="./setting.png" alt="setting" />
            <div className='div4'></div>
          </div>
          <div className='category-head'>Calculated Weather </div>
          <div className='category-des'>Built Wicket longer admire do barton vanity itself do in it.</div>
        </div>    
      </div>
      <div className='orangec'></div>   
    </div>
  );
}

export default Category;