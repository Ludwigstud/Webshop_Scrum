import React, { useEffect, useState } from "react";
import './_BestSallersSale.scss'
import {FaRegHeart} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'
const BestSellersSale = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7042/api/Products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const filteredData = data.filter(product => product.categoryId === 4);
        setData(filteredData);
      })
  }, []);


  return (
    <>
    {data.map((product, index) => (
    <div  key={index} className='best-sellers-sale-container'>
    <div className='content'>
      <div className='item'>
      <img className='product-image'  src={product.imageUrl} alt="API Image" />
        <p className='sale'>sale</p>
        <div className='info'>
          <p className='title'>{product.productName}</p>
          <p className='price-before-sale'>$36</p>
          <p className='price-after-sale'>${product.price}</p>
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
  ))}
      </>

  )
}

export default BestSellersSale