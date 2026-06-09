import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Dr. Ketaki's Aesthéva" style={{ height: '50px', width: 'auto' }} />
            </div>
            <p className="footer-tagline">Renew Skin. Reveal You</p>
            <p className="footer-description">
              Dermatologist-led, client-focused clinic for advanced skin, hair, and laser aesthetic solutions.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/drkketakis.aestheva" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" onClick={(e) => handleNavClick(e, 'hero')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Clinical Services</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Treatments</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Skin Rejuvenation</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Acne Management</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Laser Hair Removal</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>PRP / Hair Fall Therapy</a></li>
            </ul>
          </div>


          <div className="footer-links-col contact-col">
            <h4 className="footer-heading">Disclaimer</h4>
            <p className="disclaimer-text">
              The information provided on this website is for educational and general inquiry purposes only. It is not intended to substitute professional medical advice, diagnosis, or clinical treatments.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Dr. Ketaki's Aesthéva Clinic. All rights reserved. Designed for excellence.
          </p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding: 5rem 0 2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-container {
          display: flex;
          flex-direction: column;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.5rem;
        }
        .footer-logo .logo-monogram {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-light);
          border: 1px solid var(--primary-light);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .footer-logo .logo-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
        }
        .footer-tagline {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--primary-light);
          margin-bottom: 1rem;
        }
        .footer-description {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .footer-socials {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }

        .footer-heading {
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }
        .footer-links {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        .footer-links a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: var(--primary-light);
        }

        .disclaimer-text {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.5;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 2rem;
        }
        .copyright-text {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
        }
        .back-to-top {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-to-top:hover {
          background: var(--primary-light);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column-reverse;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
