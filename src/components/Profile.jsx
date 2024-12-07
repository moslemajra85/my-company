import React from 'react';
import {
  FaUserCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShoppingBag,
} from 'react-icons/fa';

const Profile = () => {
  //const user = JSON.parse(localStorage.getItem('user'));
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    address: '456 Elm St, Metropolis',
  };

  const orders = [
    { id: '1001', date: '2024-12-05', total: 120.99 },
    { id: '1002', date: '2024-11-22', total: 75.49 },
    { id: '1003', date: '2024-11-18', total: 199.99 },
  ];
  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        {/* User Avatar */}
        <div style={styles.avatarContainer}>
          <FaUserCircle style={styles.avatar} />
        </div>

        {/* User Details */}
        <div style={styles.details}>
          <h2 style={styles.name}>{user.name}</h2>
          <p style={styles.info}>
            <FaEnvelope style={styles.icon} /> {user.email}
          </p>
          <p style={styles.info}>
            <FaMapMarkerAlt style={styles.icon} /> {user.address}
          </p>
        </div>
      </div>

      {/* Order History */}
      <div style={styles.orderHistory}>
        <h3 style={styles.orderTitle}>
          <FaShoppingBag style={styles.icon} /> Order History
        </h3>
        <ul style={styles.orderList}>
          {orders.map((order, index) => (
            <li key={index} style={styles.orderItem}>
              <div>
                <strong>Order #{order.id}</strong> - {order.date}
              </div>
              <div>Total: ${order.total.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  profileCard: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  avatarContainer: {
    flex: '0 0 auto',
    marginRight: '20px',
  },
  avatar: {
    fontSize: '80px',
    color: '#007BFF',
  },
  details: {
    flex: '1',
  },
  name: {
    fontSize: '24px',
    margin: '0 0 10px',
  },
  info: {
    fontSize: '16px',
    color: '#555',
    margin: '5px 0',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
  },
  orderHistory: {
    marginTop: '20px',
  },
  orderTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  orderList: {
    listStyleType: 'none',
    padding: 0,
  },
  orderItem: {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default Profile;
