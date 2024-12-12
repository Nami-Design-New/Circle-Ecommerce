import React from "react";
import "../assets/styles/_header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/images/Logo.svg";
import bell from "../../public/images/bell.svg";
import cart from "../../public/images/cart.svg";
import user from "../../public/images/user.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar ">
      <div className="navbar-container container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          &#9776;
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="Link ">
              الرئيسيه
            </Link>
          </li>
          <li>
            <Link to="/" className="Link">
              الاقسام
            </Link>
          </li>
          <li>
            <Link to="/" className="Link">
              المنتجات
            </Link>
          </li>
          <li>
            <Link to="About" className="Link">
              من نحن
            </Link>
          </li>
        </ul>

        <div className="Notifications">
          <div className="Cart">
            <img src={cart} alt="" />
            <span>1</span>
          </div>
          <div className="Cart">
            <img src={bell} alt="" />

            <span>1</span>
          </div>
          <div className="User">
            <img src={user} alt="user" />
            <div className="user-info">
              <p>اهلا وسهلا</p>
              <h3>عبوده الدالي </h3>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
