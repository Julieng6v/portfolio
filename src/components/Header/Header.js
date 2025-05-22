import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { HiOutlineDocument } from "react-icons/hi2";


const handleTabCompetence = () => {
  // const cvUrl = `${process.env.PUBLIC_URL}/assets/cv/CV_Hugo_Peron.pdf`;
  const cvUrl = `${process.env.PUBLIC_URL}/assets/tabcompetence/tabcomp.pdf`;
  window.open(cvUrl, '_blank');
};

const handlePPTXVeilleInfo = () => {
  // const cvUrl = `${process.env.PUBLIC_URL}/assets/cv/CV_Hugo_Peron.pdf`;
  const cvUrl = `${process.env.PUBLIC_URL}/assets/veilleinfo/veille-informationnelle.pdf`;
  window.open(cvUrl, '_blank');
};

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <NavLink to="/">
            <span className="logo-text">Julien LEBAS</span>
          </NavLink>
        </div>
        
        <nav className="nav-menu">
          {/*<NavLink to="/" className="nav-link" end>*/}
          {/*  À propos*/}
          {/*</NavLink>*/}
          <NavLink to="/projects" className="nav-link">
            Projets
          </NavLink>
          <NavLink to="/skills" className="nav-link">
            Compétences
          </NavLink>
          <NavLink to="/contact" className="nav-link" >
            Contact
          </NavLink>
          <a href="https://docs.julieng6v.fr/" className="nav-link" target="_blank" rel="noopener noreferrer">
            Docs
          </a>
          <a onClick={handlePPTXVeilleInfo} className="nav-link" target="_blank" rel="noopener noreferrer">
            Veille
          </a>
          <a onClick={handleTabCompetence} className="nav-link" role="button">
            <HiOutlineDocument />
          </a>
          </NavLink>
          <a href="https://docs.julieng6v.fr/CERTIFDEMERDE" className="nav-link" target="_blank" rel="noopener noreferrer">
            Certif
          </a>
            
        </nav>
      </div>
    </header>
  );
}

export default Header; 
