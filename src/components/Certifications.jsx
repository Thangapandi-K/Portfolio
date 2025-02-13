
import certification from "../assets/images/certifications.png";
import FSDOverall from "../assets/certifications/FSDOverall.png";
import ReactJS from "../assets/certifications/ReactJS.png";
import NodeJS from "../assets/certifications/NodeJS.png";
import MongoDB from "../assets/certifications/MongoDB.png";
import MySQL from "../assets/certifications/MySQL.png";
import Javascript from "../assets/certifications/Javascript.png";
import HTML from "../assets/certifications/HTML.png";
import CSS from "../assets/certifications/CSS.png";
import Bootstrap from "../assets/certifications/Bootstrap.png";
const Certifications = () => {
  return (
    <div className="certificateContainer container row">
      <div className="fs-1 fw-bold text-center my-3">Certifications</div>
      <img
        src={certification}
        alt=""
        className="col-md-6 mx-auto certification-image"
      />
      <div
        id="myCarousel"
        className="carousel slide mx-auto col-md-6"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        <div id="carousalImg" className="carousel-inner">
          <img
            className="certificate justify-content-center carousel-item active image-fluid"
            src={FSDOverall}
            alt="fsd"
          />
          <img
            className="certificate justify-content-center carousel-item image-fluid"
            src={ReactJS}
            alt="react"
          />
          <img
            className="certificate justify-content-center carousel-item image-fluid"
            src={NodeJS}
            alt="nodejs"
          />
          <img
            className="certificate justify-content-center carousel-item image-fluid"
            src={MongoDB}
            alt="mongodb"
          />
          <img
            className="certificate justify-content-center carousel-item image-fluid"
            src={MySQL}
            alt="mysql"
          />
          <img
            className="certificate justify-content-center carousel-item image-fluid"
            src={Javascript}
            alt="javascript"
          />
          <img
            className="certificate justify-content-center carousel-item image-fluid"
            src={HTML}
            alt="HTML"
          />
          <img
            className="certificate justify-content-center carousel-item image-fluid"
            src={CSS}
            alt="css"
          />
          <img
            className="certificate justify-content-center carousel-item image-fluid"
            src={Bootstrap}
            alt="bootstrap"
          />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Certifications;
