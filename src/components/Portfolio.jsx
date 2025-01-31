import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import About from "./About";
import Certifications from "./Certifications";

const Portfolio = () => {
  return (
    <div className="container border mt-3">
        <div className="topspace" id="about"></div>
        <About/>
        <hr />
        <div className="topspace" id="certifications"></div>
        <Certifications/>
        <hr />
      <div className="topspace" id="projects"></div>
      <div className="projectsContainer">
        <div className="fs-1 fw-bold text-center my-3">Projects</div>
      </div>
      <hr/>
      <div className="topspace" id="contact"></div>
      <div className="contactContainer">
        <div className="fs-1 fw-bold text-center my-3">Contact</div>
      </div>
    </div>
  );
};

export default Portfolio;
