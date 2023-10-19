import React from 'react'
import './_BestSallersSale.scss'
import {FaRegHeart} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'
const BestSellersSale = (props) => {
  return (
    <div className='best-sellers-sale-container'>
    <div className='content'>
      <div className='item'>
        <div className='product-image'></div>
        <p className='sale'>sale</p>
        <div className='info'>
          <p className='title'>{props.productName}</p>
          <p className='price-before-sale'>${props.productPriceBeforeSale}</p>
          <p className='price-after-sale'>${props.productPriceAfterSale}</p>
          <div className='star-rating'>
            <span className='star checked'><BsStarFill /></span>
            <span className='star checked'><BsStarFill /></span>
            <span className='star checked'><BsStarFill /></span>
            <span className='star'><FaRegStar /></span>
            <span className='star'><FaRegStar /></span>
            <p className='review'>(3)</p>
          </div>
        </div>

      </div>
      <span className='heart'><FaRegHeart /></span>
    </div>

  </div>
  )
}

export default BestSellersSale