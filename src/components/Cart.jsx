import React, { useEffect, useState } from 'react';
import httpClient from '../services/httpClient';
const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await httpClient.get('/cart');
      setCart(data);
    };

    fetchCart();
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.product._id}>
          <p>
            {item.product.name} - {item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
