// src/components/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        {/* Add your navigation links or other header content here */}
      </nav>
    </header>
  );
};

export default Header;