import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Slider from "./Slider";
import Footer from "./Footer";
import Contact from "./Contact";

export default function AllComponent() {
  return (
    <div>
      <Slider />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
