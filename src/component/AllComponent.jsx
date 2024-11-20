import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Slider from "./Slider";
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
