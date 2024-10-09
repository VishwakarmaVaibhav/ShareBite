import React from 'react';
import Button from '../Useables/Button';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">
        Make a Difference: Donate Excess Food to Reduce Hunger in Mumbai
      </h1>
      <p className="text-lg text-gray-600 mb-6 animate-slideUp">
        Connect with the community and help reduce food waste with ShareBite.
      </p>
      <br />
      <Button />
    </div>
  );
};

export default HeroSection;
