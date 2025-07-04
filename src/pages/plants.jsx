import React from 'react';
import PlantCard from '../components/PlantCard';
import { plants } from '../data';
import '../styles/main.css';

const Plants = () => {
  return (
    <div className="page-container">
      <h1>Our Plants</h1>
      <div className="plants-grid">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Plants;