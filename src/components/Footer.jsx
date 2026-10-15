import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {currentYear} Thangapandi K. All rights reserved.
        </p>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/thangapandi-k/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://github.com/Thangapandi-K"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="mailto:thangapandi.chella@gmail.com"
            className="footer-link"
            aria-label="Email"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
