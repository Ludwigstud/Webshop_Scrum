import React, { useEffect, useState } from "react";
import {FaRegHeart} from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'
import {BsBag} from 'react-icons/bs'

const SaleProducts = () => {
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
        const filteredData = data.filter(product => product.categoryId === 3);
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
  <div key={index} className='sale-products'>
  <div className='image-container'>
  <img className='product-image'  src={product.imageUrl} alt={product.productName} />
  <p className='sale'>sale</p>
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
<p className='price-before-sale'>${product.price}</p>
<p className='price-after-sale'>${product.priceAfterSale}</p>
</div>
))}
    </>
  )
}

export default SaleProducts