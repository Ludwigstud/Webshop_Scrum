import React, { useEffect, useState } from "react";
import './_SaleProducts.scss'
import {FaRegHeart} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'
import {BsBag} from 'react-icons/bs'

const SaleProducts = () => {
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
        const filteredData = data.filter(product => product.categoryId === 3);
        setData(filteredData);
      })
  }, []);

  return (
    <>
  {data.map((product, index) => (
  <div key={index} className='sale-products'>
  <div className='image-container'>
  <img className='product-image'  src={product.imageUrl} alt="API Image" />
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
<p className='title'>{product.productName}</p>
<p className='price-before-sale'>$38</p>
<p className='price-after-sale'>${product.price}</p>
</div>
))}
    </>
  )
}

export default SaleProducts