import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Profile from './Profile';
import Login from './Login';

const PrivateRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppRoutes = ({ isAuthenticated, setAuthenticated }) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route
      path="/login"
      element={<Login setAuthenticated={setAuthenticated} />}
    />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route
      path="/cart"
      element={
        <PrivateRoute isAuthenticated={isAuthenticated} element={<Cart />} />
      }
    />

    <Route
      path="/profile"
      element={
        <PrivateRoute isAuthenticated={isAuthenticated} element={<Profile />} />
      }
    />
  </Routes>
);

export default AppRoutes;
