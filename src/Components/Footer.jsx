import React from 'react';
import '../Styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>DocSwitch</h3>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><a href="/product-1">Features</a></li>
            <li><a href="/product-2">Developers</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: <a href="mailto:lovecode@gmail.com">lovecode@gmail.com</a></li>
            <li>Phone: <a href="tel:+916234343433">+91 6234343433</a></li>
          </ul>
        </div>

        {/* Social Media HyperLinks */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-links">
            <a href="http://instagram.com/iamgks.1/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/_Gk1811" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/gopi-kumar18/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DocSwitch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;