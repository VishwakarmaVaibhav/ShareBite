import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <p>&copy; 2024 ShareBite. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-400 transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-green-400 transition duration-300">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
