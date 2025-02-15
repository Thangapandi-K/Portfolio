
import ArtVista from "../assets/projects/ArtVista.png";
import CityWeatherApp from "../assets/projects/CityWeatherApp.png";
import QRCode from "../assets/projects/QRCode.png";

const Projects = () => {
  return (
    <div className="projects container row">
      <div className="fs-1 fw-bold text-center my-3">Projects</div>
      <div className="card-container gap-5 row mx-auto d-flex justify-content-center p-1">
        <div className="card p-3 rounded">
          <img src={ArtVista} className="card-img-top col-sm-12 col-md-6 col-lg-3" alt="artVista" />
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
          <img src={CityWeatherApp} className="card-img-top col-sm-12 col-md-6 col-lg-3" alt="city-weather-app" />
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
        <div className="card p-3 rounded">
          <img src={QRCode} className="card-img-top col-sm-12 col-md-6 col-lg-3" alt="qr-code-genrator" />
          <div className="card-body">
            <h5 className="card-title">QR Code Generator</h5>
            <p className="card-text">Generate your QR code and donwload</p>
            <div className="row gap-2">
            <span className="stacks">
                <span className="tech-stack">ReactJS</span>
                <span className="tech-stack">Public API</span>
                <span className="tech-stack">CSS</span>
              </span>
              <a
                href="https://qr-code-generator-webapp-tk.netlify.app/"
                className="btn btn-outline-secondary"
                target="_blank"
              >
                Preview
              </a>
              <a
                href="https://github.com/Thangapandi-K/qr-code-generator"
                className="btn btn-outline-secondary"
                target="_blank"
              >
                Source-GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
