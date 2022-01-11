import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import Capabilities from "./components/Capabilities/Capabilities";
import Projects from "./components/Projects/Projects";
import Studies from "./components/Studies/Studies";
import About from "./components/About/About";
import Testimonial from "./components/Testimonials/Testimonial";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Capabilities />
      <Projects />
      <Studies />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
