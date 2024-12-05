import React, { useState } from 'react';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';
import httpClient from './services/httpClient';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  const user = isAuthenticated
    ? JSON.parse(localStorage.getItem('user'))
    : null;

  // when the user wants to logout we simply delete the token
  // we dont have to implement this on the server
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuthenticated(false);
  };

  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
      />

      <AppRoutes
        isAuthenticated={isAuthenticated}
        setAuthenticated={setAuthenticated}
      />
    </div>
  );
}

export default App;
