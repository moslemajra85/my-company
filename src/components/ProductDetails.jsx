import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import httpClient from '../services/httpClient';

import { motion } from 'framer-motion';

const ProductDetails = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={styles.card}
    >
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.content}>
        <h3>{product.name}</h3>
        <p style={styles.description}>{product.description}</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Rating:</strong> {product.rating} ({product.numReviews}{' '}
          reviews)
        </p>
        <button style={styles.button}>
          {product.countInStock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </motion.div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '15px',
  },
  description: {
    color: '#555',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default ProductDetails;

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const { data } = await httpClient.get(`/products/${id}`);
//       setProduct(data);
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//     </div>
//   );
// };

// export default ProductDetails;
