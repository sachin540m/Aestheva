import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function GoogleReviews() {
  const reviewsSummary = {
    rating: 4.9,
    count: 215,
  };

  const reviews = [
    {
      author: "Aditi Sharma",
      time: "2 weeks ago",
      initials: "AS",
      color: "#4285F4",
      text: "Dr. Ketaki is an amazing cosmetologist! I went for a skin tags removal and laser session. She explained the entire process clearly. The results are clean and perfect. The clinic is very hygienic.",
      rating: 5,
    },
    {
      author: "Rahul Mehta",
      time: "1 month ago",
      initials: "RM",
      color: "#34A853",
      text: "Great experience at Aesthéva Clinic for hair loss treatment. Dr. Ketaki recommended GFC therapy and after 3 sessions, my hair fall has drastically reduced. Highly recommended clinic in Sanpada!",
      rating: 5,
    },
    {
      author: "Pooja Patil",
      time: "3 months ago",
      initials: "PP",
      color: "#FBBC05",
      text: "I was struggling with stubborn pigmentation for years. Under Dr. Ketaki's advice, I underwent a combination of chemical peels and laser toning. My skin is noticeably brighter and even-toned now.",
      rating: 5,
    }
  ];

  return (
    <section className="google-reviews-section section-padding">
      <div className="container">
        <div className="reviews-header-block">
          <div className="header-left">
            <div className="google-brand">
              <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <h3>Google Reviews</h3>
            </div>
            <div className="rating-summary">
              <span className="rating-val">{reviewsSummary.rating}</span>
              <div className="stars-wrap">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={16} fill="#FFC107" stroke="none" />
                ))}
              </div>
              <span className="reviews-count">({reviewsSummary.count} reviews)</span>
            </div>
          </div>
          <div className="header-right">
            <a 
              href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline btn-sm write-review-btn"
            >
              Write a Review
            </a>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, idx) => (
            <div className="review-item-card" key={idx}>
              <div className="reviewer-info">
                <div 
                  className="reviewer-avatar" 
                  style={{ backgroundColor: rev.color }}
                >
                  {rev.initials}
                </div>
                <div className="reviewer-meta">
                  <div className="reviewer-name-row">
                    <h6>{rev.author}</h6>
                    <span className="verified-badge">
                      <CheckCircle size={10} fill="var(--primary)" stroke="white" />
                      Verified
                    </span>
                  </div>
                  <span className="review-time">{rev.time}</span>
                </div>
              </div>
              
              <div className="review-rating-stars">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#FFC107" stroke="none" />
                ))}
              </div>

              <p className="review-content-text">"{rev.text}"</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .google-reviews-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .reviews-header-block {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 2rem;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .google-brand {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .google-brand h3 {
          font-family: var(--font-sans);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .rating-summary {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .rating-val {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1;
        }

        .stars-wrap {
          display: flex;
          gap: 2px;
        }

        .reviews-count {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .write-review-btn {
          font-size: 0.82rem;
          padding: 0.55rem 1.2rem;
          border-radius: 4px;
        }

        /* Grid */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .review-item-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .review-item-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .reviewer-info {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.2rem;
        }

        .reviewer-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .reviewer-meta {
          display: flex;
          flex-direction: column;
        }

        .reviewer-name-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .reviewer-name-row h6 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          font-size: 0.65rem;
          color: var(--primary);
          font-weight: 600;
          text-transform: uppercase;
        }

        .review-time {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 1px;
        }

        .review-rating-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 1rem;
        }

        .review-content-text {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-dark);
          font-style: italic;
        }

        @media (max-width: 991px) {
          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .reviews-header-block {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .header-right {
            width: 100%;
          }
          .write-review-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
