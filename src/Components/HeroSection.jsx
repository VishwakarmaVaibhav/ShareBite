import React from 'react';
import Button from '../Useables/Button';
import Scroll from '../Useables/Scroll'; // Import the Scroll component
import { FaArrowUp } from "react-icons/fa";
import FoodCart from './FoodCart';
import styled from 'styled-components';
import Card from '../Useables/Card';
import Card2 from '../Useables/Card2';

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
        <div className="relative bg-black bg-opacity-50 p-4 rounded-md ">
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
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          {/* Text Section */}
          <div className="pl-12 flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 text-center md:text-left">
              What is ShareBite?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 text-center md:text-justify max-w-3xl mx-auto">
              ShareBite is an innovative platform dedicated to bridging the gap between food surplus and food scarcity in Mumbai. Our mission is to combat food wastage while nourishing those in need within the community. By harnessing cutting-edge technology and collaborating with established delivery networks, ShareBite simplifies the food donation process, making it accessible and efficient for everyone involved. We connect individuals and organizations with excess food to local charities and shelters, ensuring that nutritious meals reach vulnerable populations. Through our commitment to sustainability and community well-being, ShareBite strives to create a positive impact, fostering a culture of generosity and collaboration in the fight against hunger.
            </p>
          </div>
          {/* Card Section */}
          <div className="flex-1 flex justify-center">
            <Card />
          </div>
        </div>
      </div>

      {/* "How It Helps?" Section */}
      <div id="impact" className="w-full bg-white py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          {/* Card Section */}
          <div className="flex-1 flex justify-center">
            <Card2 />
          </div>
          {/* Text Section */}
          <div className="pr-12 flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 text-center md:text-left">
              How It Helps?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 text-center md:text-justify max-w-3xl mx-auto">
              ShareBite tackles food wastage and hunger by enabling a seamless food donation process. Our platform connects individuals and businesses with excess food to local distribution points and charities, ensuring that surplus food reaches those in need. By leveraging technology and existing delivery networks, ShareBite fosters community engagement and social responsibility, transforming food waste into a valuable resource for the underprivileged. Participating in ShareBite empowers users to make a meaningful difference in reducing food insecurity in Mumbai, creating a more compassionate and sustainable future for all.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Up Button */}
      <Scroll />

      {/* Additional Sections or Footer can be added here */}
    </div>
  );
};

export default HeroSection;
