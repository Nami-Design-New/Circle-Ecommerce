import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/styles/_footer.scss";
import logo from "../../public/images/Logo.svg";
import { Link } from "react-router-dom";
import whats from "../../public/images/whats.svg";
import fb from "../../public/images/fb.svg";
import instgram from "../../public/images/instgram.svg";
import app from "../../public/images/app.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="Logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <ul>
              <li>
                <Link to="/" className="Link">
                  الرئيسية
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
                <Link to="/" className="Link">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-4">
            <ul className="Social_media">
              <li>
                <Link to="/" className="Link">
                  <img src={whats} alt="whats" />
                </Link>
              </li>
              <li>
                <Link to="/" className="Link">
                  <img src={fb} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link to="/" className="Link">
                  <img src={instgram} alt="instgram" />
                </Link>
              </li>
              <li>
                <Link to="/" className="Link">
                  <img src={app} alt="application" />
                </Link>
              </li>
            </ul>
          </div>

          <hr />

          <div className="col-12 col-lg-4">
            <div className="copyright">copyright @2025</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
