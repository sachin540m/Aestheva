import React, { useRef } from 'react';
import { Calendar, Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ClinicVideo({ onBookClick }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    // Cinematic parallax zoom on scroll
    gsap.fromTo(videoRef.current,
      { scale: 1.15 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );

    // Play when visible, pause when offscreen (performance optimization)
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => videoRef.current?.play(),
      onLeave: () => videoRef.current?.pause(),
      onEnterBack: () => videoRef.current?.play(),
      onLeaveBack: () => videoRef.current?.pause()
    });
  }, { scope: sectionRef });

  return (
    <section className="clinic-video-section" ref={sectionRef}>
      <div className="video-container">
        <video 
          ref={videoRef}
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c022f2c8d3259074d75b3f18e2a07929&profile_id=139&oauth2_token_id=57447761"
          loop
          muted
          playsInline
          autoPlay
          className="bg-video"
        />
        <div className="video-overlay" />
      </div>

      <div className="container video-content-container">
        <div className="video-text-content">
          <span className="video-subtitle">THE AESTHÉVA EXPERIENCE</span>
          <h2 className="video-title">Premium Aesthetic Standards</h2>
          <p className="video-description">
            Step into a clinical environment where advanced skin care meets personalized aesthetic artistry. Our Sanpada clinic is equipped with US-FDA approved laser technologies and follows rigorous international hygiene standards to deliver safe, effective, and transformative care.
          </p>
          <button className="btn btn-primary btn-lg" onClick={onBookClick}>
            <Calendar size={18} style={{ marginRight: '8px' }} />
            Book a Clinic Tour
          </button>
        </div>
      </div>

      <style>{`
        .clinic-video-section {
          position: relative;
          height: 60vh;
          min-height: 450px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--bg-dark);
          color: white;
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(10, 28, 46, 0.8) 0%, rgba(10, 28, 46, 0.4) 100%);
          z-index: 2;
        }

        .video-content-container {
          position: relative;
          z-index: 3;
        }

        .video-text-content {
          max-width: 650px;
        }

        .video-subtitle {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 0.8rem;
          display: block;
        }

        .video-title {
          font-size: 2.8rem;
          font-weight: 500;
          color: white;
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }

        .video-description {
          font-size: 1.02rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2.2rem;
        }

        @media (max-width: 768px) {
          .video-title {
            font-size: 2rem;
          }
          .video-description {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
