// src/pages/Home.js

import React from "react";
import "./IntroductionandBranding.css"
const IntroductionandBranding = () => {
  return (
    <div>
      <section class="intro-section">
        <div class="container">
          <div class="intro-content">
            <h1 class="company-name">Your Company Name</h1>
            <h2 class="tagline">Tagline or Catchy Phrase Here</h2>
            <p class="key-messages">
              Welcome to our portfolio! We are a creative team passionate about
              delivering high-quality products and services. Our mission is to
              make a positive impact through innovative solutions.
            </p>
            <a href="#portfolio" class="cta-button">
              Explore Our Work
            </a>
          </div>
        </div>
      </section>
      {/* Add content for your home page */}
    </div>
  );
};

export default IntroductionandBranding;
