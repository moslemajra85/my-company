import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import httpClient from '../services/httpClient';
import Sidebar from './Sidebar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  const fetchProducts = async () => {
    const { data } = await httpClient.get('/products');
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setCategory={setCategory} />
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Products</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              style={{ border: '1px solid #ccc', padding: '10px' }}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <Link to={`/products/${product._id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
