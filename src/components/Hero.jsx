import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero-section">
      <span className="hero-tagline">Full Stack Developer</span>
      <h1 className="hero-title">
        Building fast, resilient & thoughtful web software.
      </h1>
      <p className="hero-description">
        Hi, I'm <strong>Thangapandi K</strong>. I build clean, reliable, and user-centric
        web applications. Welcome to my personal space on the web.
      </p>

      {/* Mandatory Social & Contact Links */}
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/thangapandi-k/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-pill"
          aria-label="LinkedIn Profile"
        >
          <AiOutlineLinkedin />
          <span>LinkedIn</span>
          <FiArrowUpRight />
        </a>

        <a
          href="https://github.com/Thangapandi-K"
          target="_blank"
          rel="noopener noreferrer"
          className="social-pill"
          aria-label="GitHub Profile"
        >
          <AiOutlineGithub />
          <span>GitHub</span>
          <FiArrowUpRight />
        </a>

        <a
          href="mailto:thangapandi.chella@gmail.com"
          className="social-pill"
          aria-label="Mail"
        >
          <AiOutlineMail />
          <span>Mail</span>
          <FiArrowUpRight />
        </a>

        <a
          href="#contact"
          className="social-pill primary"
          aria-label="Send a Message"
        >
          <span>Send a Message</span>
        </a>
      </div>

      {/* Engineering Focus & Primary Tools */}
      <div className="focus-container">
        <div className="focus-heading">
          <span>Core Stack & Everyday Tools</span>
        </div>
        <div className="tools-cluster">
          {/* Languages */}
          <span className="tool-tag featured">TypeScript</span>
          <span className="tool-tag featured">JavaScript (ES6+)</span>

          {/* Frontend Ecosystem */}
          <span className="tool-tag featured">React</span>
          <span className="tool-tag featured">TanStack Query</span>
          <span className="tool-tag featured">Tailwind CSS</span>

          {/* Backend & Architecture */}
          <span className="tool-tag featured">Node.js</span>
          <span className="tool-tag featured">Nest.js</span>
          <span className="tool-tag featured">Express.js</span>
          <span className="tool-tag">REST APIs</span>

          {/* Database */}
          <span className="tool-tag">PostgreSQL</span>

          {/* Development & Workflow */}
          <span className="tool-tag">Vite</span>
          <span className="tool-tag">Git &amp; GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
