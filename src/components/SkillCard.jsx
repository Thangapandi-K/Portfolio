import React from "react";
import logos from "../assets/logos/Logos";

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

const SkillCard = () => {

  return (
      <div className="marquee enable-animation mt-3">
        <ul className="marquee_content">
          <div className="marquee_item">
                <img src={logos.html5} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.css} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.bootstrap} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.js} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.reactjs} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.redux} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.nodejs} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.expressjs} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.jwt} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.mongodb} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.mysql} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.git} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.github} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.postman} alt="" loading="lazy"/>
              </div>
        </ul>
        <ul aria-hidden="true" className="marquee_content">
        <div className="marquee_item">
                <img src={logos.html5} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.css} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.bootstrap} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.js} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.reactjs} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.redux} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.nodejs} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.expressjs} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.jwt} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.mongodb} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.mysql} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.git} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.github} alt="" loading="lazy"/>
              </div>
              <div className="marquee_item">
                <img src={logos.postman} alt="" loading="lazy"/>
              </div>
        </ul>
      </div>
  );
};

export default SkillCard;
