import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmA5tKob4HmP2P9c0XDECLes5QMg2IsKdjc4cdje3Fxz514-DhVaC2vucHIMIomgFbRJs&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0AtP5dkQHl69qVQHEEVIzhJ771CAoNKvVtfJMBslw3AK8hTrt3sp0Y8tLdMbCfbA2gI&usqp=CAU',
    'https://media.licdn.com/dms/image/C4E12AQEJvFKw654VoQ/article-cover_image-shrink_600_2000/0/1600191670130?e=2147483647&v=beta&t=rzfRTsXFJfly614anCSliJu2n5k4JautrEMoGKvQvGQ',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
  <div className=" w-full overflow-hidden px-4 sm:px-8 lg:px-16">
  {/* Slide Images */}
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div key={index} className="w-full flex-shrink-0">
        <img
          src={slide}
          alt={`Slide ${index + 1}`}
          className="w-full h-auto rounded-2xl object-contain"
        />
      </div>
    ))}
  </div>

  {/* Indicators */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {slides.map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'}`}
        onClick={() => setCurrentSlide(index)}
        aria-label={`Slide ${index + 1}`}
      />
    ))}
  </div>
</div>


</>
  );
};

export default Carousel;
