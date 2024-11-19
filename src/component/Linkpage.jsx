import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./Service";
import AllComponent from "./AllComponent";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Linkpage() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllComponent />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        {/* Ensure correct path */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
