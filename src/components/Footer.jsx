import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn more about our story and mission.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@coffeeshop.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <i className="ri-facebook-circle-line"></i>
            <i className="ri-twitter-line"></i>
            <i className="ri-instagram-line"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
