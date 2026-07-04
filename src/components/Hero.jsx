import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onBookClick }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  // Character split for staggering title
  const titleText = "Aesthéva Is Professional Care for Healthy, Radiant Skin";
  const words = titleText.split(" ");

  // Typewriter effect state
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
    }, 25);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    // Character reveal animation
    const chars = titleRef.current.querySelectorAll('.char');
    gsap.fromTo(chars,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power4.out",
        delay: 0.2
      }
    );

    // Parallax on image scroll
    gsap.to(imgRef.current, {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Background stars parallax
    gsap.to(containerRef.current.querySelector('.star1'), {
      y: -60,
      rotate: 45,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(containerRef.current.querySelector('.star2'), {
      y: -120,
      rotate: -45,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section id="hero" className="hero-banner style-1" ref={containerRef}>
      <div className="container">
        <div className="inner-wrapper">
          <div className="row align-items-center h-100">
            <div className="col-md-6">
              <div className="hero-content">
                <h1 className="title" ref={titleRef}>
                  {words.map((word, wIdx) => (
                    <span key={wIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.3em' }} className="word">
                      {word.split("").map((char, cIdx) => (
                        <span key={cIdx} style={{ display: 'inline-block' }} className="char">
                          {char}
                        </span>
                      ))}
                    </span>
                  ))}
                </h1>

                <div className="content-bx style-2 secondary m-b40">
                  {typedText}
                  <span className="typewriter-cursor">|</span>
                </div>

                <div className="d-flex btn-wrapper">
                  <MagneticButton>
                    <button onClick={onBookClick} className="btn btn-lg btn-icon btn-pill">
                      Appointment
                      <span className="right-icon"><ArrowRight size={18} style={{ marginLeft: '8px' }} /></span>
                    </button>
                  </MagneticButton>
                </div>
              </div>
            </div>

            <div className="col-md-6 align-self-end img-column">
              <div className="hero-thumbnail" style={{ overflow: 'hidden' }}>
                <img ref={imgRef} className="thumbnail" src="/hero-banner.png" alt="Aesthéva Skin Clinic" style={{ willChange: 'transform' }} />
              </div>
            </div>
          </div>

          {/* SVG stars to match Emberglow */}
          <svg className="shape-star star1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="var(--primary)" />
          </svg>
          <svg className="shape-star star2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="var(--primary)" />
          </svg>
        </div>
      </div>

      {/* Right floating rating widget */}
      <div className="widget-rating-right">
        <ul className="star-list">
          <li><Star size={12} fill="var(--primary)" stroke="none" /></li>
          <li><Star size={12} fill="var(--primary)" stroke="none" /></li>
          <li><Star size={12} fill="var(--primary)" stroke="none" /></li>
          <li><Star size={12} fill="var(--primary)" stroke="none" /></li>
          <li><Star size={12} fill="var(--primary)" stroke="none" /></li>
        </ul>
        <span className="rating">(4.8)</span>
        <span className="text">200+ ratings on google</span>
      </div>

      <style>{`
        .hero-content .title .char {
          color: var(--text-dark);
          -webkit-text-fill-color: var(--text-dark) !important;
        }
        .typewriter-cursor {
          display: inline-block;
          font-weight: 200;
          color: var(--primary);
          animation: blink 0.75s step-end infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          from, to { color: transparent }
          50% { color: var(--primary); }
        }
        .hero-banner {
          position: relative;
          padding: 9.5rem 0 0 0;
          background: var(--bg-primary);
          overflow: hidden;
        }
        .inner-wrapper {
          position: relative;
          z-index: 2;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }
        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }
        .hero-content {
          padding-right: 2rem;
          margin-bottom: 5.5rem;
        }
        
        .hero-content .title {
          font-size: 4.2rem;
          font-weight: 700;
          line-height: 1.15;
          color: var(--text-dark);
          margin-bottom: 2rem;
        }
        
        .content-bx {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          border-left: 4px solid var(--primary);
          padding-left: 1.2rem;
          max-width: 90%;
        }
        
        .btn-wrapper {
          display: flex;
          gap: 1rem;
        }
        
        .btn-pill {
          background: var(--primary-gradient);
          color: white;
          border-radius: 50px;
          padding: 0.9rem 2.2rem;
          font-weight: 500;
          font-size: 1.05rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }
        .btn-pill:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        
        .hero-thumbnail {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          height: 100%;
        }
        .thumbnail {
          width: 100%;
          max-width: 550px;
          height: auto;
          /* Removed border and border-radius completely to match frameless look */
          object-fit: cover;
          display: block;
        }
        
        /* Floating right rating */
        .widget-rating-right {
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column-reverse; /* To read bottom-to-top when rotated */
          align-items: center;
          background: var(--bg-secondary);
          padding: 1rem 0.6rem;
          border-radius: 50px;
          box-shadow: var(--shadow-md);
          z-index: 10;
        }
        .widget-rating-right .star-list {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 4px;
        }
        .widget-rating-right .rating {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--primary);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          margin-bottom: 0.5rem;
        }
        .widget-rating-right .text {
          font-size: 0.8rem;
          color: var(--text-muted);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          margin-bottom: 0.8rem;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        /* Star shapes */
        .shape-star {
          position: absolute;
          width: 30px;
          height: 30px;
          z-index: 1;
        }
        .star1 {
          top: 10%;
          left: 55%;
        }
        .star2 {
          top: 45%;
          right: 15%;
        }

        @media (max-width: 1024px) {
          .hero-banner {
            padding: 8rem 0 0 0;
          }
          .hero-content .title {
            font-size: 3.2rem;
          }
          .widget-rating-right {
            display: none; /* Hide on smaller screens to save space */
          }
        }
        @media (max-width: 768px) {
          .col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .hero-content {
            padding-right: 0;
            margin-bottom: 3rem;
          }
          .hero-content .title {
            font-size: 2.8rem;
          }
          .hero-thumbnail {
            justify-content: center;
          }
          .thumbnail {
            max-width: 90%;
          }
          .star1 { left: 80%; }
          .star2 { display: none; }
        }
        @media (max-width: 480px) {
          .hero-content .title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}
