import React from 'react';
import certification from '../assets/images/certifications.png'

const Certifications = () => {
  return (
    <div className="certificateContainer container row" >
        <div className="fs-1 fw-bold text-center my-3">Certifications</div>
        <img src={certification} alt="" className='col-md-6 mx-auto certification-image'/>
        <div id="myCarousel" className="carousel slide mx-auto col-md-6" data-bs-ride="carousel">
          <div id="carousalImg" className="carousel-inner">
            <img
              className="certificate justify-content-center carousel-item active image-fluid"
              src="./src/assets/certifications/FSDOverall.png"
              alt="fsd"
            />
            <img
              className="certificate justify-content-center carousel-item image-fluid"
              src="./src/assets/certifications/ReactJS.png"
              alt="react"
            />
            <img
              className="certificate justify-content-center carousel-item image-fluid"
              src="./src/assets/certifications/NodeJS.png"
              alt="nodejs"
            />
            <img
              className="certificate justify-content-center carousel-item image-fluid"
              src="./src/assets/certifications/MongoDB.png"
              alt="mongodb"
            />
            <img
              className="certificate justify-content-center carousel-item image-fluid"
              src="./src/assets/certifications/MySQL.png"
              alt="mysql"
            />
            <img
              className="certificate justify-content-center carousel-item image-fluid"
              src="./src/assets/certifications/Javascript.png"
              alt="javascript"
            />
            <img
              className="certificate justify-content-center carousel-item image-fluid"
              src="./src/assets/certifications/HTML.png"
              alt="HTML"
            />
            <img
              className="certificate justify-content-center carousel-item image-fluid"
              src="./src/assets/certifications/CSS.png"
              alt="css"
            />
            <img
              className="certificate justify-content-center carousel-item image-fluid"
              src="./src/assets/certifications/Bootstrap.png"
              alt="bootstrap"
            />
          </div>
        </div>
        </div>
  )
};

export default Certifications