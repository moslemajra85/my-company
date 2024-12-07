import React, { useState, useEffect } from 'react';
import { FaTv, FaGem, FaCouch } from 'react-icons/fa'; // Importing icons for the categories
import httpClient from '../services/httpClient';

const Sidebar = ({ setCategory }) => {
  const [categories, setCategories] = useState([
    'Electronics',
    'Gold',
    'Furniture',
  ]);

  const renderCategoryIcon = (category) => {
    switch (category) {
      case 'Electronics':
        return <FaTv />;
      case 'Gold':
        return <FaGem />;
      case 'Furniture':
        return <FaCouch />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.sidebar}>
      <h4 style={styles.heading}>Categories</h4>
      <ul style={styles.categoryList}>
        {categories.map((category) => (
          <li
            key={category}
            style={styles.categoryItem}
            onClick={() => setCategory(category)}
          >
            <span style={styles.icon}>{renderCategoryIcon(category)}</span>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    padding: '20px',
    borderRight: '1px solid #ccc',
    backgroundColor: '#f4f4f4',
    height: '100vh',
  },
  heading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  categoryList: {
    listStyleType: 'none',
    padding: 0,
  },
  categoryItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '5px',
    backgroundColor: '#fff',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  categoryItemHover: {
    backgroundColor: '#007BFF',
    color: 'white',
  },
  icon: {
    marginRight: '10px',
    fontSize: '20px',
  },
};

export default Sidebar;
