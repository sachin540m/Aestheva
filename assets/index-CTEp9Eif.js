const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-Cw_c02H3.js","assets/rolldown-runtime-Cyuzqnbw.js","assets/vendor-react-BbYjAYeo.js","assets/vendor-utils-bg_2gNJs.js","assets/vendor-lucide-Cnss62YS.js","assets/Contact-CMP_Pmgq.js","assets/ServiceDetail-DkX5bW9t.js","assets/vendor-framer-CSHdN5MM.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{c as t,d as n,f as r,i,l as a,n as o,o as s,p as c,r as l,s as u,t as d}from"./vendor-react-BbYjAYeo.js";import{i as f,n as p,r as m,t as h}from"./vendor-framer-CSHdN5MM.js";import{n as g,r as _,t as v}from"./vendor-utils-bg_2gNJs.js";import{S as y,T as b,_ as x,a as S,c as C,d as w,f as T,g as E,i as D,m as ee,n as te,o as O,p as k,r as A,s as j,w as M,x as N,y as P}from"./vendor-lucide-Cnss62YS.js";import{n as F,r as I,t as L}from"./vendor-gsap-BsKOQrwt.js";import{i as R,n as z,r as B,t as V}from"./vendor-forms-DgEGNjNj.js";import{n as H,t as U}from"./vendor-others-D2nt6MkD.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var W=e(c(),1),G=r(),K=d();function q({onBookClick:e}){let[n,r]=(0,W.useState)(!1),[i,o]=(0,W.useState)(!1),[s,c]=(0,W.useState)(!1),[l,u]=(0,W.useState)(()=>localStorage.getItem(`theme`)||`light`),d=a();t(),(0,W.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,l),localStorage.setItem(`theme`,l)},[l]);let f=()=>{u(e=>e===`light`?`dark`:`light`)};(0,W.useEffect)(()=>{let e=()=>{window.scrollY>20?o(!0):o(!1)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let p=(e,t)=>{e.preventDefault(),r(!1),t===`hero`?(d(`/`),window.scrollTo({top:0,behavior:`smooth`})):t===`about`?(d(`/about`),window.scrollTo({top:0,behavior:`smooth`})):t===`contact`&&(d(`/contact`),window.scrollTo({top:0,behavior:`smooth`}))},m=(e,t)=>{e.preventDefault(),r(!1),d(`/services/${t}`)};return(0,K.jsxs)(`header`,{className:`fixed-header ${i?`scrolled`:``}`,children:[(0,K.jsxs)(`div`,{className:`header-container`,children:[(0,K.jsx)(`a`,{href:`/`,className:`logo-area`,onClick:e=>p(e,`hero`),children:(0,K.jsx)(`img`,{src:`/logo.png`,alt:`Dr. Ketaki's Aesthéva`,className:`logo-img-tag`})}),(0,K.jsxs)(`nav`,{className:`desktop-nav`,children:[(0,K.jsx)(`a`,{href:`/`,onClick:e=>p(e,`hero`),children:`Home`}),(0,K.jsx)(`a`,{href:`/about`,onClick:e=>p(e,`about`),children:`About Us`}),(0,K.jsxs)(`div`,{className:`nav-item-services`,children:[(0,K.jsxs)(`span`,{className:`services-nav-link`,style:{cursor:`pointer`},children:[`Services `,(0,K.jsx)(N,{size:14,className:`chevron`})]}),(0,K.jsxs)(`div`,{className:`mega-menu-wrapper`,style:{width:`1100px`,gridTemplateColumns:`1fr 1fr 1fr 1fr`},children:[(0,K.jsxs)(`div`,{className:`mega-menu-column`,children:[(0,K.jsx)(`h5`,{children:`Skin Care`}),(0,K.jsxs)(`ul`,{children:[(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/skin-rejuvenation`,onClick:e=>m(e,`skin-rejuvenation`),children:`Skin Rejuvenation`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/acne-management`,onClick:e=>m(e,`acne-management`),children:`Acne Management`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/pigmentation-melasma`,onClick:e=>m(e,`pigmentation-melasma`),children:`Pigmentation & Melasma`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/chemical-peel`,onClick:e=>m(e,`chemical-peel`),children:`Chemical Peel`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/open-pores-microneedling`,onClick:e=>m(e,`open-pores-microneedling`),children:`Open Pores / Micro-Needling`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/mesotherapy`,onClick:e=>m(e,`mesotherapy`),children:`Mesotherapy`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/dark-spots-freckles`,onClick:e=>m(e,`dark-spots-freckles`),children:`Dark Spots / Freckles`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/skin-brightening`,onClick:e=>m(e,`skin-brightening`),children:`Skin Brightening`})})]})]}),(0,K.jsxs)(`div`,{className:`mega-menu-column`,children:[(0,K.jsx)(`h5`,{children:`Aesthetic Care`}),(0,K.jsxs)(`ul`,{children:[(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/anti-aging-treatment`,onClick:e=>m(e,`anti-aging-treatment`),children:`Anti-Aging Treatment`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/glutathione-iv`,onClick:e=>m(e,`glutathione-iv`),children:`Glutathione IV`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/face-lift-non-invasive`,onClick:e=>m(e,`face-lift-non-invasive`),children:`Face Lift (Non-Invasive)`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/exsosomes-skin`,onClick:e=>m(e,`exsosomes-skin`),children:`Exsosomes for skin`})})]})]}),(0,K.jsxs)(`div`,{className:`mega-menu-column`,children:[(0,K.jsx)(`h5`,{children:`Hair Care`}),(0,K.jsxs)(`ul`,{children:[(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/prp-gfc-therapy`,onClick:e=>m(e,`prp-gfc-therapy`),children:`PRP / GFC Therapy`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/hair-growth-treatment`,onClick:e=>m(e,`hair-growth-treatment`),children:`Hair Growth / Alopecia`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/dandruff-treatment`,onClick:e=>m(e,`dandruff-treatment`),children:`Dandruff Treatment`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/exsosomes-hair`,onClick:e=>m(e,`exsosomes-hair`),children:`Exsosomes for hair`})})]})]}),(0,K.jsxs)(`div`,{className:`mega-menu-column`,children:[(0,K.jsx)(`h5`,{children:`Laser Treatments`}),(0,K.jsxs)(`ul`,{children:[(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/laser-hair-removal`,onClick:e=>m(e,`laser-hair-removal`),children:`Laser Hair Removal`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/photo-rejuvenation-carbon`,onClick:e=>m(e,`photo-rejuvenation-carbon`),children:`Photo Rejuvenation`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/tattoo-removal`,onClick:e=>m(e,`tattoo-removal`),children:`Tattoo Removal`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/skin-tags-mole-removal`,onClick:e=>m(e,`skin-tags-mole-removal`),children:`Skin Tags / Mole Removal`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/laser-treatments`,onClick:e=>m(e,`laser-treatments`),children:`Laser Treatments`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/scar-reduction`,onClick:e=>m(e,`scar-reduction`),children:`Scar Reduction`})})]})]})]})]}),(0,K.jsx)(`a`,{href:`/contact`,onClick:e=>p(e,`contact`),children:`Contact Us`})]}),(0,K.jsx)(`button`,{className:`theme-toggle-btn desktop-toggle`,onClick:f,"aria-label":`Toggle Theme`,children:l===`light`?(0,K.jsx)(T,{size:18}):(0,K.jsx)(S,{size:18})}),(0,K.jsxs)(`div`,{className:`header-actions`,children:[(0,K.jsx)(`button`,{className:`theme-toggle-btn mobile-toggle`,onClick:f,"aria-label":`Toggle Theme`,children:l===`light`?(0,K.jsx)(T,{size:20}):(0,K.jsx)(S,{size:20})}),(0,K.jsxs)(`a`,{href:`tel:+919136611998`,className:`phone-widget`,children:[(0,K.jsx)(`div`,{className:`phone-icon-circle`,children:(0,K.jsx)(w,{size:16})}),(0,K.jsxs)(`div`,{className:`phone-text`,children:[(0,K.jsx)(`span`,{className:`phone-label`,children:`Call Doctor`}),(0,K.jsx)(`span`,{className:`phone-number`,children:`+91 91366 11998`})]})]}),(0,K.jsxs)(`button`,{className:`btn btn-primary appointment-btn`,onClick:e,children:[(0,K.jsx)(y,{size:16,style:{marginRight:`8px`}}),`Appointment`]}),(0,K.jsx)(`button`,{className:`mobile-menu-toggle`,onClick:()=>r(!n),children:n?(0,K.jsx)(A,{size:24}):(0,K.jsx)(ee,{size:24})})]})]}),(0,K.jsxs)(`div`,{className:`mobile-drawer ${n?`active`:``}`,children:[(0,K.jsx)(`button`,{className:`mobile-drawer-close`,onClick:()=>r(!1),children:(0,K.jsx)(A,{size:24})}),(0,K.jsxs)(`nav`,{className:`mobile-nav-links`,children:[(0,K.jsx)(`a`,{href:`/`,onClick:e=>p(e,`hero`),children:`Home`}),(0,K.jsx)(`a`,{href:`/about`,onClick:e=>p(e,`about`),children:`About Us`}),(0,K.jsxs)(`div`,{className:`mobile-services-accordion`,children:[(0,K.jsxs)(`button`,{className:`mobile-services-trigger`,onClick:()=>c(!s),children:[`Services `,(0,K.jsx)(N,{size:18,style:{transform:s?`rotate(180deg)`:`rotate(0)`}})]}),(0,K.jsxs)(`div`,{className:`mobile-services-content ${s?`expanded`:``}`,style:{maxHeight:s?`450px`:`0`,overflowY:`auto`},children:[(0,K.jsx)(`a`,{href:`/services/skin-rejuvenation`,onClick:e=>m(e,`skin-rejuvenation`),children:`Skin Rejuvenation`}),(0,K.jsx)(`a`,{href:`/services/acne-management`,onClick:e=>m(e,`acne-management`),children:`Acne Management`}),(0,K.jsx)(`a`,{href:`/services/pigmentation-melasma`,onClick:e=>m(e,`pigmentation-melasma`),children:`Pigmentation & Melasma`}),(0,K.jsx)(`a`,{href:`/services/chemical-peel`,onClick:e=>m(e,`chemical-peel`),children:`Chemical Peel`}),(0,K.jsx)(`a`,{href:`/services/open-pores-microneedling`,onClick:e=>m(e,`open-pores-microneedling`),children:`Open Pores / Micro-Needling`}),(0,K.jsx)(`a`,{href:`/services/mesotherapy`,onClick:e=>m(e,`mesotherapy`),children:`Mesotherapy`}),(0,K.jsx)(`a`,{href:`/services/dark-spots-freckles`,onClick:e=>m(e,`dark-spots-freckles`),children:`Dark Spots / Freckles`}),(0,K.jsx)(`a`,{href:`/services/skin-brightening`,onClick:e=>m(e,`skin-brightening`),children:`Skin Brightening`}),(0,K.jsx)(`a`,{href:`/services/anti-aging-treatment`,onClick:e=>m(e,`anti-aging-treatment`),children:`Anti-Aging Treatment`}),(0,K.jsx)(`a`,{href:`/services/glutathione-iv`,onClick:e=>m(e,`glutathione-iv`),children:`Glutathione IV`}),(0,K.jsx)(`a`,{href:`/services/face-lift-non-invasive`,onClick:e=>m(e,`face-lift-non-invasive`),children:`Face Lift (Non-Invasive)`}),(0,K.jsx)(`a`,{href:`/services/exsosomes-skin`,onClick:e=>m(e,`exsosomes-skin`),children:`Exsosomes for skin`}),(0,K.jsx)(`a`,{href:`/services/prp-gfc-therapy`,onClick:e=>m(e,`prp-gfc-therapy`),children:`PRP / GFC Therapy`}),(0,K.jsx)(`a`,{href:`/services/hair-growth-treatment`,onClick:e=>m(e,`hair-growth-treatment`),children:`Hair Growth / Alopecia`}),(0,K.jsx)(`a`,{href:`/services/dandruff-treatment`,onClick:e=>m(e,`dandruff-treatment`),children:`Dandruff Treatment`}),(0,K.jsx)(`a`,{href:`/services/exsosomes-hair`,onClick:e=>m(e,`exsosomes-hair`),children:`Exsosomes for hair`}),(0,K.jsx)(`a`,{href:`/services/laser-hair-removal`,onClick:e=>m(e,`laser-hair-removal`),children:`Laser Hair Removal`}),(0,K.jsx)(`a`,{href:`/services/photo-rejuvenation-carbon`,onClick:e=>m(e,`photo-rejuvenation-carbon`),children:`Photo Rejuvenation`}),(0,K.jsx)(`a`,{href:`/services/tattoo-removal`,onClick:e=>m(e,`tattoo-removal`),children:`Tattoo Removal`}),(0,K.jsx)(`a`,{href:`/services/skin-tags-mole-removal`,onClick:e=>m(e,`skin-tags-mole-removal`),children:`Skin Tags / Mole Removal`}),(0,K.jsx)(`a`,{href:`/services/laser-treatments`,onClick:e=>m(e,`laser-treatments`),children:`Laser Treatments`}),(0,K.jsx)(`a`,{href:`/services/scar-reduction`,onClick:e=>m(e,`scar-reduction`),children:`Scar Reduction`})]})]}),(0,K.jsx)(`a`,{href:`/contact`,onClick:e=>p(e,`contact`),children:`Contact Us`}),(0,K.jsxs)(`div`,{className:`mobile-actions-wrapper`,children:[(0,K.jsxs)(`a`,{href:`tel:+919136611998`,className:`phone-widget mobile-phone`,children:[(0,K.jsx)(w,{size:18}),(0,K.jsx)(`span`,{children:`+91 91366 11998`})]}),(0,K.jsx)(`button`,{className:`btn btn-primary w-full`,onClick:()=>{r(!1),e()},children:`Book Appointment`})]})]})]}),(0,K.jsx)(`style`,{children:`
        .fixed-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: all 0.4s ease;
          padding: 0.4rem 0;
        }
        .fixed-header.scrolled {
          background: var(--bg-header-scrolled);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          padding: 0.2rem 0;
          box-shadow: var(--shadow-sm);
        }
        .header-container {
          display: grid;
          grid-template-columns: auto 1fr auto 1fr auto;
          align-items: center;
          width: 100%;
          padding: 0 4rem;
        }
        .logo-area {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 0.8rem;
          justify-self: start;
          padding-left: 0;
          grid-column: 1;
        }
        .logo-img-tag {
          height: 75px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .logo-img-tag:hover {
          transform: scale(1.02);
        }
        
        .desktop-nav {
          display: flex;
          gap: 2.5rem;
          justify-self: center;
          grid-column: 3;
          align-items: center;
        }
        .desktop-nav a, .desktop-nav .services-nav-link {
          text-decoration: none;
          color: var(--text-dark);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .desktop-nav a::after, .desktop-nav .services-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        .desktop-nav a:hover::after, .desktop-nav .services-nav-link:hover::after {
          width: 100%;
        }
        .desktop-nav a:hover, .desktop-nav .services-nav-link:hover {
          color: var(--primary);
        }

        .services-nav-link .chevron {
          transition: transform 0.3s ease;
        }
        .nav-item-services:hover .services-nav-link .chevron {
          transform: rotate(180deg);
        }

        /* Mega Menu Dropdown Setup */
        .nav-item-services {
          /* Removed position: relative to allow centering relative to the screen */
        }
        .mega-menu-wrapper {
          position: absolute;
          top: 70%;
          left: 12.5%;
          transform: translateX(-50%) translateY(15px);
          width: 960px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          box-shadow: var(--shadow-lg);
          padding: 2.2rem;
          display: none;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-item-services:hover .mega-menu-wrapper {
          display: grid;
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .mega-menu-column h5 {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .mega-menu-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .mega-menu-column ul li a {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          color: var(--text-dark);
          text-decoration: none;
          transition: all 0.2s ease;
          padding: 0.1rem 0;
          display: block;
          font-weight: 400;
        }
        .mega-menu-column ul li a::after {
          display: none;
        }
        .mega-menu-column ul li a:hover {
          color: var(--primary);
          transform: translateX(4px);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          justify-self: end;
          justify-content: flex-end;
          width: auto;
          grid-column: 5;
        }
        .phone-widget {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: var(--text-dark);
        }
        .phone-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(221, 149, 137, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .phone-widget:hover .phone-icon-circle {
          background: var(--primary);
          color: white;
        }
        .phone-text {
          display: flex;
          flex-direction: column;
        }
        .phone-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .phone-number {
          font-size: 0.85rem;
          font-weight: 600;
        }

        .theme-toggle-btn {
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .theme-toggle-btn:hover {
          background-color: rgba(221, 149, 137, 0.1);
          color: var(--primary);
        }

        .desktop-toggle {
          display: flex;
          align-self: center;
          grid-column: 4;
          justify-self: center;
        }

        .mobile-toggle {
          display: none;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
        }

        /* Mobile Menu Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 85%;
          max-width: 400px;
          height: 100vh;
          background: var(--bg-secondary);
          z-index: 999;
          box-shadow: -4px 0 20px rgba(0,0,0,0.05);
          transition: right 0.4s ease;
          padding: 6rem 2rem 2rem 2rem;
          border-left: 1px solid var(--border-color);
          overflow-y: auto;
        }
        .mobile-drawer.active {
          right: 0;
        }
        .mobile-drawer-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }
        .mobile-drawer-close:hover {
          background-color: rgba(0,0,0,0.05);
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .mobile-nav-links a {
          text-decoration: none;
          color: var(--text-dark);
          font-size: 1.15rem;
          font-weight: 500;
        }

        .mobile-services-accordion {
          display: flex;
          flex-direction: column;
        }
        .mobile-services-trigger {
          background: none;
          border: none;
          color: var(--text-dark);
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 500;
          text-align: left;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          width: 100%;
        }
        .mobile-services-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding-left: 1rem;
        }
        .mobile-services-content.expanded {
          max-height: 500px;
          margin-top: 1rem;
        }
        .mobile-services-content a {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 400;
        }
        .view-all-mobile {
          color: var(--primary) !important;
          font-weight: 500 !important;
          margin-top: 0.2rem;
        }

        .mobile-actions-wrapper {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .mobile-phone {
          justify-content: center;
          padding: 0.8rem;
          border: 1px dashed var(--border-color);
          border-radius: 4px;
        }
        .w-full {
          width: 100%;
        }

        @media (max-width: 1200px) {
          .mega-menu-wrapper {
            width: 800px;
          }
        }

        @media (max-width: 1024px) {
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1.5rem;
          }
          .logo-area {
            padding-left: 0;
          }
          .desktop-nav, .phone-widget {
            display: none;
          }
          .desktop-toggle {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
          .mobile-menu-toggle {
            display: block;
          }
          .appointment-btn {
            display: none;
          }
        }
      `})]})}function J({children:e,range:t=35,scale:n=1.05,className:r=``,...i}){let a=(0,W.useRef)(null),[o,s]=(0,W.useState)({x:0,y:0});return(0,K.jsx)(m.div,{ref:a,onMouseMove:e=>{if(!a.current)return;let{clientX:n,clientY:r}=e,{left:i,top:o,width:c,height:l}=a.current.getBoundingClientRect(),u=i+c/2,d=o+l/2,f=n-u,p=r-d,m=Math.hypot(f,p);if(m<t){let e=(t-m)/t;s({x:f*e*.4,y:p*e*.4})}else s({x:0,y:0})},onMouseLeave:()=>{s({x:0,y:0})},animate:{x:o.x,y:o.y},whileHover:{scale:n},transition:{type:`spring`,stiffness:150,damping:15,mass:.1},className:`magnetic-container ${r}`,style:{display:`inline-block`},...i,children:e})}I.registerPlugin(L);function Y({onBookClick:e}){let t=(0,W.useRef)(null),n=(0,W.useRef)(null),r=(0,W.useRef)(null),i=`Aesthéva Is Professional Care for Healthy, Radiant Skin`.split(` `),[a,o]=(0,W.useState)(``);return(0,W.useEffect)(()=>{let e=0;o(``);let t=setInterval(()=>{o(t=>t+`Expert-led skin, hair, and laser treatments tailored to your unique needs, helping you look refreshed, confident, and naturally beautiful.`.charAt(e)),e++,e>=138&&clearInterval(t)},25);return()=>clearInterval(t)},[]),F(()=>{let e=n.current.querySelectorAll(`.char`);I.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.02,ease:`power4.out`,delay:.2}),I.to(r.current,{y:100,ease:`none`,scrollTrigger:{trigger:t.current,start:`top top`,end:`bottom top`,scrub:!0}}),I.to(t.current.querySelector(`.star1`),{y:-60,rotate:45,ease:`none`,scrollTrigger:{trigger:t.current,start:`top top`,end:`bottom top`,scrub:!0}}),I.to(t.current.querySelector(`.star2`),{y:-120,rotate:-45,ease:`none`,scrollTrigger:{trigger:t.current,start:`top top`,end:`bottom top`,scrub:!0}})},{scope:t}),(0,K.jsxs)(`section`,{id:`hero`,className:`hero-banner style-1`,ref:t,children:[(0,K.jsx)(`div`,{className:`container`,children:(0,K.jsxs)(`div`,{className:`inner-wrapper`,children:[(0,K.jsxs)(`div`,{className:`row align-items-center h-100`,children:[(0,K.jsx)(`div`,{className:`col-md-6`,children:(0,K.jsxs)(`div`,{className:`hero-content`,children:[(0,K.jsx)(`h1`,{className:`title`,ref:n,children:i.map((e,t)=>(0,K.jsx)(`span`,{style:{display:`inline-block`,whiteSpace:`nowrap`,marginRight:`0.3em`},className:`word`,children:e.split(``).map((e,t)=>(0,K.jsx)(`span`,{style:{display:`inline-block`},className:`char`,children:e},t))},t))}),(0,K.jsxs)(`div`,{className:`content-bx style-2 secondary m-b40`,children:[a,(0,K.jsx)(`span`,{className:`typewriter-cursor`,children:`|`})]}),(0,K.jsx)(`div`,{className:`d-flex btn-wrapper`,children:(0,K.jsx)(J,{children:(0,K.jsxs)(`button`,{onClick:e,className:`btn btn-lg btn-icon btn-pill`,children:[`Appointment`,(0,K.jsx)(`span`,{className:`right-icon`,children:(0,K.jsx)(b,{size:18,style:{marginLeft:`8px`}})})]})})})]})}),(0,K.jsx)(`div`,{className:`col-md-6 align-self-end img-column`,children:(0,K.jsx)(`div`,{className:`hero-thumbnail`,style:{overflow:`hidden`},children:(0,K.jsx)(`img`,{ref:r,className:`thumbnail`,src:`/hero-banner.png`,alt:`Aesthéva Skin Clinic`,style:{willChange:`transform`}})})})]}),(0,K.jsx)(`svg`,{className:`shape-star star1`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsx)(`path`,{d:`M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z`,fill:`var(--primary)`})}),(0,K.jsx)(`svg`,{className:`shape-star star2`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsx)(`path`,{d:`M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z`,fill:`var(--primary)`})})]})}),(0,K.jsxs)(`div`,{className:`widget-rating-right`,children:[(0,K.jsxs)(`ul`,{className:`star-list`,children:[(0,K.jsx)(`li`,{children:(0,K.jsx)(O,{size:12,fill:`var(--primary)`,stroke:`none`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(O,{size:12,fill:`var(--primary)`,stroke:`none`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(O,{size:12,fill:`var(--primary)`,stroke:`none`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(O,{size:12,fill:`var(--primary)`,stroke:`none`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(O,{size:12,fill:`var(--primary)`,stroke:`none`})})]}),(0,K.jsx)(`span`,{className:`rating`,children:`(4.8)`}),(0,K.jsx)(`span`,{className:`text`,children:`200+ ratings on google`})]}),(0,K.jsx)(`style`,{children:`
        .hero-content .title .char {
          color: var(--text-dark);
          -webkit-text-fill-color: var(--text-dark) !important;
        }
        .typewriter-cursor {
          display: inline-block;
          font-weight: 200;
          color: var(--primary);
          animation: blink 0.75s step-end infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          from, to { color: transparent }
          50% { color: var(--primary); }
        }
        .hero-banner {
          position: relative;
          padding: 9.5rem 0 0 0;
          background: var(--bg-primary);
          overflow: hidden;
        }
        .inner-wrapper {
          position: relative;
          z-index: 2;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }
        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }
        .hero-content {
          padding-right: 2rem;
          margin-bottom: 5.5rem;
        }
        
        .hero-content .title {
          font-size: 4.2rem;
          font-weight: 700;
          line-height: 1.15;
          color: var(--text-dark);
          margin-bottom: 2rem;
        }
        
        .content-bx {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          border-left: 4px solid var(--primary);
          padding-left: 1.2rem;
          max-width: 90%;
        }
        
        .btn-wrapper {
          display: flex;
          gap: 1rem;
        }
        
        .btn-pill {
          background: var(--primary-gradient);
          color: white;
          border-radius: 50px;
          padding: 0.9rem 2.2rem;
          font-weight: 500;
          font-size: 1.05rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }
        .btn-pill:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        
        .hero-thumbnail {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          height: 100%;
        }
        .thumbnail {
          width: 100%;
          max-width: 550px;
          height: auto;
          /* Removed border and border-radius completely to match frameless look */
          object-fit: cover;
          display: block;
        }
        
        /* Floating right rating */
        .widget-rating-right {
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column-reverse; /* To read bottom-to-top when rotated */
          align-items: center;
          background: var(--bg-secondary);
          padding: 1rem 0.6rem;
          border-radius: 50px;
          box-shadow: var(--shadow-md);
          z-index: 10;
        }
        .widget-rating-right .star-list {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 4px;
        }
        .widget-rating-right .rating {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--primary);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          margin-bottom: 0.5rem;
        }
        .widget-rating-right .text {
          font-size: 0.8rem;
          color: var(--text-muted);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          margin-bottom: 0.8rem;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        /* Star shapes */
        .shape-star {
          position: absolute;
          width: 30px;
          height: 30px;
          z-index: 1;
        }
        .star1 {
          top: 10%;
          left: 55%;
        }
        .star2 {
          top: 45%;
          right: 15%;
        }

        @media (max-width: 1024px) {
          .hero-banner {
            padding: 8rem 0 0 0;
          }
          .hero-content .title {
            font-size: 3.2rem;
          }
          .widget-rating-right {
            display: none; /* Hide on smaller screens to save space */
          }
        }
        @media (max-width: 768px) {
          .col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .hero-content {
            padding-right: 0;
            margin-bottom: 3rem;
          }
          .hero-content .title {
            font-size: 2.8rem;
          }
          .hero-thumbnail {
            justify-content: center;
          }
          .thumbnail {
            max-width: 90%;
          }
          .star1 { left: 80%; }
          .star2 { display: none; }
        }
        @media (max-width: 480px) {
          .hero-content .title {
            font-size: 2.2rem;
          }
        }
      `})]})}I.registerPlugin(L);function ne(){let e=(0,W.useRef)(null);return F(()=>{e.current.querySelectorAll(`.stat-number-val`).forEach(e=>{let t=parseFloat(e.getAttribute(`data-target`)),n=parseInt(e.getAttribute(`data-decimals`)||`0`),r={val:0};I.to(r,{val:t,duration:2,ease:`power3.out`,scrollTrigger:{trigger:e,start:`top 85%`,toggleActions:`play none none none`},onUpdate:()=>{e.textContent=r.val.toFixed(n)}})})},{scope:e}),(0,K.jsxs)(`section`,{className:`stats-strip`,ref:e,children:[(0,K.jsx)(`div`,{className:`container`,children:(0,K.jsx)(`div`,{className:`stats-grid`,children:[{value:10,suffix:`+`,label:`Years of Clinical Experience`},{value:22,suffix:`+`,label:`Specialist Treatments`},{value:5e3,suffix:`+`,label:`Happy Patients`},{value:4.9,suffix:`★`,decimals:1,label:`Google Rating`}].map((e,t)=>(0,K.jsxs)(`div`,{className:`stat-item`,children:[(0,K.jsxs)(`span`,{className:`stat-number`,children:[(0,K.jsx)(`span`,{className:`stat-number-val`,"data-target":e.value,"data-decimals":e.decimals||0,children:`0`}),e.suffix]}),(0,K.jsx)(`span`,{className:`stat-label`,children:e.label})]},t))})}),(0,K.jsx)(`style`,{children:`
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
      `})]})}function X(){let e=[`Skincare`,`Haircare`,`Laser Treatments`,`Aesthetic Procedures`,`Body Care`,`Wellness`];return(0,K.jsx)(`div`,{className:`marquee-container`,children:(0,K.jsx)(`div`,{className:`marquee-content`,children:[...e,...e,...e,...e].map((e,t)=>(0,K.jsxs)(`div`,{className:`marquee-item`,children:[e,` `,(0,K.jsx)(`span`,{children:`•`})]},t))})})}function Z({children:e,className:t=``,style:n={},...r}){let i=(0,W.useRef)(null),[a,o]=(0,W.useState)(0),[s,c]=(0,W.useState)(0);return(0,K.jsx)(m.div,{ref:i,onMouseMove:e=>{if(!i.current)return;let{clientX:t,clientY:n}=e,{left:r,top:a,width:s,height:l}=i.current.getBoundingClientRect(),u=r+s/2,d=a+l/2,f=t-u,p=n-d,m=f/(s/2);o(-(p/(l/2))*12),c(m*12)},onMouseLeave:()=>{o(0),c(0)},animate:{rotateX:a,rotateY:s},transition:{type:`spring`,stiffness:150,damping:20},style:{transformStyle:`preserve-3d`,perspective:1e3,...n},className:t,...r,children:e})}function re({onBookClick:e}){return(0,K.jsxs)(`section`,{className:`hp-about-section section-padding`,children:[(0,K.jsx)(`div`,{className:`container`,children:(0,K.jsxs)(`div`,{className:`hp-about-grid`,children:[(0,K.jsx)(`div`,{className:`hp-img-col`,children:(0,K.jsxs)(Z,{className:`hp-img-frame`,children:[(0,K.jsx)(`img`,{src:`/dr-ketaki.jpeg`,alt:`Dr. Ketaki — Aesthéva Clinic`,className:`hp-doctor-img`,loading:`lazy`}),(0,K.jsx)(`div`,{className:`hp-deco-bracket hp-deco-tl`}),(0,K.jsx)(`div`,{className:`hp-deco-bracket hp-deco-br`}),(0,K.jsx)(`span`,{className:`hp-deco-star`,children:`✦`})]})}),(0,K.jsxs)(`div`,{className:`hp-content-col`,children:[(0,K.jsx)(`span`,{className:`section-subtitle`,children:`ABOUT THE CLINIC`}),(0,K.jsx)(`h2`,{className:`hp-about-heading`,children:`About Aesthéva Clinic`}),(0,K.jsx)(`p`,{className:`hp-about-para`,children:`Aesthéva is a doctor-led skin, hair, and aesthetic clinic in Navi Mumbai, dedicated to delivering advanced, evidence-based treatments in a comfortable and professional setting. Our clinic combines medical expertise with modern technology to provide effective solutions for a wide range of skin, hair, and aesthetic concerns.`}),(0,K.jsx)(`p`,{className:`hp-about-para hp-muted`,children:`At Aesthéva, every patient receives personalised care and a treatment plan designed around their unique needs and goals. We believe in enhancing natural beauty while prioritising long-term skin and hair health. From the initial consultation to post-treatment care, our approach is transparent, ethical, and focused on achieving safe, natural-looking results.`}),(0,K.jsx)(`div`,{className:`hp-features-grid`,children:[{icon:(0,K.jsx)(C,{size:18}),title:`Doctor-Led Expertise`,desc:`Professional care backed by medical knowledge`},{icon:(0,K.jsx)(te,{size:18}),title:`Advanced Technology`,desc:`Modern treatments for safe and effective outcomes`},{icon:(0,K.jsx)(D,{size:18}),title:`Personalised Care`,desc:`Treatment plans tailored to individual needs`},{icon:(0,K.jsx)(x,{size:18}),title:`Ethical & Transparent`,desc:`Honest guidance and patient-first care`}].map((e,t)=>(0,K.jsxs)(Z,{className:`hp-feature-card`,children:[(0,K.jsx)(`div`,{className:`hp-feature-icon`,children:e.icon}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`h6`,{className:`hp-feature-title`,children:e.title}),(0,K.jsx)(`p`,{className:`hp-feature-desc`,children:e.desc})]})]},t))}),(0,K.jsx)(`div`,{className:`hp-tags-row`,children:[`Skin Treatments`,`Hair Treatments`,`Laser Treatments`,`Aesthetic Procedures`].map((e,t)=>(0,K.jsxs)(`span`,{className:`hp-tag`,children:[(0,K.jsx)(`span`,{className:`hp-tag-dot`,children:`✦`}),` `,e]},t))})]})]})}),(0,K.jsx)(`style`,{children:`
        .hp-about-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .hp-about-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 5rem;
          align-items: center;
        }

        /* ── Image column ── */
        .hp-img-col {
          position: relative;
        }
        .hp-img-frame {
          position: relative;
          border-radius: 16px 16px 80px 16px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 9/16;
          width: 100%;
          background: var(--bg-primary);
        }
        .hp-doctor-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hp-deco-bracket {
          position: absolute;
          width: 42px;
          height: 42px;
          border-color: var(--primary);
          border-style: solid;
          z-index: 2;
        }
        .hp-deco-tl {
          top: -12px;
          left: -12px;
          border-width: 3px 0 0 3px;
          border-radius: 4px 0 0 0;
        }
        .hp-deco-br {
          bottom: -12px;
          right: -12px;
          border-width: 0 3px 3px 0;
          border-radius: 0 0 4px 0;
        }
        .hp-deco-star {
          position: absolute;
          bottom: -24px;
          left: 14px;
          color: var(--primary);
          font-size: 1rem;
          opacity: 0.7;
          z-index: 2;
        }

        /* ── Content column ── */
        .hp-content-col {
          display: flex;
          flex-direction: column;
        }
        .hp-about-heading {
          font-size: 2.4rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-top: 0.5rem;
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }
        .hp-about-para {
          font-size: 0.97rem;
          line-height: 1.75;
          color: var(--text-dark);
          margin-bottom: 0.85rem;
        }
        .hp-about-para.hp-muted {
          color: var(--text-muted);
          margin-bottom: 1.8rem;
        }

        /* Feature cards 2x2 */
        .hp-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem;
          margin-bottom: 1.8rem;
        }
        .hp-feature-card {
          display: flex;
          gap: 0.7rem;
          align-items: flex-start;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 1rem 1.1rem;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .hp-feature-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }
        .hp-feature-icon {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(221, 150, 138, 0.12);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }
        .hp-feature-card:hover .hp-feature-icon {
          background: var(--primary);
          color: white;
        }
        .hp-feature-title {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.2rem;
        }
        .hp-feature-desc {
          font-size: 0.76rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Tag pills */
        .hp-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }
        .hp-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          border: 1px solid var(--border-color);
          border-radius: 50px;
          padding: 0.3rem 0.85rem;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-muted);
          background: var(--bg-primary);
          transition: all 0.2s ease;
          cursor: default;
        }
        .hp-tag:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .hp-tag-dot {
          font-size: 0.5rem;
          color: var(--primary);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hp-about-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .hp-img-col {
            max-width: 320px;
            margin: 0 auto;
            width: 100%;
          }
          .hp-about-heading {
            font-size: 2rem;
          }
        }
        @media (max-width: 600px) {
          .hp-features-grid {
            grid-template-columns: 1fr;
          }
          .hp-about-heading {
            font-size: 1.75rem;
          }
        }
      `})]})}I.registerPlugin(L);function ie(){let e=(0,W.useRef)(null);return F(()=>{I.fromTo(e.current,{opacity:0,scale:.95,y:35},{opacity:1,scale:1,y:0,duration:.8,ease:`power3.out`,scrollTrigger:{trigger:e.current,start:`top 85%`,toggleActions:`play none none none`}})},{scope:e}),(0,K.jsxs)(`section`,{className:`testimonials-section section-padding`,children:[(0,K.jsxs)(`div`,{className:`container text-center`,children:[(0,K.jsxs)(`div`,{className:`section-title-wrapper`,children:[(0,K.jsx)(`span`,{className:`section-subtitle`,children:`TESTIMONIALS`}),(0,K.jsx)(`h2`,{className:`section-title`,children:`What Our Patients Say`}),(0,K.jsx)(`p`,{className:`section-description`,children:`Real experiences from individuals who trusted Aesthéva for their skin and hair transformations.`})]}),(0,K.jsxs)(`div`,{className:`testimonial-card`,ref:e,children:[(0,K.jsxs)(`div`,{className:`testimonial-stars`,children:[(0,K.jsx)(O,{size:18,fill:`#FFC107`,stroke:`none`}),(0,K.jsx)(O,{size:18,fill:`#FFC107`,stroke:`none`}),(0,K.jsx)(O,{size:18,fill:`#FFC107`,stroke:`none`}),(0,K.jsx)(O,{size:18,fill:`#FFC107`,stroke:`none`}),(0,K.jsx)(O,{size:18,fill:`#FFC107`,stroke:`none`})]}),(0,K.jsx)(`blockquote`,{className:`testimonial-quote`,children:`"I took a customized skin rejuvenation and scar treatment package at Aesthéva Clinic under Dr. Ketaki. Over four months, I've seen tremendous improvement in my active acne, scar texture, and overall skin glow. The results are visible, natural, and lasting. Highly recommended clinic for authentic skin care!"`}),(0,K.jsxs)(`div`,{className:`testimonial-author`,children:[(0,K.jsx)(`cite`,{className:`author-name`,children:`Dr. Aishwarya Gawande`}),(0,K.jsx)(`span`,{className:`author-status`,children:`Verified Patient`})]})]})]}),(0,K.jsx)(`style`,{children:`
        .testimonials-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .testimonial-card {
          max-width: 800px;
          margin: 0 auto;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 3.5rem;
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
        }
        .testimonial-stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 1.5rem;
        }
        .testimonial-quote {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-dark);
          margin-bottom: 2rem;
          font-style: italic;
        }
        .testimonial-author {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .author-name {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-dark);
          font-style: normal;
        }
        .author-status {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 2px;
        }
        
        @media (max-width: 768px) {
          .testimonial-card {
            padding: 2.2rem 1.5rem;
          }
          .testimonial-quote {
            font-size: 1.1rem;
          }
        }
      `})]})}function ae(){let e=a();t();let n=()=>{window.scrollTo({top:0,behavior:`smooth`})},r=(t,n)=>{t.preventDefault(),n===`hero`?(e(`/`),window.scrollTo({top:0,behavior:`smooth`})):n===`about`?(e(`/about`),window.scrollTo({top:0,behavior:`smooth`})):n===`contact`&&(e(`/contact`),window.scrollTo({top:0,behavior:`smooth`}))},i=(t,n)=>{t.preventDefault(),e(n),window.scrollTo({top:0,behavior:`smooth`})};return(0,K.jsxs)(`footer`,{className:`footer-section`,children:[(0,K.jsxs)(`div`,{className:`container footer-container`,children:[(0,K.jsxs)(`div`,{className:`footer-top`,children:[(0,K.jsxs)(`div`,{className:`footer-brand`,children:[(0,K.jsx)(`div`,{className:`footer-logo`,children:(0,K.jsx)(`img`,{src:`/minilogo.jpg`,alt:`Dr. Ketaki's Aesthéva`,style:{height:`50px`,width:`auto`}})}),(0,K.jsx)(`p`,{className:`footer-tagline`,children:`Renew Skin. Reveal You`}),(0,K.jsx)(`p`,{className:`footer-description`,children:`Dermatologist-led, client-focused clinic for advanced skin, hair, and laser aesthetic solutions.`}),(0,K.jsxs)(`div`,{className:`footer-socials`,children:[(0,K.jsx)(`a`,{href:`https://instagram.com/dr_ketakis_aestheva`,target:`_blank`,rel:`noreferrer`,className:`social-icon`,"aria-label":`Instagram`,children:(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:18,height:18,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,K.jsx)(`rect`,{width:`20`,height:`20`,x:`2`,y:`2`,rx:`5`,ry:`5`}),(0,K.jsx)(`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`}),(0,K.jsx)(`line`,{x1:`17.5`,x2:`17.51`,y1:`6.5`,y2:`6.5`})]})}),(0,K.jsx)(`a`,{href:`https://linkedin.com`,target:`_blank`,rel:`noreferrer`,className:`social-icon`,"aria-label":`LinkedIn`,children:(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:18,height:18,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,K.jsx)(`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`}),(0,K.jsx)(`rect`,{width:`4`,height:`12`,x:`2`,y:`9`}),(0,K.jsx)(`circle`,{cx:`4`,cy:`4`,r:`2`})]})})]})]}),(0,K.jsxs)(`div`,{className:`footer-links-col`,children:[(0,K.jsx)(`h4`,{className:`footer-heading`,children:`Quick Links`}),(0,K.jsxs)(`ul`,{className:`footer-links`,children:[(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/`,onClick:e=>r(e,`hero`),children:`Home`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/about`,onClick:e=>r(e,`about`),children:`About Us`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/contact`,onClick:e=>r(e,`contact`),children:`Contact Us`})})]})]}),(0,K.jsxs)(`div`,{className:`footer-links-col`,children:[(0,K.jsx)(`h4`,{className:`footer-heading`,children:`Treatments`}),(0,K.jsxs)(`ul`,{className:`footer-links`,children:[(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/skin-rejuvenation`,onClick:e=>i(e,`/services/skin-rejuvenation`),children:`Skin Care`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/anti-aging-treatment`,onClick:e=>i(e,`/services/anti-aging-treatment`),children:`Aesthetic Care`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/prp-gfc-therapy`,onClick:e=>i(e,`/services/prp-gfc-therapy`),children:`Hair Care`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(`a`,{href:`/services/laser-hair-removal`,onClick:e=>i(e,`/services/laser-hair-removal`),children:`Laser Treatments`})})]})]}),(0,K.jsxs)(`div`,{className:`footer-links-col contact-col`,children:[(0,K.jsx)(`h4`,{className:`footer-heading`,children:`Disclaimer`}),(0,K.jsx)(`p`,{className:`disclaimer-text`,children:`The information provided on this website is for educational and general inquiry purposes only. It is not intended to substitute professional medical advice, diagnosis, or clinical treatments.`})]})]}),(0,K.jsxs)(`div`,{className:`footer-bottom`,children:[(0,K.jsxs)(`p`,{className:`copyright-text`,children:[`© `,new Date().getFullYear(),` Dr. Ketaki's Aesthéva Clinic. All rights reserved. Designed for excellence.`]}),(0,K.jsx)(`button`,{className:`back-to-top`,onClick:n,"aria-label":`Back to Top`,children:(0,K.jsx)(M,{size:16})})]})]}),(0,K.jsx)(`style`,{children:`
        .footer-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding: 5rem 0 2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-container {
          display: flex;
          flex-direction: column;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.5rem;
        }
        .footer-logo .logo-monogram {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-light);
          border: 1px solid var(--primary-light);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .footer-logo .logo-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
        }
        .footer-tagline {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--primary-light);
          margin-bottom: 1rem;
        }
        .footer-description {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .footer-socials {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }

        .footer-heading {
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }
        .footer-links {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        .footer-links a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: var(--primary-light);
        }

        .disclaimer-text {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.5;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 2rem;
        }
        .copyright-text {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
        }
        .back-to-top {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-to-top:hover {
          background: var(--primary-light);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column-reverse;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `})]})}var Q=[{id:`skin-rejuvenation`,title:`Skin Rejuvenation`,shortDesc:`Revitalize your skin with customized therapies for a youthful, radiant glow.`,category:`skin`,iconName:`Sparkles`,imageUrl:new URL(`/Aestheva/assets/skinrejuvenation-CwxC8O9W.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 - 60 mins`,downtime:`None to minimal redness`,sessions:`3 - 5 sessions`,interval:`3 - 4 weeks`},fullDesc:`Our Skin Rejuvenation treatments are customized procedures designed to address dullness, uneven texture, and early signs of aging. By using combinations of gentle physical exfoliants, medical-grade serums, and mild light-based stimulation, we trigger natural cellular renewal. This treatment is ideal for anyone looking to restore their natural glow, improve skin hydration, and build a healthy skin barrier under professional supervision.`,benefits:[`Instantly boosts skin radiance and removes superficial dead cells`,`Improves overall skin hydration and elasticity`,`Smoothes out rough textures and minor surface irregularities`,`Stimulates natural skin healing and collagen production`],whatToExpect:{before:`Avoid active skincare ingredients (Retinoids, AHAs, BHAs) for 48 hours before the procedure.`,during:`A multi-step process involving gentle cleansing, exfoliation, hydration infusion, and soothing botanical masks. The sensation is relaxing and completely painless.`,after:`Apply a broad-spectrum sunscreen. Avoid direct sun exposure and heavy makeup for 24 hours.`},faqs:[{q:`Who is this treatment suitable for?`,a:`It is suitable for all skin types, including sensitive skin. We customize the serums and techniques to match your exact skin profile.`},{q:`How soon will I see results?`,a:`A subtle glow and improved smoothness are visible immediately. Long-term texture improvements develop over successive sessions.`}]},{id:`acne-management`,title:`Acne Management`,shortDesc:`Effective dermatologist-guided treatments to clear acne and prevent future breakouts.`,category:`skin`,iconName:`ShieldAlert`,imageUrl:new URL(`/Aestheva/assets/acnemanagement-BzuuE0g1.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 mins`,downtime:`None`,sessions:`4 - 6 sessions`,interval:`2 weeks`},fullDesc:`Acne is a medical condition that requires clinical intervention. Our Acne Management program combines dermatologist-guided topical regimens with targeted in-clinic treatments like comedone extraction, chemical peels, and light-based therapies. We don't just treat active acne; we focus on regulating sebum production, clearing blocked pores, reducing inflammation, and preventing post-acne scarring.`,benefits:[`Reduces active inflammatory acne lesions quickly`,`Controls excess oil production and refines pores`,`Prevents future breakouts by clearing microcomedones`,`Fades post-inflammatory erythema (red spots) and hyperpigmentation`],whatToExpect:{before:`Do not squeeze or pick at active acne. Discontinue exfoliating scrubs 3 days prior.`,during:`A clean medical extraction performed under sterile conditions, followed by anti-inflammatory treatments or blue-light therapy to kill acne-causing bacteria.`,after:`Use only doctor-prescribed gentle cleansers and non-comedogenic moisturizers. Avoid picking skin.`},faqs:[{q:`Will this completely cure my acne?`,a:`Acne management is a combination of clinic treatments and home care. While it controls and clears active acne, maintaining the results requires consistent adherence to the prescribed skincare regimen.`},{q:`Is extraction painful?`,a:`Extraction can cause minor, temporary discomfort, but it is performed with precise medical tools to minimize pain and avoid tissue damage.`}]},{id:`pigmentation-melasma`,title:`Pigmentation & Melasma`,shortDesc:`Even out skin tone and reduce dark patches with safe, proven treatments.`,category:`skin`,iconName:`Layers`,imageUrl:new URL(`/Aestheva/assets/darkspotsfreckles-CFI66rVF.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 - 60 mins`,downtime:`Minimal (slight peeling or redness for 1-2 days)`,sessions:`4 - 8 sessions`,interval:`3 - 4 weeks`},fullDesc:`Hyperpigmentation and Melasma are complex skin concerns caused by hormonal shifts, sun exposure, or inflammation. We approach pigmentation with customized medical treatments including pigment-lightening peels, laser toning (Q-switched Nd:YAG), and specialized topical inhibitors. The goal is to safely down-regulate active melanocytes (pigment-producing cells) without causing rebound hyperpigmentation.`,benefits:[`Fades stubborn patches, sun spots, and melasma plaques`,`Evens out skin tone for a brighter, more uniform complexion`,`Safe for dark skin types under experienced dermatological care`,`Strengthens skin tolerance against future sun damage`],whatToExpect:{before:`Strict sun protection is required. Avoid tanning or outdoor activities for 1 week before treatment.`,during:`Application of targeted depigmenting agents or a gentle laser toning sweep. You may feel a warm, tingling sensation.`,after:`Mandatory daily use of broad-spectrum SPF 50+ sunscreen. Avoid heat, steam rooms, and direct sun exposure.`},faqs:[{q:`Why is melasma so hard to treat?`,a:`Melasma is highly influenced by hormones and UV light. It requires a long-term maintenance approach, combining clinical procedures with daily sunscreen and pigment-regulating creams.`},{q:`Can pigmentation return after treatment?`,a:`Yes, if the skin is exposed to unprotected sun or if hormonal triggers persist. Consistent sun protection is key to maintaining results.`}]},{id:`anti-aging-treatment`,title:`Anti-Aging Treatment`,shortDesc:`Restore firmness and smooth fine lines for naturally youthful skin.`,category:`aesthetic`,iconName:`TrendingDown`,imageUrl:new URL(`/Aestheva/assets/antiagingtreatment-DBJoevwv.jpg`,``+import.meta.url).href,sessionInfo:{duration:`60 mins`,downtime:`1 - 2 days of mild swelling or redness`,sessions:`3 - 5 sessions`,interval:`4 weeks`},fullDesc:`As skin ages, it loses collagen, elastin, and structural volume. Our clinical Anti-Aging treatments restore structural integrity from within. We utilize advanced technologies like Microneedling Radiofrequency (MNRF), collagen-boosting lasers, and medical-grade bio-stimulators to stimulate the skin's natural healing response. This rebuilds the underlying collagen matrix, leading to firmer, smoother, and naturally youthful skin.`,benefits:[`Visibly reduces fine lines, wrinkles, and crow's feet`,`Tightens sagging skin along the jawline and neck`,`Improves skin elasticity, thickness, and bounce`,`Refines skin texture and minimizes age-related pore enlargement`],whatToExpect:{before:`Avoid blood thinners, alcohol, and anti-inflammatory medications for 3 days before treatment to prevent bruising.`,during:`A numbing cream is applied for comfort. The procedure uses targeted energy or fine microneedling, causing a warm or light prickling sensation.`,after:`Keep skin hydrated with prescribed healing balms. Avoid exercise, hot showers, and makeup for 24-48 hours.`},faqs:[{q:`At what age should I start anti-aging treatments?`,a:`Preventative treatments can begin in your late 20s or early 30s, when natural collagen production begins to slow down. However, treatments are effective for all age groups.`},{q:`How long do the results last?`,a:`Because these treatments trigger your body's natural collagen production, the improvements are long-lasting. Periodic maintenance sessions (every 6-12 months) are recommended.`}]},{id:`glutathione-iv`,title:`Glutathione IV`,shortDesc:`Brighten and detoxify your skin from within with antioxidant therapy.`,category:`aesthetic`,iconName:`Droplet`,imageUrl:new URL(`/Aestheva/assets/glutathioneivdrip-CUAhJfO6.jpg`,``+import.meta.url).href,sessionInfo:{duration:`30 mins`,downtime:`None`,sessions:`6 - 10 sessions`,interval:`Weekly or bi-weekly`},fullDesc:`Glutathione is a powerful antioxidant naturally produced by the liver. It plays a critical role in neutralizing free radicals, detoxifying cells, and regulating melanin synthesis. Administered intravenously, our Glutathione IV therapy delivers a pure concentration of glutathione combined with Vitamin C directly into the bloodstream for maximum absorption, resulting in systemic skin brightening, detoxification, and overall cellular vitality.`,benefits:[`Systemic skin brightening and reduction of overall pigmentation`,`Neutralizes oxidative stress and flushes out cellular toxins`,`Boosts energy levels and supports immune function`,`Promotes a healthy, hydrated, and glowing skin tone from head to toe`],whatToExpect:{before:`Stay well-hydrated. Eat a light meal before your session.`,during:`A simple, painless IV drip administered by a certified medical professional in a comfortable, relaxing lounge environment.`,after:`No downtime. You can immediately return to your normal daily activities.`},faqs:[{q:`Is Glutathione IV safe?`,a:`Yes, when administered under professional medical supervision using approved ingredients. We review your medical history beforehand to ensure suitability.`},{q:`How long does it take to see skin brightening?`,a:`Gradual skin tone changes and glow are usually observed after 4 to 6 sessions, depending on individual metabolism and initial pigmentation levels.`}]},{id:`face-lift-non-invasive`,title:`Face Lift (Non-Invasive)`,shortDesc:`Lift and tighten skin without surgery using the latest technology.`,category:`aesthetic`,iconName:`Smile`,imageUrl:new URL(`/Aestheva/assets/facelift-BIF_wxOr.jpg`,``+import.meta.url).href,sessionInfo:{duration:`60 - 90 mins`,downtime:`None`,sessions:`1 - 2 sessions`,interval:`6 months to 1 year`},fullDesc:`Avoid the risks and recovery time of surgical lifts. Our Non-Invasive Face Lift utilizes High-Intensity Focused Ultrasound (HIFU) or advanced multi-polar radiofrequency. These technologies deliver precise thermal energy to the deep SMAS (Superficial Muscular Aponeurotic System) layer of the skin—the same layer addressed in surgical facelifts. This triggers immediate contraction and long-term remodeling of collagen, resulting in a lifted jawline, reduced double chin, and elevated cheeks.`,benefits:[`Lifts and defines the jawline, cheeks, and brow area`,`Reduces sagging skin in the neck (turkey neck) and submental area`,`Completely non-invasive with zero incisions or needles`,`Progressive improvement that peaks 2-3 months post-treatment`],whatToExpect:{before:`Remove all metal jewelry and makeup before the procedure. No special skin prep is needed.`,during:`A conductive gel is applied. The device handpiece is pressed to the skin, delivering pulses of heat. You may feel deep warming or brief pins-and-needles sensations.`,after:`Slight tenderness or temporary redness may occur, which subsides within hours. You can resume work immediately.`},faqs:[{q:`Is it painful?`,a:`Some areas, like the jawline, can feel slightly sensitive or warm, but the procedure is generally well-tolerated. We adjust energy levels to ensure comfort.`},{q:`How long do the lifting results last?`,a:`Results can last between 12 to 18 months, as the newly formed collagen supports the facial structure against gravity.`}]},{id:`exsosomes-skin`,title:`Exsosomes for skin`,shortDesc:`It can help reduce fine lines, wrinkles, and hair loss, revealing smoother, healthier-looking skin and hair.`,category:`aesthetic`,iconName:`Zap`,imageUrl:new URL(`/Aestheva/assets/exosomesforskin-LOtpkrId.jpg`,``+import.meta.url).href,sessionInfo:{duration:`60 mins`,downtime:`12 - 24 hours of mild redness`,sessions:`3 - 5 sessions`,interval:`4 weeks`},fullDesc:`Exsosome therapy is the cutting edge of regenerative aesthetics. Exsosomes are microscopic vesicles released by cells that act as cellular messengers, containing growth factors, signaling peptides, and co-enzymes. When applied to the skin (typically post-microneedling or laser treatment to allow penetration), exosomes signal surrounding cells to repair, regenerate, and produce massive amounts of collagen and elastin, accelerating healing and reversing photo-damage.`,benefits:[`Speeds up skin repair and cuts treatment downtime by 50%`,`Visibly reduces fine lines, wrinkles, and pore size`,`Helps calm inflammatory conditions like rosacea or eczema`,`Significantly improves skin elasticity, firmness, and overall texture`],whatToExpect:{before:`Avoid anti-inflammatory medications. Inform us of any active cold sores.`,during:`First, microneedling is performed to create micro-channels. Then, a highly concentrated, cold-stored exosome serum is massaged into the skin.`,after:`Skin will look flushed, similar to a mild sunburn. Avoid washing the face for 6 hours to allow full absorption of the exosomes.`},faqs:[{q:`What makes exosomes different from PRP?`,a:`While PRP uses growth factors from your own blood, Exsosomes are highly concentrated, purified messenger vesicles containing up to 100x more growth factors and signaling molecules, offering superior regenerative results.`},{q:`Are the exosomes safe?`,a:`Yes. The exosomes used in our clinic are clinical-grade, laboratory-tested, purified, and completely free of cellular DNA, ensuring zero risk of rejection or infection.`}]},{id:`chemical-peel`,title:`Chemical Peel`,shortDesc:`Remove dull, damaged skin and reveal a fresh, healthy layer.`,category:`skin`,iconName:`Sparkles`,imageUrl:new URL(`/Aestheva/assets/chemicalpeel-d53oYjMl.jpg`,``+import.meta.url).href,sessionInfo:{duration:`30 mins`,downtime:`2 - 5 days of mild flaking/dryness`,sessions:`4 - 6 sessions`,interval:`2 - 3 weeks`},fullDesc:`Chemical Peeling is a controlled clinical exfoliation process. By applying precise acidic solutions (such as Glycolic, Salicylic, Lactic, or TCA peels) to the skin, we safely dissolve the intercellular glue holding dead cells together. This causes the old layer to peel away, revealing fresher, smoother, and more evenly pigmented skin underneath while stimulating healthy cellular turnover.`,benefits:[`Clears blocked pores, controls blackheads, and treats active acne`,`Fades dark spots, acne marks, and sun-induced pigmentation`,`Smoothes out dry, rough skin and fine surface lines`,`Improves the penetration and efficacy of your home skincare products`],whatToExpect:{before:`Stop using retinols or harsh scrubs for 3-5 days before the peel.`,during:`The skin is prepped, and the peel solution is applied. You may feel a warm, tingling, or stinging sensation for 3-5 minutes before it is neutralized.`,after:`Skin will feel tight and dry, followed by gentle flaking. Apply moisturizer and sunscreen regularly. Do not peel or scratch dry skin.`},faqs:[{q:`Will my skin literally peel off in sheets?`,a:`No. Modern medical peels are formulated to cause micro-flaking or mild dryness rather than dramatic peeling, allowing you to go about your daily life without embarrassment.`},{q:`Can I get a peel during summer?`,a:`Yes, you can get mild peels in the summer provided you are diligent with sun protection (hats, sunscreen) and avoid direct sunbathing.`}]},{id:`prp-gfc-therapy`,title:`PRP / GFC Therapy`,shortDesc:`Harness your body's growth factors to rejuvenate skin and promote hair growth.`,category:`hair`,iconName:`Activity`,imageUrl:new URL(`/Aestheva/assets/PRPGFCTherapy-BU51Jo0Q.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 mins`,downtime:`None (slight scalp tenderness for 1 day)`,sessions:`4 - 6 sessions`,interval:`4 weeks`},fullDesc:`Platelet-Rich Plasma (PRP) and Growth Factor Concentrate (GFC) therapies are advanced, autologous hair restoration treatments. We draw a small amount of your blood and spin it in a specialized centrifuge to isolate the platelets and growth factors. GFC represents the latest generation, where growth factors are activated and extracted directly from platelets in a cell-free format. When micro-injected into the scalp, these concentrated growth factors revive shrinking hair follicles, extend the growth phase of hair, and increase hair density.`,benefits:[`Triggers natural hair regrowth and increases hair shaft thickness`,`Reduces hair fall and reverses early-stage hair thinning (androgenetic alopecia)`,`100% natural treatment using growth factors extracted from your own blood`,`GFC offers a cell-free, highly concentrated formulation with minimal discomfort`],whatToExpect:{before:`Wash your hair on the morning of the treatment. Avoid taking anti-inflammatory medicines (ibuprofen) for 3 days before.`,during:`A small blood sample is drawn. It is processed to isolate growth factors. The scalp is disinfected and micro-injections are delivered using ultra-fine needles.`,after:`You can wash your hair the next day. Avoid heavy sweating, swimming, or applying hair dyes for 48 hours.`},faqs:[{q:`What is the difference between PRP and GFC?`,a:`PRP contains platelets that release growth factors over time in the scalp, whereas GFC extracts and pre-activates the growth factors in a laboratory tube, delivering a pure, pain-free, and more standardized dose of growth factors.`},{q:`Is the treatment permanent?`,a:`It significantly restores hair growth, but genetics and hormones will continue to affect hair. Maintenance sessions every 4-6 months are recommended to preserve density.`}]},{id:`open-pores-microneedling`,title:`Open Pores / Micro-Needling`,shortDesc:`Refine skin texture and reduce pores for smoother, clearer skin.`,category:`skin`,iconName:`Grid`,imageUrl:new URL(`/Aestheva/assets/microneedling-BOUr18EY.jpg`,``+import.meta.url).href,sessionInfo:{duration:`60 mins`,downtime:`1 - 2 days of pinkness/dryness`,sessions:`3 - 5 sessions`,interval:`4 weeks`},fullDesc:`Enlarged open pores are often caused by loss of skin elasticity and excess sebum. Our Micro-Needling treatment uses sterile, medical-grade fine needles to create thousands of micro-channels in the epidermis. This triggers a controlled healing cascade, stimulating fibroblast cells to produce new collagen and elastin. As the skin plumps up, the physical structure supporting the pores tightens, leading to a visible reduction in pore size and a smoother complexion.`,benefits:[`Visibly shrinks enlarged open pores and refines skin texture`,`Fades superficial acne scars and post-inflammatory marks`,`Stimulates elastin and collagen production for firmer skin`,`Enhances deep absorption of customized skin serums`],whatToExpect:{before:`Discontinue active topicals (retinols, acids) 3 days prior. Avoid sun exposure.`,during:`A topical numbing cream is applied for 40 minutes. The microneedling pen is gently guided over the skin. You will feel a vibrating, light scratchy sensation.`,after:`Skin will look flushed (like a mild sunburn) for 24 hours. Use only hydrating serums, gentle moisturizers, and sunscreen.`},faqs:[{q:`Can microneedling clear deep ice-pick scars?`,a:`It improves them significantly, but deeper scars may require a combination of microneedling with TCA Cross or subcision for optimal results.`},{q:`Will microneedling cause bleeding?`,a:`We target specific clinical depths. Very pinpoint, temporary bleeding can occur but resolves immediately during the treatment.`}]},{id:`mesotherapy`,title:`Mesotherapy`,shortDesc:`Nourish and revitalize skin with vitamin-rich microinjections.`,category:`skin`,iconName:`Sparkles`,imageUrl:new URL(`/Aestheva/assets/mesotherapy-YOZ26PHX.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 mins`,downtime:`None to minimal swelling`,sessions:`4 - 6 sessions`,interval:`2 weeks`},fullDesc:`Mesotherapy is a minimally invasive technique that delivers a customized cocktail of vitamins, minerals, amino acids, coenzymes, and hyaluronic acid directly into the mesoderm (the middle layer of the skin). By bypassing the epidermal barrier, which limits the penetration of normal creams, mesotherapy feeds the skin cells directly, boosting cellular metabolism, promoting circulation, and providing deep, lasting hydration.`,benefits:[`Deeply hydrates and plumps up dry, dehydrated skin`,`Delivers a direct nutritional boost to tired, dull skin cells`,`Improves micro-circulation, giving a fresh, rested appearance`,`Fades fine lines and improves skin tone uniformity`],whatToExpect:{before:`Avoid alcohol and aspirin for 24 hours to minimize the risk of tiny bruises.`,during:`Micro-droplets of active serums are gently injected into the skin using a specialized multi-needle gun or manually with ultra-fine syringes. The discomfort is minimal.`,after:`Avoid washing the face for 4 hours. Normal skincare can be resumed the next day.`},faqs:[{q:`How does Mesotherapy differ from fillers?`,a:`Dermal fillers add volume and change facial contours using thick cross-linked hyaluronic acid. Mesotherapy uses non-cross-linked hyaluronic acid and nutrients to hydrate and nourish the skin without changing volume.`},{q:`Is there any risk of allergic reaction?`,a:`Very rare, as we use certified, high-purity medical cocktails. We review allergies during the initial consultation.`}]},{id:`dark-spots-freckles`,title:`Dark Spots / Freckles`,shortDesc:`Fade pigmentation for an even and luminous complexion.`,category:`skin`,iconName:`Target`,imageUrl:new URL(`/Aestheva/assets/darkspotsfreckles-CFI66rVF.jpg`,``+import.meta.url).href,sessionInfo:{duration:`30 - 45 mins`,downtime:`3 - 5 days (freckles darken slightly before flaking off)`,sessions:`2 - 4 sessions`,interval:`4 weeks`},fullDesc:`Freckles and age spots are localized accumulations of melanin triggered by UV exposure. We treat these spots using advanced, target-specific methods like Q-Switched lasers, intense pulsed light, or spot chemical peeling. The light energy is absorbed selectively by the melanin pigment, breaking it down into tiny particles that are naturally removed by your body's immune system or shed off during skin renewal.`,benefits:[`Selectively targets and removes dark spots without damaging surrounding skin`,`Effectively clears freckles, sun spots, and flat senile lentigines`,`Reveals a clear, unblemished, and uniform complexion`,`Quick sessions with minimal healing downtime`],whatToExpect:{before:`Avoid sun exposure and tanning beds for 2 weeks prior. Use sunscreen daily.`,during:`A laser beam is targeted at the spots. You will feel a snapping sensation (like a small rubber band snap). Cold air or gel is used to cool the skin.`,after:`The treated spots will turn darker and form a thin crust. They will naturally flake off in 4-7 days. Do not pick the crusts.`},faqs:[{q:`Will the freckles come back?`,a:`They can return if the skin is exposed to UV light. Daily broad-spectrum sunscreen and sun avoidance are crucial to preventing recurrence.`},{q:`Is it safe for all skin tones?`,a:`Special care and specific laser settings are required for darker skin tones to prevent post-inflammatory pigment changes. Dr. Ketaki customizes settings for safety.`}]},{id:`skin-brightening`,title:`Skin Brightening`,shortDesc:`Get visibly radiant and glowing skin with safe brightening therapies.`,category:`skin`,iconName:`Sparkles`,imageUrl:new URL(`/Aestheva/assets/skinbrightening-DdXyDlIb.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 mins`,downtime:`None`,sessions:`4 - 6 sessions`,interval:`2 - 3 weeks`},fullDesc:`Skin Brightening at our clinic is focused on health, safety, and natural radiance. Unlike unsafe bleaching products, our treatments utilize advanced medical formulations containing Vitamin C, Glutathione, Licorice extract, and Arbutin. Administered through deep-penetration technologies (like iontophoresis or high-pressure oxygen infusion) or gentle skin-polishing peels, these sessions inhibit excess melanin production and clear away surface build-up.`,benefits:[`Restores natural radiance to dull, fatigued, or sun-damaged skin`,`Lightens dark spots and post-acne marks safely`,`Increases cellular hydration for a plump, healthy look`,`Free from harmful chemicals, hydroquinone, or mercury`],whatToExpect:{before:`No specific prep is required. Suitable as a pre-event glow treatment.`,during:`A relaxing multi-step facial involving gentle skin polishing, application of brightening botanical serums, and infusion using mild micro-currents.`,after:`Apply moisturizer and sunscreen. Enjoy an immediate, healthy glow.`},faqs:[{q:`Is skin brightening the same as skin bleaching?`,a:`No. Bleaching uses harsh chemicals to strip pigment, damaging the skin barrier. Clinical brightening flourishes the skin and gently regulates pigment pathways, maintaining skin health.`},{q:`Can I get this done before a wedding or party?`,a:`Yes, it is an excellent pre-event treatment. We recommend scheduling the session 2-3 days before the event for the best glow.`}]},{id:`hair-growth-treatment`,title:`Hair Growth Treatment / Hair Fall / Alopecia`,shortDesc:`Stimulate natural hair regrowth and strengthen your scalp health.`,category:`hair`,iconName:`TrendingUp`,imageUrl:new URL(`/Aestheva/assets/hairfallalopecia-DdJZHOVF.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 - 60 mins`,downtime:`None`,sessions:`6 - 8 sessions`,interval:`3 - 4 weeks`},fullDesc:`Hair thinning and excessive hair fall (Alopecia) can be caused by genetics, stress, nutritional deficiencies, or hormonal imbalances. Our Hair Growth Treatment program starts with a detailed scalp analysis. We combine medical therapies (like Minoxidil or Finasteride configurations) with advanced in-office treatments, including scalp microneedling, peptide infusions, and low-level laser therapy (LLLT). This comprehensive approach stimulates blood flow, strengthens hair roots, and increases hair density.`,benefits:[`Arrests active hair fall and strengthens weak hair roots`,`Awakens dormant hair follicles, encouraging new hair growth`,`Improves scalp circulation and delivers essential peptides`,`Tailored treatment plans addressing the root cause of thinning`],whatToExpect:{before:`Arrive with a clean, dry scalp. Do not apply hair oils or styling gels.`,during:`Scalp stimulation using a microneedling device or mechanical massage, followed by the application of active growth peptides. LLLT helmet therapy may also be used.`,after:`Do not wash your hair or apply any hair products for 12 hours after the session.`},faqs:[{q:`How long before I see hair regrowth?`,a:`Hair grows slowly. Reduction in hair fall is usually noticed within 4-6 weeks, while new hair growth and increased density become visible after 3-4 months.`},{q:`Is this effective for male pattern baldness?`,a:`Yes, especially in the early to moderate stages (Grade 1 to 4). It helps thicken existing miniaturized hair and delay further recession.`}]},{id:`dandruff-treatment`,title:`Dandruff Treatment`,shortDesc:`Target the root cause of dandruff for a clean, healthy scalp.`,category:`hair`,iconName:`Activity`,imageUrl:new URL(`/Aestheva/assets/dandrufftreatment-BsU-VFlD.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 mins`,downtime:`None`,sessions:`3 - 5 sessions`,interval:`2 weeks`},fullDesc:`Stubborn dandruff (seborrheic dermatitis) is caused by an overgrowth of yeast (Malassezia) on an oily scalp, leading to flaking, itching, and hair fall. Our medical Dandruff Treatment targets the scalp environment. We use salicylic acid scalp peels to dissolve scales, anti-fungal serums to clear yeast, and high-frequency scalp stimulation to oxygenate the hair follicles and regulate sebum production.`,benefits:[`Eliminates scalp flaking, itching, and redness instantly`,`Controls excess scalp sebum production`,`Clears Malassezia yeast overgrowth and restores scalp pH`,`Reduces dandruff-induced hair loss by building a healthy scalp environment`],whatToExpect:{before:`Do not oil your hair for 24 hours prior to the session.`,during:`Application of a gentle exfoliating scalp mask, followed by thorough washing with anti-dandruff formulations, high-frequency stimulation, and soothing scalp tonic application.`,after:`Use the prescribed anti-dandruff shampoo twice weekly at home as instructed.`},faqs:[{q:`Can dandruff cause hair loss?`,a:`Yes, a severely itchy, inflamed scalp and scratching can damage hair roots and lead to temporary shedding. Clearing dandruff helps restore normal hair growth.`},{q:`Will dandruff return after the treatment ends?`,a:`Dandruff can recur if you have a oily scalp type. Periodic maintenance washes and the correct home-use shampoos will keep it under control.`}]},{id:`exsosomes-hair`,title:`Exsosomes for hair`,shortDesc:`Exsosomes treatment uses tiny vesicles to stimulate collagen production, improve skin elasticity, and promote hair growth.`,category:`hair`,iconName:`Zap`,imageUrl:new URL(`/Aestheva/assets/exsosomesforhair-OJXuckAY.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 mins`,downtime:`None (scalp redness for a few hours)`,sessions:`3 - 5 sessions`,interval:`4 weeks`},fullDesc:`For advanced hair thinning, Exsosome therapy offers a powerful regenerative alternative. Exsosomes derived from stem cells contain massive amounts of signaling proteins, growth factors, and micro-RNA. Micro-injected or rolled into the scalp, they act directly on hair follicle stem cells, waking them from the dormant phase (telogen) and pushing them into the active growth phase (anagen), leading to rapid hair thickening.`,benefits:[`Offers up to 10x more growth factor activity compared to traditional PRP`,`Thickens thin, miniaturized hair shafts significantly`,`Reduces inflammation on the scalp, supporting healthy hair growth`,`Completely drug-free, non-surgical hair restoration`],whatToExpect:{before:`Wash hair. Do not take NSAID pain relievers for 3 days.`,during:`A microneedling pen is used to create micro-channels in the thinning areas of the scalp. The sterile exosome solution is applied and massaged into the scalp.`,after:`Avoid washing hair or strenuous exercise for 24 hours. Keep the scalp protected from direct sunlight.`},faqs:[{q:`Is it suitable for women with hair thinning?`,a:`Yes, it is highly effective for female pattern hair loss, which can be difficult to treat with oral medications.`},{q:`How many sessions are needed?`,a:`Most patients see significant thickening in 3 sessions spaced 4 weeks apart. Annual maintenance is recommended.`}]},{id:`laser-hair-removal`,title:`Laser Hair Removal`,shortDesc:`Smooth, hair-free skin with long-lasting laser technology.`,category:`laser`,iconName:`Flame`,imageUrl:new URL(`/Aestheva/assets/laserhairremoval-C89zQjLK.jpg`,``+import.meta.url).href,sessionInfo:{duration:`15 - 90 mins (depending on area)`,downtime:`None (mild redness for a few hours)`,sessions:`6 - 8 sessions`,interval:`4 - 6 weeks`},fullDesc:`Get rid of temporary hair removal methods like shaving, waxing, and epilating. Our clinic uses US-FDA approved Diode and Nd:YAG laser technologies, which are safe for Indian skin types. The laser emitting light energy targets the melanin in hair follicles, heating and destroying the root without harming the surrounding skin. This prevents future hair growth, giving you smooth, stubble-free, and ingrown-free skin.`,benefits:[`Permanently reduces hair growth by up to 90%`,`Prevents painful ingrown hairs, razor bumps, and skin irritation`,`Saves time and money compared to lifetime waxing or shaving`,`Smoothes skin texture and lightens shadowed underarms or bikini lines`],whatToExpect:{before:`Shave the treatment area 24 hours before. Do NOT wax, pluck, or thread for 3 weeks prior.`,during:`A cooling gel is applied, and the laser handpiece is glided over the skin. You will feel a warm sensation with a light prickle (similar to a rubber band snap).`,after:`Apply moisturizing cream and sunscreen. Avoid hot showers, steam, and exercise for 24 hours.`},faqs:[{q:`Is Laser Hair Removal permanent?`,a:`It results in permanent hair reduction. Over time, hormonal changes might trigger fine, light hair regrowth, which can be easily managed with annual touch-up sessions.`},{q:`Does it work on grey or light hair?`,a:`Lasers target the pigment (melanin) in hair. Therefore, it is highly effective on dark hair but less effective on grey, blonde, or white hair.`}]},{id:`photo-rejuvenation-carbon`,title:`Photo Rejuvenation / Carbon Laser`,shortDesc:`Laser-based treatments for youthful, blemish-free, and refreshed skin.`,category:`laser`,iconName:`Zap`,imageUrl:new URL(`/Aestheva/assets/photorejuvenationcarbonlaser-CRbqt-vA.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 mins`,downtime:`None`,sessions:`3 - 5 sessions`,interval:`3 - 4 weeks`},fullDesc:`Often called the 'Hollywood Peel', the Carbon Laser treatment is a state-of-the-art procedure for instant skin refreshing. We apply a layer of liquid carbon to the face, which penetrates deep into the pores, binding to oil, dead skin, and debris. We then sweep a Q-Switched Nd:YAG laser over the skin. The laser energy is highly attracted to the carbon particles, instantly vaporizing them and taking the bound impurities with them while delivering a deep thermal boost to stimulate collagen.`,benefits:[`Instantly deep-cleanses pores, reducing blackheads and oiliness`,`Exfoliates skin, leaving it incredibly soft and smooth`,`Fades superficial pigmentation, sun damage, and acne marks`,`Excellent pre-event treatment with zero downtime`],whatToExpect:{before:`Avoid active skincare acids and direct sun exposure for 3 days.`,during:`The black carbon paste is applied. As the laser fires, you will hear loud snapping sounds and feel mild warmth. The treatment is painless.`,after:`Slight pinkness may occur. Apply a soothing moisturizer and broad-spectrum sunscreen. Avoid makeup for 12 hours.`},faqs:[{q:`Does it hurt?`,a:`No. You will feel a warm tingling sensation, but it is not painful. The popping noise of the laser vaporizing the carbon can be surprising at first, but it is completely safe.`},{q:`Can I get this done if I have active acne?`,a:`Yes. The carbon laser peel destroys acne-causing bacteria and dries up active sebum, helping to control breakouts.`}]},{id:`tattoo-removal`,title:`Tattoo Removal`,shortDesc:`Erase unwanted tattoos safely with advanced laser precision.`,category:`laser`,iconName:`Trash2`,imageUrl:new URL(`/Aestheva/assets/tattooremoval-BnJ_wRL3.jpg`,``+import.meta.url).href,sessionInfo:{duration:`15 - 45 mins`,downtime:`5 - 7 days (crusting or minor blistering)`,sessions:`5 - 10 sessions`,interval:`6 - 8 weeks`},fullDesc:`Erase tattoos safely without scarring. Our Q-Switched Nd:YAG laser delivers ultra-short, high-energy pulses of light into the skin. This light energy is selectively absorbed by the tattoo ink particles, breaking them down into tiny fragments. Over the following weeks, your body's lymphatic system naturally carries away the shattered ink particles, gradually fading the tattoo with each session.`,benefits:[`Safely fades or completely removes unwanted multi-colored tattoos`,`Minimizes risk of scarring by using targeted, photo-acoustic laser pulses`,`Performed under topical numbing for patient comfort`,`Effective on professional, amateur, and cosmetic tattoos`],whatToExpect:{before:`Keep the area clean. Avoid sun exposure. Topical numbing is applied 45 minutes prior.`,during:`The laser targets the ink. You will feel a hot snapping sensation. The ink will temporarily turn white (frosting) immediately after treatment.`,after:`An antibiotic ointment and bandage are applied. Keep the area clean and dry. Avoid scratching or picking any scabs that form.`},faqs:[{q:`How many sessions are needed to remove a tattoo?`,a:`This depends on the tattoo's size, ink depth, color, and age. Black ink is easiest to remove, while green/blue inks require specialized wavelengths and more sessions.`},{q:`Will laser tattoo removal leave a scar?`,a:`Modern Q-switched lasers are designed to target ink only, leaving surrounding tissue intact. Scarring is very rare, provided you follow proper post-treatment care instructions.`}]},{id:`skin-tags-mole-removal`,title:`Skin Tags / Mole Removal`,shortDesc:`Quick and scar-free removal of unwanted growths.`,category:`laser`,iconName:`Scissors`,imageUrl:new URL(`/Aestheva/assets/skintagsmoleremoval-CDHtCQji.jpg`,``+import.meta.url).href,sessionInfo:{duration:`15 - 30 mins`,downtime:`3 - 7 days for healing`,sessions:`Usually 1 session`,interval:`N/A`},fullDesc:`Unwanted moles, skin tags, warts, and seborrheic keratoses can be removed quickly, hygienically, and with minimal scarring in a clinical setting. We utilize a surgical CO2 laser or radiofrequency cautery to vaporize or cleanly excise the unwanted tissue. The procedure is performed under local anesthesia (topical or small injection), making it completely painless.`,benefits:[`Instantly removes benign skin growths in a single session`,`Painless procedure under local anesthesia`,`Co2 laser cauterizes blood vessels immediately, preventing bleeding`,`Dermatologist-guided to ensure mole safety and proper tissue assessment`],whatToExpect:{before:`Dr. Ketaki will inspect the mole/tag to confirm it is benign and safe for cosmetic removal.`,during:`The area is numbed, and the laser or RF tip is applied to gently remove the growth. You will feel no pain.`,after:`A small scab or shallow pink spot will remain. Apply the prescribed antibiotic ointment. Do not pick the scab; let it fall off naturally.`},faqs:[{q:`Will it leave a scar?`,a:`CO2 laser and RF cautery are highly precise, minimizing thermal damage. A tiny, faint flat mark may remain, which fades to blend with surrounding skin over a few months.`},{q:`Does the growth grow back?`,a:`Once fully removed down to the root, individual moles or tags rarely return. However, genetic tendencies may cause new tags to form elsewhere over time.`}]},{id:`laser-treatments`,title:`Laser Treatments`,shortDesc:`Safe and effective solutions for various skin and hair concerns.`,category:`laser`,iconName:`Flame`,imageUrl:new URL(`/Aestheva/assets/lasertreatments-2tkK-6nw.jpg`,``+import.meta.url).href,sessionInfo:{duration:`30 - 60 mins`,downtime:`Varies (0 to 3 days depending on target)`,sessions:`3 - 6 sessions`,interval:`4 weeks`},fullDesc:`We house a suite of advanced, US-FDA approved laser technologies to address diverse concerns. From vascular lasers that treat spider veins and redness, to resurfacing lasers that refine deep lines, and toning lasers that treat pigmentation, our laser treatments are customized. Dr. Ketaki calibrates wavelengths, pulse widths, and cooling mechanisms to achieve clinical efficacy while maintaining skin safety.`,benefits:[`Precision targeting of specific skin depths and targets (pigment, water, hemoglobin)`,`High safety profile with advanced contact-cooling systems`,`Treats complex concerns like vascular lesions, birthmarks, and deep pores`,`Clinically proven results backed by dermatology research`],whatToExpect:{before:`Avoid active retinoids and sunbeds for 5 days. Ensure skin is not tanned.`,during:`The skin is cleansed, and protective eyewear is provided. Cooling gel is applied, and the laser pulses are delivered. Sensation varies from cold to warm snaps.`,after:`Follow specific post-treatment instructions, which usually include gentle cleansing, barrier repair cream, and strict sunscreen.`},faqs:[{q:`Are lasers safe for dark skin?`,a:`Yes, when using the correct wavelengths (like Long-Pulsed Nd:YAG or specific Q-switched profiles). Dr. Ketaki specializes in safe laser treatments for Indian skin types.`},{q:`What is the recovery time?`,a:`For non-ablative toning lasers, there is zero downtime. For ablative resurfacing, expect mild redness, peeling, or swelling for 2-4 days.`}]},{id:`scar-reduction`,title:`Scar Reduction`,shortDesc:`Minimize scars with advanced laser and microneedling procedures.`,category:`laser`,iconName:`Scissors`,imageUrl:new URL(`/Aestheva/assets/scarreduction-Bb-8AhvR.jpg`,``+import.meta.url).href,sessionInfo:{duration:`45 - 60 mins`,downtime:`2 - 4 days of redness and swelling`,sessions:`4 - 6 sessions`,interval:`4 weeks`},fullDesc:`Whether from acne, surgery, or injury, scars can impact skin texture and confidence. Our Scar Reduction program combines advanced modalities like Fractional CO2 Laser Resurfacing, Microneedling Radiofrequency (MNRF), and subcision. These treatments break down dense, fibrous scar tissue and stimulate the production of organized, healthy collagen, plumping depressed scars and smoothing out uneven surfaces.`,benefits:[`Reduces depth of pitted acne scars (boxcar, rolling, ice-pick)`,`Smoothes surgical or traumatic scars`,`Improves overall skin texture and uniformity`,`Combined treatment plans to address multiple scar types`],whatToExpect:{before:`Stop using retinols or peeling agents 5 days prior. Ensure no active acne in the area.`,during:`Numbing cream is applied. The laser or MNRF energy is delivered. You will feel heat and a prickling sensation. Cold compresses are applied immediately after.`,after:`Expect redness, swelling, and tiny grid-like marks or scabs. Apply healing creams. Do not scrub or peel the skin.`},faqs:[{q:`Can a scar be completely erased?`,a:`While a scar cannot be 100% erased to match original skin, modern treatments can improve scar appearance, depth, and texture by 70-80%, making them much less noticeable.`},{q:`Is it suitable for old scars?`,a:`Yes, older scars can still be treated, though younger scars that are still remodeling may respond slightly faster.`}]}],oe=V({name:z().min(2,{message:`Name must be at least 2 characters`}),phone:z().regex(/^[0-9+\s\-]{10,15}$/,{message:`Please enter a valid phone number (10-15 digits)`}),email:z().email({message:`Please enter a valid email address`}),service:z().min(1,{message:`Please select a service`}),date:z().min(1,{message:`Please select a preferred date`}),time:z().min(1,{message:`Please select a preferred time slot`}),message:z().optional()});function $({isOpen:e,onClose:t,selectedService:n}){let[r,i]=(0,W.useState)(null),[a,o]=(0,W.useState)(!1),s=Q.map(e=>e.title),{register:c,handleSubmit:l,reset:u,formState:{errors:d,isSubmitting:f}}=R({resolver:B(oe),defaultValues:{name:``,phone:``,email:``,service:n||``,date:``,time:``,message:``}});return(0,W.useEffect)(()=>{if(e){document.body.style.overflow=`hidden`,i(null),o(!1);let e=setTimeout(()=>o(!0),20);return u({name:``,phone:``,email:``,service:n||``,date:``,time:``,message:``}),()=>{clearTimeout(e),document.body.style.overflow=``}}else o(!1),document.body.style.overflow=``},[e,n,u]),e?(0,K.jsxs)(`div`,{className:`modal-backdrop ${a?`active`:``}`,"data-lenis-prevent":!0,children:[(0,K.jsxs)(`div`,{className:`modal-content animate-fade-in`,children:[(0,K.jsx)(`button`,{className:`modal-close`,onClick:t,"aria-label":`Close modal`,children:(0,K.jsx)(A,{size:20})}),r?(0,K.jsxs)(`div`,{className:`success-screen animate-fade-in`,children:[(0,K.jsx)(P,{size:64,className:`success-icon`}),(0,K.jsx)(`h3`,{className:`success-title`,children:`Request Received!`}),(0,K.jsxs)(`p`,{className:`success-desc`,children:[`Thank you, `,(0,K.jsx)(`strong`,{children:r.name}),`. We have received your request for `,(0,K.jsx)(`strong`,{children:r.service}),` on `,(0,K.jsx)(`strong`,{children:r.date}),`.`]}),(0,K.jsxs)(`p`,{className:`success-contact-note`,children:[`Our clinic administrator will call or text you shortly at `,(0,K.jsx)(`strong`,{children:r.phone}),` to confirm your slot.`]}),(0,K.jsx)(`button`,{className:`btn btn-primary`,onClick:t,children:`Close Window`})]}):(0,K.jsxs)(`form`,{onSubmit:l(async e=>{try{await fetch(`https://formspree.io/f/YOUR_FORM_ID`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)}),i(e),H.success(`Appointment requested successfully!`)}catch{i(e),H.success(`Mock request sent! Clinic admin will review.`)}}),className:`appointment-form`,noValidate:!0,children:[(0,K.jsx)(`h3`,{className:`modal-title`,children:`Request Appointment`}),(0,K.jsx)(`p`,{className:`modal-subtitle`,children:`Fill in your details below and we will contact you to confirm your booking.`}),(0,K.jsxs)(`div`,{className:`form-group`,children:[(0,K.jsxs)(`label`,{htmlFor:`name`,children:[(0,K.jsx)(D,{size:14}),` Full Name`]}),(0,K.jsx)(`input`,{id:`name`,type:`text`,placeholder:`Dr. Ketaki's Patient`,className:d.name?`input-error`:``,...c(`name`)}),d.name&&(0,K.jsx)(`span`,{className:`error-text`,children:d.name.message})]}),(0,K.jsxs)(`div`,{className:`form-grid`,children:[(0,K.jsxs)(`div`,{className:`form-group`,children:[(0,K.jsxs)(`label`,{htmlFor:`phone`,children:[(0,K.jsx)(w,{size:14}),` Phone Number`]}),(0,K.jsx)(`input`,{id:`phone`,type:`tel`,placeholder:`e.g. +91 9876543210`,className:d.phone?`input-error`:``,...c(`phone`)}),d.phone&&(0,K.jsx)(`span`,{className:`error-text`,children:d.phone.message})]}),(0,K.jsxs)(`div`,{className:`form-group`,children:[(0,K.jsxs)(`label`,{htmlFor:`email`,children:[(0,K.jsx)(E,{size:14}),` Email Address`]}),(0,K.jsx)(`input`,{id:`email`,type:`email`,placeholder:`patient@aestheva.com`,className:d.email?`input-error`:``,...c(`email`)}),d.email&&(0,K.jsx)(`span`,{className:`error-text`,children:d.email.message})]})]}),(0,K.jsxs)(`div`,{className:`form-group`,children:[(0,K.jsxs)(`label`,{htmlFor:`service`,children:[(0,K.jsx)(y,{size:14}),` Select Treatment / Service`]}),(0,K.jsxs)(`select`,{id:`service`,className:d.service?`input-error`:``,...c(`service`),children:[(0,K.jsx)(`option`,{value:``,children:`-- Choose a Service --`}),s.map((e,t)=>(0,K.jsx)(`option`,{value:e,children:e},t))]}),d.service&&(0,K.jsx)(`span`,{className:`error-text`,children:d.service.message})]}),(0,K.jsxs)(`div`,{className:`form-grid`,children:[(0,K.jsxs)(`div`,{className:`form-group`,children:[(0,K.jsx)(`label`,{htmlFor:`date`,children:`Preferred Date`}),(0,K.jsx)(`input`,{id:`date`,type:`date`,className:d.date?`input-error`:``,...c(`date`)}),d.date&&(0,K.jsx)(`span`,{className:`error-text`,children:d.date.message})]}),(0,K.jsxs)(`div`,{className:`form-group`,children:[(0,K.jsx)(`label`,{htmlFor:`time`,children:`Preferred Time`}),(0,K.jsxs)(`select`,{id:`time`,className:d.time?`input-error`:``,...c(`time`),children:[(0,K.jsx)(`option`,{value:``,children:`-- Choose a Slot --`}),(0,K.jsx)(`option`,{value:`10:00 AM - 12:00 PM`,children:`Morning (10 AM - 12 PM)`}),(0,K.jsx)(`option`,{value:`12:00 PM - 03:00 PM`,children:`Afternoon (12 PM - 3 PM)`}),(0,K.jsx)(`option`,{value:`03:00 PM - 06:00 PM`,children:`Evening (3 PM - 6 PM)`}),(0,K.jsx)(`option`,{value:`06:00 PM - 08:00 PM`,children:`Late Evening (6 PM - 8 PM)`})]}),d.time&&(0,K.jsx)(`span`,{className:`error-text`,children:d.time.message})]})]}),(0,K.jsxs)(`div`,{className:`form-group`,children:[(0,K.jsxs)(`label`,{htmlFor:`message`,children:[(0,K.jsx)(k,{size:14}),` Message (Optional)`]}),(0,K.jsx)(`textarea`,{id:`message`,rows:`3`,placeholder:`Mention any specific skin conditions, allergies, or concerns...`,...c(`message`)})]}),(0,K.jsx)(`button`,{type:`submit`,className:`btn btn-primary w-full submit-btn`,disabled:f,children:f?`Requesting...`:`Request Appointment`})]})]}),(0,K.jsx)(`style`,{children:`
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
      `})]}):null}function se(){return(0,K.jsxs)(`section`,{className:`before-after-section section-padding`,children:[(0,K.jsxs)(`div`,{className:`container`,children:[(0,K.jsxs)(`div`,{className:`section-title-wrapper text-center m-b50 animate-reveal`,children:[(0,K.jsx)(`span`,{className:`section-subtitle`,children:`REAL PATIENT RESULTS`}),(0,K.jsx)(`h2`,{className:`section-title`,children:`Transformative Skincare Journeys`}),(0,K.jsx)(`div`,{className:`section-desc`,children:`Witness the visible improvements achieved through our personalized, doctor-led dermatological treatments.`})]}),(0,K.jsxs)(`div`,{className:`before-after-grid`,children:[(0,K.jsxs)(`div`,{className:`slider-wrapper`,children:[(0,K.jsx)(`div`,{className:`slider-container`,children:(0,K.jsx)(v,{itemOne:(0,K.jsxs)(`div`,{className:`slider-item-wrapper`,children:[(0,K.jsx)(g,{src:`/before_skin.png`,alt:`Skin before treatment`}),(0,K.jsx)(`span`,{className:`slider-badge before-badge`,children:`Before`})]}),itemTwo:(0,K.jsxs)(`div`,{className:`slider-item-wrapper`,children:[(0,K.jsx)(g,{src:`/after_skin.png`,alt:`Skin after treatment`}),(0,K.jsx)(`span`,{className:`slider-badge after-badge`,children:`After`})]}),style:{width:`100%`,height:`420px`,borderRadius:`16px`,overflow:`hidden`,boxShadow:`var(--shadow-lg)`}})}),(0,K.jsx)(`div`,{className:`slider-hint`,children:(0,K.jsx)(`span`,{children:`← Drag Slider to Compare →`})})]}),(0,K.jsx)(`div`,{className:`info-wrapper`,children:(0,K.jsxs)(`div`,{className:`info-card`,children:[(0,K.jsx)(`div`,{className:`info-icon`,children:(0,K.jsx)(j,{size:24})}),(0,K.jsx)(`h3`,{className:`info-title`,children:`Customized Treatment Success`}),(0,K.jsx)(`p`,{className:`info-para`,children:`This case demonstrates the results of our advanced skin rejuvenation therapy over a 6-week period. By targeting deep skin layers, we stimulate collagen production, reduce pigmentation, and heal active acne lesions.`}),(0,K.jsxs)(`div`,{className:`results-list`,children:[(0,K.jsxs)(`div`,{className:`result-item`,children:[(0,K.jsx)(`span`,{className:`result-number`,children:`98%`}),(0,K.jsx)(`span`,{className:`result-label`,children:`Reduction in redness and acne blemishes`})]}),(0,K.jsxs)(`div`,{className:`result-item`,children:[(0,K.jsx)(`span`,{className:`result-number`,children:`2x`}),(0,K.jsx)(`span`,{className:`result-label`,children:`Increase in overall skin elasticity & glow`})]}),(0,K.jsxs)(`div`,{className:`result-item`,children:[(0,K.jsx)(`span`,{className:`result-number`,children:`0`}),(0,K.jsx)(`span`,{className:`result-label`,children:`Downtime required during the procedure`})]})]})]})})]})]}),(0,K.jsx)(`style`,{children:`
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
      `})]})}function ce(){let e={rating:4.9,count:215};return(0,K.jsxs)(`section`,{className:`google-reviews-section section-padding`,children:[(0,K.jsxs)(`div`,{className:`container`,children:[(0,K.jsxs)(`div`,{className:`reviews-header-block`,children:[(0,K.jsxs)(`div`,{className:`header-left`,children:[(0,K.jsxs)(`div`,{className:`google-brand`,children:[(0,K.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`36`,height:`36`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,K.jsx)(`path`,{d:`M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,fill:`#4285F4`}),(0,K.jsx)(`path`,{d:`M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,fill:`#34A853`}),(0,K.jsx)(`path`,{d:`M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z`,fill:`#FBBC05`}),(0,K.jsx)(`path`,{d:`M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z`,fill:`#EA4335`})]}),(0,K.jsx)(`h3`,{children:`Google Reviews`})]}),(0,K.jsxs)(`div`,{className:`rating-summary`,children:[(0,K.jsx)(`span`,{className:`rating-val`,children:e.rating}),(0,K.jsx)(`div`,{className:`stars-wrap`,children:[1,2,3,4,5].map(e=>(0,K.jsx)(O,{size:16,fill:`#FFC107`,stroke:`none`},e))}),(0,K.jsxs)(`span`,{className:`reviews-count`,children:[`(`,e.count,` reviews)`]})]})]}),(0,K.jsx)(`div`,{className:`header-right`,children:(0,K.jsx)(`a`,{href:`https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review`,target:`_blank`,rel:`noreferrer`,className:`btn btn-outline btn-sm write-review-btn`,children:`Write a Review`})})]}),(0,K.jsx)(`div`,{className:`reviews-grid`,children:[{author:`Aditi Sharma`,time:`2 weeks ago`,initials:`AS`,color:`#4285F4`,text:`Dr. Ketaki is an amazing cosmetologist! I went for a skin tags removal and laser session. She explained the entire process clearly. The results are clean and perfect. The clinic is very hygienic.`,rating:5},{author:`Rahul Mehta`,time:`1 month ago`,initials:`RM`,color:`#34A853`,text:`Great experience at Aesthéva Clinic for hair loss treatment. Dr. Ketaki recommended GFC therapy and after 3 sessions, my hair fall has drastically reduced. Highly recommended clinic in Sanpada!`,rating:5},{author:`Pooja Patil`,time:`3 months ago`,initials:`PP`,color:`#FBBC05`,text:`I was struggling with stubborn pigmentation for years. Under Dr. Ketaki's advice, I underwent a combination of chemical peels and laser toning. My skin is noticeably brighter and even-toned now.`,rating:5}].map((e,t)=>(0,K.jsxs)(`div`,{className:`review-item-card`,children:[(0,K.jsxs)(`div`,{className:`reviewer-info`,children:[(0,K.jsx)(`div`,{className:`reviewer-avatar`,style:{backgroundColor:e.color},children:e.initials}),(0,K.jsxs)(`div`,{className:`reviewer-meta`,children:[(0,K.jsxs)(`div`,{className:`reviewer-name-row`,children:[(0,K.jsx)(`h6`,{children:e.author}),(0,K.jsxs)(`span`,{className:`verified-badge`,children:[(0,K.jsx)(P,{size:10,fill:`var(--primary)`,stroke:`white`}),`Verified`]})]}),(0,K.jsx)(`span`,{className:`review-time`,children:e.time})]})]}),(0,K.jsx)(`div`,{className:`review-rating-stars`,children:Array.from({length:e.rating}).map((e,t)=>(0,K.jsx)(O,{size:14,fill:`#FFC107`,stroke:`none`},t))}),(0,K.jsxs)(`p`,{className:`review-content-text`,children:[`"`,e.text,`"`]})]},t))})]}),(0,K.jsx)(`style`,{children:`
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
      `})]})}I.registerPlugin(L);function le({onBookClick:e}){let t=(0,W.useRef)(null),n=(0,W.useRef)(null);return F(()=>{I.fromTo(n.current,{scale:1.15},{scale:1,ease:`none`,scrollTrigger:{trigger:t.current,start:`top bottom`,end:`bottom top`,scrub:!0}}),L.create({trigger:t.current,start:`top bottom`,end:`bottom top`,onEnter:()=>n.current?.play(),onLeave:()=>n.current?.pause(),onEnterBack:()=>n.current?.play(),onLeaveBack:()=>n.current?.pause()})},{scope:t}),(0,K.jsxs)(`section`,{className:`clinic-video-section`,ref:t,children:[(0,K.jsxs)(`div`,{className:`video-container`,children:[(0,K.jsx)(`video`,{ref:n,src:`https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c022f2c8d3259074d75b3f18e2a07929&profile_id=139&oauth2_token_id=57447761`,loop:!0,muted:!0,playsInline:!0,autoPlay:!0,className:`bg-video`}),(0,K.jsx)(`div`,{className:`video-overlay`})]}),(0,K.jsx)(`div`,{className:`container video-content-container`,children:(0,K.jsxs)(`div`,{className:`video-text-content`,children:[(0,K.jsx)(`span`,{className:`video-subtitle`,children:`THE AESTHÉVA EXPERIENCE`}),(0,K.jsx)(`h2`,{className:`video-title`,children:`Premium Aesthetic Standards`}),(0,K.jsx)(`p`,{className:`video-description`,children:`Step into a clinical environment where advanced dermatology meets personalized aesthetic artistry. Our Sanpada clinic is equipped with US-FDA approved laser technologies and follows rigorous international hygiene standards to deliver safe, effective, and transformative care.`}),(0,K.jsxs)(`button`,{className:`btn btn-primary btn-lg`,onClick:e,children:[(0,K.jsx)(y,{size:18,style:{marginRight:`8px`}}),`Book a Clinic Tour`]})]})}),(0,K.jsx)(`style`,{children:`
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
      `})]})}var ue=(0,W.lazy)(()=>n(()=>import(`./About-Cw_c02H3.js`),__vite__mapDeps([0,1,2,3,4]))),de=(0,W.lazy)(()=>n(()=>import(`./Contact-CMP_Pmgq.js`),__vite__mapDeps([5,1,2,4]))),fe=(0,W.lazy)(()=>n(()=>import(`./ServiceDetail-DkX5bW9t.js`),__vite__mapDeps([6,1,2,7,4])));function pe(){let{pathname:e}=t();return(0,W.useEffect)(()=>{window.scrollTo(0,0)},[e]),null}function me(){let[e,n]=(0,W.useState)(!1),[r,i]=(0,W.useState)(``),a=t();(0,W.useEffect)(()=>{let e=new _({duration:1.2,easing:e=>Math.min(1,1.001-2**(-10*e)),orientation:`vertical`,gestureOrientation:`vertical`,smoothWheel:!0,wheelMultiplier:1.1,touchMultiplier:2});function t(n){e.raf(n),requestAnimationFrame(t)}return requestAnimationFrame(t),e.resize(),()=>{e.destroy()}},[a.pathname]);let c=(e=``)=>{i(e),n(!0)},l=()=>{n(!1),i(``)},{scrollYProgress:d}=p(),g=h(d,{stiffness:120,damping:25,restDelta:.001}),v={initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:-15}},y={duration:.4,ease:[.22,1,.36,1]};return(0,K.jsxs)(`div`,{className:`app-wrapper`,children:[(0,K.jsx)(m.div,{className:`scroll-progress-bar`,style:{scaleX:g,position:`fixed`,top:0,left:0,right:0,height:`4px`,background:`var(--primary-gradient)`,transformOrigin:`0%`,zIndex:1e4}}),(0,K.jsxs)(o,{children:[(0,K.jsx)(`title`,{children:`Aesthéva | Premium Aesthetic & Laser Clinic`}),(0,K.jsx)(`meta`,{name:`description`,content:`Aesthéva by Dr. Ketaki is a state-of-the-art clinic offering advanced skin, hair, and laser treatments in Sanpada, Navi Mumbai.`}),(0,K.jsx)(`meta`,{property:`og:title`,content:`Aesthéva | Premium Aesthetic & Laser Clinic`}),(0,K.jsx)(`meta`,{property:`og:description`,content:`Advanced skin, hair, and laser treatments by Dr. Ketaki. Book your consultation today.`}),(0,K.jsx)(`meta`,{property:`og:type`,content:`website`}),(0,K.jsx)(`script`,{type:`application/ld+json`,children:`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Aesthéva Clinic",
              "image": "https://astheva.com/logo.png",
              "@id": "https://astheva.com/#clinic",
              "url": "https://astheva.com",
              "telephone": "+919136611998",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sanpada",
                "addressLocality": "Navi Mumbai",
                "addressRegion": "MH",
                "postalCode": "400705",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.0634,
                "longitude": 73.0182
              },
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
              "medicalSpecialty": "Dermatology",
              "founder": {
                "@type": "MedicalOrganization",
                "name": "Dr. Ketaki Dongare - Bhoir"
              }
            }
          `})]}),(0,K.jsx)(pe,{}),(0,K.jsx)(q,{onBookClick:()=>c()}),(0,K.jsx)(U,{position:`top-center`,reverseOrder:!1}),(0,K.jsx)(W.Suspense,{fallback:(0,K.jsx)(`div`,{className:`route-loader-bar`,children:(0,K.jsx)(`div`,{className:`bar-progress`})}),children:(0,K.jsx)(f,{mode:`wait`,children:(0,K.jsxs)(u,{location:a,children:[(0,K.jsx)(s,{path:`/`,element:(0,K.jsxs)(m.div,{initial:`initial`,animate:`animate`,exit:`exit`,variants:v,transition:y,children:[(0,K.jsx)(Y,{onBookClick:()=>c()}),(0,K.jsx)(X,{}),(0,K.jsx)(re,{onBookClick:()=>c()}),(0,K.jsx)(ne,{}),(0,K.jsx)(se,{}),(0,K.jsx)(ce,{}),(0,K.jsx)(ie,{}),(0,K.jsx)(le,{onBookClick:()=>c()})]})}),(0,K.jsx)(s,{path:`/about`,element:(0,K.jsx)(m.div,{initial:`initial`,animate:`animate`,exit:`exit`,variants:v,transition:y,style:{paddingTop:`7.5rem`,minHeight:`80vh`,background:`var(--bg-primary)`},children:(0,K.jsx)(ue,{isPage:!0})})}),(0,K.jsx)(s,{path:`/contact`,element:(0,K.jsx)(m.div,{initial:`initial`,animate:`animate`,exit:`exit`,variants:v,transition:y,style:{paddingTop:`7.5rem`,minHeight:`80vh`,background:`var(--bg-primary)`},children:(0,K.jsx)(de,{isPage:!0})})}),(0,K.jsx)(s,{path:`/services/:serviceId`,element:(0,K.jsx)(m.div,{initial:`initial`,animate:`animate`,exit:`exit`,variants:v,transition:y,children:(0,K.jsx)(fe,{onBookClick:e=>c(e)})})})]},a.pathname)})}),(0,K.jsx)(ae,{}),(0,K.jsx)($,{isOpen:e,onClose:l,selectedService:r}),(0,K.jsx)(`a`,{href:`https://wa.me/919136611998`,target:`_blank`,rel:`noreferrer`,"aria-label":`Chat on WhatsApp`,className:`whatsapp-float-btn`,style:{position:`fixed`,bottom:`2rem`,right:`2rem`,width:`56px`,height:`56px`,borderRadius:`50%`,background:`#25D366`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 4px 16px rgba(37,211,102,0.4)`,zIndex:9999,textDecoration:`none`,transition:`all 0.3s ease`},children:(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`28`,height:`28`,viewBox:`0 0 24 24`,fill:`white`,children:(0,K.jsx)(`path`,{d:`M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z`})})})]})}(0,G.createRoot)(document.getElementById(`root`)).render((0,K.jsx)(W.StrictMode,{children:(0,K.jsx)(l,{children:(0,K.jsx)(i,{basename:`/Aestheva`,children:(0,K.jsx)(me,{})})})}));export{Q as t};