import React, { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import axios from 'axios';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products on mount
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const DeleteHandler = async (name) => {
    try {
      await axios.delete(`http://localhost:5000/products/${name}`);
      setProducts((prev) => prev.filter((p) => p.name !== name));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-2 rounded relative">
            {/* Close Button */}
            <div
              className="h-5 w-5 flex justify-center items-center bg-red-500 rounded-full absolute top-2 right-2 cursor-pointer"
              onClick={() => DeleteHandler(product.name)}
            >
              <i className="ri-close-line text-white text-sm"></i>
            </div>

            {/* Product Image */}
            <img
              src={`http://localhost:5000/products/${product.image}`}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-2"
            />

            {/* Product Info */}
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
