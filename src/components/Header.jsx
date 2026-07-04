import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';

export default function Header({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }, []);

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

    if (targetId === 'hero') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === 'about') {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === 'contact') {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleServiceLinkClick = (e, slug) => {
    e.preventDefault();
    setIsOpen(false);
    navigate(`/services/${slug}`);
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
          <a href="/about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>

          {/* Services with Mega Menu */}
          <div className="nav-item-services">
            <span className="services-nav-link" style={{ cursor: 'pointer' }}>
              Services <ChevronDown size={14} className="chevron" />
            </span>

            {/* Mega Menu Dropdown */}
            <div className="mega-menu-wrapper" style={{ width: '1100px', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
              {/* Column 1: Skin Care */}
              <div className="mega-menu-column">
                <h5>Skin Care</h5>
                <ul>
                  <li><a href="/services/skin-rejuvenation" onClick={(e) => handleServiceLinkClick(e, 'skin-rejuvenation')}>Skin Rejuvenation</a></li>
                  <li><a href="/services/acne-management" onClick={(e) => handleServiceLinkClick(e, 'acne-management')}>Acne Management</a></li>
                  <li><a href="/services/pigmentation-melasma" onClick={(e) => handleServiceLinkClick(e, 'pigmentation-melasma')}>Pigmentation & Melasma</a></li>
                  <li><a href="/services/chemical-peel" onClick={(e) => handleServiceLinkClick(e, 'chemical-peel')}>Chemical Peel</a></li>
                  <li><a href="/services/open-pores-microneedling" onClick={(e) => handleServiceLinkClick(e, 'open-pores-microneedling')}>Open Pores / Micro-Needling</a></li>
                  <li><a href="/services/mesotherapy" onClick={(e) => handleServiceLinkClick(e, 'mesotherapy')}>Mesotherapy</a></li>
                  <li><a href="/services/dark-spots-freckles" onClick={(e) => handleServiceLinkClick(e, 'dark-spots-freckles')}>Dark Spots / Freckles</a></li>
                  <li><a href="/services/skin-brightening" onClick={(e) => handleServiceLinkClick(e, 'skin-brightening')}>Skin Brightening</a></li>
                </ul>
              </div>

              {/* Column 2: Aesthetic Care */}
              <div className="mega-menu-column">
                <h5>Aesthetic Care</h5>
                <ul>
                  <li><a href="/services/anti-aging-treatment" onClick={(e) => handleServiceLinkClick(e, 'anti-aging-treatment')}>Anti-Aging Treatment</a></li>
                  <li><a href="/services/glutathione-iv" onClick={(e) => handleServiceLinkClick(e, 'glutathione-iv')}>Glutathione IV</a></li>
                  <li><a href="/services/face-lift-non-invasive" onClick={(e) => handleServiceLinkClick(e, 'face-lift-non-invasive')}>Face Lift (Non-Invasive)</a></li>
                  <li><a href="/services/exsosomes-skin" onClick={(e) => handleServiceLinkClick(e, 'exsosomes-skin')}>Exsosomes for skin</a></li>
                </ul>
              </div>

              {/* Column 3: Hair Care */}
              <div className="mega-menu-column">
                <h5>Hair Care</h5>
                <ul>
                  <li><a href="/services/prp-gfc-therapy" onClick={(e) => handleServiceLinkClick(e, 'prp-gfc-therapy')}>PRP / GFC Therapy</a></li>
                  <li><a href="/services/hair-growth-treatment" onClick={(e) => handleServiceLinkClick(e, 'hair-growth-treatment')}>Hair Growth / Alopecia</a></li>
                  <li><a href="/services/dandruff-treatment" onClick={(e) => handleServiceLinkClick(e, 'dandruff-treatment')}>Dandruff Treatment</a></li>
                  <li><a href="/services/exsosomes-hair" onClick={(e) => handleServiceLinkClick(e, 'exsosomes-hair')}>Exsosomes for hair</a></li>
                </ul>
              </div>

              {/* Column 4: Laser Treatments */}
              <div className="mega-menu-column">
                <h5>Laser Treatments</h5>
                <ul>
                  <li><a href="/services/laser-hair-reduction" onClick={(e) => handleServiceLinkClick(e, 'laser-hair-reduction')}>Laser Hair Reduction</a></li>
                  <li><a href="/services/photo-rejuvenation-carbon" onClick={(e) => handleServiceLinkClick(e, 'photo-rejuvenation-carbon')}>Photo Rejuvenation</a></li>
                  <li><a href="/services/tattoo-removal" onClick={(e) => handleServiceLinkClick(e, 'tattoo-removal')}>Tattoo Removal</a></li>
                  <li><a href="/services/skin-tags-mole-removal" onClick={(e) => handleServiceLinkClick(e, 'skin-tags-mole-removal')}>Skin Tags / Mole Removal</a></li>
                  <li><a href="/services/laser-treatments" onClick={(e) => handleServiceLinkClick(e, 'laser-treatments')}>Laser Treatments</a></li>
                  <li><a href="/services/scar-reduction" onClick={(e) => handleServiceLinkClick(e, 'scar-reduction')}>Scar Reduction</a></li>
                </ul>
              </div>
            </div>
          </div>

          <a href="/contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
        </nav>

        {/* Action CTAs */}
        <div className="header-actions">

          <a href="tel:+919136611998" className="phone-widget">
            <div className="phone-icon-circle">
              <Phone size={16} />
            </div>
            <div className="phone-text">
              <span className="phone-label">Call Doctor</span>
              <span className="phone-number">+91 91366 11998</span>
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
          <a href="/" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
          <a href="/about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>

          {/* Mobile Expandable Services */}
          <div className="mobile-services-accordion">
            <button
              className="mobile-services-trigger"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services <ChevronDown size={18} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>
            <div className={`mobile-services-content ${mobileServicesOpen ? 'expanded' : ''}`} style={{ maxHeight: mobileServicesOpen ? '450px' : '0', overflowY: 'auto' }}>
              <a href="/services/skin-rejuvenation" onClick={(e) => handleServiceLinkClick(e, 'skin-rejuvenation')}>Skin Rejuvenation</a>
              <a href="/services/acne-management" onClick={(e) => handleServiceLinkClick(e, 'acne-management')}>Acne Management</a>
              <a href="/services/pigmentation-melasma" onClick={(e) => handleServiceLinkClick(e, 'pigmentation-melasma')}>Pigmentation & Melasma</a>
              <a href="/services/chemical-peel" onClick={(e) => handleServiceLinkClick(e, 'chemical-peel')}>Chemical Peel</a>
              <a href="/services/open-pores-microneedling" onClick={(e) => handleServiceLinkClick(e, 'open-pores-microneedling')}>Open Pores / Micro-Needling</a>
              <a href="/services/mesotherapy" onClick={(e) => handleServiceLinkClick(e, 'mesotherapy')}>Mesotherapy</a>
              <a href="/services/dark-spots-freckles" onClick={(e) => handleServiceLinkClick(e, 'dark-spots-freckles')}>Dark Spots / Freckles</a>
              <a href="/services/skin-brightening" onClick={(e) => handleServiceLinkClick(e, 'skin-brightening')}>Skin Brightening</a>
              <a href="/services/anti-aging-treatment" onClick={(e) => handleServiceLinkClick(e, 'anti-aging-treatment')}>Anti-Aging Treatment</a>
              <a href="/services/glutathione-iv" onClick={(e) => handleServiceLinkClick(e, 'glutathione-iv')}>Glutathione IV</a>
              <a href="/services/face-lift-non-invasive" onClick={(e) => handleServiceLinkClick(e, 'face-lift-non-invasive')}>Face Lift (Non-Invasive)</a>
              <a href="/services/exsosomes-skin" onClick={(e) => handleServiceLinkClick(e, 'exsosomes-skin')}>Exsosomes for skin</a>
              <a href="/services/prp-gfc-therapy" onClick={(e) => handleServiceLinkClick(e, 'prp-gfc-therapy')}>PRP / GFC Therapy</a>
              <a href="/services/hair-growth-treatment" onClick={(e) => handleServiceLinkClick(e, 'hair-growth-treatment')}>Hair Growth / Alopecia</a>
              <a href="/services/dandruff-treatment" onClick={(e) => handleServiceLinkClick(e, 'dandruff-treatment')}>Dandruff Treatment</a>
              <a href="/services/exsosomes-hair" onClick={(e) => handleServiceLinkClick(e, 'exsosomes-hair')}>Exsosomes for hair</a>
              <a href="/services/laser-hair-reduction" onClick={(e) => handleServiceLinkClick(e, 'laser-hair-reduction')}>Laser Hair Reduction</a>
              <a href="/services/photo-rejuvenation-carbon" onClick={(e) => handleServiceLinkClick(e, 'photo-rejuvenation-carbon')}>Photo Rejuvenation</a>
              <a href="/services/tattoo-removal" onClick={(e) => handleServiceLinkClick(e, 'tattoo-removal')}>Tattoo Removal</a>
              <a href="/services/skin-tags-mole-removal" onClick={(e) => handleServiceLinkClick(e, 'skin-tags-mole-removal')}>Skin Tags / Mole Removal</a>
              <a href="/services/laser-treatments" onClick={(e) => handleServiceLinkClick(e, 'laser-treatments')}>Laser Treatments</a>
              <a href="/services/scar-reduction" onClick={(e) => handleServiceLinkClick(e, 'scar-reduction')}>Scar Reduction</a>
            </div>
          </div>

          <a href="/contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>

          <div className="mobile-actions-wrapper">
            <a href="tel:+919136611998" className="phone-widget mobile-phone">
              <Phone size={18} />
              <span>+91 91366 11998</span>
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
          transition: transform 0.3s ease;
        }
        .logo-img-tag:hover {
          transform: scale(1.02);
        }
        
        .desktop-nav {
          display: flex;
          gap: 2.5rem;
          justify-self: center;
          grid-column: 3;
          align-items: center;
        }
        .desktop-nav a, .desktop-nav .services-nav-link {
          text-decoration: none;
          color: var(--text-dark);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .desktop-nav a::after, .desktop-nav .services-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        .desktop-nav a:hover::after, .desktop-nav .services-nav-link:hover::after {
          width: 100%;
        }
        .desktop-nav a:hover, .desktop-nav .services-nav-link:hover {
          color: var(--primary);
        }

        .services-nav-link .chevron {
          transition: transform 0.3s ease;
        }
        .nav-item-services:hover .services-nav-link .chevron {
          transform: rotate(180deg);
        }

        /* Mega Menu Dropdown Setup */
        .nav-item-services {
          /* Removed position: relative to allow centering relative to the screen */
        }
        .mega-menu-wrapper {
          position: absolute;
          top: 70%;
          left: 12.5%;
          transform: translateX(-50%) translateY(15px);
          width: 960px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          box-shadow: var(--shadow-lg);
          padding: 2.2rem;
          display: none;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-item-services:hover .mega-menu-wrapper {
          display: grid;
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .mega-menu-column h5 {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .mega-menu-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .mega-menu-column ul li a {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          color: var(--text-dark);
          text-decoration: none;
          transition: all 0.2s ease;
          padding: 0.1rem 0;
          display: block;
          font-weight: 400;
        }
        .mega-menu-column ul li a::after {
          display: none;
        }
        .mega-menu-column ul li a:hover {
          color: var(--primary);
          transform: translateX(4px);
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
          width: 85%;
          max-width: 400px;
          height: 100vh;
          background: var(--bg-secondary);
          z-index: 999;
          box-shadow: -4px 0 20px rgba(0,0,0,0.05);
          transition: right 0.4s ease;
          padding: 6rem 2rem 2rem 2rem;
          border-left: 1px solid var(--border-color);
          overflow-y: auto;
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
          gap: 1.5rem;
        }
        .mobile-nav-links a {
          text-decoration: none;
          color: var(--text-dark);
          font-size: 1.15rem;
          font-weight: 500;
        }

        .mobile-services-accordion {
          display: flex;
          flex-direction: column;
        }
        .mobile-services-trigger {
          background: none;
          border: none;
          color: var(--text-dark);
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 500;
          text-align: left;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          width: 100%;
        }
        .mobile-services-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding-left: 1rem;
        }
        .mobile-services-content.expanded {
          max-height: 500px;
          margin-top: 1rem;
        }
        .mobile-services-content a {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 400;
        }
        .view-all-mobile {
          color: var(--primary) !important;
          font-weight: 500 !important;
          margin-top: 0.2rem;
        }

        .mobile-actions-wrapper {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
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

        @media (max-width: 1200px) {
          .mega-menu-wrapper {
            width: 800px;
          }
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
