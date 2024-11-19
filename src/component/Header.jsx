import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";

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
            <img src="/logo-p.png" alt="MyLogo" className="logo-img" />
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
            to="./about"
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
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Headers;
