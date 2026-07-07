import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onBookClick }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  // Subtitle/typewriter description
  const subtitleText = "  Expert-led skin, hair, and laser treatments tailored to your unique needs, helping you look refreshed, confident, and naturally beautiful.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    setTypedText("");
    const interval = setInterval(() => {
      setTypedText((prev) => prev + subtitleText.charAt(index));
      index++;
      if (index >= subtitleText.length) {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    // Reveal text elements smoothly
    gsap.fromTo(".reveal-item", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.1 }
    );

    // Staggered line reveal for editorial title
    gsap.fromTo(".editorial-line",
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.0, ease: "power4.out", stagger: 0.15, delay: 0.2 }
    );

    // Parallax scroll on main portrait image
    if (imgRef.current && containerRef.current) {
      gsap.fromTo(imgRef.current,
        { y: -15 },
        {
          y: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section id="hero" className="hero-section-editorial" ref={containerRef}>
      {/* Texture noise overlay */}
      <div className="editorial-noise-overlay" />

      <div className="container hero-container">
        <div className="row align-items-center position-relative z-index-5">
          
          {/* Left Column: Spacious Editorial Content */}
          <div className="col-md-6 content-column">
            <div className="hero-editorial-content">
              
              {/* Spaced Professional Clinic Badge */}
              <div className="editorial-brand-badge reveal-item">
                <span className="badge-line" />
                <span className="badge-text">Aesthéva Aesthetic & Laser Clinic</span>
              </div>

              {/* Title with Cormorant Garamond - standard casing and high contrast */}
              <h1 className="editorial-title" ref={titleRef}>
                <span className="editorial-line-container">
                  <span className="editorial-line">Aesthéva Is</span>
                </span>
                <span className="editorial-line-container">
                  <span className="editorial-line editorial-accent">Professional Care</span>
                </span>
                <span className="editorial-line-container">
                  <span className="editorial-line">for <span className="editorial-serif-italic">Healthy, Radiant Skin</span></span>
                </span>
              </h1>

              {/* Typewriter description */}
              <p className="editorial-description reveal-item">
                {typedText}
                <span className="typewriter-cursor">|</span>
              </p>

              {/* Spaced Dual CTAs */}
              <div className="editorial-cta-wrapper reveal-item">
                <MagneticButton>
                  <button onClick={() => onBookClick('')} className="btn-editorial-primary">
                    Book Appointment
                    <span className="btn-arrow-circle"><ArrowRight size={16} /></span>
                  </button>
                </MagneticButton>

                <a href="#approach" className="btn-editorial-secondary">
                  Explore Our Approach
                  <span className="btn-secondary-arrow"><ArrowRight size={16} /></span>
                </a>
              </div>

              {/* Compact Scan-friendly Trust Blocks */}
              <div className="trust-blocks-row reveal-item">
                <div className="trust-block">
                  <span className="trust-block-val">5+ Yrs Exp.</span>
                  <span className="trust-block-lbl">Clinical care</span>
                </div>
                
                <div className="trust-divider" />

                <div className="trust-block">
                  <span className="trust-block-val">5K+ Patients</span>
                  <span className="trust-block-lbl">Verified trust</span>
                </div>

                <div className="trust-divider" />

                <div className="trust-block">
                  <span className="trust-block-val">4.9★ Rating</span>
                  <span className="trust-block-lbl">Google reviews</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Naturally Floating Portrait */}
          <div className="col-md-6 img-column">
            <div className="hero-natural-composition">
              
              {/* Soft radial peach backdrop glow */}
              <div className="composition-peach-glow" />

              {/* Frameless Floating Portrait Image */}
              <img 
                ref={imgRef} 
                className="natural-portrait" 
                src="/hero-banner.png" 
                alt="Aesthéva Clinic Elite Care" 
              />

            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* Import Cormorant Garamond & Outfit fonts */
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@200;300;400;500;600;700&display=swap');

        :root {
          --font-luxury-serif: 'Cormorant Garamond', serif;
          --font-luxury-sans: 'Outfit', sans-serif;
        }

        .hero-section-editorial {
          position: relative;
          padding: 13.5rem 0 9rem 0;
          background-color: var(--bg-primary);
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        /* Subtle fine noise overlay */
        .editorial-noise-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.015'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 2;
        }

        .z-index-5 {
          position: relative;
          z-index: 5;
        }

        /* Left Side Content Styles */
        .hero-editorial-content {
          padding-right: 2.5rem;
        }

        /* Spaced Clinical Badge */
        .editorial-brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2.2rem;
        }
        .editorial-brand-badge .badge-line {
          width: 20px;
          height: 1px;
          background: var(--primary);
        }
        .editorial-brand-badge .badge-text {
          font-family: var(--font-luxury-sans);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 500;
          color: var(--text-dark);
        }

        /* Title Typography */
        .editorial-title {
          font-family: var(--font-luxury-serif);
          font-size: 4.4rem;
          font-weight: 300;
          line-height: 1.12;
          color: var(--text-dark);
          margin-bottom: 2.5rem;
          letter-spacing: -0.5px;
        }
        .editorial-line-container {
          display: block;
          overflow: hidden;
        }
        .editorial-line {
          display: inline-block;
          will-change: transform;
        }
        .editorial-accent {
          font-weight: 500;
        }
        .editorial-serif-italic {
          font-family: var(--font-luxury-serif);
          font-style: italic;
          font-weight: 300;
          color: var(--primary);
        }

        /* Description with typewriter animation */
        .editorial-description {
          font-family: var(--font-luxury-sans);
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 3.8rem;
          max-width: 90%;
          font-weight: 300;
        }
        .typewriter-cursor {
          display: inline-block;
          font-weight: 100;
          color: var(--primary);
          animation: blinkCursor 0.8s step-end infinite;
          margin-left: 3px;
        }
        @keyframes blinkCursor {
          from, to { color: transparent }
          50% { color: var(--primary); }
        }

        /* Prominent Spaced Dual CTAs */
        .editorial-cta-wrapper {
          display: flex;
          align-items: center;
          gap: 2.2rem;
          margin-bottom: 4rem;
        }

        /* Primary Button */
        .btn-editorial-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-luxury-sans);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.8px;
          text-decoration: none;
          cursor: pointer;
          background: var(--primary-gradient);
          color: white;
          border: none;
          padding: 1.05rem 2.8rem;
          border-radius: 50px;
          box-shadow: 0 10px 28px rgba(221, 150, 138, 0.2);
          gap: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-editorial-primary .btn-arrow-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transition: transform 0.4s ease;
        }
        .btn-editorial-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(221, 150, 138, 0.3);
        }
        .btn-editorial-primary:hover .btn-arrow-circle {
          transform: translateX(4px);
        }

        /* Secondary Link Button */
        .btn-editorial-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-luxury-sans);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-dark);
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          transition: color 0.3s ease;
        }
        .btn-editorial-secondary .btn-secondary-arrow {
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }
        .btn-editorial-secondary::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        .btn-editorial-secondary:hover {
          color: var(--primary);
        }
        .btn-editorial-secondary:hover .btn-secondary-arrow {
          transform: translateX(4px);
        }
        .btn-editorial-secondary:hover::after {
          width: 100%;
        }

        /* Compact Trust Blocks Row */
        .trust-blocks-row {
          display: flex;
          align-items: center;
          gap: 2.2rem;
          margin-top: 3.5rem;
          border-top: 1px solid rgba(234, 185, 120, 0.12);
          padding-top: 2rem;
          width: fit-content;
        }
        .trust-block {
          display: flex;
          flex-direction: column;
        }
        .trust-block-val {
          font-family: var(--font-luxury-sans);
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--text-dark);
          line-height: 1.2;
          margin-bottom: 0.15rem;
        }
        .trust-block-lbl {
          font-family: var(--font-luxury-sans);
          font-size: 0.76rem;
          color: var(--text-muted);
          font-weight: 400;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .trust-divider {
          width: 1px;
          height: 24px;
          background-color: rgba(234, 185, 120, 0.18);
        }

        /* Right Column Style: Natural Floating Image */
        .hero-natural-composition {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-left: -3rem; /* Overlap toward center slightly */
          z-index: 5;
        }

        /* Soft radial peach backdrop glow */
        .composition-peach-glow {
          position: absolute;
          width: 540px;
          height: 540px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234, 185, 120, 0.16) 0%, rgba(234, 185, 120, 0) 70%);
          z-index: 1;
          pointer-events: none;
        }

        /* Natural Borderless Image */
        .natural-portrait {
          max-height: 580px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          display: block;
          z-index: 3;
          transform-origin: bottom center;
        }

        /* Layout Grid Columns */
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -1.5rem;
        }
        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 1.5rem;
        }
        .content-column {
          flex: 0 0 48%;
          max-width: 48%;
        }
        .img-column {
          flex: 0 0 52%;
          max-width: 52%;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .editorial-title {
            font-size: 3.6rem;
          }
          .natural-portrait {
            max-height: 500px;
          }
          .hero-natural-composition {
            margin-left: -1rem;
          }
        }
        @media (max-width: 1024px) {
          .hero-section-editorial {
            padding: 11rem 0 6rem 0;
          }
          .editorial-title {
            font-size: 3rem;
            margin-bottom: 2rem;
          }
          .natural-portrait {
            max-height: 440px;
          }
          .composition-peach-glow {
            width: 400px;
            height: 400px;
          }
          .editorial-cta-wrapper {
            gap: 1.8rem;
          }
        }
        @media (max-width: 768px) {
          .col-md-6, .col-md-6.img-column, .content-column, .img-column {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .hero-editorial-content {
            padding-right: 0;
            margin-bottom: 4rem;
            text-align: center;
          }
          .editorial-brand-badge {
            justify-content: center;
          }
          .editorial-title {
            font-size: 2.8rem;
          }
          .editorial-description {
            max-width: 100%;
            margin-bottom: 2.5rem;
          }
          .editorial-cta-wrapper {
            justify-content: center;
            margin-bottom: 3rem;
          }
          .trust-blocks-row {
            justify-content: center;
            margin: 3.5rem auto 0 auto;
          }
          .hero-natural-composition {
            justify-content: center;
            margin-left: 0;
            padding-top: 1rem;
          }
          .natural-portrait {
            max-height: 450px;
          }
        }
        @media (max-width: 480px) {
          .editorial-title {
            font-size: 2.2rem;
          }
          .editorial-cta-wrapper {
            flex-direction: column;
            gap: 1.2rem;
            align-items: stretch;
            width: 90%;
            margin-left: auto;
            margin-right: auto;
          }
          .btn-editorial-primary {
            width: 100%;
          }
          .btn-editorial-secondary {
            justify-content: center;
          }
          .trust-blocks-row {
            gap: 1.2rem;
          }
          .trust-block-val {
            font-size: 1.15rem;
          }
          .trust-block-lbl {
            font-size: 0.72rem;
          }
          .natural-portrait {
            max-height: 380px;
          }
        }
      `}</style>
    </section>
  );
}
