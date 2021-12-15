import React from 'react';
import './Footer.css';
const image = require('../assets/shape-bg.png');

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={ image } alt="no internet connection" />
      </div>
    </div>
  )
};

export default Footer;
