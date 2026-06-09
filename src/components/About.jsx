import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck size={28} className="value-icon" />,
      title: "Doctor-Led Care",
      desc: "Every procedure is prescribed, guided, and supervised by Dr. Ketaki to ensure clinical precision."
    },
    {
      icon: <Zap size={28} className="value-icon" />,
      title: "Advanced Technology",
      desc: "Equipped with state-of-the-art US-FDA approved laser systems and modern treatment machinery."
    },
    {
      icon: <HeartHandshake size={28} className="value-icon" />,
      title: "Personalised Treatment",
      desc: "No template plans. We analyze your unique skin/hair profile to customize individual regimens."
    },
    {
      icon: <Award size={28} className="value-icon" />,
      title: "Ethical & Transparent",
      desc: "Clear explanations, honest pricing, and expectations based on real medical science."
    }
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-media-column">
            <div className="doctor-frame">
              <img src="/dr-ketaki.png" alt="Dr. Ketaki - Dermatologist" className="doctor-image" />
              <div className="doctor-tag-overlay">
                <span className="dr-name">Dr. Ketaki</span>
                <span className="dr-title">MD, Consultant Dermatologist</span>
              </div>
            </div>
            <div className="frame-decoration"></div>
          </div>
          
          <div className="about-content-column">
            <span className="section-subtitle">ABOUT THE CLINIC</span>
            <h2 className="about-title">
              Dr. Ketaki's Aesthéva Clinic
            </h2>
            <p className="about-philosophy">
              Aestheva is a premier skin, hair, and aesthetic laser clinic designed to provide a calm, professional, and clinically focused environment for your aesthetic journey. 
            </p>
            <p className="about-desc">
              Guided by the philosophy <strong>"Renew Skin. Reveal You"</strong>, Dr. Ketaki and her team prioritize long-term skin health over quick temporary fixes. From initial consultation to post-treatment care, every step is structured, transparent, and guided by strong medical ethics.
            </p>

            <div className="values-grid">
              {values.map((val, idx) => (
                <div className="value-card" key={idx}>
                  <div className="value-icon-container">
                    {val.icon}
                  </div>
                  <div className="value-text">
                    <h4 className="value-title">{val.title}</h4>
                    <p className="value-desc">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-secondary);
          position: relative;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 5rem;
          align-items: center;
        }
        .about-media-column {
          position: relative;
        }
        .doctor-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 6px solid white;
          z-index: 2;
          aspect-ratio: 4/5;
        }
        .doctor-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .doctor-tag-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(30,26,23,0.9) 0%, rgba(30,26,23,0.2) 80%, rgba(0,0,0,0) 100%);
          padding: 2.5rem 2rem 1.5rem 2rem;
          color: white;
          display: flex;
          flex-direction: column;
        }
        .dr-name {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 600;
        }
        .dr-title {
          font-size: 0.85rem;
          color: var(--primary-light);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }
        .frame-decoration {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border: 2px solid var(--border-color);
          border-radius: 20px;
          z-index: 1;
        }

        .about-content-column {
          display: flex;
          flex-direction: column;
        }
        .about-title {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
        }
        .about-philosophy {
          font-size: 1.2rem;
          font-family: var(--font-serif);
          color: var(--primary-dark);
          line-height: 1.6;
          margin-bottom: 1.2rem;
          font-style: italic;
        }
        .about-desc {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          font-size: 0.98rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .value-card {
          display: flex;
          gap: 1rem;
        }
        .value-icon-container {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: rgba(221, 149, 137, 0.08);
          color: var(--primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .value-card:hover .value-icon-container {
          background: var(--primary);
          color: white;
        }
        .value-title {
          font-size: 1.15rem;
          margin-bottom: 0.4rem;
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .value-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .about-media-column {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
          .about-title {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 600px) {
          .values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
