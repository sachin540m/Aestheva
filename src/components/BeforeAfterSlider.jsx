import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  return (
    <section className="before-after-section section-padding">
      <div className="container">
        <div className="section-title-wrapper text-center m-b50 animate-reveal">
          <span className="section-subtitle">REAL PATIENT RESULTS</span>
          <h2 className="section-title">Transformative Skincare Journeys</h2>
          <div className="section-desc">
            Witness the visible improvements achieved through our personalized, doctor-led skin and aesthetic treatments.
          </div>
        </div>

        <div className="before-after-grid">
          {/* Left: Interactive Slider */}
          <div className="slider-wrapper">
            <div className="slider-container">
              <ReactCompareSlider
                itemOne={
                  <div className="slider-item-wrapper">
                    <ReactCompareSliderImage src="/before_skin.png" alt="Skin before treatment" />
                    <span className="slider-badge before-badge">Before</span>
                  </div>
                }
                itemTwo={
                  <div className="slider-item-wrapper">
                    <ReactCompareSliderImage src="/after_skin.png" alt="Skin after treatment" />
                    <span className="slider-badge after-badge">After</span>
                  </div>
                }
                style={{
                  width: '100%',
                  height: '420px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                }}
              />
            </div>
            <div className="slider-hint">
              <span>← Drag Slider to Compare →</span>
            </div>
          </div>

          {/* Right: Info Card */}
          <div className="info-wrapper">
            <div className="info-card">
              <div className="info-icon">
                <Sparkles size={24} />
              </div>
              <h3 className="info-title">Customized Treatment Success</h3>
              <p className="info-para">
                This case demonstrates the results of our advanced skin rejuvenation therapy over a 6-week period. By targeting deep skin layers, we stimulate collagen production, reduce pigmentation, and heal active acne lesions.
              </p>

              <div className="results-list">
                <div className="result-item">
                  <span className="result-number">98%</span>
                  <span className="result-label">Reduction in redness and acne blemishes</span>
                </div>
                <div className="result-item">
                  <span className="result-number">2x</span>
                  <span className="result-label">Increase in overall skin elasticity & glow</span>
                </div>
                <div className="result-item">
                  <span className="result-number">0</span>
                  <span className="result-label">Downtime required during the procedure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .before-after-section {
          background: var(--bg-primary);
          border-top: 1px solid var(--border-color);
          position: relative;
        }
        
        .before-after-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .slider-wrapper {
          position: relative;
        }

        .slider-container {
          border: 1px solid var(--border-color);
          border-radius: 18px;
          padding: 8px;
          background: var(--bg-secondary);
          box-shadow: var(--shadow-sm);
        }

        .slider-item-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slider-item-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .slider-badge {
          position: absolute;
          bottom: 1.5rem;
          padding: 0.4rem 1rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: white;
          z-index: 10;
          pointer-events: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .before-badge {
          left: 1.5rem;
          background: rgba(30, 40, 51, 0.85);
          backdrop-filter: blur(4px);
        }

        .after-badge {
          right: 1.5rem;
          background: rgba(221, 150, 138, 0.85);
          backdrop-filter: blur(4px);
        }

        .slider-hint {
          text-align: center;
          margin-top: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.5px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }

        /* Info card */
        .info-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: var(--shadow-md);
        }

        .info-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(221, 150, 138, 0.12);
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .info-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 1rem;
        }

        .info-para {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          border-bottom: 1px dashed var(--border-color);
          padding-bottom: 1rem;
        }

        .result-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .result-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
          min-width: 60px;
        }

        .result-label {
          font-size: 0.88rem;
          color: var(--text-dark);
          font-weight: 500;
          line-height: 1.4;
        }

        @media (max-width: 991px) {
          .before-after-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .slider-container {
            max-width: 600px;
            margin: 0 auto;
          }
          .slider-hint {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
