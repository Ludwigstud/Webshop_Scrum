import React, { useEffect, useState } from "react";
import {FaRegHeart} from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'
const BestSellersSale = () => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7042/api/Products/GetproductsHadi")
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


     // Ladda favoriter från localStorage när komponenten monteras
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
    <>
    {data.map((product, index) => (
    <div  key={index} className='best-sellers-sale-container'>
    <div className='content'>
      <div className='item'>
      <img className='product-image'  src={product.imageUrl} alt={product.productName} />
        <p className='sale'>sale</p>
        <div className='info'>
          <p className='title'>{product.productName}</p>
          <p className='price-before-sale'>${product.price}</p>
          <p className='price-after-sale'>${product.priceAfterSale}</p>
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
      <span className='heart' onClick={() => toggleFavorite(product)}>
              {favorites.some((item) => item.id === product.id) ? (
                <FaHeart color='red' />
              ) : (
                    <FaRegHeart color='black' />
                  )}
            </span>
    </div>
  </div>
  ))}
      </>

  )
}

export default BestSellersSale