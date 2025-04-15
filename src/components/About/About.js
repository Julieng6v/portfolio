import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './About.css';
import avatar from '../../assets/imgs/avatar.jpg';

function About() {
  const socialLinks = [
    // { icon: 'fab fa-facebook-f', url: portfolioData.contact.social.facebook },
    { icon: 'fab fa-instagram', url: portfolioData.contact.social.instagram },
    { icon: 'fab fa-linkedin-in', url: portfolioData.contact.social.linkedin },
    { icon: 'fas fa-envelope', url: `mailto:${portfolioData.contact.email}` }
  ];

  const handleDownloadCV = () => {
    // const cvUrl = `${process.env.PUBLIC_URL}/assets/cv/CV_Hugo_Peron.pdf`;
    const cvUrl = `${process.env.PUBLIC_URL}/assets/cv/CV_Julien_Lebas.pdf`;
    window.open(cvUrl, '_blank');
  };
  const handleTabCompetence = () => {
    // const cvUrl = `${process.env.PUBLIC_URL}/assets/cv/CV_Hugo_Peron.pdf`;
    const cvUrl = `${process.env.PUBLIC_URL}/assets/tabcompetence/tabcomp.pdf`;
    window.open(cvUrl, '_blank');
  };

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text-section">
            <h1 className="about-title">
              <span className="highlight">Etudiant</span>
              <br />Administrateur système & réseau
            </h1>
            
            <p className="about-description">
            Passionné par la technologie, je suis un étudiant en administration système et réseau, curieux et polyvalent. J’aime optimiser les infrastructures, automatiser les tâches et assurer la sécurité des systèmes. Travailler en équipe et relever des défis techniques sont mes moteurs au quotidien. 🚀
            </p>

            <div className="tech-stack">
              <h3>Compétences </h3>
              <div className="tech-tags">
                <span className="tech-tag">Linux</span>
                <span className="tech-tag">WindowsServer</span>
                <span className="tech-tag">Proxmox</span>
                <span className="tech-tag">Administration réseau</span>
                
              </div>
            </div>

            <div className="personal-interests">
              <h3>Centres d'intérêt</h3>
              <div className="interest-tags">
                <span className="interest-tag">Drone & Photo</span>
                <span className="interest-tag">Informatique</span>
                <span className="interest-tag">Vélo</span>
                <span className="interest-tag">Voyages</span>
               
              </div>
            </div>

            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> {portfolioData.contact.email}</p>
              <p><i className="fas fa-mobile-alt"></i> {portfolioData.contact.phone}</p>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>

            <div className="cta-group">
              <button 
                className="cta-button secondary"
                onClick={handleDownloadCV}
              >
                Télécharger CV
              </button>
              <button
                  className="cta-button secondary"
                  onClick={handleTabCompetence}
              >
                Télécharger Tableau Compétence
              </button>
            </div>


          </div>

          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image-container">
                <img 
                  src={avatar}
                  alt="Portrait professionnel"
                  className="profile-image"
                />
              </div>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Années d'expérience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projets réalisés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 