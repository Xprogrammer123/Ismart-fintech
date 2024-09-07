import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const GameCarousel = () => {
    const images = [
        { src: 'https://m.media-amazon.com/images/I/71G4Kg0wFTL.jpg'},
        { src: 'https://wstatic-prod-boc.krafton.com/common/content/news/20240805/hAxC5ILw_thumb.jpg' },
        { src: 'https://img.uhdpaper.com/wallpaper/codm-season-10-battle-pass-skins-call-of-duty-mobile-374@0@e-thumb.jpgs' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbd6CYFvIaGJR7eWiE8C5O90bTBcrs9OUmcw&s' },
        { src: 'https://img.freepik.com/premium-vector/website-advertising-concept_96055-481.jpg' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 2 : (prevIndex - 2 + images.length) % images.length
        );
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden border border-slate-400 mb-6 h-96 rounded-3xl  ">
            <div
                className="flex transition-transform duration-700 h-80"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex justify-center h-96">
                        {image.link ? (
                            <a href={image.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={image.src}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-96 rounded-xl object-cover"
                                />
                            </a>
                        ) : (
                            <img
                                src={image.src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-96 rounded-xl object-cover"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-4"
            >
                
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-4"
            >
                <IoIosArrowForward/>
            </button>
        </div>
    );
};

export default GameCarousel;
