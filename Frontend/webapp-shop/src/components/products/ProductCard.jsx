import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaStar } from "react-icons/fa6";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetch('https://localhost:7042/api/Products')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setProducts(data))
        .catch((error) => {
          setError(error);
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      setError(error);
      console.error('Error fetching data:', error);
    }
  }, []);

  if (error) {
    return (
      <div className="error-message">
        <p>Error: {error.message}</p>
      </div>
    );
  }
  return (
    <>
      <div className="product-page">
        <div className="container">
          {products.length > 0 && (
            <>
              <img src={products[0].imageUrl} alt={products[0].productName} />

              <div className="information">
                <div className="product-name">
                  <h5>{products[0].productName}</h5>

                  <div className="icon">
                    <FaRegHeart />
                  </div>
                </div>
                <div className="rating">
                  {" "}
                  <div className="star">
                    {" "}
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>{" "}
                  <p className="total-rating">(23)</p>{" "}
                </div>
                <div className="cost-add">
                  <p className="product-cost">${products[0].price}</p>
                  <div className="add">
                    <p className="minus button">-</p>
                    <p className="total">0</p>
                    <p className="plus button">+</p>
                  </div>
                </div>
                <div className="size">
                  <p className="sizetext">Size</p>
                  <div className="sizepick">
                    <div className="roundsize">
                      {" "}
                      <p>XS</p>
                    </div>
                    <div className="roundsize">
                      {" "}
                      <p>S</p>
                    </div>
                    <div className="roundsize">
                      {" "}
                      <p>M</p>
                    </div>
                    <div className="roundsize">
                      {" "}
                      <p>L</p>
                    </div>
                    <div className="roundsize">
                      {" "}
                      <p>XL</p>
                    </div>
                    <div className="roundsize">
                      {" "}
                      <p>XXL</p>
                    </div>
                  </div>
                </div>

                <div className="colorpick">
                  <p>Color</p>
                  <div className="colors">
                    <div className="color red"> </div>
                    <div className="color blue"> </div>
                    <div className="color white"> </div>
                    <div className="color grey"> </div>
                    <div className="color black"> </div>
                  </div>
                </div>
                <div className="description">
                  <h5>Description</h5>
                  <p className="information">
                    Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt
                    consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur
                    ipsum mollit magna proident nisi ipsum.
                  </p>
                </div>

                <div className="add-to-cart">
                  <p className="button">+ ADD TO CART</p>
                </div>

                <div className="reviews">
                  <h6>Reviews (23)</h6>
                  <p>View all</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
