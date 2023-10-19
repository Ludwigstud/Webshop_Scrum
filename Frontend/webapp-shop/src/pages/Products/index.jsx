import React, { useState, useEffect } from 'react';

function Product() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]);

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist'));
    return savedWishlist || [];
  });

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const clearWishlist = () => {
    setWishlist([]); // Clear the wishlist
    localStorage.removeItem('wishlist'); // Clear the wishlist from localStorage
  };

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => addToWishlist(product)}>
              Add to Wishlist
            </button>
          </li>
        ))}
      </ul>

      <div>
        <h2>Wishlist</h2>
        <ul>
          {wishlist.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
        <button onClick={clearWishlist}>Clear Wishlist</button>
      </div>
    </div>
  );
}

export default Product;
