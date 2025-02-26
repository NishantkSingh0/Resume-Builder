import React, { useState, useEffect, useRef } from 'react';

const Examplepage = ({ 
  images = [
      '/resume-builder-web-application/Temp/temp1.png',
      '/resume-builder-web-application/Temp/temp2.png',
      '/resume-builder-web-application/Temp/temp3.png',
      '/resume-builder-web-application/Temp/temp4.png',
      '/resume-builder-web-application/Temp/temp5.png',
      '/resume-builder-web-application/Temp/temp6.png',
      '/resume-builder-web-application/Temp/temp7.png'
    ], 
  interval = 3000,
  showIndicators = true 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [direction, setDirection] = useState(null); // Track animation direction
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
      setDirection('right');
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

  // Handle navigation
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  // No images case
  if (!images.length) {
    return <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg">No images to display</div>;
  }

  const visibleIndices = getVisibleIndices();

  // Helper function to determine slide position classes
  const getSlideClasses = (i) => {
    if (isMobile) {
      return "transition-all duration-500 ease-in-out px-4";
    }
    
    // For desktop
    if (i === 1) { // Center (current) slide
      return "transition-all duration-500 ease-in-out px-4 scale-110 z-10";
    } else if (i === 0) { // Left slide
      return `transition-all duration-500 ease-in-out px-4 scale-90 opacity-70 ${
        direction === 'left' ? 'translate-x-8' : ''
      }`;
    } else { // Right slide
      return `transition-all duration-500 ease-in-out px-4 scale-90 opacity-70 ${
        direction === 'right' ? 'translate-x-8' : ''
      }`;
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      {/* Slideshow with original height */}
      <div className="w-full overflow-hidden py-8" ref={slideContainerRef}>
        <div className="flex justify-center items-center">
          {visibleIndices.map((index, i) => (
            <div
              key={`slide-${index}`}
              className={getSlideClasses(i)}
            >
              <img
                src={images[index]}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-contain rounded shadow"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicators only */}
      {showIndicators && (
        <div className="flex justify-center items-center mb-4 mt-4">
          <div className="flex space-x-3">
            {images.map((_, index) => (
              <button
                key={`indicator-${index}`}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Examplepage;