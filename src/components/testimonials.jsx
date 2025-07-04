// src/components/Testimonials.jsx
import React from 'react';
import { testimonials } from '../data';
import '../styles/main.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p>"{testimonial.text}"</p>
              <div className="author">- {testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;