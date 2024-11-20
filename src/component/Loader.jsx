import React from "react";
import "./loader.css";
import { FaCar } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="bike-loader-container">
      <div className="loader-text">Designer Salman</div>
      <div className="bike-icon-container">
        <FaCar className="bike-icon" />
      </div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loader;
