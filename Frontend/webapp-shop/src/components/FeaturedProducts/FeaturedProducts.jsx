import React from 'react'
import './_FeaturedProducts.scss'
import {FaRegHeart} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'
import {BsBag} from 'react-icons/bs'


const FeaturedProducts = (props) => {
  return ( 
    <div className='featured-products-container'>
      <div className='image-container'>
        <div className='product-image'></div>
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
      <p className='price'>${props.productPrice}</p>
    </div>
  )
}

export default FeaturedProducts