import About from "./About";
import Certifications from "./Certifications";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className="container mt-3">
        <div className="topspace" id="about"></div>
        <About/>
        <hr />
        <div className="topspace" id="certifications"></div>
        <Certifications/>
        <hr />
      <div className="topspace" id="projects"></div>
        <Projects/>
      <hr/>
    </div>
  );
};

export default Portfolio;
