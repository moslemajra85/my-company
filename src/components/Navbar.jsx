// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = ({ isAuthenticated, user, onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     onLogout();
//     navigate('/');
//   };

//   return (
//     <nav
//       style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         padding: '10px',
//         borderBottom: '1px solid #ccc',
//       }}
//     >
//       <div>
//         <Link to="/" style={{ marginRight: '15px' }}>
//           Home
//         </Link>
//         <Link to="/about" style={{ marginRight: '15px' }}>
//           About
//         </Link>
//         <Link to="/contact" style={{ marginRight: '15px' }}>
//           Contact
//         </Link>
//         {isAuthenticated && (
//           <Link to="/profile" style={{ marginRight: '15px' }}>
//             Profile
//           </Link>
//         )}
//       </div>
//       <div>
//         {isAuthenticated ? (
//           <>
//             <span style={{ marginRight: '15px' }}>Welcome, {user.name}!</span>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/register" style={{ marginRight: '15px' }}>
//               Register
//             </Link>
//             <Link to="/login">Login</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.links}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/about" style={styles.link}>
            About
          </Link>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
          {isAuthenticated && (
            <Link to="/profile" style={styles.link}>
              Profile
            </Link>
          )}
        </motion.div>
      </div>
      <div style={styles.auth}>
        {isAuthenticated ? (
          <>
            <span style={styles.greeting}>Welcome, {user.name}!</span>
            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={styles.button}
            >
              Logout
            </motion.button>
          </>
        ) : (
          <>
            <Link to="/register" style={styles.link}>
              Register
            </Link>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 30px',
    backgroundColor: '#333',
    color: 'white',
    alignItems: 'center',
    borderBottom: '2px solid #444',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    marginRight: '20px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    position: 'relative',
    paddingBottom: '5px',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#ff7f50',
  },
  auth: {
    display: 'flex',
    alignItems: 'center',
  },
  greeting: {
    marginRight: '15px',
  },
  button: {
    padding: '8px 15px',
    backgroundColor: '#ff7f50',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Navbar;
