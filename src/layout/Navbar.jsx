import React from "react";
import "../assets/styles/_header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/images/Logo.svg";
import bell from "../../public/images/bell.svg";
import cart from "../../public/images/cart.svg";
import user from "../../public/images/user.svg";
import Search from "../inputs/SearchInputs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          &#9776;
        </div>

        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="Link 800">
              الرئيسيه
            </Link>
          </li>
          <li>
            <Link to="category" className="Link">
              الاقسام
            </Link>
          </li>
          <li>
            <Link to="products" className="Link">
              المنتجات
            </Link>
          </li>
          <li>
            <Link to="About" className="Link">
              من نحن
            </Link>
          </li>
          <li>
            <Link to="contactus" className="Link">
              تواصل معنـا{" "}
            </Link>
          </li>
        </ul>

        <div className="User">
          <img src={user} alt="user" />
          <div className="user-info">
            <p>اهلا وسهلا</p>
            <h3>عبوده الدالي </h3>
          </div>
        </div>
      </div>
      <div className="smallnav">
        <div className="City_button">
          <DropdownButton
            id="dropdown-basic-button"
            title="المدينه"
            variant="Danger"
          >
            <Dropdown.Item href="#/action-1">القاهره</Dropdown.Item>
            <Dropdown.Item href="#/action-2"> الجيزه</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> اسكندريه</Dropdown.Item>
          </DropdownButton>
        </div>
        <Search />
        <div className="Notifications smallNot">
          <div className="Cart">
            <img src={cart} alt="" />
            <span>1</span>
          </div>
          <div className="Cart">
            <img src={bell} alt="" />

            <span>1</span>
          </div>
        </div>
        <div className="Notifications">
          <div className="Cart">
            <img src={cart} alt="" />
            <span>1</span>
          </div>
          <div className="Cart">
            <img src={bell} alt="" />

            <span>1</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
