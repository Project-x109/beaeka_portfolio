// src/components/Header.js

import React from "react";
import "./Header.css";

const Header = () => {

    return (
      <header>
        <nav>
          <ul className="primary-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/sector">Sector</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>  
            <li><a href="/services">Services</a></li>
          </ul>
        </nav>
      </header>
    );
  
  }  

export default Header;
