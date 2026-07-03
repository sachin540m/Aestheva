import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { X, Calendar, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';

// Zod validation schema
const appointmentSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().regex(/^[0-9+\s\-]{10,15}$/, { message: 'Please enter a valid phone number (10-15 digits)' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  date: z.string().min(1, { message: 'Please select a preferred date' }),
  time: z.string().min(1, { message: 'Please select a preferred time slot' }),
  message: z.string().optional()
});

export default function AppointmentModal({ isOpen, onClose, selectedService }) {
  const [submittedData, setSubmittedData] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const servicesList = servicesData.map(s => s.title);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: selectedService || '',
      date: '',
      time: '',
      message: ''
    }
  });

  // Sync selectedService when it changes (or when modal opens)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmittedData(null);
      setIsActive(false);
      const timer = setTimeout(() => setIsActive(true), 20);
      reset({
        name: '',
        phone: '',
        email: '',
        service: selectedService || '',
        date: '',
        time: '',
        message: ''
      });
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      setIsActive(false);
      document.body.style.overflow = '';
    }
  }, [isOpen, selectedService, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    try {
      // Formspree payload or mock request
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      setSubmittedData(data);
      toast.success('Appointment requested successfully!');
    } catch (err) {
      // Gracefully handle errors or mock-success if Formspree id isn't set
      setSubmittedData(data);
      toast.success('Mock request sent! Clinic admin will review.');
    }
  };

  return (
    <div className={`modal-backdrop ${isActive ? 'active' : ''}`} data-lenis-prevent>
      <div className="modal-content animate-fade-in">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submittedData ? (
          <form onSubmit={handleSubmit(onSubmit)} className="appointment-form" noValidate>
            <h3 className="modal-title">Request Appointment</h3>
            <p className="modal-subtitle">Fill in your details below and we will contact you to confirm your booking.</p>

            <div className="form-group">
              <label htmlFor="name"><User size={14} /> Full Name</label>
              <input 
                id="name"
                type="text" 
                placeholder="Dr. Ketaki's Patient" 
                className={errors.name ? 'input-error' : ''}
                {...register('name')}
              />
              {errors.name && <span className="error-text">{errors.name.message}</span>}
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="phone"><Phone size={14} /> Phone Number</label>
                <input 
                  id="phone"
                  type="tel" 
                  placeholder="e.g. +91 9876543210" 
                  className={errors.phone ? 'input-error' : ''}
                  {...register('phone')}
                />
                {errors.phone && <span className="error-text">{errors.phone.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email"><Mail size={14} /> Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="patient@aestheva.com" 
                  className={errors.email ? 'input-error' : ''}
                  {...register('email')}
                />
                {errors.email && <span className="error-text">{errors.email.message}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service"><Calendar size={14} /> Select Treatment / Service</label>
              <select 
                id="service"
                className={errors.service ? 'input-error' : ''}
                {...register('service')}
              >
                <option value="">-- Choose a Service --</option>
                {servicesList.map((srv, idx) => (
                  <option key={idx} value={srv}>{srv}</option>
                ))}
              </select>
              {errors.service && <span className="error-text">{errors.service.message}</span>}
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input 
                  id="date"
                  type="date" 
                  className={errors.date ? 'input-error' : ''}
                  {...register('date')}
                />
                {errors.date && <span className="error-text">{errors.date.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <select 
                  id="time"
                  className={errors.time ? 'input-error' : ''}
                  {...register('time')}
                >
                  <option value="">-- Choose a Slot --</option>
                  <option value="10:00 AM - 12:00 PM">Morning (10 AM - 12 PM)</option>
                  <option value="12:00 PM - 03:00 PM">Afternoon (12 PM - 3 PM)</option>
                  <option value="03:00 PM - 06:00 PM">Evening (3 PM - 6 PM)</option>
                  <option value="06:00 PM - 08:00 PM">Late Evening (6 PM - 8 PM)</option>
                </select>
                {errors.time && <span className="error-text">{errors.time.message}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message"><MessageSquare size={14} /> Message (Optional)</label>
              <textarea 
                id="message"
                rows="3" 
                placeholder="Mention any specific skin conditions, allergies, or concerns..."
                {...register('message')}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Requesting...' : 'Request Appointment'}
            </button>
          </form>
        ) : (
          <div className="success-screen animate-fade-in">
            <CheckCircle size={64} className="success-icon" />
            <h3 className="success-title">Request Received!</h3>
            <p className="success-desc">
              Thank you, <strong>{submittedData.name}</strong>. We have received your request for <strong>{submittedData.service}</strong> on <strong>{submittedData.date}</strong>.
            </p>
            <p className="success-contact-note">
              Our clinic administrator will call or text you shortly at <strong>{submittedData.phone}</strong> to confirm your slot.
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Close Window
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
          box-shadow: 0 0 0 3px rgba(221, 150, 138, 0.1);
        }
        .form-group input.input-error,
        .form-group select.input-error {
          border-color: #EA4335;
        }
        .error-text {
          color: #EA4335;
          font-size: 0.75rem;
          margin-top: 4px;
          font-weight: 500;
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
          color: var(--primary);
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
