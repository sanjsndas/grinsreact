// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Hero = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && (
          <Link to={buttonLink} className="hero-button">
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;