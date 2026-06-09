import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Activity, Flame, ShieldAlert, Calendar } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services({ onBookClick }) {
  const categories = [
    { id: 'skin', label: 'Skin Rejuvenation', icon: <Droplets size={18} /> },
    { id: 'hair', label: 'Hair Restoration', icon: <Activity size={18} /> },
    { id: 'laser', label: 'Laser Treatments', icon: <Flame size={18} /> },
    { id: 'aesthetic', label: 'Aesthetic Procedures', icon: <ShieldAlert size={18} /> }
  ];

  const [activeTab, setActiveTab] = useState('skin');

  // Filter services based on active tab
  const filteredServices = servicesData.filter(service => service.category === activeTab);

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        
        <div className="section-title-wrapper">
          <span className="section-subtitle">OUR CLINICAL SERVICES</span>
          <h2 className="section-title">Specialised Treatments</h2>
          <p className="section-description">
            Explore our state-of-the-art treatments under the expert clinical guidance of Dr. Ketaki. Select a treatment below to view clinical details, benefits, and procedure walkthroughs.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="tabs-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Grid display */}
        <div className="services-grid">
          {filteredServices.map((service, idx) => (
            <div className="service-card animate-fade-in" key={service.id} style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="service-card-header">
                <h3 className="service-card-title">{service.title}</h3>
              </div>
              <p className="service-card-desc">{service.shortDesc}</p>
              <div className="service-card-footer">
                <Link to={`/services/${service.id}`} className="service-learn-btn">
                  Learn Details →
                </Link>
                <button className="service-book-btn" onClick={() => onBookClick(service.title)}>
                  <Calendar size={14} style={{ marginRight: '6px' }} />
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .services-section {
          background-color: var(--bg-primary);
        }
        .tabs-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.8rem 1.6rem;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-dark);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }
        .tab-btn:hover {
          color: var(--primary);
          border-color: var(--primary-light);
          transform: translateY(-1px);
        }
        .tab-btn.active {
          color: white;
          background: var(--primary-gradient);
          border-color: transparent;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        .service-card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-light);
        }
        .service-card-header {
          margin-bottom: 0.8rem;
        }
        .service-card-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 600;
          color: var(--text-dark);
          line-height: 1.25;
        }
        .service-card-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .service-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(234, 223, 215, 0.5);
          padding-top: 1.2rem;
        }
        .service-learn-btn {
          color: var(--primary);
          text-decoration: none;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          transition: color 0.3s ease;
        }
        .service-learn-btn:hover {
          color: var(--primary-dark);
          text-decoration: underline;
        }
        .service-book-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }
        .service-book-btn:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .tabs-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
            margin-bottom: 2rem;
          }
          .tab-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
            padding: 0.8rem 0.6rem;
            font-size: 0.8rem;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
