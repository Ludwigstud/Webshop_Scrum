import React, { useEffect, useState } from "react";
import BestSellersSale from '../../components/BestSellersSale/BestSellersSale'
import {FaRegHeart} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'

const BestSellers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7042/api/Products/GetproductsHadi")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const filteredData = data.filter(product => product.categoryId === 2);
        setData(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div className='best-sellers-container'>
        {data.map((product, index) => (
             <div key={index} className='content'>
             <div className='item'>
             <img className='product-image' src={product.imageUrl} alt="API Image" />
               <div className='info'>
                 <p className='title'>{product.productName}</p>
                 <p className='price'>${product.price}</p>
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
      ))}
 
    < BestSellersSale productName="Summer dress" productPriceBeforeSale="36.00" productPriceAfterSale="32.78"/>
  </div>
  )
}

export default BestSellers