import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-section">
          <h4 className="animated-text">Quick Links</h4>
          <ul>
            <li>
              <NavLink to="./about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="./service">Services</NavLink>
            </li>
            <li>
              <NavLink to="./project">Projects</NavLink>
            </li>
            <li>
              <NavLink to="./contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h4 className="animated-text">Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100088509691215"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/salmanislam/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://wa.me/<+8801681412690>"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.behance.net/salmanislam2019"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-behance"></i>
            </a>
            <a
              href="https://dribbble.com/Salman99"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-dribbble"></i>
            </a>
            <a
              href="https://github.com/DarkDesignerSalman"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4 className="animated-text">Contact Us</h4>
          <p>
            <i className="fas fa-envelope"></i> Email: salmanislam501@gmail.com
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> Phone: +88 01681412690
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Address: Bosila,
            Mohommodpur, Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="animated-text">
          &copy; {new Date().getFullYear()} Salman Designer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
