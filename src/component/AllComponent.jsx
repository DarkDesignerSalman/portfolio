import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Slider from "./Slider";
import Footer from "./Footer";
import Contact from "./Contact";
import ServiceMain from "./ServiceMain";

export default function AllComponent() {
  return (
    <div>
      <Slider />
      <ServiceMain />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
