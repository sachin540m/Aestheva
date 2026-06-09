import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
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
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      alert('Submission failed. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        
        <div className="section-title-wrapper">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            Have questions or want to learn more about our treatments? Send us a message or visit our clinic.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Info Card Column */}
          <div className="contact-info-column">
            <h3 className="info-column-title">Clinic Details</h3>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="info-text">
                  <h5>Address</h5>
                  <p>Dr. Ketaki's Aestheva Clinic, Prime Business Park, Linking Road, Santacruz West, Mumbai, Maharashtra 400054</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div className="info-text">
                  <h5>Phone Call</h5>
                  <a href="tel:+919769514565">+91 97695 14565</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="info-text">
                  <h5>Email Address</h5>
                  <a href="mailto:info@astheva.com">info@astheva.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Clock size={20} />
                </div>
                <div className="info-text">
                  <h5>Clinic Hours</h5>
                  <p>Monday – Saturday: 10:00 AM – 08:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="map-frame-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.180491030765!2d72.83395991489914!3d19.066795987093282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9113fa08849%3A0xe54ef028e5dbec6a!2sLinking%20Rd%2C%20Santacruz%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin" 
                width="100%" 
                height="180" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-column">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="message-form">
                <h3 className="form-column-title">Send a Message</h3>
                
                <div className="form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe" 
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 XXXXX XXXXX" 
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@example.com" 
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Write your query here..." 
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full submit-msg-btn" disabled={loading}>
                  <Send size={16} style={{ marginRight: '8px' }} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="form-success-wrapper animate-fade-in">
                <CheckCircle size={56} className="success-icon-contact" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. Dr. Ketaki's clinic support team will review your message and reply via email or phone call within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            )}
          </div>

        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-secondary);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4rem;
        }

        .contact-info-column {
          background: var(--bg-primary);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }
        .info-column-title, .form-column-title {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 0.8rem;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          margin-bottom: 2rem;
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
          font-weight: 700;
          margin-bottom: 0.3rem;
        }
        .info-text p, .info-text a {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-decoration: none;
        }
        .info-text a:hover {
          color: var(--primary);
        }

        .map-frame-wrapper {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .contact-form-column {
          background: var(--bg-primary);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
          text-align: left;
        }
        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .form-group input, 
        .form-group textarea {
          border: 1px solid var(--border-color);
          padding: 0.8rem;
          border-radius: 6px;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--text-dark);
          background-color: var(--bg-secondary);
          transition: all 0.3s ease;
          width: 100%;
        }
        .form-group input:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          background-color: var(--bg-primary);
          box-shadow: 0 0 0 3px rgba(221, 149, 137, 0.1);
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
        .success-icon-contact {
          color: #2e7d32;
          margin-bottom: 1.5rem;
        }
        .form-success-wrapper h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        .form-success-wrapper p {
          color: var(--text-muted);
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
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
