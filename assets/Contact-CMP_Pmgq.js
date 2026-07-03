import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{a as t,n,p as r,t as i}from"./vendor-react-BbYjAYeo.js";import{d as a,g as o,h as s,v as c,y as l}from"./vendor-lucide-Cnss62YS.js";import{t as u}from"./index-CTEp9Eif.js";var d=e(r(),1),f=i();function p({isPage:e=!1}){let[r,i]=(0,d.useState)({name:``,email:``,phone:``,date:``,service:``,message:``}),[p,m]=(0,d.useState)(!1),[h,g]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{id:`contact`,className:`contact-page-container`,children:[e&&(0,f.jsxs)(n,{children:[(0,f.jsx)(`title`,{children:`Contact Aesthéva Clinic | Book Consultation in Sanpada, Navi Mumbai`}),(0,f.jsx)(`meta`,{name:`description`,content:`Get in touch with Aesthéva Clinic in Sanpada, Navi Mumbai. View our contact number +91 91366 11998, address, google map location, and request your consultation online.`}),(0,f.jsx)(`meta`,{property:`og:title`,content:`Contact Aesthéva Clinic | Sanpada`}),(0,f.jsx)(`meta`,{property:`og:description`,content:`Reach out to Dr. Ketaki's clinic for expert skin, hair, and laser care.`})]}),e&&(0,f.jsx)(`section`,{className:`contact-hero-banner`,children:(0,f.jsxs)(`div`,{className:`container banner-content text-center`,children:[(0,f.jsx)(`h1`,{className:`banner-title`,children:`Contact Us`}),(0,f.jsxs)(`div`,{className:`breadcrumbs`,children:[(0,f.jsx)(t,{to:`/`,children:`Home`}),(0,f.jsx)(`span`,{className:`separator`,children:`»`}),(0,f.jsx)(`span`,{className:`current`,children:`Contact Us`})]})]})}),e&&(0,f.jsx)(`section`,{className:`contact-cards-section section-padding`,children:(0,f.jsx)(`div`,{className:`container`,children:(0,f.jsxs)(`div`,{className:`contact-cards-grid`,children:[(0,f.jsxs)(`div`,{className:`contact-info-card`,children:[(0,f.jsx)(`div`,{className:`card-icon-wrapper`,children:(0,f.jsx)(a,{size:24})}),(0,f.jsx)(`h4`,{children:`Call Us`}),(0,f.jsxs)(`p`,{children:[`Clinic: `,(0,f.jsx)(`a`,{href:`tel:+919136611998`,children:`+91 91366 11998`})]}),(0,f.jsxs)(`p`,{children:[`WhatsApp: `,(0,f.jsx)(`a`,{href:`https://wa.me/919136611998`,target:`_blank`,rel:`noreferrer`,children:`+91 91366 11998`})]})]}),(0,f.jsxs)(`div`,{className:`contact-info-card`,children:[(0,f.jsx)(`div`,{className:`card-icon-wrapper`,children:(0,f.jsx)(o,{size:24})}),(0,f.jsx)(`h4`,{children:`Send us a Mail`}),(0,f.jsx)(`p`,{children:(0,f.jsx)(`a`,{href:`mailto:drketakisaestheva@gmail.com`,children:`drketakisaestheva@gmail.com`})}),(0,f.jsxs)(`p`,{children:[`Support: `,(0,f.jsx)(`a`,{href:`mailto:drketakisaestheva@gmail.com`,children:`drketakisaestheva@gmail.com`})]})]}),(0,f.jsxs)(`div`,{className:`contact-info-card`,children:[(0,f.jsx)(`div`,{className:`card-icon-wrapper`,children:(0,f.jsx)(c,{size:24})}),(0,f.jsx)(`h4`,{children:`Opening Time`}),(0,f.jsx)(`p`,{children:`Mon – Sat: 11:00 AM – 8:00 PM`}),(0,f.jsx)(`p`,{style:{color:`#e05555`,fontWeight:`500`},children:`Sunday: Closed`})]})]})})}),(0,f.jsx)(`section`,{className:`contact-details-section`,children:(0,f.jsx)(`div`,{className:`container`,children:(0,f.jsxs)(`div`,{className:e?`contact-grid`:`contact-single-column`,children:[e&&(0,f.jsxs)(`div`,{className:`contact-info-column`,children:[(0,f.jsx)(`h3`,{className:`info-column-title`,children:`Clinic Location`}),(0,f.jsx)(`div`,{className:`info-list`,children:(0,f.jsxs)(`div`,{className:`info-item`,children:[(0,f.jsx)(`div`,{className:`info-icon-wrapper`,children:(0,f.jsx)(s,{size:20})}),(0,f.jsxs)(`div`,{className:`info-text`,children:[(0,f.jsx)(`h5`,{children:`Dr. Ketaki's Aestheva`}),(0,f.jsx)(`p`,{children:(0,f.jsx)(`a`,{href:`https://maps.app.goo.gl/vFLRqvqgjsS7vwBt8`,target:`_blank`,rel:`noreferrer`,style:{color:`inherit`,textDecoration:`none`},children:`Shop No 4, Moraj Residency, Plot-01, Sector-16, Sanpada, Navi Mumbai - 400705`})})]})]})}),(0,f.jsx)(`div`,{className:`map-frame-wrapper`,children:(0,f.jsx)(`iframe`,{src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8016467389816!2d73.0116812!3d19.0284428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3df95a5f573%3A0xad52636287cd104c!2sMoraj%20Residency%2C%20Sanpada%2C%20Navi%20Mumbai%2C%20Maharashtra%20400705!5e0!3m2!1sen!2sin!4v1686000000000!5m2!1sen!2sin`,width:`100%`,height:`300`,style:{border:0,borderRadius:`8px`},allowFullScreen:``,loading:`lazy`,title:`Google Maps Location`})})]}),(0,f.jsx)(`div`,{className:`contact-form-column`,children:p?(0,f.jsxs)(`div`,{className:`form-success-wrapper`,children:[(0,f.jsx)(l,{size:56,className:`success-icon`}),(0,f.jsx)(`h3`,{children:`Appointment Requested!`}),(0,f.jsx)(`p`,{children:`Thank you. We will contact you shortly to confirm your slot.`}),(0,f.jsx)(`button`,{className:`btn btn-outline`,style:{borderColor:`white`,color:`white`},onClick:()=>m(!1),children:`Submit Another Request`})]}):(0,f.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault(),g(!0);try{await fetch(`https://formspree.io/f/YOUR_FORM_ID`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)}),m(!0),i({name:``,email:``,phone:``,date:``,service:``,message:``})}catch{alert(`Submission failed. Please contact us directly via phone or WhatsApp.`)}finally{g(!1)}},className:`appointment-form-inner`,children:[(0,f.jsx)(`h3`,{className:`form-column-title`,children:`Book Your Appointment`}),(0,f.jsxs)(`div`,{className:`floating-underline-group`,children:[(0,f.jsx)(`input`,{type:`text`,placeholder:` `,required:!0,value:r.name,onChange:e=>i({...r,name:e.target.value})}),(0,f.jsx)(`label`,{children:`Your Name`})]}),(0,f.jsxs)(`div`,{className:`floating-underline-group`,children:[(0,f.jsx)(`input`,{type:`email`,placeholder:` `,required:!0,value:r.email,onChange:e=>i({...r,email:e.target.value})}),(0,f.jsx)(`label`,{children:`Your Email`})]}),(0,f.jsxs)(`div`,{className:`floating-underline-group`,children:[(0,f.jsx)(`input`,{type:`tel`,placeholder:` `,required:!0,value:r.phone,onChange:e=>i({...r,phone:e.target.value})}),(0,f.jsx)(`label`,{children:`Phone Number`})]}),(0,f.jsxs)(`div`,{className:`row-fields`,children:[(0,f.jsx)(`div`,{className:`floating-underline-group half-width`,children:(0,f.jsx)(`input`,{type:`date`,required:!0,value:r.date,onChange:e=>i({...r,date:e.target.value})})}),(0,f.jsx)(`div`,{className:`floating-underline-group half-width`,children:(0,f.jsxs)(`select`,{required:!0,value:r.service,onChange:e=>i({...r,service:e.target.value}),children:[(0,f.jsx)(`option`,{value:``,disabled:!0,hidden:!0,children:`Select Service`}),u.map(e=>(0,f.jsx)(`option`,{value:e.title,children:e.title},e.id))]})})]}),(0,f.jsxs)(`div`,{className:`floating-underline-group`,children:[(0,f.jsx)(`textarea`,{rows:`3`,placeholder:` `,required:!0,value:r.message,onChange:e=>i({...r,message:e.target.value})}),(0,f.jsx)(`label`,{children:`Brief Message`})]}),(0,f.jsx)(`button`,{type:`submit`,className:`btn btn-primary w-full submit-appt-btn`,disabled:h,children:h?`Submitting...`:`Book Appointment`})]})})]})})}),(0,f.jsx)(`style`,{children:`
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
      `})]})}export{p as default};