import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ShieldCheck, Clock, RefreshCw, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServiceDetail({ onBookClick }) {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  // Accordion state for FAQs
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? -1 : idx);
  };

  if (!service) {
    return (
      <div className="not-found-container section-padding">
        <div className="container text-center">
          <h2 className="error-title">Treatment Not Found</h2>
          <p className="error-text">We couldn't find the clinical treatment you are looking for.</p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} style={{ marginRight: '8px' }} />
            Back to Homepage
          </Link>
        </div>
        <style>{`
          .not-found-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 70vh;
            background: var(--bg-primary);
          }
          .error-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          .error-text {
            color: var(--text-muted);
            margin-bottom: 2rem;
          }
          .text-center {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* breadcrumbs + Header Hero */}
      <section className="detail-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to Homepage</span>
          </Link>
          
          <div className="detail-hero-grid">
            <div className="hero-content-wrapper">
              <span className="category-tag">{service.category.toUpperCase()} TREATMENT</span>
              <h1 className="service-title">{service.title}</h1>
              <p className="service-short-desc">{service.shortDesc}</p>
              <button className="btn btn-primary" onClick={() => onBookClick(service.title)}>
                <Calendar size={16} style={{ marginRight: '8px' }} />
                Request Consultation
              </button>
            </div>
            {service.imageUrl && (
              <div className="detail-hero-media">
                <img src={service.imageUrl} alt={service.title} className="service-detail-img" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Stats Panel */}
      <section className="info-panel-section">
        <div className="container">
          <div className="info-panel-grid">
            <div className="info-panel-card">
              <Clock className="panel-icon" size={24} />
              <div className="panel-content">
                <span className="panel-label">Duration</span>
                <span className="panel-value">{service.sessionInfo.duration}</span>
              </div>
            </div>
            
            <div className="info-panel-card">
              <ShieldCheck className="panel-icon" size={24} />
              <div className="panel-content">
                <span className="panel-label">Downtime</span>
                <span className="panel-value">{service.sessionInfo.downtime}</span>
              </div>
            </div>

            <div className="info-panel-card">
              <RefreshCw className="panel-icon" size={24} />
              <div className="panel-content">
                <span className="panel-label">Recommended Sessions</span>
                <span className="panel-value">{service.sessionInfo.sessions}</span>
              </div>
            </div>

            <div className="info-panel-card">
              <Sparkles className="panel-icon" size={24} />
              <div className="panel-content">
                <span className="panel-label">Session Interval</span>
                <span className="panel-value">{service.sessionInfo.interval}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Benefits */}
      <section className="main-content-section section-padding">
        <div className="container">
          <div className="content-grid">
            
            {/* Left Column: Description & Benefits */}
            <div className="left-column">
              <h2 className="section-heading-serif">Clinical Overview</h2>
              <p className="clinical-desc">{service.fullDesc}</p>

              <h2 className="section-heading-serif benefits-heading">Treatment Benefits</h2>
              <div className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <div className="benefit-item" key={index}>
                    <div className="benefit-icon">✓</div>
                    <p className="benefit-text">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Procedure Walkthrough */}
            <div className="right-column">
              <div className="walkthrough-box">
                <h3 className="walkthrough-title">Procedure Walkthrough</h3>
                
                <div className="walkthrough-step">
                  <div className="step-badge">Before</div>
                  <p className="step-text">{service.whatToExpect.before}</p>
                </div>

                <div className="walkthrough-step">
                  <div className="step-badge active">During</div>
                  <p className="step-text">{service.whatToExpect.during}</p>
                </div>

                <div className="walkthrough-step">
                  <div className="step-badge">After & Homecare</div>
                  <p className="step-text">{service.whatToExpect.after}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="faq-section section-padding">
          <div className="container">
            <h2 className="section-heading-serif text-center">Frequently Asked Questions</h2>
            <div className="faq-accordion">
              {service.faqs.map((faq, index) => (
                <div 
                  className={`faq-item ${openFaqIdx === index ? 'active' : ''}`} 
                  key={index}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question-row">
                    <span className="faq-question">{faq.q}</span>
                    {openFaqIdx === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  <div className="faq-answer-row">
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final booking CTA */}
      <section className="booking-cta-section">
        <div className="container text-center">
          <span className="cta-subtitle">CONSULTATION</span>
          <h2 className="cta-title">Ready to Begin Your Aesthetic Journey?</h2>
          <p className="cta-desc">
            Schedule a personalized skin or hair analysis with Dr. Ketaki to customize your treatment plan.
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => onBookClick(service.title)}>
            <Calendar size={18} style={{ marginRight: '8px' }} />
            Book Your Appointment
          </button>
        </div>
      </section>

      <style>{`
        .service-detail-page {
          background-color: var(--bg-primary);
          padding-top: 5rem; /* Space for fixed header */
        }
        .detail-hero {
          background: linear-gradient(180deg, rgba(221, 149, 137, 0.04) 0%, rgba(221, 149, 137, 0.08) 100%);
          padding: 4rem 0 5rem 0;
          border-bottom: 1px solid var(--border-color);
        }
        .detail-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }
        .detail-hero-media {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 4px solid white;
          aspect-ratio: 16/10;
        }
        .service-detail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 2.5rem;
          transition: color 0.3s ease;
        }
        .back-link:hover {
          color: var(--primary-dark);
        }
        .hero-content-wrapper {
          width: 100%;
        }
        .category-tag {
          font-size: 0.75rem;
          letter-spacing: 2.5px;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 1rem;
          display: block;
        }
        .service-title {
          font-size: 3.5rem;
          font-weight: 500;
          margin-bottom: 1.2rem;
          line-height: 1.1;
        }
        .service-short-desc {
          font-size: 1.25rem;
          color: var(--text-muted);
          font-family: var(--font-serif);
          line-height: 1.5;
          margin-bottom: 2rem;
        }

        /* Info Panel */
        .info-panel-section {
          margin-top: -2.5rem;
          position: relative;
          z-index: 5;
        }
        .info-panel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }
        .info-panel-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .info-panel-card:not(:last-child) {
          border-right: 1px solid var(--border-color);
          padding-right: 1.5rem;
        }
        .panel-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .panel-content {
          display: flex;
          flex-direction: column;
        }
        .panel-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .panel-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-top: 2px;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: start;
        }
        .section-heading-serif {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .clinical-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }
        .benefits-heading {
          margin-top: 1rem;
        }
        .benefits-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.2rem;
        }
        .benefit-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .benefit-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(221, 149, 137, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
          flex-shrink: 0;
        }
        .benefit-text {
          font-size: 0.98rem;
          color: var(--text-dark);
          line-height: 1.4;
        }

        /* Walkthrough Box */
        .walkthrough-box {
          background: var(--bg-secondary);
          padding: 2.5rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }
        .walkthrough-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          font-weight: 600;
        }
        .walkthrough-step {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 2rem;
        }
        .walkthrough-step::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: var(--border-color);
        }
        .walkthrough-step:last-child {
          margin-bottom: 0;
        }
        .walkthrough-step:last-child::before {
          display: none;
        }
        .step-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          background: var(--bg-primary);
          padding: 3px 8px;
          border-radius: 4px;
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
        }
        .step-badge.active {
          background: rgba(221, 149, 137, 0.1);
          color: var(--primary);
        }
        .step-text {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* FAQs */
        .faq-section {
          background: var(--bg-primary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .faq-accordion {
          max-width: 800px;
          margin: 3rem auto 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .faq-item:hover {
          border-color: var(--primary-light);
        }
        .faq-question-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 1.8rem;
          background: var(--bg-secondary);
        }
        .faq-question {
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-dark);
        }
        .faq-answer-row {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .faq-item.active .faq-answer-row {
          max-height: 200px; /* arbitrary height to slide down */
        }
        .faq-answer {
          padding: 1.2rem 1.8rem;
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          border-top: 1px solid var(--border-color);
        }

        /* Booking CTA */
        .booking-cta-section {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, rgba(221, 149, 137, 0.05) 100%);
          padding: 6rem 0;
        }
        .cta-subtitle {
          font-size: 0.8rem;
          letter-spacing: 2px;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 0.8rem;
          display: block;
        }
        .cta-title {
          font-size: 2.8rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .cta-desc {
          max-width: 600px;
          margin: 0 auto 2.5rem auto;
          color: var(--text-muted);
          font-size: 1.05rem;
        }

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .info-panel-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .info-panel-card:nth-child(2) {
            border-right: none;
          }
        }
        @media (max-width: 768px) {
          .detail-hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .detail-hero-media {
            order: -1; /* Place image on top on mobile */
            aspect-ratio: 16/9;
          }
          .service-title {
            font-size: 2.5rem;
          }
          .cta-title {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          .info-panel-grid {
            grid-template-columns: 1fr;
          }
          .info-panel-card {
            border-right: none !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
