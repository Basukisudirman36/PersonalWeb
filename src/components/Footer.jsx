import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 Basuki Sudirman. All rights reserved.</p>
        <div style={styles.links}>
          <a  style={styles.link}>Privacy Policy</a>
          <a  style={styles.link}>Terms of Service</a>
          <a href="/contact" style={styles.link}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#93C5FD',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  text: {
    margin: '0',
    fontSize: '14px',
  },
  links: {
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '14px',
  },
};

export default Footer;
