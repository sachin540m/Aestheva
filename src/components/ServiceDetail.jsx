import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Phone, Calendar, ShieldCheck, Clock, RefreshCw, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

export default function ServiceDetail({ onBookClick }) {
  const { serviceId } = useParams();
  const foundService = servicesData.find(s => s.id === serviceId);

  // Accordion state for FAQs
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [serviceId]);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? -1 : idx);
  };

  // Dynamic fallback generator to support all 51 treatments
  let service = foundService;
  if (!service && serviceId) {
    const formattedTitle = serviceId
      .split('-')
      .map(word => {
        if (word === 'btx') return 'BTX';
        if (word === 'hifu') return 'HIFU';
        if (word === 'mnrf') return 'MNRF';
        if (word === 'ha') return 'HA';
        if (word === 'rf') return 'RF';
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');

    let guessedCategory = 'skin';
    if (serviceId.includes('hair') || serviceId.includes('scalp') || serviceId.includes('prp') || serviceId.includes('exosome')) {
      guessedCategory = 'hair';
    } else if (serviceId.includes('contour') || serviceId.includes('lift') || serviceId.includes('fillers') || serviceId.includes('btx')) {
      guessedCategory = 'aesthetic';
    } else if (serviceId.includes('laser') || serviceId.includes('toning')) {
      guessedCategory = 'laser';
    }

    service = {
      id: serviceId,
      title: formattedTitle,
      shortDesc: `Doctor-led ${formattedTitle} program designed to restore vitality and achieve visible, long-lasting clinical results.`,
      category: guessedCategory,
      imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      sessionInfo: {
        duration: "45 - 60 mins",
        downtime: "None to minimal redness",
        sessions: "4 - 6 sessions",
        interval: "3 - 4 weeks"
      },
      fullDesc: `Our custom ${formattedTitle} procedure is performed under the expert guidance of Dr. Ketaki Dongare - Bhoir at Aesthéva. We combine advanced technology with individualized medical insights to address your specific skin or hair goals. We prioritize skin barrier integrity, patient safety, and transparent aftercare guidance, ensuring a premium clinical experience from start to finish.`,
      benefits: [
        `Targets the root causes of skin or hair concerns to promote cell regeneration`,
        `Non-invasive formulation customized precisely to your skin type`,
        `Stimulates structural collagen and improves skin/scalp elasticity`,
        `Maintains strict safety, sterility, and medical-grade hygiene standards`
      ],
      whatToExpect: {
        before: "Avoid active skincare ingredients (Retinoids, AHAs, BHAs) or strong hair treatments for 48 hours prior to your visit.",
        during: "A precise, sterile treatment utilizing advanced technology. Sensation is mild, comfortable, and adjusted to your satisfaction.",
        after: "Apply a broad-spectrum physical sunscreen or prescribed topical lotion. Protect the treated area from direct UV rays."
      },
      faqs: [
        {
          q: `Is the ${formattedTitle} suitable for my skin/hair type?`,
          a: "Yes. Dr. Ketaki performs a comprehensive initial consultation to tailor all treatment parameters specifically to your skin sensitivity or hair density."
        },
        {
          q: "How many sessions will I need?",
          a: "Most clinical plans require 4 to 6 sessions spaced 3 to 4 weeks apart to achieve optimal, compounding improvements."
        }
      ]
    };
  }

  if (loading) {
    return (
      <div className="service-detail-page skeleton-active">
        <section className="detail-hero">
          <div className="container">
            <div className="skeleton-line" style={{ width: '150px', height: '20px', marginBottom: '2.5rem' }}></div>
            <div className="detail-hero-grid">
              <div className="hero-content-wrapper">
                <div className="skeleton-line" style={{ width: '120px', height: '14px', marginBottom: '1rem' }}></div>
                <div className="skeleton-line" style={{ width: '80%', height: '48px', marginBottom: '1.2rem' }}></div>
                <div className="skeleton-line" style={{ width: '90%', height: '24px', marginBottom: '2rem' }}></div>
                <div className="skeleton-line" style={{ width: '200px', height: '48px', borderRadius: '50px' }}></div>
              </div>
              <div className="detail-hero-media skeleton-line" style={{ height: '250px', borderRadius: '16px' }}></div>
            </div>
          </div>
        </section>

        <section className="info-panel-section">
          <div className="container">
            <div className="info-panel-grid">
              {[1, 2, 3, 4].map(n => (
                <div className="info-panel-card skeleton-line" key={n} style={{ height: '60px', borderRadius: '8px' }}></div>
              ))}
            </div>
          </div>
        </section>

        <section className="main-content-section section-padding">
          <div className="container">
            <div className="content-grid">
              <div className="left-column">
                <div className="skeleton-line" style={{ width: '200px', height: '32px', marginBottom: '1.5rem' }}></div>
                <div className="skeleton-line" style={{ width: '100%', height: '20px', marginBottom: '0.8rem' }}></div>
                <div className="skeleton-line" style={{ width: '95%', height: '20px', marginBottom: '0.8rem' }}></div>
                <div className="skeleton-line" style={{ width: '98%', height: '20px', marginBottom: '2.5rem' }}></div>

                <div className="skeleton-line" style={{ width: '220px', height: '32px', marginBottom: '1.5rem' }}></div>
                {[1, 2, 3].map(n => (
                  <div className="skeleton-line" key={n} style={{ width: '90%', height: '20px', marginBottom: '1.2rem' }}></div>
                ))}
              </div>
              <div className="right-column">
                <div className="skeleton-line" style={{ width: '100%', height: '320px', borderRadius: '16px' }}></div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .skeleton-line {
            background: linear-gradient(90deg, var(--border-color) 25%, var(--bg-secondary) 50%, var(--border-color) 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
            border-radius: 4px;
          }
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          .skeleton-active {
            pointer-events: none;
            padding-top: 5rem;
          }
        `}</style>
      </div>
    );
  }

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
      <Helmet>
        <title>{`${service.title} Treatment in Sanpada, Navi Mumbai | Aesthéva`}</title>
        <meta name="description" content={`Advanced ${service.title} procedure under the expert guidance of Dr. Ketaki. ${service.shortDesc}`} />
        <meta property="og:title" content={`${service.title} Treatment | Aesthéva Clinic`} />
        <meta property="og:description" content={service.shortDesc} />
      </Helmet>

      {/* breadcrumbs + Header Hero */}
      <section className="detail-hero">
        <div className="banner-bg-split">
          <div className="banner-bg-left"></div>
          {service.imageUrl && (
            <div
              className="banner-bg-right"
              style={{ backgroundImage: `url(${service.imageUrl})` }}
            >
              {/* Mini Logo — bottom-right of banner */}
              <img
                src="/minilogo.jpg"
                alt="Aesthéva"
                className="banner-minilogo"
              />
            </div>
          )}
        </div>

        <div className="container banner-container">
          <Link to="/" className="back-link-dark">
            <ArrowLeft size={16} />
            <span>Back to Homepage</span>
          </Link>

          <div className="banner-card">
            <span className="banner-category">{service.category.toUpperCase()} TREATMENT</span>
            <h1 className="banner-title">{service.title}</h1>
            <p className="banner-desc">{service.shortDesc}</p>

            <div className="banner-actions">
              <button className="btn-appointment" onClick={() => onBookClick(service.title)}>
                <span>Appointment</span>
                <span className="arrow-circle">
                  <ArrowRight size={16} />
                </span>
              </button>

              <a href="tel:+919136611998" className="banner-contact">
                <div className="contact-icon-circle">
                  <Phone size={20} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Contact Us</span>
                  <span className="contact-number">+91 91366 11998</span>
                </div>
              </a>
            </div>
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
                  <AnimatePresence initial={false}>
                    {openFaqIdx === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="faq-answer">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
          position: relative;
          min-height: 580px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 6rem 0;
          background-color: var(--bg-primary);
        }
        .banner-bg-split {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 42% 58%;
          z-index: 1;
        }
        .banner-bg-left {
          background: linear-gradient(180deg, #FDFBF8 0%, #F6F2EC 100%);
          position: relative;
        }
        [data-theme="dark"] .banner-bg-left {
          background: linear-gradient(180deg, #1A1A19 0%, #111110 100%);
        }
        .banner-bg-left::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.025; /* 2.5% opacity silk/paper texture */
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .banner-bg-left::after {
          content: '';
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: radial-gradient(circle at center, rgba(234, 185, 120, 0.09) 0%, rgba(234, 185, 120, 0) 70%); /* very subtle radial golden glow */
          pointer-events: none;
        }
        [data-theme="dark"] .banner-bg-left::after {
          background: radial-gradient(circle at center, rgba(234, 185, 120, 0.03) 0%, rgba(234, 185, 120, 0) 70%);
        }
        .banner-bg-right {
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .banner-bg-right::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(246, 242, 236, 0.3) 0%, rgba(246, 242, 236, 0) 100%);
          pointer-events: none;
        }
        [data-theme="dark"] .banner-bg-right::before {
          background: linear-gradient(to right, rgba(17, 17, 17, 0.4) 0%, rgba(17, 17, 17, 0) 100%);
        }
        .banner-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .back-link-dark {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-dark);
          opacity: 0.85;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
        }
        .back-link-dark:hover {
          color: var(--primary);
          opacity: 1;
          transform: translateX(-4px);
        }
        .banner-card {
          background: var(--bg-secondary);
          padding: 3.5rem;
          border-radius: 24px;
          max-width: 620px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid var(--border-color);
          backdrop-filter: blur(10px);
        }
        [data-theme="dark"] .banner-card {
          background: rgba(26, 26, 26, 0.85);
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .banner-category {
          font-size: 0.75rem;
          letter-spacing: 2.5px;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 1rem;
          display: block;
        }
        .banner-title {
          font-size: 2.8rem;
          font-weight: 600;
          color: var(--text-dark);
          line-height: 1.2;
          margin-bottom: 1.2rem;
        }
        .banner-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }
        .banner-actions {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .btn-appointment {
          background: #EA580C;
          color: white;
          padding: 0.7rem 1rem 0.7rem 1.8rem;
          border-radius: 14px;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 1.2rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 14px rgba(234, 88, 12, 0.3);
        }
        .btn-appointment:hover {
          background: #D94E06;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(234, 88, 12, 0.4);
        }
        .arrow-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #EA580C;
          transition: transform 0.3s ease;
        }
        .btn-appointment:hover .arrow-circle {
          transform: translateX(4px);
        }
        .banner-contact {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          text-decoration: none;
          color: var(--text-dark);
          transition: transform 0.3s ease;
        }
        .banner-contact:hover {
          transform: translateY(-2px);
        }
        .contact-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(234, 88, 12, 0.1);
          color: #EA580C;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        .banner-contact:hover .contact-icon-circle {
          background: rgba(234, 88, 12, 0.15);
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }
        .contact-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .contact-number {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-top: 2px;
        }

        /* Mini Logo */
        .banner-minilogo {
          position: absolute;
          bottom: 2rem;
          right: 2.5rem;
          width: 90px;
          height: auto;
          z-index: 3;
          opacity: 0.85;
          border-radius: 8px;
          pointer-events: none;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.18));
        }
        @media (max-width: 991px) {
          .banner-minilogo {
            bottom: 1rem;
            right: 1.2rem;
            width: 68px;
          }
        }

        /* Info Panel */
        .info-panel-section {
          margin-top: 3rem;
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
        @media (max-width: 991px) {
          .detail-hero {
            min-height: auto;
            padding: 2rem 0;
            display: block;
          }
          .banner-bg-split {
            position: relative;
            height: 340px;
            display: block;
            grid-template-columns: 100%;
          }
          .banner-bg-left {
            display: none;
          }
          .banner-bg-right {
            height: 100%;
            width: 100%;
            border-radius: 16px;
          }
          .banner-bg-right::before {
            background: transparent;
          }
          .back-link-dark {
            color: var(--primary);
            margin-bottom: 1.5rem;
          }
          .banner-card {
            margin: 1.5rem auto 0 auto;
            position: relative;
            z-index: 3;
            width: 100%;
            padding: 2.5rem 2rem;
          }
        }
        @media (max-width: 576px) {
          .banner-card {
            margin-top: 1rem;
            padding: 2rem 1.5rem;
            border-radius: 20px;
          }
          .banner-title {
            font-size: 2rem;
          }
          .banner-desc {
            font-size: 0.98rem;
            margin-bottom: 2rem;
          }
          .banner-actions {
            gap: 1.5rem;
            flex-direction: column;
            align-items: stretch;
          }
          .btn-appointment {
            justify-content: space-between;
          }
          .banner-contact {
            justify-content: center;
          }
          .banner-bg-split {
            height: 280px;
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
