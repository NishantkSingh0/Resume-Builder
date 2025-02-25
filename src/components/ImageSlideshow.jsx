import React, { useState, useEffect, useRef } from 'react';
import Typed from "typed.js";
import { useNavigate } from 'react-router-dom';

// Image Slideshow Component (No Navigation Controls)
const BackgroundSlideshow = ({ images = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const slideContainerRef = useRef(null);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide images
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Calculate indices for visible slides
  const getVisibleIndices = () => {
    if (isMobile) {
      return [currentIndex];
    } else {
      // For desktop, show 3 images with current in the middle
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      const nextIndex = (currentIndex + 1) % images.length;
      return [prevIndex, currentIndex, nextIndex];
    }
  };

  // No images case
  if (!images.length) {
    return null;
  }

  const visibleIndices = getVisibleIndices();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100 -z-10">
      <div className="w-full h-full overflow-hidden" ref={slideContainerRef}>
        <div className="flex justify-center items-center h-full">
          {visibleIndices.map((index, i) => (
            <div
              key={`slide-${index}`}
              className={`transition-all duration-500 ease-in-out px-4 ${
                !isMobile && i === 1 
                  ? 'scale-110 z-10' 
                  : 'scale-90 opacity-70'
              }`}
            >
              <img
                src={images[index]}
                alt=""
                className="w-full h-auto object-contain rounded shadow-lg opacity-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main FrontPage Component
const FrontPage = () => {
  const navigate = useNavigate();
  
  // Example A4 sized resume images (replace with your actual images)
  const resumeImages = [
    '/resume-builder-web-application/Temp/temp1.png',
    '/resume-builder-web-application/Temp/temp2.png',
    '/resume-builder-web-application/Temp/temp3.png',
    '/resume-builder-web-application/Temp/temp4.png',
    '/resume-builder-web-application/Temp/temp5.png',
    '/resume-builder-web-application/Temp/temp6.png',
    '/resume-builder-web-application/Temp/temp7.png',
  ];
  
  const features = [
    "Build your resume easily",
    "Different variants of resume templates available",
    "Download your resume in pdf or web formate",
    "Stand out to employers",
    "Completely free to use",
    "Use AI to create a perfect description for your resume"
  ];

  const handleContinue = () => {
    navigate('/GetInfo');
  };

  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: features,
      loop: true,
      typeSpeed: 35,
      backSpeed: 25,
      backDelay: 500,
      cursorChar: " "
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen text-center px-4 overflow-hidden">
      {/* Background Slideshow */}
      <BackgroundSlideshow images={resumeImages} interval={5000} />
      
      {/* Content */}
      <div className="flex flex-col justify-center items-center w-full z-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 ">
          Resume Builder Web Application
        </h1>
        <span className="text-xl sm:text-2xl text-gray-800 h-6 mb-3 typing-text"></span>
        <button 
          className="px-4 py-[5px] bg-blue-500 text-white rounded-full hover:bg-blue-700 mt-5 transition-colors duration-300" 
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-2 text-center z-10">
        <p className="text-sm sm:text-lg text-gray-500">BRAVERS</p>
        <p className="text-xs sm:text-sm text-gray-500 mb-5">
          <a 
            href="https://nishantksingh0.github.io/Portfolio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            nishantksingh0.github.io/Portfolio
          </a>
        </p>
      </div>
    </div>
  );
};

export default FrontPage;