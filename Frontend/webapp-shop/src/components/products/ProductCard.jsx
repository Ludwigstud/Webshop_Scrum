import React from 'react';
import { FaRegHeart, FaStar } from 'react-icons/fa6';
import useFetch from '../../hooks/useFetch';
import { apiPort } from '../../helpers/apiPort';

const ProductCard = () => {
  const { data: products, error } = useFetch(
    'https://localhost:7042/api/Products/GetProduct'
  );

  if (error) {
    return (
      <div className='error-message'>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    // Loading state or no products
    return <p>Loading...</p>;
  }

  const product = products[0];
  const imgPath = apiPort.https+"/images/"+product.imageUrl;
  console.log(imgPath);

  return (
    <>
      <div className='product-page'>
        <div className='container'>
          <img src={imgPath} alt={product.productName} />

          <div className='information'>
            <div className='product-name'>
              <h5>{product.productName}</h5>
              <div className='icon'>
                <FaRegHeart />
              </div>
            </div>
            <div className='rating'>
              <div className='star'>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
              <p className='total-rating'>(23)</p>
            </div>
            <div className='cost-add'>
              <p className='product-cost'>${product.price}</p>
              <div className='add'>
                <p className='minus button'>-</p>
                <p className='total'>0</p>
                <p className='plus button'>+</p>
              </div>
            </div>
            {/* ... (rest of the component remains the same) */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
