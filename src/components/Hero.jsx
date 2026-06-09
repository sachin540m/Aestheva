import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero({ onBookClick }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container-grid">
        <div className="hero-info animate-fade-in">
          <div className="google-rating-badge">
            <div className="stars-row">
              <Star size={14} fill="#C8834A" stroke="none" />
              <Star size={14} fill="#C8834A" stroke="none" />
              <Star size={14} fill="#C8834A" stroke="none" />
              <Star size={14} fill="#C8834A" stroke="none" />
              <Star size={14} fill="#C8834A" stroke="none" />
            </div>
            <span className="rating-text">4.9/5 Rating on Google Reviews</span>
          </div>
          
          <h1 className="hero-title">
            Professional Care for <span className="highlight-text">Healthy, Radiant Skin</span> & Hair
          </h1>
          
          <p className="hero-desc">
            Welcome to Dr. Ketaki's Aestheva. We provide expert, dermatologist-guided treatments designed to rejuvenate, nourish, and protect your skin and hair, helping you achieve a natural, long-lasting glow.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={onBookClick}>
              Book Appointment
              <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </button>
            <a href="#services" className="btn btn-outline">
              Explore Treatments
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5k+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Expert Procedures</span>
            </div>
          </div>
        </div>
        
        <div className="hero-media-wrapper">
          <div className="hero-image-frame">
            <img src="/hero-banner.png" alt="Aestheva Clinic Interior" className="hero-image" />
          </div>
          <div className="hero-decor-badge">
            <span className="decor-tag">DOCTOR-LED CLINIC</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 10rem;
          padding-bottom: 6rem;
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(221, 149, 137, 0.05);
          border-radius: 50%;
          top: -100px;
          right: -100px;
          filter: blur(50px);
        }
        .hero-container-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }
        .google-rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--bg-secondary);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          box-shadow: var(--shadow-sm);
          margin-bottom: 1.5rem;
          border: 1px solid var(--border-color);
        }
        .stars-row {
          display: flex;
          gap: 2px;
        }
        .rating-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.2px;
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 500;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }
        .highlight-text {
          color: var(--primary-dark);
          background: rgba(221, 149, 137, 0.1);
          padding: 0 4px;
          border-radius: 4px;
        }
        .hero-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 600px;
          line-height: 1.7;
        }
        .hero-buttons {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 3.5rem;
        }
        .hero-stats {
          display: flex;
          gap: 3rem;
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .stat-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .hero-media-wrapper {
          position: relative;
        }
        .hero-image-frame {
          border-radius: 20px 20px 20px 100px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid white;
          aspect-ratio: 4/5;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .hero-image:hover {
          transform: scale(1.03);
        }
        .hero-decor-badge {
          position: absolute;
          bottom: 20px;
          left: -20px;
          background: var(--bg-dark);
          color: var(--text-light);
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          box-shadow: var(--shadow-md);
        }
        .decor-tag {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 2px;
        }

        @media (max-width: 1024px) {
          .hero-container-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .hero-info {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-desc {
            margin-inline: auto;
          }
          .hero-buttons {
            justify-content: center;
            margin-bottom: 2.5rem;
          }
          .hero-stats {
            justify-content: center;
            width: 100%;
          }
          .hero-media-wrapper {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.4rem;
          }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          .hero-buttons button, .hero-buttons a {
            width: 100%;
          }
          .hero-stats {
            gap: 1.5rem;
          }
          .stat-number {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}
