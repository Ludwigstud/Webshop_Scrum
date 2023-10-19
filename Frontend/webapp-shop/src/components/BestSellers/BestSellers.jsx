import React from 'react'
import './_BestSellers.scss'
import {FaRegHeart} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'

const BestSellers = (props) => {
  return (
    <div className='best-sellers-container'>
    <div className='content'>
      <div className='item'>
        <div className='product-image'></div>
        <div className='info'>
          <p className='title'>{props.productName}</p>
          <p className='price'>${props.productPrice}</p>
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

export default BestSellers