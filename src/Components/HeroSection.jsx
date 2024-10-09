import React from 'react';
import Button from '../Useables/Button';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-screen w-full text-center">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={
            window.innerWidth >= 768
              ? "/src/assets/Hero.mp4" // Desktop video
              : "/src/assets/Heroname.mp4"  // Mobile video (6:19 aspect ratio)
          }
        />

        {/* Overlay for the content */}
        <div className="relative  bg-black bg-opacity-50 p-4 rounded-md ">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Make a Difference: Donate Excess Food to Reduce Hunger in Mumbai
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-6 animate-slideUp">
            Connect with the community and help reduce food waste with ShareBite.
          </p>
          <Button />
        </div>
      </div>

      {/* "What is ShareBite?" Section */}
      <div id="about" className="w-full bg-white py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 text-center">
          What is ShareBite?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto">
          ShareBite is a platform that connects people with excess food to those in need. Our goal is to reduce food wastage in Mumbai while helping communities fight hunger. By leveraging technology and existing delivery networks, we create a seamless donation process that benefits everyone.
        </p>
      </div>

      {/* "How It Helps?" Section */}
      <div id="impact" className="w-full bg-green-50 py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 text-center">
          How It Helps?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto">
          Our platform makes it easy for residents to donate food with just a few clicks. We use the existing infrastructure of delivery partners to collect and redistribute food efficiently, ensuring that the food reaches those in need quickly and safely.
        </p>
      </div>

      {/* Additional Sections or Footer can be added here */}
    </div>
  );
};

export default HeroSection;
