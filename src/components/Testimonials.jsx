import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.95, y: 35 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: cardRef });

  return (
    <section className="testimonials-section section-padding">
      <div className="container text-center">
        <div className="section-title-wrapper">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-description">
            Real experiences from individuals who trusted Aesthéva for their skin and hair transformations.
          </p>
        </div>

        <div className="testimonial-card" ref={cardRef}>
          <div className="testimonial-stars">
            <Star size={18} fill="#FFC107" stroke="none" />
            <Star size={18} fill="#FFC107" stroke="none" />
            <Star size={18} fill="#FFC107" stroke="none" />
            <Star size={18} fill="#FFC107" stroke="none" />
            <Star size={18} fill="#FFC107" stroke="none" />
          </div>
          
          <blockquote className="testimonial-quote">
            "I took a customized skin rejuvenation and scar treatment package at Aesthéva Clinic under Dr. Ketaki. Over four months, I've seen tremendous improvement in my active acne, scar texture, and overall skin glow. The results are visible, natural, and lasting. Highly recommended clinic for authentic skin care!"
          </blockquote>
          
          <div className="testimonial-author">
            <cite className="author-name">Dr. Aishwarya Gawande</cite>
            <span className="author-status">Verified Patient</span>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .testimonial-card {
          max-width: 800px;
          margin: 0 auto;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 3.5rem;
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
        }
        .testimonial-stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 1.5rem;
        }
        .testimonial-quote {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-dark);
          margin-bottom: 2rem;
          font-style: italic;
        }
        .testimonial-author {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .author-name {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-dark);
          font-style: normal;
        }
        .author-status {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 2px;
        }
        
        @media (max-width: 768px) {
          .testimonial-card {
            padding: 2.2rem 1.5rem;
          }
          .testimonial-quote {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
