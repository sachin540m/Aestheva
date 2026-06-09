import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Sun, Moon } from 'lucide-react';

export default function Header({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

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
    <header className={`fixed-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a href="/" className="logo-area" onClick={(e) => handleNavClick(e, 'hero')}>
          <img src="/logo.png" alt="Dr. Ketaki's Aesthéva" className="logo-img-tag" />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="/" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
        </nav>

        {/* Desktop Theme Toggle positioned between Nav and Actions */}
        <button className="theme-toggle-btn desktop-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Action CTAs */}
        <div className="header-actions">
          <button className="theme-toggle-btn mobile-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <a href="tel:+919769514565" className="phone-widget">
            <div className="phone-icon-circle">
              <Phone size={16} />
            </div>
            <div className="phone-text">
              <span className="phone-label">Call Doctor</span>
              <span className="phone-number">+91 97695 14565</span>
            </div>
          </a>

          <button className="btn btn-primary appointment-btn" onClick={onBookClick}>
            <Calendar size={16} style={{ marginRight: '8px' }} />
            Appointment
          </button>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'active' : ''}`}>
        <button className="mobile-drawer-close" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
        <nav className="mobile-nav-links">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>

          <div className="mobile-actions-wrapper">
            <a href="tel:+919769514565" className="phone-widget mobile-phone">
              <Phone size={18} />
              <span>+91 97695 14565</span>
            </a>
            <button className="btn btn-primary w-full" onClick={() => { setIsOpen(false); onBookClick(); }}>
              Book Appointment
            </button>
          </div>
        </nav>
      </div>

      {/* CSS Styles Specific to Header */}
      <style>{`
        .fixed-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: all 0.4s ease;
          padding: 0.4rem 0;
        }
        .fixed-header.scrolled {
          background: var(--bg-header-scrolled);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          padding: 0.2rem 0;
          box-shadow: var(--shadow-sm);
        }
        .header-container {
          display: grid;
          grid-template-columns: auto 1fr auto 1fr auto;
          align-items: center;
          width: 100%;
          padding: 0 4rem;
        }
        .logo-area {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 0.8rem;
          justify-self: start;
          padding-left: 0;
          grid-column: 1;
        }
        .logo-img-tag {
          height: 75px;
          width: auto;
          object-fit: contain;
        }
        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
        }
        .logo-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1;
        }
        .logo-subtitle {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--primary-dark);
          margin-top: 2px;
        }
        
        .desktop-nav {
          display: flex;
          gap: 2.5rem;
          justify-self: center;
          grid-column: 3;
        }
        .desktop-nav a {
          text-decoration: none;
          color: var(--text-dark);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        .desktop-nav a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        .desktop-nav a:hover::after {
          width: 100%;
        }
        .desktop-nav a:hover {
          color: var(--primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          justify-self: end;
          justify-content: flex-end;
          width: auto;
          grid-column: 5;
        }
        .phone-widget {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: var(--text-dark);
        }
        .phone-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(221, 149, 137, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .phone-widget:hover .phone-icon-circle {
          background: var(--primary);
          color: white;
        }
        .phone-text {
          display: flex;
          flex-direction: column;
        }
        .phone-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .phone-number {
          font-size: 0.85rem;
          font-weight: 600;
        }

        .theme-toggle-btn {
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .theme-toggle-btn:hover {
          background-color: rgba(221, 149, 137, 0.1);
          color: var(--primary);
        }

        .desktop-toggle {
          display: flex;
          align-self: center;
          grid-column: 4;
          justify-self: center;
        }

        .mobile-toggle {
          display: none;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
        }

        /* Mobile Menu Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 400px;
          height: 100vh;
          background: var(--bg-secondary);
          z-index: 999;
          box-shadow: -4px 0 20px rgba(0,0,0,0.05);
          transition: right 0.4s ease;
          padding: 6rem 2rem 2rem 2rem;
          border-left: 1px solid var(--border-color);
        }
        .mobile-drawer.active {
          right: 0;
        }
        .mobile-drawer-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }
        .mobile-drawer-close:hover {
          background-color: rgba(0,0,0,0.05);
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .mobile-nav-links a {
          text-decoration: none;
          color: var(--text-dark);
          font-size: 1.2rem;
          font-family: var(--font-serif);
          font-weight: 500;
        }
        .mobile-actions-wrapper {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .mobile-phone {
          justify-content: center;
          padding: 0.8rem;
          border: 1px dashed var(--border-color);
          border-radius: 4px;
        }
        .w-full {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1.5rem;
          }
          .logo-area {
            padding-left: 0;
          }
          .desktop-nav, .phone-widget {
            display: none;
          }
          .desktop-toggle {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
          .mobile-menu-toggle {
            display: block;
          }
          .appointment-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
