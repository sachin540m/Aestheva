import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Helmet } from 'react-helmet-async';

export default function Contact({ isPage = false }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', date: '', service: '', message: '' });
    } catch (err) {
      alert('Submission failed. Please contact us directly via phone or WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact-page-container">
      {isPage && (
        <Helmet>
          <title>Contact Aesthéva Clinic | Book Consultation in Sanpada, Navi Mumbai</title>
          <meta name="description" content="Get in touch with Aesthéva Clinic in Sanpada, Navi Mumbai. View our contact number +91 91366 11998, address, google map location, and request your consultation online." />
          <meta property="og:title" content="Contact Aesthéva Clinic | Sanpada" />
          <meta property="og:description" content="Reach out to Dr. Ketaki's clinic for expert skin, hair, and laser care." />
        </Helmet>
      )}

      {/* 1. Page Header Banner */}
      {isPage && (
        <section className="contact-hero-banner">
          <div className="container banner-content text-center">
            <h1 className="banner-title">Contact Us</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span className="separator">»</span>
              <span className="current">Contact Us</span>
            </div>
          </div>
        </section>
      )}

      {/* 2. Three Cards Section */}
      {isPage && (
        <section className="contact-cards-section section-padding">
          <div className="container">
            <div className="contact-cards-grid">
              
              {/* Card 1 */}
              <div className="contact-info-card">
                <div className="card-icon-wrapper">
                  <Phone size={24} />
                </div>
                <h4>Call Us</h4>
                <p>Clinic: <a href="tel:+919136611998">+91 91366 11998</a></p>
                <p>WhatsApp: <a href="https://wa.me/919136611998" target="_blank" rel="noreferrer">+91 91366 11998</a></p>
              </div>

              {/* Card 2 */}
              <div className="contact-info-card">
                <div className="card-icon-wrapper">
                  <Mail size={24} />
                </div>
                <h4>Send us a Mail</h4>
                <p><a href="mailto:drketakisaestheva@gmail.com">drketakisaestheva@gmail.com</a></p>
                <p>Support: <a href="mailto:drketakisaestheva@gmail.com">drketakisaestheva@gmail.com</a></p>
              </div>

              {/* Card 3 */}
              <div className="contact-info-card">
                <div className="card-icon-wrapper">
                  <Clock size={24} />
                </div>
                <h4>Opening Time</h4>
                <p>Mon – Sat: 11:00 AM – 8:00 PM</p>
                <p style={{ color: '#e05555', fontWeight: '500' }}>Sunday: Closed</p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. Map & Booking Form Section */}
      <section className="contact-details-section">
        <div className="container">
          <div className={isPage ? "contact-grid" : "contact-single-column"}>
            
            {/* Left Column: Map & Address (Only on page) */}
            {isPage && (
              <div className="contact-info-column">
                <h3 className="info-column-title">Clinic Location</h3>
                
                <div className="info-list">
                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <MapPin size={20} />
                    </div>
                    <div className="info-text">
                      <h5>Dr. Ketaki's Aestheva</h5>
                      <p><a href="https://maps.app.goo.gl/vFLRqvqgjsS7vwBt8" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Shop No 4, Moraj Residency, Plot-01, Sector-16, Sanpada, Navi Mumbai - 400705</a></p>
                    </div>
                  </div>
                </div>

                <div className="map-frame-wrapper">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8016467389816!2d73.0116812!3d19.0284428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3df95a5f573%3A0xad52636287cd104c!2sMoraj%20Residency%2C%20Sanpada%2C%20Navi%20Mumbai%2C%20Maharashtra%20400705!5e0!3m2!1sen!2sin!4v1686000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0, borderRadius: '8px' }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Google Maps Location"
                  ></iframe>
                </div>
              </div>
            )}

            {/* Right/Single Column: Booking Form */}
            <div className="contact-form-column">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="appointment-form-inner">
                  <h3 className="form-column-title">Book Your Appointment</h3>
                  
                  <div className="floating-underline-group">
                    <input 
                      type="text" 
                      placeholder=" " 
                      required 
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                    />
                    <label>Your Name</label>
                  </div>

                  <div className="floating-underline-group">
                    <input 
                      type="email" 
                      placeholder=" " 
                      required 
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                    />
                    <label>Your Email</label>
                  </div>

                  <div className="floating-underline-group">
                    <input 
                      type="tel" 
                      placeholder=" " 
                      required 
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                    />
                    <label>Phone Number</label>
                  </div>

                  <div className="row-fields">
                    <div className="floating-underline-group half-width">
                      <input 
                        type="date" 
                        required 
                        value={form.date}
                        onChange={e => setForm({...form, date: e.target.value})}
                      />
                    </div>

                    <div className="floating-underline-group half-width">
                      <select 
                        required
                        value={form.service}
                        onChange={e => setForm({...form, service: e.target.value})}
                      >
                        <option value="" disabled hidden>Select Service</option>
                        {servicesData.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="floating-underline-group">
                    <textarea 
                      rows="3" 
                      placeholder=" " 
                      required 
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                    />
                    <label>Brief Message</label>
                  </div>

                  <button type="submit" className="btn btn-primary w-full submit-appt-btn" disabled={loading}>
                    {loading ? 'Submitting...' : 'Book Appointment'}
                  </button>
                </form>
              ) : (
                <div className="form-success-wrapper">
                  <CheckCircle size={56} className="success-icon" />
                  <h3>Appointment Requested!</h3>
                  <p>Thank you. We will contact you shortly to confirm your slot.</p>
                  <button className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }} onClick={() => setSubmitted(false)}>
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .contact-page-container {
          background-color: var(--bg-primary);
        }
        
        /* 1. Hero Banner */
        .contact-hero-banner {
          position: relative;
          background: linear-gradient(135deg, #1a0e0a 0%, #2d1810 30%, #1e1218 60%, #0d1520 100%);
          padding: 8rem 0 5rem 0;
          color: white;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .contact-hero-banner::before {
          content: '';
          position: absolute;
          top: -40%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(221, 149, 137, 0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .contact-hero-banner::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(221, 149, 137, 0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .banner-content {
          position: relative;
          z-index: 2;
        }
        .banner-title {
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
        }
        .breadcrumbs {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 0.88rem;
          backdrop-filter: blur(5px);
        }
        .breadcrumbs a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .breadcrumbs a:hover {
          color: var(--primary);
        }
        .breadcrumbs .separator {
          color: rgba(255, 255, 255, 0.4);
        }
        .breadcrumbs .current {
          color: var(--primary-light);
          font-weight: 500;
        }

        /* 2. Cards Section */
        .contact-cards-section {
          background-color: var(--bg-secondary);
          padding: 5rem 0;
          border-bottom: 1px solid var(--border-color);
        }
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .contact-info-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 2.5rem 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .card-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(221, 149, 137, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
        }
        .contact-info-card h4 {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        .contact-info-card p {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
        .contact-info-card a {
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .contact-info-card a:hover {
          color: var(--primary);
        }

        /* 3. Details Section */
        .contact-details-section {
          padding: 6rem 0;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 4.5rem;
        }
        .contact-single-column {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-info-column {
          background: var(--bg-secondary);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }
        .info-column-title {
          font-family: var(--font-sans);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.8rem;
          color: var(--text-dark);
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          margin-bottom: 2.2rem;
        }
        .info-item {
          display: flex;
          gap: 1.2rem;
        }
        .info-icon-wrapper {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(221, 149, 137, 0.08);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info-text h5 {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
          color: var(--text-dark);
        }
        .info-text p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .map-frame-wrapper {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .contact-form-column {
          background: var(--bg-dark);
          color: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(221, 150, 138, 0.2);
        }
        .contact-form-column .form-column-title {
          font-family: var(--font-sans);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 0.8rem;
          color: white;
        }
        .row-fields {
          display: flex;
          gap: 1.5rem;
        }
        .half-width {
          flex: 1;
        }

        .submit-appt-btn {
          margin-top: 1rem;
        }

        .form-success-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          min-height: 400px;
        }
        .success-icon {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        .form-success-wrapper h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: white;
        }
        .form-success-wrapper p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 420px;
        }

         @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-info-column, .contact-form-column {
            padding: 2.2rem;
          }
        }
        @media (max-width: 480px) {
          .row-fields {
            flex-direction: column;
            gap: 0;
          }
        }
      `}</style>
    </div>
  );
}
