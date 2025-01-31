import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const About = () => {
  return (
    <div className='container about row'>
            <div className='aboutTxtContainer lh-lg col-md-6 col-sm-12'>
                <div className='aboutTxt h-100 p-5'>
                    <div>Hi,</div>
                    <div> I'm <span className='fs-3'>Thangapandi K</span> </div>
                    <p>An Aspiring Full Stack Web Developer</p>
                    <div className='d-flex gap-5 fs-2'>
                        <a className='link-secondary link-dark-hover icon-social' href="https://www.linkedin.com/in/thangapandi-k/" target='_blank'><AiOutlineLinkedin/></a>
                        <a className='link-secondary link-dark-hover icon-social' href="mailto:thangapandi.chella@gmail.com"><AiOutlineMail/></a>
                        <a className='link-secondary link-dark-hover icon-social' href="https://github.com/Thangapandi-K" target='_blank'><AiOutlineGithub/></a>
                    </div>
                </div>
            </div>
            <div className='aboutImg col-md-6 col-sm-12'>
                <img className='img-fluid' src="./src/assets/images/about.png" alt="" />
            </div>
    </div>
  )
}

export default About