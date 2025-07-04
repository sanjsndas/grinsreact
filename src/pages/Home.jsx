import Hero from '../components/Hero';
import PlantCard from '../components/PlantCard';
import Testimonials from '../components/Testimonials';
import { plants } from '../data';

const Home = () => {
  return (
    <>
      <Hero 
        title="Welcome to Grinsetway" 
        subtitle="Your ultimate gardening companion"
        buttonText="Explore Plants"
        buttonLink="/plants"
      />
      
      <section className="featured-plants">
        <div className="container">
          <h2>Featured Plants</h2>
          <div className="plants-grid">
            {plants.slice(0, 3).map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Home;