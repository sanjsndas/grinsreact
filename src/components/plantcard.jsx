// src/components/PlantCard.jsx
import React from 'react';
import '../styles/main.css';

const PlantCard = ({ plant }) => {
  return (
    <div className="plant-card">
      <div className="plant-image">
        <img src={plant.image} alt={plant.name} />
      </div>
      <h3>{plant.name}</h3>
      <p className="scientific-name">{plant.scientificName}</p>
      <p>{plant.description}</p>
      <div className="plant-details">
        <span>Care: {plant.careLevel}</span>
        <span>Light: {plant.light}</span>
        <span>Water: {plant.water}</span>
      </div>
    </div>
  );
};

export default PlantCard;