import React, { useEffect, useState } from "react";
import SaleProducts from '../../components/SaleProducts/SaleProducts'
import useFetch from '../../hooks/useFetch';
import { apiPort } from '../../helpers/apiPort';
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import { BsStarFill } from 'react-icons/bs'
import { BsBag } from 'react-icons/bs'

const FeaturedProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

   useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Funktion för att lägga till eller ta bort en produkt från favoriter
  const toggleFavorite = (product) => {
    const isFavorite = favorites.some((item) => item.id === product.id);
    if (isFavorite) {
      const updatedFavorites = favorites.filter((item) => item.id !== product.id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className='featured-products-container'>
      {data.map((product, index) => (
        <div key={index} className='product-container'>
          <div className='image-container'>
            <img className='product-image'  src={apiPort.https+"/images/"+product.imageUrl} alt={product.productName} />
            <span className='heart' onClick={() => toggleFavorite(product)}>
              {favorites.some((item) => item.id === product.id) ? (
                <FaHeart color='red' />
              ) : (
                    <FaRegHeart color='black' />
                  )}
            </span>
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
          <p className='price'>${product.price}</p>
        </div>
      ))}
< SaleProducts/>
    </div>
    
  );
}

export default FeaturedProducts;
