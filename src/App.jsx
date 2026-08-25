import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Marquee from './components/Marquee';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SEO from './components/SEO';
import AppointmentModal from './components/AppointmentModal';

// Lazy-loaded route components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const ServiceDetail = lazy(() => import('./components/ServiceDetail'));
import BeforeAfterSlider from './components/BeforeAfterSlider';
import GoogleReviews from './components/GoogleReviews';
import ClinicVideo from './components/ClinicVideo';
import { Toaster } from 'react-hot-toast';

// Helper component to scroll to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const location = useLocation();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with routing to ensure proper scroll heights update
    lenis.resize();

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]); // Resize/re-sync when page route changes

  const openModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  // Scroll progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  // Common transition parameters
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 }
  };
  const pageTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

  const homepageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Dr. Ketaki's Aesthéva Clinic",
      "url": "https://drketakisaestheva.in"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dr. Ketaki's Aesthéva",
      "url": "https://drketakisaestheva.in",
      "logo": "https://drketakisaestheva.in/logo.png",
      "sameAs": [
        "https://instagram.com/dr_ketakis_aestheva",
        "https://maps.app.goo.gl/vFLRqvqgjsS7vwBt8"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "LocalBusiness"],
      "name": "Dr. Ketaki's Aesthéva Clinic",
      "alternateName": "Aesthéva Clinic Navi Mumbai",
      "image": "https://drketakisaestheva.in/logo.png",
      "@id": "https://drketakisaestheva.in/#clinic",
      "url": "https://drketakisaestheva.in",
      "telephone": "+919136611998",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 4, Moraj Residency, Plot-01, Sector-16, Sanpada",
        "addressLocality": "Navi Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400705",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.0284428,
        "longitude": 73.0116812
      },
      "hasMap": "https://maps.app.goo.gl/vFLRqvqgjsS7vwBt8",
      "sameAs": [
        "https://instagram.com/dr_ketakis_aestheva",
        "https://maps.app.goo.gl/vFLRqvqgjsS7vwBt8"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "11:00",
        "closes": "20:00"
      },
      "medicalSpecialty": [
        "SkinCare",
        "CosmeticProcedure",
        "Dermatology"
      ],
      "founder": {
        "@type": "Person",
        "name": "Dr. Ketaki Dongare - Bhoir",
        "jobTitle": "Cosmetologist & Aesthetic Consultant"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "215",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Dr. Aishwarya Gawande"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "I took a customized skin rejuvenation and scar treatment package at Aesthéva Clinic under Dr. Ketaki. Over four months, I've seen tremendous improvement in my active acne, scar texture, and overall skin glow. The results are visible, natural, and lasting. Highly recommended clinic for authentic skin care!"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Aditi Sharma"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "Dr. Ketaki is an amazing cosmetologist! I went for a skin tags removal and laser session. She explained the entire process clearly. The results are clean and perfect. The clinic is very hygienic."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rahul Mehta"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "Great experience at Aesthéva Clinic for hair loss treatment. Dr. Ketaki recommended GFC therapy and after 3 sessions, my hair fall has drastically reduced. Highly recommended clinic in Sanpada!"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Pooja Patil"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "I was struggling with stubborn pigmentation for years. Under Dr. Ketaki's advice, I underwent a combination of chemical peels and laser toning. My skin is noticeably brighter and even-toned now."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Ketaki Dongare - Bhoir",
      "image": "https://drketakisaestheva.in/dr-ketaki.jpeg",
      "telephone": "+919136611998",
      "medicalSpecialty": [
        "SkinCare",
        "CosmeticProcedure",
        "Dermatology"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 4, Moraj Residency, Plot-01, Sector-16, Sanpada",
        "addressLocality": "Navi Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400705",
        "addressCountry": "IN"
      }
    }
  ];

  return (
    <div className="app-wrapper">
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--primary-gradient)',
          transformOrigin: '0%',
          zIndex: 10000,
        }}
      />
      {location.pathname === '/' && (
        <SEO 
          title="Best Aesthetic Clinic in Sanpada, Navi Mumbai | Dr. Ketaki Aestheva"
          description="Dr Ketaki Aestheva in Sanpada, Navi Mumbai offers premium skin & hair treatments. Achieve healthy skin today. Contact our expert aesthetic clinic for booking."
          path="/"
          schema={homepageSchema}
        />
      )}
      
      <ScrollToTop />
      <Header onBookClick={() => openModal()} />
      <Toaster position="top-center" reverseOrder={false} />

      <Suspense fallback={
        <div className="route-loader-bar">
          <div className="bar-progress" />
        </div>
      }>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Hero onBookClick={() => openModal()} />
                <Marquee />
                <Approach onBookClick={() => openModal()} />
                <StatsStrip />
                <BeforeAfterSlider />
                <GoogleReviews />
                <Testimonials />
                <ClinicVideo onBookClick={() => openModal()} />
              </motion.div>
            } />
            
            <Route path="/about" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
                style={{ paddingTop: '7.5rem', minHeight: '80vh', background: 'var(--bg-primary)' }}
              >
                <About isPage={true} />
              </motion.div>
            } />

            <Route path="/contact" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
                style={{ paddingTop: '7.5rem', minHeight: '80vh', background: 'var(--bg-primary)' }}
              >
                <Contact isPage={true} />
              </motion.div>
            } />

            <Route path="/services/:serviceId" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ServiceDetail onBookClick={(service) => openModal(service)} />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer />
      
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedService={selectedService}
      />

      {/* Floating WhatsApp using the correct Sanpada phone number */}
      <a
        href="https://wa.me/919136611998"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float-btn"
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem',
          width: '56px', height: '56px', borderRadius: '50%',
          background: '#25D366', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
          zIndex: 9999, textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
