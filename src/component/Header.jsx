import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "../public/logo-p.png";

const Headers = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header>
        <div>
          <NavLink to="/" className="logo">
            <img src={logo} alt="MyLogo" className="logo-img" />
            <span>Designer Salman</span>
          </NavLink>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          &#9776; {/* Hamburger icon */}
        </button>

        <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="./work-experience"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="./service"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Services
          </NavLink>
          <NavLink
            to="./project"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="./contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </nav>

        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100088509691215"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/salmanislam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://wa.me/<+8801681412690>"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Headers;
