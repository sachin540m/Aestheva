import React from 'react';
import { Shield, Zap, User, Heart } from 'lucide-react';
import Tilt from './Tilt';

export default function Approach({ onBookClick }) {
  const features = [
    {
      icon: <Shield size={18} />,
      title: 'Doctor-Led Expertise',
      desc: 'Professional care backed by medical knowledge'
    },
    {
      icon: <Zap size={18} />,
      title: 'Advanced Technology',
      desc: 'Modern treatments for safe and effective outcomes'
    },
    {
      icon: <User size={18} />,
      title: 'Personalised Care',
      desc: 'Treatment plans tailored to individual needs'
    },
    {
      icon: <Heart size={18} />,
      title: 'Ethical & Transparent',
      desc: 'Honest guidance and patient-first care'
    }
  ];

  const tags = [
    'Skin Treatments',
    'Hair Treatments',
    'Laser Treatments',
    'Aesthetic Procedures'
  ];

  return (
    <section className="hp-about-section section-padding">
      <div className="container">
        <div className="hp-about-grid">

          {/* Left: Doctor Image with 3D Tilt */}
          <div className="hp-img-col">
            <Tilt className="hp-img-frame">
              <img
                src="/dr-ketaki.jpeg"
                alt="Dr. Ketaki — Aesthéva Clinic"
                className="hp-doctor-img"
                loading="lazy"
              />
              <div className="hp-deco-bracket hp-deco-tl" />
              <div className="hp-deco-bracket hp-deco-br" />
              <span className="hp-deco-star">✦</span>
            </Tilt>
          </div>

          {/* Right: Content */}
          <div className="hp-content-col">
            <span className="section-subtitle">ABOUT THE CLINIC</span>
            <h2 className="hp-about-heading">About Aesthéva Clinic</h2>

            <p className="hp-about-para">
              Aesthéva is a doctor-led skin, hair, and aesthetic clinic in Navi Mumbai, dedicated to delivering advanced, evidence-based treatments in a comfortable and professional setting. Our clinic combines medical expertise with modern technology to provide effective solutions for a wide range of skin, hair, and aesthetic concerns.
            </p>
            <p className="hp-about-para hp-muted">
              At Aesthéva, every patient receives personalised care and a treatment plan designed around their unique needs and goals. We believe in enhancing natural beauty while prioritising long-term skin and hair health. From the initial consultation to post-treatment care, our approach is transparent, ethical, and focused on achieving safe, natural-looking results.
            </p>

            {/* 4 Feature Cards with 3D Tilt */}
            <div className="hp-features-grid">
              {features.map((f, idx) => (
                <Tilt className="hp-feature-card" key={idx}>
                  <div className="hp-feature-icon">{f.icon}</div>
                  <div>
                    <h6 className="hp-feature-title">{f.title}</h6>
                    <p className="hp-feature-desc">{f.desc}</p>
                  </div>
                </Tilt>
              ))}
            </div>

            {/* Service Tag Pills */}
            <div className="hp-tags-row">
              {tags.map((tag, idx) => (
                <span className="hp-tag" key={idx}>
                  <span className="hp-tag-dot">✦</span> {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hp-about-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .hp-about-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 5rem;
          align-items: center;
        }

        /* ── Image column ── */
        .hp-img-col {
          position: relative;
        }
        .hp-img-frame {
          position: relative;
          border-radius: 16px 16px 80px 16px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 9/16;
          width: 100%;
          background: var(--bg-primary);
        }
        .hp-doctor-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hp-deco-bracket {
          position: absolute;
          width: 42px;
          height: 42px;
          border-color: var(--primary);
          border-style: solid;
          z-index: 2;
        }
        .hp-deco-tl {
          top: -12px;
          left: -12px;
          border-width: 3px 0 0 3px;
          border-radius: 4px 0 0 0;
        }
        .hp-deco-br {
          bottom: -12px;
          right: -12px;
          border-width: 0 3px 3px 0;
          border-radius: 0 0 4px 0;
        }
        .hp-deco-star {
          position: absolute;
          bottom: -24px;
          left: 14px;
          color: var(--primary);
          font-size: 1rem;
          opacity: 0.7;
          z-index: 2;
        }

        /* ── Content column ── */
        .hp-content-col {
          display: flex;
          flex-direction: column;
        }
        .hp-about-heading {
          font-size: 2.4rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-top: 0.5rem;
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }
        .hp-about-para {
          font-size: 0.97rem;
          line-height: 1.75;
          color: var(--text-dark);
          margin-bottom: 0.85rem;
        }
        .hp-about-para.hp-muted {
          color: var(--text-muted);
          margin-bottom: 1.8rem;
        }

        /* Feature cards 2x2 */
        .hp-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem;
          margin-bottom: 1.8rem;
        }
        .hp-feature-card {
          display: flex;
          gap: 0.7rem;
          align-items: flex-start;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 1rem 1.1rem;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .hp-feature-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }
        .hp-feature-icon {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(221, 150, 138, 0.12);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }
        .hp-feature-card:hover .hp-feature-icon {
          background: var(--primary);
          color: white;
        }
        .hp-feature-title {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.2rem;
        }
        .hp-feature-desc {
          font-size: 0.76rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Tag pills */
        .hp-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }
        .hp-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          border: 1px solid var(--border-color);
          border-radius: 50px;
          padding: 0.3rem 0.85rem;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-muted);
          background: var(--bg-primary);
          transition: all 0.2s ease;
          cursor: default;
        }
        .hp-tag:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .hp-tag-dot {
          font-size: 0.5rem;
          color: var(--primary);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hp-about-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .hp-img-col {
            max-width: 320px;
            margin: 0 auto;
            width: 100%;
          }
          .hp-about-heading {
            font-size: 2rem;
          }
        }
        @media (max-width: 600px) {
          .hp-features-grid {
            grid-template-columns: 1fr;
          }
          .hp-about-heading {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
