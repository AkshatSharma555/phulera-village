import { useState, useEffect } from 'react';
import './Tourism.css';

import tour1 from '../../assets/tourism/tour1.jpg';
import tour2 from '../../assets/tourism/tour2.jpg';
import tour3 from '../../assets/tourism/tour3.jpg';

const images = [tour1, tour2, tour3];

function TourismSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tourism-slider">
      <img src={images[index]} alt={`Tourism ${index + 1}`} className="tourism-image" />

      <div className="tourism-overlay">
        <h3>RURAL TOURISM</h3>
      </div>

      <button className="arrow left-arrow" onClick={prevSlide}>&#10094;</button>
      <button className="arrow right-arrow" onClick={nextSlide}>&#10095;</button>

      <div className="dots-container">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TourismSlider;
