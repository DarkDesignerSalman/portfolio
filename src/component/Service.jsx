import React from "react";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
import "./service.css"; // Create a CSS file for styles

const Service = () => {
  return (
    <div className="service-section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-description">
        We specialize in creating stunning digital experiences and visual
        designs tailored to your needs.
      </p>
      <div className="services-container">
        {/* Web Development Section */}
        <motion.div
          className="service-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCode className="service-icon" />
          <h3>Web Development</h3>
          <p>
            Build responsive, user-friendly, and performance-optimized websites
            with modern technologies like React, Angular, and Node.js.
          </p>
        </motion.div>

        {/* Graphic Design Section */}
        <motion.div
          className="service-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPaintBrush className="service-icon" />
          <h3>Graphic Design</h3>
          <p>
            Create captivating visual designs, including logos, branding, and
            marketing materials, to elevate your brand identity.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
