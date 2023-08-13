
import "./carousel.css";
import React, { useState } from 'react';
import Image from './Image';


const images = [
    { id: 1, src: '/my_portfolio/images/temp.png', alt: './temp.png' },
    { id: 2, src: '/my_portfolio/images/temp.png', alt: 'Image 2' },
    { id: 3, src: '/my_portfolio/images/temp.png', alt: 'Image 3' },
    { id: 4, src: '/my_portfolio/images/temp.png', alt: 'Image 4' },
    { id: 5, src: '/my_portfolio/images/temp.png', alt: 'Image 5' },
    { id: 6, src: '/my_portfolio/images/temp.png', alt: 'Image 6' },
    { id: 7, src: '/my_portfolio/images/temp.png', alt: 'Image 2' },
    { id: 8, src: '/my_portfolio/images/temp.png', alt: 'Image 3' },
    { id: 9, src: '/my_portfolio/images/tem2p.png', alt: 'Image 4' },
    { id: 10, src: '/my_portfolio/images/temp.png', alt: 'Image 5' },
    { id: 11, src: '/my_portfolio/images/temp.png', alt: 'Image 6' },
  ];
  
  const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideCount = Math.ceil(images.length/3); // Change this to the number of slides you have
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideCount - 1 ? 0 : currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideCount - 1 : currentSlide - 1);
    };

    const slideStyle = {
      transform: `translateX(-${currentSlide * 100}%)`
    };

    return (
      <div className="carousel_box">
      <div className="carousel">
        <div className="carousel__images" style={slideStyle}>
          {images.map(image => (
            <div className="carousel__image">
            <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        <div className="carousel-controls">

        <button className="carousel__button carousel__button--prev" onClick={prevSlide}>Previous</button>
        <button className="carousel__button carousel__button--next" onClick={nextSlide}>Next</button>
        </div>
      </div>
      </div>
    );
  };
export default Carousel;