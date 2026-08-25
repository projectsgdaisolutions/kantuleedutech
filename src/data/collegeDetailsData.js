/*
 * College detail information keyed by university ID.
 *
 * The keys match the `id` field in both:
 *   - src/data/universitiesData.js
 *   - the kyrgyzstanUniversities array inside FeaturedUniversities.jsx
 *
 * Any university card on the Home page can look up its
 * expanded detail panel data from this map.
 */

export const collegeDetails = {
  /* ======================================================
     RUSSIA
  ====================================================== */

  bsmu: {
    type: "State Medical University",
    recognition: "NMC / WHO Approved",
    description:
      "Bashkir State Medical University is a leading medical university in Russia offering comprehensive medical education, modern simulation laboratories and extensive clinical training.",
    highlights: [
      "Recognized by WHO, NMC and International Medical Councils",
      "High-tech Simulation and Surgical Training Center",
      "Over 8,000+ Students including International Aspirants",
      "Affordable Tuition and University Hostel Facilities",
      "English-Medium MBBS / General Medicine Program",
    ],
    admission: "NEET Qualified / Direct Merit",
    duration: "6 Years",
    medium: "English",
  },

  susmu: {
    type: "State Medical University",
    recognition: "NMC / WHO Approved",
    description:
      "An established state medical institution offering structured clinical education and research facilities for international students.",
    highlights: [
      "Premier Medical University in Chelyabinsk Region",
      "Modern Anatomy and Pathology Laboratories",
      "Affiliated Multi-Specialty Teaching Hospitals",
      "Comprehensive Practical and Clinical Exposure",
      "Comfortable On-Campus International Hostels",
    ],
    admission: "NEET Qualified / Direct Merit",
    duration: "6 Years",
    medium: "English",
  },

  ncsa: {
    type: "State Academy",
    recognition: "NMC / WHO Approved",
    description:
      "North Caucasus State Academy provides high quality medical and technical education with dedicated clinical departments for international medical aspirants.",
    highlights: [
      "NMC & WHO Recognized Medical Degree",
      "Strong Emphasis on Early Clinical Practice",
      "Affordable Living Expenses and Tuition",
      "Supportive International Student Community",
      "Modern Digital Classrooms and Libraries",
    ],
    admission: "NEET Qualified",
    duration: "6 Years",
    medium: "English",
  },

  rsmu: {
    type: "State Medical University",
    recognition: "NMC / WHO Approved",
    description:
      "Named after academician I.P. Pavlov, Ryazan State Medical University is a globally recognized institution with extensive medical research programs.",
    highlights: [
      "One of Russia's Oldest and Reputed Medical Schools",
      "Full English-Medium 6-Year MBBS Curriculum",
      "Extensive Clinical Base in City Hospitals",
      "High Passing Rate in Licensing Examinations",
      "Active Student Life and Research Societies",
    ],
    admission: "NEET Qualified",
    duration: "6 Years",
    medium: "English",
  },

  vsmu: {
    type: "State Medical University",
    recognition: "NMC / WHO Approved",
    description:
      "Voronezh State Medical University is a distinguished center of medical education and science with over 100 years of academic legacy.",
    highlights: [
      "Centenary Medical Institution with High Reputation",
      "Advanced Diagnostic and Clinical Training Centers",
      "Multinational Student Body from over 50 Countries",
      "Experienced Clinical Faculty and Professors",
      "WHO and NMC Approved Medical Curriculum",
    ],
    admission: "NEET Qualified",
    duration: "6 Years",
    medium: "English",
  },

  ysmu: {
    type: "State Medical University",
    recognition: "NMC / WHO Approved",
    description:
      "Yaroslavl State Medical University is a prominent regional healthcare education hub offering excellent clinical internships and theoretical foundation.",
    highlights: [
      "Recognized by NMC, WHO and International Boards",
      "Modern Clinical Simulation Complex",
      "Large Network of Regional Clinical Hospitals",
      "High Quality of Life and Safe Environment",
      "Continuous Guidance and Mentorship for Foreign Students",
    ],
    admission: "NEET Qualified",
    duration: "6 Years",
    medium: "English",
  },

  /* ======================================================
     KYRGYZSTAN
  ====================================================== */

  ihsm: {
    type: "International Medical School",
    recognition: "NMC / WHO / FAIMER",
    description:
      "IHSM Bishkek is Kyrgyzstan's premier international medical school, specifically established for foreign students with 100% English medium instruction.",
    highlights: [
      "Top Choice for Indian Students in Kyrgyzstan",
      "100% English Medium Curriculum",
      "Own Multi-profile Hospital and Clinical Bases",
      "Indian Mess, Food and Dedicated Hostel Facilities",
      "Strong Preparation for NExT / FMGE and USMLE",
    ],
    admission: "NEET Qualified / Direct",
    duration: "5 Years",
    medium: "English",
  },

  "kyrgyzstan-ihsm": {
    type: "International Medical School",
    recognition: "NMC / WHO / FAIMER",
    description:
      "IHSM Bishkek is Kyrgyzstan's premier international medical school, specifically established for foreign students with 100% English medium instruction.",
    highlights: [
      "Top Choice for Indian Students in Kyrgyzstan",
      "100% English Medium Curriculum",
      "Own Multi-profile Hospital and Clinical Bases",
      "Indian Mess, Food and Dedicated Hostel Facilities",
      "Strong Preparation for NExT / FMGE and USMLE",
    ],
    admission: "NEET Qualified / Direct",
    duration: "5 Years",
    medium: "English",
  },

  "ksmu-kg": {
    type: "Government Medical Academy",
    recognition: "NMC / WHO Approved",
    description:
      "The oldest and most prestigious state medical academy in Kyrgyzstan, named after I.K. Akhunbaev, providing deep clinical training.",
    highlights: [
      "Kyrgyzstan's Oldest Government Medical Academy",
      "Leading Medical Research Center in Central Asia",
      "High Inflow of Clinical Cases in State Hospitals",
      "NMC, WHO & UNESCO Recognized",
      "Comprehensive Library and Digital Anatomy Resources",
    ],
    admission: "NEET Qualified",
    duration: "5 to 6 Years",
    medium: "English",
  },

  "kyrgyzstan-osh-state-university": {
    type: "National State University",
    recognition: "NMC / WHO Approved",
    description:
      "Osh State University Medical Faculty is a major public university in southern Kyrgyzstan known for its vast campus and clinical teaching hospitals.",
    highlights: [
      "One of the Largest Public Universities in Central Asia",
      "Extensive Clinical Rotations in Teaching Hospitals",
      "Affordable Tuition and Low Cost of Living",
      "Experienced Academic Professors and Doctors",
      "Thousands of Indian Graduates Practicing Worldwide",
    ],
    admission: "NEET Qualified",
    duration: "5 to 6 Years",
    medium: "English",
  },

  "kyrgyzstan-asian-medical-institute": {
    type: "International Medical Institute",
    recognition: "NMC / WHO Approved",
    description:
      "Asian Medical Institute (ASMI) is situated in Kant and provides quality medical education with Indian faculty assistance and English medium curriculum.",
    highlights: [
      "Indian Faculty and Visiting Professors",
      "Indian Mess Providing Authentic Indian Food",
      "Affordable Complete Package with Hostels",
      "WHO and NMC Listed Medical Degree",
      "Safe Campus with 24/7 Security and Support",
    ],
    admission: "NEET Qualified / Direct",
    duration: "5 Years",
    medium: "English",
  },

  /* ======================================================
     KAZAKHSTAN
  ====================================================== */

  krmu: {
    type: "Private Medical University",
    recognition: "NMC / WHO Approved",
    description:
      "Kazakh Russian Medical University is a leading medical institution in Almaty offering modern 5-year MBBS programs with clinical training.",
    highlights: [
      "5-Year Direct MBBS Program Option",
      "Located in Almaty — Kazakhstan's Educational Capital",
      "Advanced Simulation Training Center",
      "NMC & WHO Recognized Globally",
      "Indian Food and Supervised Hostels Available",
    ],
    admission: "NEET Qualified",
    duration: "5 Years",
    medium: "English",
  },

  cism: {
    type: "International Medical School",
    recognition: "NMC / WHO Approved",
    description:
      "Caspian International School of Medicine offers European-standard medical education with high-tech laboratories and international clinical faculty.",
    highlights: [
      "Ultra-Modern Campus in Almaty",
      "Small Batch Sizes for Interactive Clinical Learning",
      "English Medium with Global Curriculum Standards",
      "Affiliation with Premier Hospitals in Almaty",
      "Active Student Support and International Mentorship",
    ],
    admission: "NEET Qualified",
    duration: "5 Years",
    medium: "English",
  },

  ksu: {
    type: "State University",
    recognition: "NMC / WHO Approved",
    description:
      "Kokshetau State University (Sh. Ualikhanov) provides high-quality medical education with extensive practical classes and affordable fees.",
    highlights: [
      "Government State University Accreditation",
      "Highly Affordable Tuition and Living Costs",
      "English Medium Medical Programs",
      "Practical Clinical Posting from 3rd Year Onwards",
      "Safe Campus Environment with Full Security",
    ],
    admission: "NEET Qualified",
    duration: "5 Years",
    medium: "English",
  },

  /* ======================================================
     GEORGIA
  ====================================================== */

  gau: {
    type: "Private University",
    recognition: "EU / WHO / NMC",
    description:
      "Georgian American University in Tbilisi follows an American and European medical curriculum with state-of-the-art simulation centers.",
    highlights: [
      "US and European Standard Medical Curriculum",
      "100% English Medium 6-Year MD Program",
      "Located in the Heart of Capital City Tbilisi",
      "USMLE & PLAB Preparation Integrated",
      "Recognized by WHO, WFME, NMC and ECFMG",
    ],
    admission: "NEET Qualified / Interview",
    duration: "6 Years",
    medium: "English",
  },

  eeu: {
    type: "Private University",
    recognition: "EU / WHO / NMC",
    description:
      "East European University is one of Georgia's most modern medical institutes with advanced simulation labs and international partnerships.",
    highlights: [
      "Ultra-Modern New Campus in Tbilisi",
      "Partnerships with European and UK Medical Centers",
      "High Practical Clinical Rotation Exposure",
      "Multicultural International Student Community",
      "Recognized by WHO, WFME, NMC and AMEE",
    ],
    admission: "NEET Qualified",
    duration: "6 Years",
    medium: "English",
  },

  alte: {
    type: "Private University",
    recognition: "EU / WHO / NMC",
    description:
      "Alte University offers cutting-edge medical training with high-tech clinical simulation and hospital tie-ups across Tbilisi.",
    highlights: [
      "Over 20+ Years of Academic Excellence in Georgia",
      "Affiliation with Leading Georgian Hospitals & Clinics",
      "Interactive Clinical Learning & Modern Laboratories",
      "English Medium MD Program Aligned with EU Standards",
      "Safe, Vibrant and Friendly European Living Experience",
    ],
    admission: "NEET Qualified",
    duration: "6 Years",
    medium: "English",
  },

  /* ======================================================
     VIETNAM
  ====================================================== */

  ctump: {
    type: "Public Medical University",
    recognition: "WHO / NMC Aligned",
    description:
      "Can Tho University of Medicine and Pharmacy is a premier state medical institution in the Mekong Delta region with high patient clinical exposure.",
    highlights: [
      "Top Public Medical University in Southern Vietnam",
      "Vast Teaching Hospital with Thousands of In-Patients",
      "English Medium General Medicine Program",
      "Affordable Tuition and Very Low Living Expenses",
      "Safe, Peaceful and Welcoming Vietnamese Culture",
    ],
    admission: "NEET Qualified",
    duration: "6 Years",
    medium: "English",
  },

  dtu: {
    type: "Private University",
    recognition: "WHO / NMC Aligned",
    description:
      "Duy Tan University in coastal Da Nang is ranked among Vietnam's top private universities with modern health sciences faculties.",
    highlights: [
      "Top Ranked University in Da Nang Coastal City",
      "Modern Medical Simulation and Digital Anatomy Labs",
      "International Partnerships with US Medical Schools",
      "Direct Flight Connectivity and Low Travel Cost to India",
      "High Clinical Practical Focus in Affiliated Hospitals",
    ],
    admission: "NEET Qualified",
    duration: "6 Years",
    medium: "English",
  },
};
