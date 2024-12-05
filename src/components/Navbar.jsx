import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid #ccc',
      }}
    >
      <div>
        <Link to="/" style={{ marginRight: '15px' }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: '15px' }}>
          About
        </Link>
        <Link to="/contact" style={{ marginRight: '15px' }}>
          Contact
        </Link>
        {isAuthenticated && (
          <Link to="/profile" style={{ marginRight: '15px' }}>
            Profile
          </Link>
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <>
            <span style={{ marginRight: '15px' }}>Welcome, {user.name}!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/register" style={{ marginRight: '15px' }}>
              Register
            </Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
