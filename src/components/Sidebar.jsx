import React, { useState, useEffect } from 'react';
import httpClient from '../services/httpClient';

const Sidebar = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await httpClient.get('/categories');
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div
      style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}
    >
      <h4>Categories</h4>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {categories.map((category) => (
          <li key={category} style={{ cursor: 'pointer', margin: '10px 0' }}>
            <button onClick={() => setCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
