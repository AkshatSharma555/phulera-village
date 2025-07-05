import './HeroSection.css';
import slide1 from '../assets/hero/slide1.jpg';
import slide2 from '../assets/hero/slide2.jpg';
import slide3 from '../assets/hero/slide3.jpg';
import { useState, useEffect } from 'react';

const slides = [slide1, slide2, slide3];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="hero-image" />

      {/* Arrows */}
      <button className="arrow left-arrow" onClick={prevSlide}>&#10094;</button>
      <button className="arrow right-arrow" onClick={nextSlide}>&#10095;</button>

      {/* Dots */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
