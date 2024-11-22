import React, { useState, useEffect } from "react";

const images = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1732183672856_21novjokerpreviewweb.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1732016630763_websrikalidas.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1731584470926_transformersoneweb.jpg",
];

export function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds delay

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden my-4 rounded-2xl">
      {/* Image slides container */}
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Move images based on the current index
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2  -translate-y-1/2 bg-black bg-opacity-30 rounded-e-md p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 text-gray-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-black bg-opacity-30 rounded-s-md p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 text-gray-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
