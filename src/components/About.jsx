import React, { useState } from 'react';
import { Shield, Award, Sparkles, Activity, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Helmet } from 'react-helmet-async';

export default function About({ isPage = false }) {
  const [activeCaseIdx, setActiveCaseIdx] = useState(null);

  const cases = [
    {
      title: "Acne Scar Correction",
      description: "6 sessions of clinical microneedling + chemical peels",
      beforeImg: "/before_acne.png",
      afterImg: "/after_acne.png"
    },
    {
      title: "Skin Rejuvenation & Pigmentation",
      description: "4 sessions of GFC + advanced carbon laser toning",
      beforeImg: "/before_pigmentation.png",
      afterImg: "/after_pigmentation.png"
    },
    {
      title: "Open Pores Treatment",
      description: "3 sessions of MNRF (Microneedle RF)",
      beforeImg: "/before_pores.png",
      afterImg: "/after_pores.png"
    }
  ];

  const values = [
    {
      icon: <Shield size={22} />,
      title: "Doctor-Led Care",
      desc: "Expertise you can trust under direct guidance."
    },
    {
      icon: <Sparkles size={22} />,
      title: "Advanced Technology",
      desc: "Safe and effective clinical laser systems."
    },
    {
      icon: <Activity size={22} />,
      title: "Personalised Approach",
      desc: "Care customized precisely to your goals."
    },
    {
      icon: <Award size={22} />,
      title: "Ethical & Transparent",
      desc: "Honest and medically guided care, always."
    }
  ];

  return (
    <div id="about" className="about-page-container">
      {isPage && (
        <Helmet>
          <title>About Dr. Ketaki & Aesthéva Clinic | Sanpada, Navi Mumbai</title>
          <meta name="description" content="Discover Dr. Ketaki Dongare - Bhoir, lead cosmetologist & aesthetic consultant at Aesthéva. Learn about our advanced skin and hair treatments in Sanpada." />
          <meta property="og:title" content="About Dr. Ketaki & Aesthéva Clinic" />
          <meta property="og:description" content="Advanced doctor-led skin and hair treatments in Navi Mumbai." />
        </Helmet>
      )}

      {/* 1. Page Header Banner */}
      {isPage && (
        <section className="about-hero-banner">
          <div className="banner-overlay"></div>
          <div className="container banner-content text-center">
            <h1 className="banner-title">About Us</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span className="separator">»</span>
              <span className="current">About Us</span>
            </div>
          </div>
        </section>
      )}

      {/* 2. Main About Section */}
      <section className="about-intro-section section-padding">
        <div className="container">
          <div className="about-grid-layout">

            {/* Left Column: Image with Experience Badge */}
            <div className="about-image-wrapper">
              <div className="doctor-frame">
                <img src="/dr-ketaki2.jpeg" alt="Dr. Ketaki Dongare - Bhoir" className="doctor-main-photo" loading="lazy" />
                <div className="experience-badge">
                  <span className="exp-number">5+</span>
                  <span className="exp-text">Years<br />experience</span>
                </div>
              </div>
            </div>

            {/* Right Column: Credentials and Text */}
            <div className="about-details-wrapper">
              {isPage ? (
                <>
                  <span className="about-subtitle">About Doctor</span>
                  <h2 className="about-main-title">Dr. Ketaki Dongare - Bhoir</h2>
                  <div className="doctor-credentials">
                    <span className="cred-badge">BAMS</span>
                    <span className="cred-badge">Cosmetologist</span>
                    <span className="cred-badge">Trichologist</span>
                    <span className="cred-badge">Clinical Aesthetician</span>
                    <span className="cred-badge">Ayurvedic Cosmetology</span>
                  </div>
                  <p className="cred-fullname">Bachelor of Ayurvedic Medicine &amp; Surgery</p>

                  <p className="about-paragraph">
                    Experience exceptional beauty and wellness at Aesthéva. Under the clinical leadership of Dr. Ketaki, our expert team blends advanced technology with trusted clinical expertise to create personalized treatments and deliver beautiful, natural-looking results that inspire confidence.
                  </p>

                  <p className="about-paragraph secondary">
                    We take the time to understand your unique concerns, crafting personalized treatment plans that nurture your skin and hair health from within. We prioritize long-term skin integrity and patient education over temporary cosmetic quick-fixes.
                  </p>
                </>
              ) : (
                <>
                  <span className="about-subtitle">WELCOME TO AESTHÉVA</span>
                  <h2 className="about-main-title">Restoring Skin & Hair Health</h2>
                  <h4 className="doctor-subtitle">Professional Medical Aesthetics in Sanpada</h4>

                  <p className="about-paragraph">
                    At Aesthéva, we believe in enhancing your natural features through medically-supervised aesthetic care. Our state-of-the-art clinic in Sanpada offers a curated selection of advanced skin, hair, and laser treatments customized to your unique wellness goals.
                  </p>

                  <p className="about-paragraph secondary">
                    From precision laser hair reduction to targeted acne and anti-aging management, we combine gold-standard medical technology with a patient-centric philosophy. We believe that true rejuvenation is achieved through personalized, long-term health plans rather than quick cosmetic fixes.
                  </p>
                </>
              )}

              {/* Feature Grid or CTA */}
              {isPage ? (
                <div className="about-features-columns">
                  {values.map((val, idx) => (
                    <div className="about-feature-item" key={idx}>
                      <div className="feature-icon-circle">
                        {val.icon}
                      </div>
                      <div className="feature-content">
                        <h6>{val.title}</h6>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/about" className="btn btn-outline" style={{ display: 'inline-block' }}>
                    Learn More About Us
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>



      {/* 3. Transformative Before/After Gallery with Slider Lightbox */}
      {isPage && (
        <section className="about-gallery-section section-padding" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <div className="section-title-wrapper text-center m-b40">
              <span className="section-subtitle">CLINICAL SHOWCASE</span>
              <h2 className="section-title">Patient Transformations</h2>
              <p className="section-description">
                Click on any case below to open our interactive high-resolution Before & After slider.
              </p>
            </div>

            <div className="gallery-grid">
              {cases.map((c, idx) => (
                <div
                  className="gallery-media-card case-card"
                  key={idx}
                  onClick={() => setActiveCaseIdx(idx)}
                >
                  <div className="case-card-img-wrap">
                    <img src={c.afterImg} alt={c.title} />
                    <div className="case-card-hover-overlay">
                      <ZoomIn size={24} />
                      <span>Compare Results</span>
                    </div>
                  </div>
                  <div className="case-card-details">
                    <h5>{c.title}</h5>
                    <p>{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Lightbox Modal */}
      {activeCaseIdx !== null && (
        <div className="lightbox-backdrop" onClick={() => setActiveCaseIdx(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActiveCaseIdx(null)} aria-label="Close Lightbox">
              <X size={24} />
            </button>
            <div className="lightbox-body">
              <h3 className="lightbox-title">{cases[activeCaseIdx].title}</h3>
              <p className="lightbox-desc">{cases[activeCaseIdx].description}</p>

              <div className="lightbox-slider-wrap">
                <ReactCompareSlider
                  itemOne={
                    <div style={{ position: 'relative', height: '100%' }}>
                      <ReactCompareSliderImage src={cases[activeCaseIdx].beforeImg} alt="Before" />
                      <span className="slider-badge before-badge">Before</span>
                    </div>
                  }
                  itemTwo={
                    <div style={{ position: 'relative', height: '100%' }}>
                      <ReactCompareSliderImage src={cases[activeCaseIdx].afterImg} alt="After" />
                      <span className="slider-badge after-badge">After</span>
                    </div>
                  }
                  className="lightbox-slider"
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                />
              </div>
              <div className="lightbox-hint">Drag the divider to compare the before & after transformation</div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .about-page-container {
          background-color: var(--bg-primary);
        }
        
        /* 1. Hero Banner */
        .about-hero-banner {
          position: relative;
          background-image: url('/about-banner.png');
          background-size: cover;
          background-position: center;
          padding: 12rem 0 10rem 0;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 28, 46, 0.7);
          z-index: 1;
        }
        .banner-content {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .banner-title {
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
          text-align: center;
        }
        .breadcrumbs {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 0.88rem;
          backdrop-filter: blur(5px);
        }
        .breadcrumbs a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .breadcrumbs a:hover {
          color: var(--primary);
        }
        .breadcrumbs .separator {
          color: rgba(255, 255, 255, 0.4);
        }
        .breadcrumbs .current {
          color: var(--primary-light);
          font-weight: 500;
        }

        /* 2. Main About Section */
        .about-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: center;
        }
        .about-image-wrapper {
          position: relative;
        }
        .doctor-frame {
          position: relative;
          border-radius: 12px;
          overflow: visible;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4/5;
        }
        .doctor-main-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }
        .experience-badge {
          position: absolute;
          top: 30px;
          left: -20px;
          background: white;
          color: var(--text-dark);
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          box-shadow: var(--shadow-md);
          display: flex;
          align-items: center;
          gap: 0.8rem;
          z-index: 10;
        }
        .experience-badge .exp-number {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }
        .experience-badge .exp-text {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          color: var(--text-dark);
          line-height: 1.2;
        }

        .about-details-wrapper {
          display: flex;
          flex-direction: column;
        }
        .about-subtitle {
          display: inline-block;
          color: var(--primary);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          background: linear-gradient(90deg, rgba(221,150,138,0.25) 0%, rgba(221,150,138,0.05) 100%);
        }
        .about-main-title {
          font-size: 2.8rem;
          font-weight: 500;
          margin-bottom: 0.2rem;
        }
        .doctor-subtitle {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1.8rem;
        }
        .about-paragraph {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        .about-paragraph.secondary {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .about-features-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.8rem;
        }
        .about-feature-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .feature-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(221, 149, 137, 0.08);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .about-feature-item:hover .feature-icon-circle {
          background: var(--primary);
          color: white;
        }
        .feature-content h6 {
          font-family: var(--font-sans);
          font-size: 0.98rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }
        .feature-content p {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Gallery Grid Styles */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        /* Gallery Card Styles */
        .case-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: auto !important;
        }
        .case-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-light);
        }
        .case-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .case-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .case-card-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 28, 46, 0.7);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .case-card:hover .case-card-hover-overlay {
          opacity: 1;
        }
        .case-card-details {
          padding: 1.5rem;
        }
        .case-card-details h5 {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }
        .case-card-details p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Lightbox Styles */
        .lightbox-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 28, 46, 0.85);
          backdrop-filter: blur(8px);
          z-index: 11000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .lightbox-content {
          background: var(--bg-primary);
          border-radius: 16px;
          border: 1px solid var(--border-color);
          width: 100%;
          max-width: 700px;
          position: relative;
          padding: 2.5rem;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
        }
        .lightbox-close {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .lightbox-close:hover {
          color: var(--text-dark);
        }
        .lightbox-title {
          font-size: 1.8rem;
          margin-bottom: 0.4rem;
          text-align: center;
          font-weight: 600;
          color: var(--text-dark);
        }
        .lightbox-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        .lightbox-slider-wrap {
          border: 1px solid var(--border-color);
          padding: 6px;
          border-radius: 14px;
          background: var(--bg-secondary);
        }
        .lightbox-hint {
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 1rem;
        }

        .slider-badge {
          position: absolute;
          bottom: 1rem;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: white;
          z-index: 10;
          pointer-events: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .before-badge {
          left: 1rem;
          background: rgba(30, 40, 51, 0.85);
          backdrop-filter: blur(4px);
        }
        .after-badge {
          right: 1rem;
          background: rgba(221, 150, 138, 0.85);
          backdrop-filter: blur(4px);
        }

        /* Credentials */
        .doctor-credentials {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
        }
        .cred-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--primary);
          background: rgba(221, 149, 137, 0.12);
          border: 1px solid rgba(221, 149, 137, 0.3);
          padding: 3px 10px;
          border-radius: 50px;
        }
        .cred-fullname {
          font-size: 0.88rem;
          color: var(--text-muted);
          font-style: italic;
          margin-bottom: 1.6rem;
        }

        /* Clinic Info Bar */
        .clinic-info-bar {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          padding: 2.5rem 0;
        }
        .clinic-info-grid {
          display: flex;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .clinic-info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          flex: 1;
          min-width: 260px;
        }
        .clinic-info-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(221, 149, 137, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .clinic-info-item > div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .clinic-info-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary);
        }
        .clinic-info-value {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        .clinic-info-closed {
          font-size: 0.82rem;
          color: #e05555;
          font-weight: 500;
        }
        .clinic-info-divider {
          width: 1px;
          height: 60px;
          background: var(--border-color);
          flex-shrink: 0;
        }

        /* Map Section */
        .clinic-map-section {
          padding: 5rem 0;
          background: var(--bg-primary);
        }
        .map-section-inner {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          border: 1px solid var(--border-color);
          min-height: 420px;
        }
        .map-info-panel {
          background: var(--bg-secondary);
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--border-color);
        }
        .map-label {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary);
          background: rgba(221, 149, 137, 0.12);
          padding: 4px 12px;
          border-radius: 50px;
          margin-bottom: 1.2rem;
        }
        .map-heading {
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .map-address {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.8rem;
          padding-bottom: 1.8rem;
          border-bottom: 1px solid var(--border-color);
        }
        .map-detail-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-dark);
          font-weight: 500;
          margin-bottom: 0.6rem;
        }
        .map-detail-row svg {
          color: var(--primary);
          flex-shrink: 0;
        }
        .closed-row span {
          color: #e05555;
        }
        .closed-row svg {
          color: #e05555;
        }
        .map-directions-btn {
          margin-top: auto;
          padding-top: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--primary);
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          transition: all 0.3s ease;
          margin-top: 2rem;
          align-self: flex-start;
          box-shadow: 0 4px 14px rgba(221, 149, 137, 0.35);
        }
        .map-directions-btn:hover {
          background: var(--primary-dark, #c97460);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(221, 149, 137, 0.45);
        }
        .map-embed-wrapper {
          position: relative;
          min-height: 420px;
        }
        .map-embed-wrapper iframe {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .lightbox-slider {
          height: 450px;
        }

        @media (max-width: 1024px) {
          .about-grid-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .about-image-wrapper {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .case-card {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
          .clinic-info-divider {
            display: none;
          }
          .map-section-inner {
            grid-template-columns: 1fr;
          }
          .map-info-panel {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
          }
          .map-embed-wrapper {
            min-height: 320px;
            position: relative;
          }
        }

        @media (max-width: 768px) {
          .about-hero-banner {
            padding: 8rem 0 5rem 0;
          }
          .banner-title {
            font-size: 2.2rem;
          }
          .about-main-title {
            font-size: 2.2rem;
          }
          .experience-badge {
            left: 10px;
            top: 15px;
            padding: 0.6rem 1.2rem;
            box-shadow: var(--shadow-sm);
          }
          .experience-badge .exp-number {
            font-size: 1.8rem;
          }
          .lightbox-backdrop {
            padding: 0.8rem;
          }
          .lightbox-content {
            padding: 1.8rem 1.2rem;
            border-radius: 12px;
          }
          .lightbox-title {
            font-size: 1.4rem;
          }
          .lightbox-desc {
            font-size: 0.8rem;
            margin-bottom: 1.2rem;
          }
          .lightbox-slider {
            height: 300px;
          }
          .clinic-info-grid {
            gap: 1.5rem;
            justify-content: center;
          }
          .clinic-info-item {
            min-width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .about-features-columns {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
        }

      `}</style>
    </div>
  );
}
