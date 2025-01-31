import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import TypeWriter from './TypeWriter.jsx';
import AboutImg from '../assets/images/about.png';

const About = () => {
  return (
    <div className='container about row mb-5'>
            <div className='aboutTxtContainer col-md-6 col-sm-12'>
                <div className='aboutTxt h-100 p-5'>
                    <div className='fs-5'>Hi,</div>
                    <div className='lh-lg'> I'm <span className='fs-4 fw-bold name-text'><TypeWriter text={"Thangapandi K"} delay={500} infinite/></span> </div>
                    <p className='fsdText fs-6'>An Aspiring Full Stack Web Developer</p>
                    <div className='d-flex gap-5 fs-2'>
                        <a className='link-secondary link-dark-hover icon-social' href="https://www.linkedin.com/in/thangapandi-k/" target='_blank'><AiOutlineLinkedin/></a>
                        <a className='link-secondary link-dark-hover icon-social' href="mailto:thangapandi.chella@gmail.com"><AiOutlineMail/></a>
                        <a className='link-secondary link-dark-hover icon-social' href="https://github.com/Thangapandi-K" target='_blank'><AiOutlineGithub/></a>
                    </div>
                </div>
            </div>
            <div className='aboutImg col-md-6 col-sm-12'>
                <img className='img-fluid' src={AboutImg} alt="" />
            </div>
    </div>
  )
}

export default About