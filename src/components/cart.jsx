import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el icono de carrito

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="cart">
      <span className="cart-icon"><FaShoppingCart /></span> {/* Icono de carrito */}
      <span> Carrito ({cartItems.length})</span>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;