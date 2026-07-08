import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    image: "/hero-banner.png",
    title: "Aesthéva Is Professional Care for Healthy, Radiant Skin",
    subtitle: "Expert-led skin, hair, and laser treatments tailored to your unique needs, helping you look refreshed, confident, and naturally beautiful."
  },
  {
    image: "/hero-banner2.png",
    title: "Advanced Doctor-Led Hair Restoration & Care",
    subtitle: "Revitalize your hair and restore confidence with clinical GFC, PRP, and advanced growth therapies customized for you."
  },
  {
    image: "/hero-banner3.png",
    title: "Precise Laser & Anti-Aging Clinical Solutions",
    subtitle: "Target fine lines, wrinkles, acne scars, and pigmentation with our state-of-the-art US-FDA approved laser systems."
  }
];
export default function Hero({ onBookClick }) {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Preload images to prevent blank screen transitions
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, currentSlide]);

  // ScrollTrigger parallax on active slide thumbnail and stars (mount only)
  useGSAP(() => {
    if (containerRef.current) {
      // Parallax on any active thumbnail wrapper
      const thumbs = containerRef.current.querySelectorAll('.hero-thumbnail');
      thumbs.forEach(thumb => {
        gsap.fromTo(thumb,
          { y: 0 },
          {
            y: 80,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });

      const star1 = containerRef.current.querySelector('.star1');
      if (star1) {
        gsap.to(star1, {
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
      }

      const star2 = containerRef.current.querySelector('.star2');
      if (star2) {
        gsap.to(star2, {
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
      }
    }
  }, { scope: containerRef });

  // Slide transition animations (runs on currentSlide change)
  useGSAP(() => {
    const activeSlideEl = containerRef.current.querySelector('.slide-item.active');
    if (activeSlideEl) {
      // Animate title characters
      const chars = activeSlideEl.querySelectorAll('.char');
      if (chars.length > 0) {
        gsap.killTweensOf(chars);
        gsap.fromTo(chars,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.012,
            ease: "power3.out",
            delay: 0.1
          }
        );
      }

      // Animate subtitle
      const subtitle = activeSlideEl.querySelector('.content-bx');
      if (subtitle) {
        gsap.killTweensOf(subtitle);
        gsap.fromTo(subtitle,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.25
          }
        );
      }

      // Animate image fade and scale
      const img = activeSlideEl.querySelector('.thumbnail');
      if (img) {
        gsap.killTweensOf(img);
        gsap.fromTo(img,
          { opacity: 0.2, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          }
        );
      }
    }
  }, { scope: containerRef, dependencies: [currentSlide] });

  return (
    <section 
      id="hero" 
      className="hero-banner style-1" 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container">
        <div className="inner-wrapper">
          <div className="slides-container">
            {slides.map((slide, idx) => {
              const words = slide.title.split(" ");
              const isActive = currentSlide === idx;
              return (
                <div 
                  key={idx} 
                  className={`slide-item ${isActive ? 'active' : ''}`}
                >
                  <div className="row align-items-center h-100">
                    <div className="col-md-6">
                      <div className="hero-content">
                        <h1 className="title">
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
                          {slide.subtitle}
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
                      <div className="hero-thumbnail">
                        <img className="thumbnail" src={slide.image} alt={slide.title} style={{ willChange: 'transform' }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide indicators */}
          <div className="slide-indicators">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`indicator-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
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
          color: inherit;
        }
        /* Slides container */
        .slides-container {
          position: relative;
          width: 100%;
          height: 640px; /* Same fixed height for all slides on desktop */
        }
        .slides-container .row {
          height: 100%;
        }
        .slide-item {
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), visibility 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .slide-item.active {
          opacity: 1;
          visibility: visible;
        }
        /* Slide indicators styling */
        .slide-indicators {
          display: flex;
          gap: 12px;
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        .indicator-dot {
          width: 32px;
          height: 5px;
          border-radius: 10px;
          background: rgba(221, 150, 138, 0.25);
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0;
        }
        .indicator-dot.active {
          width: 60px;
          background: var(--primary);
        }
        .indicator-dot:hover:not(.active) {
          background: rgba(221, 150, 138, 0.5);
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
          flex: 0 0 45%;
          max-width: 45%;
          padding: 0 15px;
        }
        .col-md-6.img-column {
          flex: 0 0 55%;
          max-width: 55%;
        }
        .hero-content {
          padding-right: 2rem;
          margin-bottom: 0;
          height: 540px;
          display: flex;
          flex-direction: column;
        }
        
        .hero-content .title {
          font-size: 4.2rem;
          font-weight: 700;
          line-height: 1.15;
          color: #000000;
          margin-bottom: 1.5rem;
          height: auto; /* Fluid height, flows naturally */
        }
        
        .content-bx {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          border-left: 4px solid var(--primary);
          padding-left: 1.2rem;
          max-width: 90%;
          height: auto; /* Fluid height, flows naturally */
        }
        
        .btn-wrapper {
          display: flex;
          gap: 1rem;
          margin-top: auto; /* Lock to bottom of the 500px hero-content box */
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
          height: 620px;
          width: auto;
          max-width: 100%;
          /* Removed border and border-radius completely to match frameless look */
          object-fit: contain;
          display: block;
          transform-origin: bottom center;
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
          .slides-container {
            height: 520px; /* Shorter height on tablet screen sizes */
          }
          .thumbnail {
            height: 520px;
          }
          .hero-content {
            height: 420px;
          }
          .hero-content .title {
            font-size: 3.2rem;
            height: auto;
          }
          .content-bx {
            height: auto;
          }
          .widget-rating-right {
            display: none; /* Hide on smaller screens to save space */
          }
        }
        @media (max-width: 768px) {
          .slides-container {
            height: auto; /* auto height on mobile as content stacks vertically */
          }
          .slides-container .row {
            height: auto;
          }
          .slide-item {
            position: relative;
            height: auto;
          }
          .slide-item:not(.active) {
            position: absolute;
            top: 0;
            left: 0;
          }
          .col-md-6, .col-md-6.img-column {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .hero-content {
            padding-right: 0;
            margin-bottom: 3rem;
            height: auto;
          }
          .hero-content .title {
            font-size: 2.8rem;
            height: auto;
          }
          .content-bx {
            height: auto;
          }
          .btn-wrapper {
            margin-top: 0;
          }
          .hero-thumbnail {
            justify-content: center;
          }
          .thumbnail {
            max-width: 90%;
            height: auto;
            width: 100%;
          }
          .star1 { left: 80%; }
          .star2 { display: none; }
          .slide-indicators {
            bottom: 1.5rem;
            left: 50%;
            transform: translateX(-50%);
          }
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
