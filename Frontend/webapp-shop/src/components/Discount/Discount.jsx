import { Component } from 'react';
import DiscountCard from './DiscountCard'

import './Discount.style.css';
import "bootstrap-icons/font/bootstrap-icons.css";

class Discounts extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Welcome to Manero!'
    };
  }


render() {
  return (
    <div className="App">
    
    
    
    <div className="title-box">
    <div className="icon-text-box">
    <i onClick={() => {}} class="bi bi-chevron-left"></i>
    <h2>My promocodes</h2>
    </div>
    <div className="button-box">
    <button>Current</button>
    <button>Used</button>
    </div>
    </div>
    <DiscountCard />
      
    </div>    
    
  )
}
}
export default Discounts;
