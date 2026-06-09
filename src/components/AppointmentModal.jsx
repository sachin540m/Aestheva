import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, selectedService }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService || '',
    date: '',
    time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesList = [
    "Skin Rejuvenation",
    "Acne Management",
    "Pigmentation & Melasma",
    "Anti-Aging Treatment",
    "Glutathione IV Therapy",
    "Non-Invasive Face Lift",
    "Exosomes for Skin",
    "Chemical Peel",
    "PRP / GFC Therapy",
    "Open Pores / Micro-Needling",
    "Mesotherapy",
    "Dark Spots / Freckles",
    "Skin Brightening",
    "Hair Growth & Fall Control",
    "Dandruff Treatment",
    "Exosomes for Hair",
    "Laser Hair Removal",
    "Photo Rejuvenation / Carbon Laser",
    "Tattoo Removal",
    "Skin Tags & Mole Removal",
    "Scar Reduction"
  ];

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
    } catch (err) {
      alert('Submission failed. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content animate-fade-in">
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="appointment-form">
            <h3 className="modal-title">Request Appointment</h3>
            <p className="modal-subtitle">Fill in your details below and we will contact you to confirm your booking.</p>

            <div className="form-group">
              <label><User size={14} /> Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="Dr. Ketaki's Patient" 
                value={form.name} 
                onChange={e => setForm({...form, name: e.target.value})} 
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label><Phone size={14} /> Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="e.g. +91 9876543210" 
                  value={form.phone} 
                  onChange={e => setForm({...form, phone: e.target.value})} 
                />
              </div>

              <div className="form-group">
                <label><Mail size={14} /> Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="e.g. patient@aestheva.com" 
                  value={form.email} 
                  onChange={e => setForm({...form, email: e.target.value})} 
                />
              </div>
            </div>

            <div className="form-group">
              <label><Calendar size={14} /> Select Treatment / Service</label>
              <select 
                value={form.service} 
                onChange={e => setForm({...form, service: e.target.value})}
                required
              >
                <option value="">-- Choose a Service --</option>
                {servicesList.map((srv, idx) => (
                  <option key={idx} value={srv}>{srv}</option>
                ))}
              </select>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Preferred Date</label>
                <input 
                  type="date" 
                  required 
                  value={form.date} 
                  onChange={e => setForm({...form, date: e.target.value})} 
                />
              </div>

              <div className="form-group">
                <label>Preferred Time</label>
                <select 
                  required 
                  value={form.time} 
                  onChange={e => setForm({...form, time: e.target.value})}
                >
                  <option value="">-- Choose a Slot --</option>
                  <option value="10:00 AM - 12:00 PM">Morning (10 AM - 12 PM)</option>
                  <option value="12:00 PM - 03:00 PM">Afternoon (12 PM - 3 PM)</option>
                  <option value="03:00 PM - 06:00 PM">Evening (3 PM - 6 PM)</option>
                  <option value="06:00 PM - 08:00 PM">Late Evening (6 PM - 8 PM)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label><MessageSquare size={14} /> Message (Optional)</label>
              <textarea 
                rows="3" 
                placeholder="Mention any specific skin conditions, allergies, or concerns..."
                value={form.message} 
                onChange={e => setForm({...form, message: e.target.value})}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full submit-btn" disabled={loading}>
              {loading ? 'Requesting...' : 'Request Appointment'}
            </button>
          </form>
        ) : (
          <div className="success-screen animate-fade-in">
            <CheckCircle size={64} className="success-icon" />
            <h3 className="success-title">Request Received!</h3>
            <p className="success-desc">
              Thank you, <strong>{form.name}</strong>. We have received your request for <strong>{form.service}</strong> on <strong>{form.date}</strong>.
            </p>
            <p className="success-contact-note">
              Our clinic administrator will call or text you shortly at <strong>{form.phone}</strong> to confirm your slot.
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Back to Home
            </button>
          </div>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(30, 26, 23, 0.6);
          backdrop-filter: blur(4px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .modal-content {
          background: var(--bg-primary);
          border-radius: 16px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg);
          padding: 3rem 2.5rem;
          width: 100%;
          max-width: 600px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }
        .modal-close {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .modal-close:hover {
          color: var(--text-dark);
        }

        .modal-title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .modal-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.2rem;
        }
        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .form-group input, 
        .form-group select, 
        .form-group textarea {
          border: 1px solid var(--border-color);
          padding: 0.8rem;
          border-radius: 6px;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--text-dark);
          background-color: var(--bg-secondary);
          transition: all 0.3s ease;
        }
        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          background-color: var(--bg-primary);
          box-shadow: 0 0 0 3px rgba(221, 149, 137, 0.1);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
        }

        .submit-btn {
          margin-top: 1rem;
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Success screen styles */
        .success-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1rem 0;
        }
        .success-icon {
          color: #2e7d32;
          margin-bottom: 1.5rem;
        }
        .success-title {
          font-size: 2.2rem;
          margin-bottom: 0.8rem;
        }
        .success-desc {
          font-size: 1rem;
          color: var(--text-dark);
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .success-contact-note {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }

        @media (max-width: 600px) {
          .modal-content {
            padding: 2rem 1.5rem;
          }
          .form-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </div>
  );
}
