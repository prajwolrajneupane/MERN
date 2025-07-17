import React, { useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const send = await axios.post("http://localhost:3000/register", formData);
      console.log(send.data);
      alert(send.data.message)
    } catch (error) {
      console.error(error);
      alert('Failed to connect to server');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Your name"
          value={formData.username}
          // its refering to the username of the usestate
          //with this the usestate knows ki this is the input for user name
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

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
          Register
        </button>
          <p className="text-center mt-4 text-gray-700">Yes account?</p>
    <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default App;
