import React, { useState } from 'react';
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [Menu, setMenu] = useState("shop");
  const [cartCount, setCartCount] = useState(1); // 🧪 dummy count

  return (
    <div className='navbar flex justify-around p-5 shadow-md'>
      <div className='nav-logo flex items-center gap-10'>
        <img className='h-15' src={logo} alt="" />
      </div>

      <ul className='nav-menu flex flex-row gap-7 items-center list-none text-red-300 text-2xs'>
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop{Menu === "shop" ? <hr /> : null}</Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men{Menu === "mens" ? <hr /> : null}</Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Women{Menu === "womens" ? <hr /> : null}</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids{Menu === "kids" ? <hr /> : null}</Link>
        </li>
      </ul>

      <div className='nav-login-cart flex items-center gap-5 relative'>
        <button className='w-20 h-10 rounded-md border-1 active:bg-red-200'>
          <Link to="/login">Login</Link>
        </button>

        <div className='relative'>
          <Link to="/cart">
            <img src={cart_icon} alt="" />
            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
