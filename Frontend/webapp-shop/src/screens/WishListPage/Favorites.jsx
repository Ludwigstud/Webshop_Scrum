import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'
import { TbShoppingBagPlus } from 'react-icons/tb'



const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Hämta favoritprodukter från localStorage när komponenten laddas
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFromFavorites = (product) => {
    // Ta bort produkten från favoriter och uppdatera localStorage
    const updatedFavorites = favorites.filter((item) => item.id !== product.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-page">
      {favorites.length === 0 ? (
        <p className='massage'>Du har inga favoritprodukter ännu..</p>
      ) : (
        <div>
          {favorites.map((product, index) => (
            <div key={index} className='wish-list-container'>
              <div className='content'>
                <div className='item'>
                  <img className='product-image' src={product.imageUrl} alt={product.productName} />
                  {product.categoryId === 3 || product.categoryId === 4 ? (
                    <p className="sale">Sale</p>
                  ) : null}
                  <div className='info'>
                    <p className='title'>{product.productName}</p>
                    {product.categoryId === 3 || product.categoryId === 4 ? (
                      <>
                        <p className='price-before-sale'>${product.price}</p>
                        <p className='price-after-sale'>${product.priceAfterSale}</p>
                      </>
                    ) : (
                      <p className='price'>${product.price}</p>
                    )}
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
                <span className="heart" onClick={() => removeFromFavorites(product)}>
                  <FaHeart color="red" />
                </span>
                <span className='bag'><TbShoppingBagPlus /></span>
              </div>
              <hr />
            </div>
          ))}
        </div>   
      )}
    </div>
  );
};

export default Favorites;
