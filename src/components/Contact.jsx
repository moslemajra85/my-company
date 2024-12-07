import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <section style={styles.header}>
        <h1 style={styles.headerTitle}>Contact Us</h1>
        <p style={styles.headerSubtitle}>
          We'd love to hear from you! Whether you have a question about our products, need assistance, or just want to share your experience, we’re here to help.
        </p>
      </section>

      {/* Contact Information Section */}
      <section style={styles.infoSection}>
        <div style={styles.infoCard}>
          <FaPhoneAlt style={styles.icon} />
          <h3 style={styles.infoTitle}>Phone</h3>
          <p style={styles.infoText}>+1 (234) 567-890</p>
        </div>
        <div style={styles.infoCard}>
          <FaEnvelope style={styles.icon} />
          <h3 style={styles.infoTitle}>Email</h3>
          <p style={styles.infoText}>support@shopease.com</p>
        </div>
        <div style={styles.infoCard}>
          <FaMapMarkerAlt style={styles.icon} />
          <h3 style={styles.infoTitle}>Address</h3>
          <p style={styles.infoText}>123 Market Street, New York, NY 10001</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={styles.formSection}>
        <h2 style={styles.formTitle}>Send Us a Message</h2>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />
          <textarea
            placeholder="Your Message"
            style={styles.textarea}
            rows="5"
            required
          ></textarea>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: "'Poppins', sans-serif",
    color: '#444',
    backgroundColor: '#f8f9fa',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  headerTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  headerSubtitle: {
    fontSize: '18px',
    color: '#555',
    marginTop: '10px',
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '50px',
  },
  infoCard: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '30%',
  },
  icon: {
    fontSize: '40px',
    color: '#007bff',
    marginBottom: '15px',
  },
  infoTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  infoText: {
    fontSize: '16px',
    color: '#666',
  },
  formSection: {
    textAlign: 'center',
  },
  formTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '20px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    fontSize: '16px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  textarea: {
    fontSize: '16px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    fontSize: '18px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Contact;
