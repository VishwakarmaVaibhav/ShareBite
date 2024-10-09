import React , { useState } from'react'
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';

const Donatefood = () => {
 // State to hold form data
 const [formData, setFormData] = useState({
    foodItem: '',
    quantity: '',
    description: '',
    contactName: '',
    contactNumber: '',
    pickupAddress: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace this with your form submission logic
  };

  return (
    <>
    <Navbar />
     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Donate Food</h2>
        <form onSubmit={handleSubmit}>
          {/* Food Item */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="foodItem">
              Food Item
            </label>
            <input
              type="text"
              name="foodItem"
              id="foodItem"
              value={formData.foodItem}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">
              Description (optional)
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          {/* Contact Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="contactName">
              Contact Name
            </label>
            <input
              type="text"
              name="contactName"
              id="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              id="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Pickup Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="pickupAddress">
              Pickup Address
            </label>
            <textarea
              name="pickupAddress"
              id="pickupAddress"
              value={formData.pickupAddress}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Submit Donation
          </button>
        </form>
      </div>
    </div>

    <Footer />
    </>
   
  );
};

export default Donatefood