import React from 'react';
import { FaSmileBeam, FaWarehouse, FaShippingFast } from 'react-icons/fa';

const About = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to ShopEase</h1>
        <p style={styles.heroSubtitle}>
          Your ultimate destination for quality products, exceptional service,
          and a seamless shopping experience. Let us simplify your shopping
          journey!
        </p>
      </section>

      {/* Highlights Section */}
      <section style={styles.highlightsSection}>
        <div style={styles.highlight}>
          <FaSmileBeam style={styles.icon} />
          <h3 style={styles.highlightTitle}>Customer First</h3>
          <p style={styles.highlightText}>
            We prioritize customer satisfaction with personalized support and
            excellent service.
          </p>
        </div>
        <div style={styles.highlight}>
          <FaWarehouse style={styles.icon} />
          <h3 style={styles.highlightTitle}>Wide Selection</h3>
          <p style={styles.highlightText}>
            Explore a vast range of products, from everyday essentials to luxury
            items.
          </p>
        </div>
        <div style={styles.highlight}>
          <FaShippingFast style={styles.icon} />
          <h3 style={styles.highlightTitle}>Swift Delivery</h3>
          <p style={styles.highlightText}>
            Experience quick, reliable, and hassle-free delivery to your
            doorstep.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section style={styles.storySection}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.storyText}>
          Established in 2022, <span style={styles.brandName}>ShopEase</span>{' '}
          was created to redefine the online shopping experience. Starting as a
          small venture, we’ve grown into a platform trusted by thousands. Our
          mission is to connect you with the products you love, backed by
          innovation and customer care.
        </p>
      </section>

      {/* Team Section */}
      <section style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>Meet the Team</h2>
        <div style={styles.teamGrid}>
          <div style={styles.teamCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              style={styles.teamImage}
            />
            <h4 style={styles.teamName}>John Doe</h4>
            <p style={styles.teamRole}>Founder & CEO</p>
          </div>
          <div style={styles.teamCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              style={styles.teamImage}
            />
            <h4 style={styles.teamName}>Jane Smith</h4>
            <p style={styles.teamRole}>Head of Marketing</p>
          </div>
          <div style={styles.teamCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              style={styles.teamImage}
            />
            <h4 style={styles.teamName}>Alex Brown</h4>
            <p style={styles.teamRole}>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: "'Poppins', sans-serif",
    color: '#444',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '50px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
  },
  heroTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#555',
    marginTop: '10px',
  },
  highlightsSection: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '50px',
  },
  highlight: {
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
  highlightTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  highlightText: {
    fontSize: '16px',
    color: '#666',
  },
  storySection: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '20px',
  },
  storyText: {
    fontSize: '18px',
    lineHeight: 1.6,
    color: '#555',
    maxWidth: '800px',
    margin: '0 auto',
  },
  brandName: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  teamSection: {
    textAlign: 'center',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  teamCard: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  teamImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  teamName: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  teamRole: {
    fontSize: '14px',
    color: '#666',
  },
};

export default About;
