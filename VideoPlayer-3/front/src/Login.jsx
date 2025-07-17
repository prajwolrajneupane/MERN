import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", formData);

      console.log(response.data);

      setServerMessage(response.data.message);

    //  token aayesi, store it, console it and redirect to home
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("Token stored:", response.data.token);
      
    }

    } catch (error) {
      console.error(error);
      setServerMessage(error.response?.data?.message || 'Failed to connect to server');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <input
          type="password"
          name="password"
          placeholder="Your password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-3 rounded shadow"
        >
          Login
        </button>

    <p className="text-center mt-4 text-gray-700">No account?</p>
    <Link to="/register">Register</Link>
        {serverMessage && (
          <p className="text-center mt-4 text-gray-700">{serverMessage}</p>
        )}
      </form>
    </div>
  );
}

export default App;
