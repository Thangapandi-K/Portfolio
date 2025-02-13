
import ArtVista from "../assets/projects/ArtVista.png";
import CityWeatherApp from "../assets/projects/CityWeatherApp.png";
import Project from '../assets/images/projects.png';

const Projects = () => {
  return (
    <div className="projects container row">
      <div className="fs-1 fw-bold text-center my-3">Projects</div>
      <div className="card-container gap-5 col-lg-9 col-md-12 row mx-auto">
        <div className="card p-3 rounded">
          <img src={ArtVista} className="card-img-top" alt="artVista" />
          <div className="card-body">
            <h5 className="card-title">ArtVista Gallery</h5>
            <p className="card-text">An Painting E-commerce Platform</p>

            <div className="row gap-2">
              <span className="stacks">
                <span className="tech-stack">ReactJS</span>
                <span className="tech-stack">NodeJS</span>
                <span className="tech-stack">ExpressJS</span>
                <span className="tech-stack">MongoDB</span>
                <span className="tech-stack">Bootstrap</span>
              </span>
              <a
                href="https://artvistagallery.netlify.app/"
                className="btn btn-outline-secondary"
                target="_blank"
              >
                Preview
              </a>
              <a
                href="https://github.com/Thangapandi-K/artvista-gallery-frontend"
                className="btn btn-outline-secondary"
                target="_blank"
              >
                Source-Frontend
              </a>
              <a
                href="https://github.com/Thangapandi-K/artvista-gallery-backend"
                className="btn btn-outline-secondary"
                target="_blank"
              >
                Source-Backend
              </a>
            </div>
          </div>
        </div>
        <div className="card p-3 rounded">
          <img src={CityWeatherApp} className="card-img-top" alt="artVista" />
          <div className="card-body">
            <h5 className="card-title">City Weather App</h5>
            <p className="card-text">City Weather Finder</p>
            <div className="row gap-2">
            <span className="stacks">
                <span className="tech-stack">ReactJS</span>
                <span className="tech-stack">Public API</span>
                <span className="tech-stack">CSS</span>
              </span>
              <a
                href="https://city-weather-app-project.netlify.app/"
                className="btn btn-outline-secondary"
                target="_blank"
              >
                Preview
              </a>
              <a
                href="https://github.com/Thangapandi-K/City-Weather-App"
                className="btn btn-outline-secondary"
                target="_blank"
              >
                Source-GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <img className="project-image image-fluid col-lg-3 col-md-12" src={Project} alt="" />
    </div>
  );
};

export default Projects;
