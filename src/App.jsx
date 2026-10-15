import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [theme, setTheme] = useState(() => {
    // Check saved local theme or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-wrapper">
      {/* Aesthetic ambient motion canvas with architectural grid & organic orbs */}
      <div className="ambient-canvas" aria-hidden="true">
        <div className="ambient-grid"></div>
        <div className="grid-glow"></div>
        <div className="ambient-orb orb-primary"></div>
        <div className="ambient-orb orb-secondary"></div>
        <div className="ambient-orb orb-tertiary"></div>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <Hero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
