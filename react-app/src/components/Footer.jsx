import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          OS<span>P</span>
        </h3>

        <p className="footer-links">
          <Link to="/" className="link-1 footer-link">
            Home
          </Link>

          <Link to="/about" className="footer-link">
            About
          </Link>

          <Link to="/login" className="footer-link">
            Login
          </Link>

          <Link to="/add-product" className="footer-link">
            Sell
          </Link>
        </p>

        <p className="footer-company-name">Online Sales and Purchase © 2024</p>
      </div>

      <div className="footer-center">
        <div>
          <FaMapMarkerAlt />

          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <FaPhone />

          <p>+1.555.555.5555</p>
        </div>

        <div>
          <FaEnvelope />

          <p>
            <Link to="/ailto:support@company.com">support@company.com</Link>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
