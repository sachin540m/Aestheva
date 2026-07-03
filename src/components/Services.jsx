import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Services({ onBookClick }) {
  const categories = [
    {
      id: 'skin',
      title: 'Skin Rejuvenation & Glow',
      desc: 'Clinical peels, microneedling, medical skin cleanup, and deep nourishment for radiant skin.',
      imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'aesthetic',
      title: 'Facial Contouring & Anti-Aging',
      desc: 'Dermal fillers, BTX, non-surgical facelifts, and cellular exosome skin therapy.',
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'laser',
      title: 'Laser & Pigmentation',
      desc: 'US-FDA approved laser hair removal, tattoo removal, carbon laser peel, and spot correction.',
      imageUrl: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hair',
      title: 'Hair Restoration & Scalp',
      desc: 'Autologous PRP/GFC therapy, hair fall treatments, and dandruff scalp correction.',
      imageUrl: 'https://images.unsplash.com/photo-1536840111775-6c1d706f7886?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('skin');

  // Filter services belonging to the active category
  const activeServices = servicesData.filter(service => service.category === activeCategory);
  
  // Find current active category details
  const activeCatInfo = categories.find(cat => cat.id === activeCategory);

  useGSAP(() => {
    gsap.fromTo(".service-list-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }
    );
  }, [activeCategory]);

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        
        <div className="section-title-wrapper">
          <span className="section-subtitle">OUR CLINICAL SERVICES</span>
          <h2 className="section-title">Specialised Treatments</h2>
          <p className="section-description">
            Explore our state-of-the-art treatments under the expert clinical guidance of Dr. Ketaki. Select a category below to view detailed clinical solutions.
          </p>
        </div>

        {/* 2-Column Showcase Layout */}
        <div className="showcase-grid">
          
          {/* Left Column: Image showcase with transitions */}
          <div className="showcase-media">
            <div className="media-inner">
              <img 
                src={activeCatInfo.imageUrl} 
                alt={activeCatInfo.title} 
                className="showcase-img"
              />
              <div className="media-overlay">
                <h3>{activeCatInfo.title}</h3>
                <p>{activeCatInfo.desc}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Category Picker & List */}
          <div className="showcase-content">
            <div className="category-tabs-vertical">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="cat-btn-title">{cat.title}</span>
                  <ChevronRight size={18} className="chevron-icon" />
                </button>
              ))}
            </div>

            {/* List of services in active category */}
            <div className="services-list-wrapper">
              <h4 className="services-list-header">
                Available Treatments ({activeServices.length})
              </h4>
              <div className="services-sub-grid">
                {activeServices.map(service => (
                  <div key={service.id} className="service-list-card">
                    <div className="card-top">
                      <h5>{service.title}</h5>
                      <p>{service.shortDesc}</p>
                    </div>
                    <div className="card-actions">
                      <Link to={`/services/${service.id}`} className="details-link">
                        Learn Details →
                      </Link>
                      <button 
                        className="quick-book-btn"
                        onClick={() => onBookClick(service.title)}
                      >
                        <Calendar size={14} style={{ marginRight: '6px' }} />
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .services-section {
          background-color: var(--bg-primary);
        }
        .showcase-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 4.5rem;
          align-items: stretch;
        }
        
        /* Left Media Showcase */
        .showcase-media {
          display: flex;
        }
        .media-inner {
          position: relative;
          width: 100%;
          min-height: 480px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid var(--bg-secondary);
        }
        .showcase-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .media-inner:hover .showcase-img {
          transform: scale(1.05);
        }
        .media-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(10, 28, 46, 0.95) 0%, rgba(10, 28, 46, 0.4) 75%, transparent 100%);
          padding: 3rem 2.2rem 2.2rem 2.2rem;
          color: white;
        }
        .media-overlay h3 {
          font-family: var(--font-sans);
          font-size: 1.45rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.4rem;
        }
        .media-overlay p {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }

        /* Right Content Panel */
        .showcase-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .category-tabs-vertical {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .category-tab-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.4rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          box-shadow: var(--shadow-sm);
        }
        .category-tab-btn:hover {
          border-color: var(--primary-light);
          transform: translateX(4px);
        }
        .category-tab-btn.active {
          background: var(--primary-gradient);
          border-color: transparent;
        }
        .cat-btn-title {
          font-family: var(--font-sans);
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--text-dark);
          transition: color 0.3s ease;
        }
        .category-tab-btn.active .cat-btn-title {
          color: white;
        }
        .chevron-icon {
          color: var(--text-muted);
          transition: all 0.3s ease;
        }
        .category-tab-btn.active .chevron-icon {
          color: white;
          transform: translateX(4px);
        }

        /* Services sub-list scroll block */
        .services-list-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .services-list-header {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          border-bottom: 1.5px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .services-sub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          max-height: 400px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        /* Custom scrollbar */
        .services-sub-grid::-webkit-scrollbar {
          width: 5px;
        }
        .services-sub-grid::-webkit-scrollbar-track {
          background: var(--bg-primary);
        }
        .services-sub-grid::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 4px;
        }
        
        .service-list-card {
          background: var(--bg-secondary);
          padding: 1.2rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-sm);
        }
        .service-list-card:hover {
          border-color: var(--primary-light);
          box-shadow: var(--shadow-md);
        }
        .card-top h5 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.4rem;
          line-height: 1.3;
        }
        .card-top p {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-color);
          padding-top: 0.8rem;
        }
        .details-link {
          color: var(--primary);
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 700;
          font-family: var(--font-sans);
          transition: color 0.2s ease;
        }
        .details-link:hover {
          color: var(--primary-dark);
          text-decoration: underline;
        }
        .quick-book-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          font-family: var(--font-sans);
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: color 0.2s ease;
        }
        .quick-book-btn:hover {
          color: var(--primary);
        }

        @media (max-width: 1024px) {
          .showcase-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .showcase-media {
            min-height: 380px;
          }
          .media-inner {
            min-height: 380px;
          }
        }
        @media (max-width: 600px) {
          .services-sub-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
