import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHome, faSearch, faShoppingBag, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';


const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const deliveryFee = 0.00;
  const [promoApplied, setPromoApplied] = useState(false);
  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const applyPromoCode = () => {
    setPromoApplied(true);
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      size: 'M',
      color: 'Blue',
      image: 'lightblue.jpeg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      size: 'L',
      color: 'Red',
      image: 'lightblue.jpeg',
    },
  ];

  const addItemToCart = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);

    if (productInCart) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
    } else {
      const updatedCart = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
    }
  };
  

  return (
    <div>
      <div className="shopping-cart">
        <div className="product-list">
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <div className="product-info">
                  <img src={product.image} alt={product.name} />
                  <div>
                    <p>{product.name}</p>
                    <p>Price: ${product.price}</p>
                    <p>Size: {product.size}</p>
                    <p>Color: {product.color}</p>
                  </div>
                </div>
                <button onClick={() => addItemToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart">
          <h2>Order</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="product-info">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <span></span>
                    <p>Price: ${item.price}</p>
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>
                  </div>
                </div>
                <div className="quantity-counter">
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>—</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="checkout-divider"></div> 
      <div className="order-summary">
        {promoApplied ? (
          <p className='promocode'>
            Promocode applied{' '}
            <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          </p>
        ) : (
          <p>Promocode applied <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /></p>
        )}
        <span className="total-text">Price </span>
        <span className="total-price">${calculateTotalPrice()}</span>
        <span className='discount-text'>Discount <span className='discount-price'>-4.29</span></span>
        <p>Delivery: <span className='delivery-text'>{deliveryFee === 0.00 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span></p>
      </div>
      <div className="checkout-divider"></div>
      <div className="checkout-summary">
      <span className="total-text">Total </span>
      <span className="total-price">${calculateTotalPrice()}</span>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
      <div className="checkout-divider"></div> 
      <div className="icon-bar">
        <div className="icons">
        <FontAwesomeIcon icon={faHome} className="home-icon" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <FontAwesomeIcon icon={faShoppingBag} className="shopping-bag-icon" />
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          <FontAwesomeIcon icon={faUser} className="user-icon" />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;