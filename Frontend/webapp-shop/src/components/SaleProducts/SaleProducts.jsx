import React from 'react'
import './_SaleProducts.scss'
import {FaRegHeart} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'
import {BsBag} from 'react-icons/bs'

const SaleProducts = (props) => {
  return (
    <div className='sale-products'>
    <div className='image-container'>
      <div className='product-image'></div>
      <p className='sale'>sale</p>
      <span className='heart'><FaRegHeart /></span>
      <span className='bag'><BsBag /></span>
    </div>
    <div className='star-rating'>
      <span className='star checked'><BsStarFill /></span>
      <span className='star checked'><BsStarFill /></span>
      <span className='star checked'><BsStarFill /></span>
      <span className='star'><FaRegStar /></span>
      <span className='star'><FaRegStar /></span>
      <p className='review'>(3)</p>
    </div>
    <p className='title'>{props.productName}</p>
    <p className='price-before-sale'>${props.productPriceBeforeSale}</p>
    <p className='price-after-sale'>${props.productPriceAfterSale}</p>
  </div>
  )
}

export default SaleProducts