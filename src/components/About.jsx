import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import TypeWriter from "./TypeWriter.jsx";
import AboutImg from "../assets/images/about.png";
import HTML5 from "../assets/logos/HTML5.png"
import CSS from "../assets/logos/CSS.png"
import BOOTSTRAP from "../assets/logos/BOOTSTRAP.png"
import JS from "../assets/logos/JS.png"
import REACTJS from "../assets/logos/REACTJS.png"
import NODEJS from "../assets/logos/NODEJS.png"
import EXPRESSJS from "../assets/logos/EXPRESSJS.png"
import JWT from "../assets/logos/JWT.png"
import MONGODB from "../assets/logos/MONGODB.png"
import MYSQL from "../assets/logos/MYSQL.png"
import REDUX from "../assets/logos/REDUX.png"
import GIT from "../assets/logos/GIT.png"
import GITHUB from "../assets/logos/GITHUB.png"
import POSTMAN from "../assets/logos/POSTMAN.png"

const About = () => {
  return (
    <div className="container about row mb-5">
      <div className="aboutTxtContainer col-md-6 col-sm-12">
        <div className="aboutTxt h-100 p-5">
          <div className="fs-5">Hi,</div>
          <div className="lh-lg">
            {" "}
            I'm{" "}
            <span className="fs-4 fw-bold name-text">
              <TypeWriter text={"Thangapandi K"} delay={500} infinite />
            </span>{" "}
          </div>
          <p className="fsdText fs-6">An Aspiring Full Stack Web Developer</p>
          <div className="d-flex gap-5 fs-2">
            <a
              className="link-secondary link-dark-hover icon-social"
              href="https://www.linkedin.com/in/thangapandi-k/"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className="link-secondary link-dark-hover icon-social"
              href="mailto:thangapandi.chella@gmail.com"
            >
              <AiOutlineMail />
            </a>
            <a
              className="link-secondary link-dark-hover icon-social"
              href="https://github.com/Thangapandi-K"
              target="_blank"
            >
              <AiOutlineGithub />
            </a>
          </div>
          <div className="marquee enable-animation mt-3">
            <ul className="marquee_content">
              <div className="marquee_item">
                <img src={HTML5} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={CSS} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={BOOTSTRAP} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={JS} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={REACTJS} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={REDUX} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={NODEJS} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={EXPRESSJS} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={JWT} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={MONGODB} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={MYSQL} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={GIT} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={GITHUB} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={POSTMAN} alt="" loading="lazy"/>
              </div>
            </ul>

            <ul aria-hidden="true" className="marquee_content">
              <div className="marquee_item">
                <img src={HTML5} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={CSS} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={BOOTSTRAP} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={JS} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={REACTJS} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={REDUX} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={NODEJS} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={EXPRESSJS} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={JWT} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={MONGODB} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={MYSQL} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={GIT} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={GITHUB} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={POSTMAN} alt="" loading="lazy"/>
              </div>
            </ul>
          </div>
          <a href="https://drive.google.com/file/d/1nP3bI4HPYcGJ_4CDG754KsK8nEK6f2D6/view?usp=sharing" target="_blank"><button className="btn btn-dark mt-3">My Resume</button></a>
        </div>
      </div>
      <div className="aboutImg col-md-6 col-sm-12">
        <img className="img-fluid" src={AboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
