export const servicesData = [
  // ==================== SKIN REJUVENATION ====================
  {
    id: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    shortDesc: "Revitalize your skin with customized therapies for a youthful, radiant glow.",
    category: "skin",
    iconName: "Sparkles",
    imageUrl: new URL('../assets/skinrejuvenation.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 - 60 mins",
      downtime: "None to minimal redness",
      sessions: "3 - 5 sessions",
      interval: "3 - 4 weeks"
    },
    fullDesc: "Our Skin Rejuvenation treatments are customized procedures designed to address dullness, uneven texture, and early signs of aging. By using combinations of gentle physical exfoliants, medical-grade serums, and mild light-based stimulation, we trigger natural cellular renewal. This treatment is ideal for anyone looking to restore their natural glow, improve skin hydration, and build a healthy skin barrier under professional supervision.",
    benefits: [
      "Instantly boosts skin radiance and removes superficial dead cells",
      "Improves overall skin hydration and elasticity",
      "Smoothes out rough textures and minor surface irregularities",
      "Stimulates natural skin healing and collagen production"
    ],
    whatToExpect: {
      before: "Avoid active skincare ingredients (Retinoids, AHAs, BHAs) for 48 hours before the procedure.",
      during: "A multi-step process involving gentle cleansing, exfoliation, hydration infusion, and soothing botanical masks. The sensation is relaxing and completely painless.",
      after: "Apply a broad-spectrum sunscreen. Avoid direct sun exposure and heavy makeup for 24 hours."
    },
    faqs: [
      {
        q: "Who is this treatment suitable for?",
        a: "It is suitable for all skin types, including sensitive skin. We customize the serums and techniques to match your exact skin profile."
      },
      {
        q: "How soon will I see results?",
        a: "A subtle glow and improved smoothness are visible immediately. Long-term texture improvements develop over successive sessions."
      }
    ]
  },
  {
    id: "acne-management",
    title: "Acne Management",
    shortDesc: "Effective dermatologist-guided treatments to clear acne and prevent future breakouts.",
    category: "skin",
    iconName: "ShieldAlert",
    imageUrl: new URL('../assets/acne management.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 mins",
      downtime: "None",
      sessions: "4 - 6 sessions",
      interval: "2 weeks"
    },
    fullDesc: "Acne is a medical condition that requires clinical intervention. Our Acne Management program combines dermatologist-guided topical regimens with targeted in-clinic treatments like comedone extraction, chemical peels, and light-based therapies. We don't just treat active acne; we focus on regulating sebum production, clearing blocked pores, reducing inflammation, and preventing post-acne scarring.",
    benefits: [
      "Reduces active inflammatory acne lesions quickly",
      "Controls excess oil production and refines pores",
      "Prevents future breakouts by clearing microcomedones",
      "Fades post-inflammatory erythema (red spots) and hyperpigmentation"
    ],
    whatToExpect: {
      before: "Do not squeeze or pick at active acne. Discontinue exfoliating scrubs 3 days prior.",
      during: "A clean medical extraction performed under sterile conditions, followed by anti-inflammatory treatments or blue-light therapy to kill acne-causing bacteria.",
      after: "Use only doctor-prescribed gentle cleansers and non-comedogenic moisturizers. Avoid picking skin."
    },
    faqs: [
      {
        q: "Will this completely cure my acne?",
        a: "Acne management is a combination of clinic treatments and home care. While it controls and clears active acne, maintaining the results requires consistent adherence to the prescribed skincare regimen."
      },
      {
        q: "Is extraction painful?",
        a: "Extraction can cause minor, temporary discomfort, but it is performed with precise medical tools to minimize pain and avoid tissue damage."
      }
    ]
  },
  {
    id: "pigmentation-melasma",
    title: "Pigmentation & Melasma",
    shortDesc: "Even out skin tone and reduce dark patches with safe, proven treatments.",
    category: "skin",
    iconName: "Layers",
    imageUrl: new URL('../assets/darkspotsfreckles.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 - 60 mins",
      downtime: "Minimal (slight peeling or redness for 1-2 days)",
      sessions: "4 - 8 sessions",
      interval: "3 - 4 weeks"
    },
    fullDesc: "Hyperpigmentation and Melasma are complex skin concerns caused by hormonal shifts, sun exposure, or inflammation. We approach pigmentation with customized medical treatments including pigment-lightening peels, laser toning (Q-switched Nd:YAG), and specialized topical inhibitors. The goal is to safely down-regulate active melanocytes (pigment-producing cells) without causing rebound hyperpigmentation.",
    benefits: [
      "Fades stubborn patches, sun spots, and melasma plaques",
      "Evens out skin tone for a brighter, more uniform complexion",
      "Safe for dark skin types under experienced dermatological care",
      "Strengthens skin tolerance against future sun damage"
    ],
    whatToExpect: {
      before: "Strict sun protection is required. Avoid tanning or outdoor activities for 1 week before treatment.",
      during: "Application of targeted depigmenting agents or a gentle laser toning sweep. You may feel a warm, tingling sensation.",
      after: "Mandatory daily use of broad-spectrum SPF 50+ sunscreen. Avoid heat, steam rooms, and direct sun exposure."
    },
    faqs: [
      {
        q: "Why is melasma so hard to treat?",
        a: "Melasma is highly influenced by hormones and UV light. It requires a long-term maintenance approach, combining clinical procedures with daily sunscreen and pigment-regulating creams."
      },
      {
        q: "Can pigmentation return after treatment?",
        a: "Yes, if the skin is exposed to unprotected sun or if hormonal triggers persist. Consistent sun protection is key to maintaining results."
      }
    ]
  },
  {
    id: "anti-aging-treatment",
    title: "Anti-Aging Treatment",
    shortDesc: "Restore firmness and smooth fine lines for naturally youthful skin.",
    category: "aesthetic",
    iconName: "TrendingDown",
    imageUrl: new URL('../assets/anti aging.png', import.meta.url).href,
    sessionInfo: {
      duration: "60 mins",
      downtime: "1 - 2 days of mild swelling or redness",
      sessions: "3 - 5 sessions",
      interval: "4 weeks"
    },
    fullDesc: "As skin ages, it loses collagen, elastin, and structural volume. Our clinical Anti-Aging treatments restore structural integrity from within. We utilize advanced technologies like Microneedling Radiofrequency (MNRF), collagen-boosting lasers, and medical-grade bio-stimulators to stimulate the skin's natural healing response. This rebuilds the underlying collagen matrix, leading to firmer, smoother, and naturally youthful skin.",
    benefits: [
      "Visibly reduces fine lines, wrinkles, and crow's feet",
      "Tightens sagging skin along the jawline and neck",
      "Improves skin elasticity, thickness, and bounce",
      "Refines skin texture and minimizes age-related pore enlargement"
    ],
    whatToExpect: {
      before: "Avoid blood thinners, alcohol, and anti-inflammatory medications for 3 days before treatment to prevent bruising.",
      during: "A numbing cream is applied for comfort. The procedure uses targeted energy or fine microneedling, causing a warm or light prickling sensation.",
      after: "Keep skin hydrated with prescribed healing balms. Avoid exercise, hot showers, and makeup for 24-48 hours."
    },
    faqs: [
      {
        q: "At what age should I start anti-aging treatments?",
        a: "Preventative treatments can begin in your late 20s or early 30s, when natural collagen production begins to slow down. However, treatments are effective for all age groups."
      },
      {
        q: "How long do the results last?",
        a: "Because these treatments trigger your body's natural collagen production, the improvements are long-lasting. Periodic maintenance sessions (every 6-12 months) are recommended."
      }
    ]
  },
  {
    id: "glutathione-iv",
    title: "Glutathione IV",
    shortDesc: "Brighten and detoxify your skin from within with antioxidant therapy.",
    category: "aesthetic",
    iconName: "Droplet",
    imageUrl: new URL('../assets/glutathioneivdrip.png', import.meta.url).href,
    sessionInfo: {
      duration: "30 mins",
      downtime: "None",
      sessions: "6 - 10 sessions",
      interval: "Weekly or bi-weekly"
    },
    fullDesc: "Glutathione is a powerful antioxidant naturally produced by the liver. It plays a critical role in neutralizing free radicals, detoxifying cells, and regulating melanin synthesis. Administered intravenously, our Glutathione IV therapy delivers a pure concentration of glutathione combined with Vitamin C directly into the bloodstream for maximum absorption, resulting in systemic skin brightening, detoxification, and overall cellular vitality.",
    benefits: [
      "Systemic skin brightening and reduction of overall pigmentation",
      "Neutralizes oxidative stress and flushes out cellular toxins",
      "Boosts energy levels and supports immune function",
      "Promotes a healthy, hydrated, and glowing skin tone from head to toe"
    ],
    whatToExpect: {
      before: "Stay well-hydrated. Eat a light meal before your session.",
      during: "A simple, painless IV drip administered by a certified medical professional in a comfortable, relaxing lounge environment.",
      after: "No downtime. You can immediately return to your normal daily activities."
    },
    faqs: [
      {
        q: "Is Glutathione IV safe?",
        a: "Yes, when administered under professional medical supervision using approved ingredients. We review your medical history beforehand to ensure suitability."
      },
      {
        q: "How long does it take to see skin brightening?",
        a: "Gradual skin tone changes and glow are usually observed after 4 to 6 sessions, depending on individual metabolism and initial pigmentation levels."
      }
    ]
  },
  {
    id: "face-lift-non-invasive",
    title: "Face Lift (Non-Invasive)",
    shortDesc: "Lift and tighten skin without surgery using the latest technology.",
    category: "aesthetic",
    iconName: "Smile",
    imageUrl: new URL('../assets/facelift.png', import.meta.url).href,
    sessionInfo: {
      duration: "60 - 90 mins",
      downtime: "None",
      sessions: "1 - 2 sessions",
      interval: "6 months to 1 year"
    },
    fullDesc: "Avoid the risks and recovery time of surgical lifts. Our Non-Invasive Face Lift utilizes High-Intensity Focused Ultrasound (HIFU) or advanced multi-polar radiofrequency. These technologies deliver precise thermal energy to the deep SMAS (Superficial Muscular Aponeurotic System) layer of the skin—the same layer addressed in surgical facelifts. This triggers immediate contraction and long-term remodeling of collagen, resulting in a lifted jawline, reduced double chin, and elevated cheeks.",
    benefits: [
      "Lifts and defines the jawline, cheeks, and brow area",
      "Reduces sagging skin in the neck (turkey neck) and submental area",
      "Completely non-invasive with zero incisions or needles",
      "Progressive improvement that peaks 2-3 months post-treatment"
    ],
    whatToExpect: {
      before: "Remove all metal jewelry and makeup before the procedure. No special skin prep is needed.",
      during: "A conductive gel is applied. The device handpiece is pressed to the skin, delivering pulses of heat. You may feel deep warming or brief pins-and-needles sensations.",
      after: "Slight tenderness or temporary redness may occur, which subsides within hours. You can resume work immediately."
    },
    faqs: [
      {
        q: "Is it painful?",
        a: "Some areas, like the jawline, can feel slightly sensitive or warm, but the procedure is generally well-tolerated. We adjust energy levels to ensure comfort."
      },
      {
        q: "How long do the lifting results last?",
        a: "Results can last between 12 to 18 months, as the newly formed collagen supports the facial structure against gravity."
      }
    ]
  },
  {
    id: "exsosomes-skin",
    title: "Exsosomes for skin",
    shortDesc: "It can help reduce fine lines, wrinkles, and hair loss, revealing smoother, healthier-looking skin and hair.",
    category: "aesthetic",
    iconName: "Zap",
    imageUrl: new URL('../assets/exosomesforskin.png', import.meta.url).href,
    sessionInfo: {
      duration: "60 mins",
      downtime: "12 - 24 hours of mild redness",
      sessions: "3 - 5 sessions",
      interval: "4 weeks"
    },
    fullDesc: "Exsosome therapy is the cutting edge of regenerative aesthetics. Exsosomes are microscopic vesicles released by cells that act as cellular messengers, containing growth factors, signaling peptides, and co-enzymes. When applied to the skin (typically post-microneedling or laser treatment to allow penetration), exosomes signal surrounding cells to repair, regenerate, and produce massive amounts of collagen and elastin, accelerating healing and reversing photo-damage.",
    benefits: [
      "Speeds up skin repair and cuts treatment downtime by 50%",
      "Visibly reduces fine lines, wrinkles, and pore size",
      "Helps calm inflammatory conditions like rosacea or eczema",
      "Significantly improves skin elasticity, firmness, and overall texture"
    ],
    whatToExpect: {
      before: "Avoid anti-inflammatory medications. Inform us of any active cold sores.",
      during: "First, microneedling is performed to create micro-channels. Then, a highly concentrated, cold-stored exosome serum is massaged into the skin.",
      after: "Skin will look flushed, similar to a mild sunburn. Avoid washing the face for 6 hours to allow full absorption of the exosomes."
    },
    faqs: [
      {
        q: "What makes exosomes different from PRP?",
        a: "While PRP uses growth factors from your own blood, Exsosomes are highly concentrated, purified messenger vesicles containing up to 100x more growth factors and signaling molecules, offering superior regenerative results."
      },
      {
        q: "Are the exosomes safe?",
        a: "Yes. The exosomes used in our clinic are clinical-grade, laboratory-tested, purified, and completely free of cellular DNA, ensuring zero risk of rejection or infection."
      }
    ]
  },

  // ==================== CHEMICAL PEEL ====================
  {
    id: "chemical-peel",
    title: "Chemical Peel",
    shortDesc: "Remove dull, damaged skin and reveal a fresh, healthy layer.",
    category: "skin",
    iconName: "Sparkles",
    imageUrl: new URL('../assets/chemicalpeel.png', import.meta.url).href,
    sessionInfo: {
      duration: "30 mins",
      downtime: "2 - 5 days of mild flaking/dryness",
      sessions: "4 - 6 sessions",
      interval: "2 - 3 weeks"
    },
    fullDesc: "Chemical Peeling is a controlled clinical exfoliation process. By applying precise acidic solutions (such as Glycolic, Salicylic, Lactic, or TCA peels) to the skin, we safely dissolve the intercellular glue holding dead cells together. This causes the old layer to peel away, revealing fresher, smoother, and more evenly pigmented skin underneath while stimulating healthy cellular turnover.",
    benefits: [
      "Clears blocked pores, controls blackheads, and treats active acne",
      "Fades dark spots, acne marks, and sun-induced pigmentation",
      "Smoothes out dry, rough skin and fine surface lines",
      "Improves the penetration and efficacy of your home skincare products"
    ],
    whatToExpect: {
      before: "Stop using retinols or harsh scrubs for 3-5 days before the peel.",
      during: "The skin is prepped, and the peel solution is applied. You may feel a warm, tingling, or stinging sensation for 3-5 minutes before it is neutralized.",
      after: "Skin will feel tight and dry, followed by gentle flaking. Apply moisturizer and sunscreen regularly. Do not peel or scratch dry skin."
    },
    faqs: [
      {
        q: "Will my skin literally peel off in sheets?",
        a: "No. Modern medical peels are formulated to cause micro-flaking or mild dryness rather than dramatic peeling, allowing you to go about your daily life without embarrassment."
      },
      {
        q: "Can I get a peel during summer?",
        a: "Yes, you can get mild peels in the summer provided you are diligent with sun protection (hats, sunscreen) and avoid direct sunbathing."
      }
    ]
  },

  // ==================== HAIR TREATMENTS ====================
  {
    id: "prp-gfc-therapy",
    title: "PRP / GFC Therapy",
    shortDesc: "Harness your body's growth factors to rejuvenate skin and promote hair growth.",
    category: "hair",
    iconName: "Activity",
    imageUrl: new URL('../assets/PRPGFCTherapy.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 mins",
      downtime: "None (slight scalp tenderness for 1 day)",
      sessions: "4 - 6 sessions",
      interval: "4 weeks"
    },
    fullDesc: "Platelet-Rich Plasma (PRP) and Growth Factor Concentrate (GFC) therapies are advanced, autologous hair restoration treatments. We draw a small amount of your blood and spin it in a specialized centrifuge to isolate the platelets and growth factors. GFC represents the latest generation, where growth factors are activated and extracted directly from platelets in a cell-free format. When micro-injected into the scalp, these concentrated growth factors revive shrinking hair follicles, extend the growth phase of hair, and increase hair density.",
    benefits: [
      "Triggers natural hair regrowth and increases hair shaft thickness",
      "Reduces hair fall and reverses early-stage hair thinning (androgenetic alopecia)",
      "100% natural treatment using growth factors extracted from your own blood",
      "GFC offers a cell-free, highly concentrated formulation with minimal discomfort"
    ],
    whatToExpect: {
      before: "Wash your hair on the morning of the treatment. Avoid taking anti-inflammatory medicines (ibuprofen) for 3 days before.",
      during: "A small blood sample is drawn. It is processed to isolate growth factors. The scalp is disinfected and micro-injections are delivered using ultra-fine needles.",
      after: "You can wash your hair the next day. Avoid heavy sweating, swimming, or applying hair dyes for 48 hours."
    },
    faqs: [
      {
        q: "What is the difference between PRP and GFC?",
        a: "PRP contains platelets that release growth factors over time in the scalp, whereas GFC extracts and pre-activates the growth factors in a laboratory tube, delivering a pure, pain-free, and more standardized dose of growth factors."
      },
      {
        q: "Is the treatment permanent?",
        a: "It significantly restores hair growth, but genetics and hormones will continue to affect hair. Maintenance sessions every 4-6 months are recommended to preserve density."
      }
    ]
  },
  {
    id: "open-pores-microneedling",
    title: "Open Pores / Micro-Needling",
    shortDesc: "Refine skin texture and reduce pores for smoother, clearer skin.",
    category: "skin",
    iconName: "Grid",
    imageUrl: new URL('../assets/microneedling.png', import.meta.url).href,
    sessionInfo: {
      duration: "60 mins",
      downtime: "1 - 2 days of pinkness/dryness",
      sessions: "3 - 5 sessions",
      interval: "4 weeks"
    },
    fullDesc: "Enlarged open pores are often caused by loss of skin elasticity and excess sebum. Our Micro-Needling treatment uses sterile, medical-grade fine needles to create thousands of micro-channels in the epidermis. This triggers a controlled healing cascade, stimulating fibroblast cells to produce new collagen and elastin. As the skin plumps up, the physical structure supporting the pores tightens, leading to a visible reduction in pore size and a smoother complexion.",
    benefits: [
      "Visibly shrinks enlarged open pores and refines skin texture",
      "Fades superficial acne scars and post-inflammatory marks",
      "Stimulates elastin and collagen production for firmer skin",
      "Enhances deep absorption of customized skin serums"
    ],
    whatToExpect: {
      before: "Discontinue active topicals (retinols, acids) 3 days prior. Avoid sun exposure.",
      during: "A topical numbing cream is applied for 40 minutes. The microneedling pen is gently guided over the skin. You will feel a vibrating, light scratchy sensation.",
      after: "Skin will look flushed (like a mild sunburn) for 24 hours. Use only hydrating serums, gentle moisturizers, and sunscreen."
    },
    faqs: [
      {
        q: "Can microneedling clear deep ice-pick scars?",
        a: "It improves them significantly, but deeper scars may require a combination of microneedling with TCA Cross or subcision for optimal results."
      },
      {
        q: "Will microneedling cause bleeding?",
        a: "We target specific clinical depths. Very pinpoint, temporary bleeding can occur but resolves immediately during the treatment."
      }
    ]
  },
  {
    id: "mesotherapy",
    title: "Mesotherapy",
    shortDesc: "Nourish and revitalize skin with vitamin-rich microinjections.",
    category: "skin",
    iconName: "Sparkles",
    imageUrl: new URL('../assets/mesotherapy.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 mins",
      downtime: "None to minimal swelling",
      sessions: "4 - 6 sessions",
      interval: "2 weeks"
    },
    fullDesc: "Mesotherapy is a minimally invasive technique that delivers a customized cocktail of vitamins, minerals, amino acids, coenzymes, and hyaluronic acid directly into the mesoderm (the middle layer of the skin). By bypassing the epidermal barrier, which limits the penetration of normal creams, mesotherapy feeds the skin cells directly, boosting cellular metabolism, promoting circulation, and providing deep, lasting hydration.",
    benefits: [
      "Deeply hydrates and plumps up dry, dehydrated skin",
      "Delivers a direct nutritional boost to tired, dull skin cells",
      "Improves micro-circulation, giving a fresh, rested appearance",
      "Fades fine lines and improves skin tone uniformity"
    ],
    whatToExpect: {
      before: "Avoid alcohol and aspirin for 24 hours to minimize the risk of tiny bruises.",
      during: "Micro-droplets of active serums are gently injected into the skin using a specialized multi-needle gun or manually with ultra-fine syringes. The discomfort is minimal.",
      after: "Avoid washing the face for 4 hours. Normal skincare can be resumed the next day."
    },
    faqs: [
      {
        q: "How does Mesotherapy differ from fillers?",
        a: "Dermal fillers add volume and change facial contours using thick cross-linked hyaluronic acid. Mesotherapy uses non-cross-linked hyaluronic acid and nutrients to hydrate and nourish the skin without changing volume."
      },
      {
        q: "Is there any risk of allergic reaction?",
        a: "Very rare, as we use certified, high-purity medical cocktails. We review allergies during the initial consultation."
      }
    ]
  },
  {
    id: "dark-spots-freckles",
    title: "Dark Spots / Freckles",
    shortDesc: "Fade pigmentation for an even and luminous complexion.",
    category: "skin",
    iconName: "Target",
    imageUrl: new URL('../assets/darkspotsfreckles.png', import.meta.url).href,
    sessionInfo: {
      duration: "30 - 45 mins",
      downtime: "3 - 5 days (freckles darken slightly before flaking off)",
      sessions: "2 - 4 sessions",
      interval: "4 weeks"
    },
    fullDesc: "Freckles and age spots are localized accumulations of melanin triggered by UV exposure. We treat these spots using advanced, target-specific methods like Q-Switched lasers, intense pulsed light, or spot chemical peeling. The light energy is absorbed selectively by the melanin pigment, breaking it down into tiny particles that are naturally removed by your body's immune system or shed off during skin renewal.",
    benefits: [
      "Selectively targets and removes dark spots without damaging surrounding skin",
      "Effectively clears freckles, sun spots, and flat senile lentigines",
      "Reveals a clear, unblemished, and uniform complexion",
      "Quick sessions with minimal healing downtime"
    ],
    whatToExpect: {
      before: "Avoid sun exposure and tanning beds for 2 weeks prior. Use sunscreen daily.",
      during: "A laser beam is targeted at the spots. You will feel a snapping sensation (like a small rubber band snap). Cold air or gel is used to cool the skin.",
      after: "The treated spots will turn darker and form a thin crust. They will naturally flake off in 4-7 days. Do not pick the crusts."
    },
    faqs: [
      {
        q: "Will the freckles come back?",
        a: "They can return if the skin is exposed to UV light. Daily broad-spectrum sunscreen and sun avoidance are crucial to preventing recurrence."
      },
      {
        q: "Is it safe for all skin tones?",
        a: "Special care and specific laser settings are required for darker skin tones to prevent post-inflammatory pigment changes. Dr. Ketaki customizes settings for safety."
      }
    ]
  },
  {
    id: "skin-brightening",
    title: "Skin Brightening",
    shortDesc: "Get visibly radiant and glowing skin with safe brightening therapies.",
    category: "skin",
    iconName: "Sparkles",
    imageUrl: new URL('../assets/skinbrightening.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 mins",
      downtime: "None",
      sessions: "4 - 6 sessions",
      interval: "2 - 3 weeks"
    },
    fullDesc: "Skin Brightening at our clinic is focused on health, safety, and natural radiance. Unlike unsafe bleaching products, our treatments utilize advanced medical formulations containing Vitamin C, Glutathione, Licorice extract, and Arbutin. Administered through deep-penetration technologies (like iontophoresis or high-pressure oxygen infusion) or gentle skin-polishing peels, these sessions inhibit excess melanin production and clear away surface build-up.",
    benefits: [
      "Restores natural radiance to dull, fatigued, or sun-damaged skin",
      "Lightens dark spots and post-acne marks safely",
      "Increases cellular hydration for a plump, healthy look",
      "Free from harmful chemicals, hydroquinone, or mercury"
    ],
    whatToExpect: {
      before: "No specific prep is required. Suitable as a pre-event glow treatment.",
      during: "A relaxing multi-step facial involving gentle skin polishing, application of brightening botanical serums, and infusion using mild micro-currents.",
      after: "Apply moisturizer and sunscreen. Enjoy an immediate, healthy glow."
    },
    faqs: [
      {
        q: "Is skin brightening the same as skin bleaching?",
        a: "No. Bleaching uses harsh chemicals to strip pigment, damaging the skin barrier. Clinical brightening flourishes the skin and gently regulates pigment pathways, maintaining skin health."
      },
      {
        q: "Can I get this done before a wedding or party?",
        a: "Yes, it is an excellent pre-event treatment. We recommend scheduling the session 2-3 days before the event for the best glow."
      }
    ]
  },
  {
    id: "hair-growth-treatment",
    title: "Hair Growth Treatment / Hair Fall / Alopecia",
    shortDesc: "Stimulate natural hair regrowth and strengthen your scalp health.",
    category: "hair",
    iconName: "TrendingUp",
    imageUrl: new URL('../assets/hairfallalopecia.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 - 60 mins",
      downtime: "None",
      sessions: "6 - 8 sessions",
      interval: "3 - 4 weeks"
    },
    fullDesc: "Hair thinning and excessive hair fall (Alopecia) can be caused by genetics, stress, nutritional deficiencies, or hormonal imbalances. Our Hair Growth Treatment program starts with a detailed scalp analysis. We combine medical therapies (like Minoxidil or Finasteride configurations) with advanced in-office treatments, including scalp microneedling, peptide infusions, and low-level laser therapy (LLLT). This comprehensive approach stimulates blood flow, strengthens hair roots, and increases hair density.",
    benefits: [
      "Arrests active hair fall and strengthens weak hair roots",
      "Awakens dormant hair follicles, encouraging new hair growth",
      "Improves scalp circulation and delivers essential peptides",
      "Tailored treatment plans addressing the root cause of thinning"
    ],
    whatToExpect: {
      before: "Arrive with a clean, dry scalp. Do not apply hair oils or styling gels.",
      during: "Scalp stimulation using a microneedling device or mechanical massage, followed by the application of active growth peptides. LLLT helmet therapy may also be used.",
      after: "Do not wash your hair or apply any hair products for 12 hours after the session."
    },
    faqs: [
      {
        q: "How long before I see hair regrowth?",
        a: "Hair grows slowly. Reduction in hair fall is usually noticed within 4-6 weeks, while new hair growth and increased density become visible after 3-4 months."
      },
      {
        q: "Is this effective for male pattern baldness?",
        a: "Yes, especially in the early to moderate stages (Grade 1 to 4). It helps thicken existing miniaturized hair and delay further recession."
      }
    ]
  },
  {
    id: "dandruff-treatment",
    title: "Dandruff Treatment",
    shortDesc: "Target the root cause of dandruff for a clean, healthy scalp.",
    category: "hair",
    iconName: "Activity",
    imageUrl: new URL('../assets/dandruff.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 mins",
      downtime: "None",
      sessions: "3 - 5 sessions",
      interval: "2 weeks"
    },
    fullDesc: "Stubborn dandruff (seborrheic dermatitis) is caused by an overgrowth of yeast (Malassezia) on an oily scalp, leading to flaking, itching, and hair fall. Our medical Dandruff Treatment targets the scalp environment. We use salicylic acid scalp peels to dissolve scales, anti-fungal serums to clear yeast, and high-frequency scalp stimulation to oxygenate the hair follicles and regulate sebum production.",
    benefits: [
      "Eliminates scalp flaking, itching, and redness instantly",
      "Controls excess scalp sebum production",
      "Clears Malassezia yeast overgrowth and restores scalp pH",
      "Reduces dandruff-induced hair loss by building a healthy scalp environment"
    ],
    whatToExpect: {
      before: "Do not oil your hair for 24 hours prior to the session.",
      during: "Application of a gentle exfoliating scalp mask, followed by thorough washing with anti-dandruff formulations, high-frequency stimulation, and soothing scalp tonic application.",
      after: "Use the prescribed anti-dandruff shampoo twice weekly at home as instructed."
    },
    faqs: [
      {
        q: "Can dandruff cause hair loss?",
        a: "Yes, a severely itchy, inflamed scalp and scratching can damage hair roots and lead to temporary shedding. Clearing dandruff helps restore normal hair growth."
      },
      {
        q: "Will dandruff return after the treatment ends?",
        a: "Dandruff can recur if you have a oily scalp type. Periodic maintenance washes and the correct home-use shampoos will keep it under control."
      }
    ]
  },
  {
    id: "exsosomes-hair",
    title: "Exsosomes for hair",
    shortDesc: "Exsosomes treatment uses tiny vesicles to stimulate collagen production, improve skin elasticity, and promote hair growth.",
    category: "hair",
    iconName: "Zap",
    imageUrl: new URL('../assets/exsosomesforhair.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 mins",
      downtime: "None (scalp redness for a few hours)",
      sessions: "3 - 5 sessions",
      interval: "4 weeks"
    },
    fullDesc: "For advanced hair thinning, Exsosome therapy offers a powerful regenerative alternative. Exsosomes derived from stem cells contain massive amounts of signaling proteins, growth factors, and micro-RNA. Micro-injected or rolled into the scalp, they act directly on hair follicle stem cells, waking them from the dormant phase (telogen) and pushing them into the active growth phase (anagen), leading to rapid hair thickening.",
    benefits: [
      "Offers up to 10x more growth factor activity compared to traditional PRP",
      "Thickens thin, miniaturized hair shafts significantly",
      "Reduces inflammation on the scalp, supporting healthy hair growth",
      "Completely drug-free, non-surgical hair restoration"
    ],
    whatToExpect: {
      before: "Wash hair. Do not take NSAID pain relievers for 3 days.",
      during: "A microneedling pen is used to create micro-channels in the thinning areas of the scalp. The sterile exosome solution is applied and massaged into the scalp.",
      after: "Avoid washing hair or strenuous exercise for 24 hours. Keep the scalp protected from direct sunlight."
    },
    faqs: [
      {
        q: "Is it suitable for women with hair thinning?",
        a: "Yes, it is highly effective for female pattern hair loss, which can be difficult to treat with oral medications."
      },
      {
        q: "How many sessions are needed?",
        a: "Most patients see significant thickening in 3 sessions spaced 4 weeks apart. Annual maintenance is recommended."
      }
    ]
  },

  // ==================== LASER TREATMENTS ====================
  {
    id: "laser-hair-removal",
    title: "Laser Hair Removal",
    shortDesc: "Smooth, hair-free skin with long-lasting laser technology.",
    category: "laser",
    iconName: "Flame",
    imageUrl: new URL('../assets/laserhairremoval.png', import.meta.url).href,
    sessionInfo: {
      duration: "15 - 90 mins (depending on area)",
      downtime: "None (mild redness for a few hours)",
      sessions: "6 - 8 sessions",
      interval: "4 - 6 weeks"
    },
    fullDesc: "Get rid of temporary hair removal methods like shaving, waxing, and epilating. Our clinic uses US-FDA approved Diode and Nd:YAG laser technologies, which are safe for Indian skin types. The laser emitting light energy targets the melanin in hair follicles, heating and destroying the root without harming the surrounding skin. This prevents future hair growth, giving you smooth, stubble-free, and ingrown-free skin.",
    benefits: [
      "Permanently reduces hair growth by up to 90%",
      "Prevents painful ingrown hairs, razor bumps, and skin irritation",
      "Saves time and money compared to lifetime waxing or shaving",
      "Smoothes skin texture and lightens shadowed underarms or bikini lines"
    ],
    whatToExpect: {
      before: "Shave the treatment area 24 hours before. Do NOT wax, pluck, or thread for 3 weeks prior.",
      during: "A cooling gel is applied, and the laser handpiece is glided over the skin. You will feel a warm sensation with a light prickle (similar to a rubber band snap).",
      after: "Apply moisturizing cream and sunscreen. Avoid hot showers, steam, and exercise for 24 hours."
    },
    faqs: [
      {
        q: "Is Laser Hair Removal permanent?",
        a: "It results in permanent hair reduction. Over time, hormonal changes might trigger fine, light hair regrowth, which can be easily managed with annual touch-up sessions."
      },
      {
        q: "Does it work on grey or light hair?",
        a: "Lasers target the pigment (melanin) in hair. Therefore, it is highly effective on dark hair but less effective on grey, blonde, or white hair."
      }
    ]
  },
  {
    id: "photo-rejuvenation-carbon",
    title: "Photo Rejuvenation / Carbon Laser",
    shortDesc: "Laser-based treatments for youthful, blemish-free, and refreshed skin.",
    category: "laser",
    iconName: "Zap",
    imageUrl: new URL('../assets/photorejuvenationcarbonlaser.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 mins",
      downtime: "None",
      sessions: "3 - 5 sessions",
      interval: "3 - 4 weeks"
    },
    fullDesc: "Often called the 'Hollywood Peel', the Carbon Laser treatment is a state-of-the-art procedure for instant skin refreshing. We apply a layer of liquid carbon to the face, which penetrates deep into the pores, binding to oil, dead skin, and debris. We then sweep a Q-Switched Nd:YAG laser over the skin. The laser energy is highly attracted to the carbon particles, instantly vaporizing them and taking the bound impurities with them while delivering a deep thermal boost to stimulate collagen.",
    benefits: [
      "Instantly deep-cleanses pores, reducing blackheads and oiliness",
      "Exfoliates skin, leaving it incredibly soft and smooth",
      "Fades superficial pigmentation, sun damage, and acne marks",
      "Excellent pre-event treatment with zero downtime"
    ],
    whatToExpect: {
      before: "Avoid active skincare acids and direct sun exposure for 3 days.",
      during: "The black carbon paste is applied. As the laser fires, you will hear loud snapping sounds and feel mild warmth. The treatment is painless.",
      after: "Slight pinkness may occur. Apply a soothing moisturizer and broad-spectrum sunscreen. Avoid makeup for 12 hours."
    },
    faqs: [
      {
        q: "Does it hurt?",
        a: "No. You will feel a warm tingling sensation, but it is not painful. The popping noise of the laser vaporizing the carbon can be surprising at first, but it is completely safe."
      },
      {
        q: "Can I get this done if I have active acne?",
        a: "Yes. The carbon laser peel destroys acne-causing bacteria and dries up active sebum, helping to control breakouts."
      }
    ]
  },
  {
    id: "tattoo-removal",
    title: "Tattoo Removal",
    shortDesc: "Erase unwanted tattoos safely with advanced laser precision.",
    category: "laser",
    iconName: "Trash2",
    imageUrl: new URL('../assets/tattooremoval.png', import.meta.url).href,
    sessionInfo: {
      duration: "15 - 45 mins",
      downtime: "5 - 7 days (crusting or minor blistering)",
      sessions: "5 - 10 sessions",
      interval: "6 - 8 weeks"
    },
    fullDesc: "Erase tattoos safely without scarring. Our Q-Switched Nd:YAG laser delivers ultra-short, high-energy pulses of light into the skin. This light energy is selectively absorbed by the tattoo ink particles, breaking them down into tiny fragments. Over the following weeks, your body's lymphatic system naturally carries away the shattered ink particles, gradually fading the tattoo with each session.",
    benefits: [
      "Safely fades or completely removes unwanted multi-colored tattoos",
      "Minimizes risk of scarring by using targeted, photo-acoustic laser pulses",
      "Performed under topical numbing for patient comfort",
      "Effective on professional, amateur, and cosmetic tattoos"
    ],
    whatToExpect: {
      before: "Keep the area clean. Avoid sun exposure. Topical numbing is applied 45 minutes prior.",
      during: "The laser targets the ink. You will feel a hot snapping sensation. The ink will temporarily turn white (frosting) immediately after treatment.",
      after: "An antibiotic ointment and bandage are applied. Keep the area clean and dry. Avoid scratching or picking any scabs that form."
    },
    faqs: [
      {
        q: "How many sessions are needed to remove a tattoo?",
        a: "This depends on the tattoo's size, ink depth, color, and age. Black ink is easiest to remove, while green/blue inks require specialized wavelengths and more sessions."
      },
      {
        q: "Will laser tattoo removal leave a scar?",
        a: "Modern Q-switched lasers are designed to target ink only, leaving surrounding tissue intact. Scarring is very rare, provided you follow proper post-treatment care instructions."
      }
    ]
  },
  {
    id: "skin-tags-mole-removal",
    title: "Skin Tags / Mole Removal",
    shortDesc: "Quick and scar-free removal of unwanted growths.",
    category: "laser",
    iconName: "Scissors",
    imageUrl: new URL('../assets/skintagsmoleremoval.png', import.meta.url).href,
    sessionInfo: {
      duration: "15 - 30 mins",
      downtime: "3 - 7 days for healing",
      sessions: "Usually 1 session",
      interval: "N/A"
    },
    fullDesc: "Unwanted moles, skin tags, warts, and seborrheic keratoses can be removed quickly, hygienically, and with minimal scarring in a clinical setting. We utilize a surgical CO2 laser or radiofrequency cautery to vaporize or cleanly excise the unwanted tissue. The procedure is performed under local anesthesia (topical or small injection), making it completely painless.",
    benefits: [
      "Instantly removes benign skin growths in a single session",
      "Painless procedure under local anesthesia",
      "Co2 laser cauterizes blood vessels immediately, preventing bleeding",
      "Dermatologist-guided to ensure mole safety and proper tissue assessment"
    ],
    whatToExpect: {
      before: "Dr. Ketaki will inspect the mole/tag to confirm it is benign and safe for cosmetic removal.",
      during: "The area is numbed, and the laser or RF tip is applied to gently remove the growth. You will feel no pain.",
      after: "A small scab or shallow pink spot will remain. Apply the prescribed antibiotic ointment. Do not pick the scab; let it fall off naturally."
    },
    faqs: [
      {
        q: "Will it leave a scar?",
        a: "CO2 laser and RF cautery are highly precise, minimizing thermal damage. A tiny, faint flat mark may remain, which fades to blend with surrounding skin over a few months."
      },
      {
        q: "Does the growth grow back?",
        a: "Once fully removed down to the root, individual moles or tags rarely return. However, genetic tendencies may cause new tags to form elsewhere over time."
      }
    ]
  },
  {
    id: "laser-treatments",
    title: "Laser Treatments",
    shortDesc: "Safe and effective solutions for various skin and hair concerns.",
    category: "laser",
    iconName: "Flame",
    imageUrl: new URL('../assets/lasertreatments.png', import.meta.url).href,
    sessionInfo: {
      duration: "30 - 60 mins",
      downtime: "Varies (0 to 3 days depending on target)",
      sessions: "3 - 6 sessions",
      interval: "4 weeks"
    },
    fullDesc: "We house a suite of advanced, US-FDA approved laser technologies to address diverse concerns. From vascular lasers that treat spider veins and redness, to resurfacing lasers that refine deep lines, and toning lasers that treat pigmentation, our laser treatments are customized. Dr. Ketaki calibrates wavelengths, pulse widths, and cooling mechanisms to achieve clinical efficacy while maintaining skin safety.",
    benefits: [
      "Precision targeting of specific skin depths and targets (pigment, water, hemoglobin)",
      "High safety profile with advanced contact-cooling systems",
      "Treats complex concerns like vascular lesions, birthmarks, and deep pores",
      "Clinically proven results backed by dermatology research"
    ],
    whatToExpect: {
      before: "Avoid active retinoids and sunbeds for 5 days. Ensure skin is not tanned.",
      during: "The skin is cleansed, and protective eyewear is provided. Cooling gel is applied, and the laser pulses are delivered. Sensation varies from cold to warm snaps.",
      after: "Follow specific post-treatment instructions, which usually include gentle cleansing, barrier repair cream, and strict sunscreen."
    },
    faqs: [
      {
        q: "Are lasers safe for dark skin?",
        a: "Yes, when using the correct wavelengths (like Long-Pulsed Nd:YAG or specific Q-switched profiles). Dr. Ketaki specializes in safe laser treatments for Indian skin types."
      },
      {
        q: "What is the recovery time?",
        a: "For non-ablative toning lasers, there is zero downtime. For ablative resurfacing, expect mild redness, peeling, or swelling for 2-4 days."
      }
    ]
  },
  {
    id: "scar-reduction",
    title: "Scar Reduction",
    shortDesc: "Minimize scars with advanced laser and microneedling procedures.",
    category: "laser",
    iconName: "Scissors",
    imageUrl: new URL('../assets/scarreduction.png', import.meta.url).href,
    sessionInfo: {
      duration: "45 - 60 mins",
      downtime: "2 - 4 days of redness and swelling",
      sessions: "4 - 6 sessions",
      interval: "4 weeks"
    },
    fullDesc: "Whether from acne, surgery, or injury, scars can impact skin texture and confidence. Our Scar Reduction program combines advanced modalities like Fractional CO2 Laser Resurfacing, Microneedling Radiofrequency (MNRF), and subcision. These treatments break down dense, fibrous scar tissue and stimulate the production of organized, healthy collagen, plumping depressed scars and smoothing out uneven surfaces.",
    benefits: [
      "Reduces depth of pitted acne scars (boxcar, rolling, ice-pick)",
      "Smoothes surgical or traumatic scars",
      "Improves overall skin texture and uniformity",
      "Combined treatment plans to address multiple scar types"
    ],
    whatToExpect: {
      before: "Stop using retinols or peeling agents 5 days prior. Ensure no active acne in the area.",
      during: "Numbing cream is applied. The laser or MNRF energy is delivered. You will feel heat and a prickling sensation. Cold compresses are applied immediately after.",
      after: "Expect redness, swelling, and tiny grid-like marks or scabs. Apply healing creams. Do not scrub or peel the skin."
    },
    faqs: [
      {
        q: "Can a scar be completely erased?",
        a: "While a scar cannot be 100% erased to match original skin, modern treatments can improve scar appearance, depth, and texture by 70-80%, making them much less noticeable."
      },
      {
        q: "Is it suitable for old scars?",
        a: "Yes, older scars can still be treated, though younger scars that are still remodeling may respond slightly faster."
      }
    ]
  }
];
