import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StatsStrip() {
  const containerRef = useRef(null);

  const stats = [
    { value: 5, suffix: '+', label: 'Years of Clinical Experience' },
    { value: 22, suffix: '+', label: 'Specialist Treatments' },
    { value: 5000, suffix: '+', label: 'Happy Patients' },
    { value: 4.9, suffix: '★', decimals: 1, label: 'Google Rating' },
  ];

  useGSAP(() => {
    const elements = containerRef.current.querySelectorAll('.stat-number-val');
    elements.forEach((el) => {
      const targetVal = parseFloat(el.getAttribute('data-target'));
      const decimals = parseInt(el.getAttribute('data-decimals') || '0');
      const counter = { val: 0 };

      gsap.to(counter, {
        val: targetVal,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          el.textContent = counter.val.toFixed(decimals);
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section className="stats-strip" ref={containerRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <span className="stat-number">
                <span 
                  className="stat-number-val" 
                  data-target={stat.value} 
                  data-decimals={stat.decimals || 0}
                >
                  0
                </span>
                {stat.suffix}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-strip {
          background: var(--primary);
          padding: 1.4rem 0;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1rem;
          border-right: 1px solid rgba(0, 0, 0, 0.15);
        }
        .stat-item:last-child {
          border-right: none;
        }
        .stats-strip .stat-number {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: #1E2833;
          background: none;
          -webkit-text-fill-color: #1E2833; /* Override aestheva-animations.css */
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .stat-label {
          font-size: 0.72rem;
          color: #1E2833;
          opacity: 0.85;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .stat-item {
            border-right: none;
          }
          .stat-item:nth-child(1),
          .stat-item:nth-child(3) {
            border-right: 1px solid rgba(255,255,255,0.25);
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          .stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
