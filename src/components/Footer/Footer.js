import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Julien LEBAS</h3>
            <p className="footer-description">
              Etudiant Administrateur Système & Réseau
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Liens Rapides</h4>
              <nav>
                <a href="/projects">Projets</a>
                <a href="/skills">Compétences</a>
                <a href="https://docs.julieng6v.fr">Documentations</a>
                <a href="https://julienlebas.fr/assets/veilleinfo/veille-informationnelle.pdf">Veille Informationnelle</a>
                <a href="https://julienlebas.fr/assets/tabcompetence/tabcomp.pdf">Synthèse</a>
                <a href="/contact">Contact</a>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Me Suivre</h4>
              <div className="footer-social">
                <a 
                  href={portfolioData.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                {/* <a 
                  href={portfolioData.contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a> */}
                <a 
                  href={portfolioData.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a 
                  href={portfolioData.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a> */}
              </div>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${portfolioData.contact.email}`}>
                  {portfolioData.contact.email}
                </a>
              </p>
              <p>
                <i className="fas fa-mobile-alt"></i>
                <a href={`tel:${portfolioData.contact.phone}`}>
                  {portfolioData.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Julien LEBAS. Tous droits réservés.</p>
          {/* <div className="footer-drone">
            <a 
              href={portfolioData.contact.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Découvrez mes photos & vidéos
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
