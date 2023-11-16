import { Component } from 'react';
import React from 'react';
import './_DiscountEmpty.style.scss'

import "bootstrap-icons/font/bootstrap-icons.css";
import discountImg from './DiscountImage.svg'


class PromoCodeEmpty extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Welcome to Manero!'
    };
  }


render() {
  return (
    <div className="App">
    
    
    <div className="body container-fluid">

    
    <div className="title-box">
    <div className="icon-text-box">
    <i onClick={() => {}} class="bi bi-chevron-left"></i>
    <h2>My promocodes</h2>
    </div>
    </div>

    <div className="img-text-box">
      <div className="img-box">
      <img className='discImg' src={discountImg} alt="discount" />
      </div>
    <div className="text-box">
      <h3 className='title'>You don't have promocodes yet!</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    </div>

    <div className="code-input">
    <div className="text-box">
    <p className='border-text'>Enter the voucher</p>
    </div>
      <input type='text' placeholder='Promocode2022'></input>
    
      
      <button className='submit-button'>submit</button>
      
    </div>    
    </div>
    </div>
  )
}
}
export default PromoCodeEmpty;
