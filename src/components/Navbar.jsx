import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
        <div className='container-fluid'>
            <a className='navbar-brand' href="">Thangapandi K</a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navItems'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navItems'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'><a className='nav-link active' href="#about">About</a></li>
                    <li className='nav-item'><a className='nav-link' href="#certifications">Certifications</a></li>                
                    <li className='nav-item'><a className='nav-link' href="#projects">Projects</a></li>               
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar