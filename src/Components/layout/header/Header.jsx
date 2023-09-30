import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import logo from "../../../asset/image (7).png";

const Header = () => {
  const isAuthenticated = true;
  // <div className="header-container">
  // <nav>
  //   <img src={logo} alt="gtysaudysa" />

  //   <div>
  //     <Link to="/">Home</Link>
  //     <Link to="/contact">Contact</Link>
  //     <Link to="/about">About</Link>

  //     <div className="cart">
  //       <Link to="/cart">
  //         <FiShoppingCart />
  //       </Link>
  //       <span className="cart-count">2</span>
  //     </div>
  //     <Link to={isAuthenticated ? "/me" : "/login"}>
  //       {isAuthenticated ? <FaUser /> : <FiLogIn />}
  //     </Link>
  //   </div>
  //   <div class="search-box">
  //     <button class="btn-search">
  //       <BsSearch />
  //     </button>
  //     <input
  //       type="text"
  //       class="input-search"
  //       placeholder="Type to Search.."
  //     />
  //   </div>
  // </nav>
  // </div>

  const [isActive, setIsActive] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const toggleMenu = () => {
    setIsActive(!isActive);
    document.body.style.overflow = isActive ? "auto" : "hidden";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><img src={logo} alt=""/></div>
        <div className="cart-container">
          <sup className="cart-badge">{cartItems}</sup>
          <div className="cart-icon" onClick={() => alert("Open cart")}>
            🛒
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <div className={isActive ? "nav-menu active" : "nav-menu"}>
          <div className="nav-item">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
