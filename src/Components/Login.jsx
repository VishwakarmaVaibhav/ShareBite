import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State for managing form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as API calls
    console.log("Email:", email, "Password:", password);
  };

  // Function to navigate to the Register page
  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-green-600">Login to ShareBite</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Link to the Register Page */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">New to ShareBite?</p>
          <button
            onClick={navigateToRegister}
            className="text-green-600 hover:underline mt-2"
          >
            Register here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
