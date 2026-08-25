import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Info,
  Home,
  UtensilsCrossed,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Building2,
  FileText,
  Globe2,
  Sparkles,
  ListChecks,
  Wallet,
  Briefcase,
  ShieldCheck,
  ChevronDown,
  X,
  MapPin,
} from "lucide-react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { countryCollegesMap } from "../data/collegesData";

function Programs() {
  const navigate = useNavigate();

  /* =========================================================
     PAGE SCROLL RESET
  ========================================================= */

  useEffect(() => {
    const resetPageScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetPageScroll();
    requestAnimationFrame(resetPageScroll);
  }, []);

  /* =========================================================
     COUNTRY DATA
  ========================================================= */

  const countries = [
    {
      id: "india",
      code: "IN",
      flagCode: "in",
      title: "MBBS in India",
      tagline: "Medical Education in India",
      accentColor: "#079ac7",
      badge: "Top Choice",
      meta: {
        duration: "5.5 Years",
        recognition: "NMC / WHO",
        medium: "English",
        admission: "NEET Qualified",
      },
      content: {
        intro:
          "India offers medical education through government, private, and deemed universities with world-class clinical infrastructure and extensive patient exposure.",

        whyStudy: [
          "Recognized Medical Degrees (NMC / WHO)",
          "Affordable Tuition in Govt Medical Colleges",
          "Advanced Multispecialty Hospital Infrastructure",
          "Distinguished Faculty & Experienced Clinicians",
          "Direct NEET-Based Merit Admission Process",
          "Strong Pan-India Alumni & Residency Network",
        ],

        eligibility: [
          "Minimum 50% marks in PCB in 12th Grade (40% for reserved categories)",
          "NEET qualification is mandatory",
          "Minimum age 17 years by Dec 31 of admission year",
          "Valid identification and domicile documents",
        ],

        admissionProcess: [
          "NEET Qualification & Rank Card",
          "MCC / State Counselling Registration",
          "College Choice Filling & Locking",
          "Seat Allotment & Document Verification",
          "Fee Payment & Final Enrollment",
        ],

        documents: [
          "10th & 12th Mark Sheets and Passing Certificates",
          "NEET Scorecard & Admit Card",
          "Provisional Allotment Letter",
          "Passport / Aadhaar Card ID Proof",
          "Medical Fitness Certificate & Photographs",
        ],

        careerOpportunities: [
          "Clinical Practice in Top Government & Private Hospitals",
          "Postgraduate Medical Specialization (MD / MS / DNB)",
          "Hospital Management & Healthcare Administration",
          "Biomedical and Clinical Healthcare Research",
          "Public Health Services & UPSC Combined Medical Services",
        ],
      },
    },

    {
      id: "russia",
      code: "RU",
      flagCode: "ru",
      title: "MBBS in Russia",
      tagline: "International Medical Education",
      accentColor: "#075b91",
      badge: "Popular Hub",
      meta: {
        duration: "6 Years",
        recognition: "WHO / NMC / ECFMG",
        medium: "English",
        admission: "NEET Qualified",
      },
      content: {
        intro:
          "Russia is one of the world's most sought-after destinations for international medical aspirants, with established universities, modern laboratories and extensive clinical exposure.",

        whyStudy: [
          "Globally Recognized Medical Universities",
          "Affordable Tuition & Living Costs",
          "English-Medium Programs",
          "Advanced Medical Simulation & Practical Labs",
          "High Clinical Patient Exposure",
          "Multicultural International Student Community",
        ],

        eligibility: [
          "Minimum 50% aggregate in PCB in 12th grade",
          "NEET qualification required for Indian students",
          "Minimum age 17 years",
          "Valid International Passport",
        ],

        universities: [
          "Bashkir State Medical University",
          "South Ural State Medical University",
          "North Caucasus State Academy",
          "Ryazan State Medical University",
          "Voronezh State Medical University",
          "Yaroslavl State Medical University",
        ],

        admissionProcess: [
          "Profile Assessment & University Selection",
          "Direct University Application",
          "Admission Letter Issuance",
          "Ministry Invitation & Visa Processing",
          "Travel & Pre-departure Guidance",
          "Airport Pickup & Hostel Assistance",
        ],

        documents: [
          "10th & 12th Mark Sheets",
          "NEET Scorecard",
          "Valid International Passport",
          "HIV / Medical Fitness Certificate",
          "Passport-size Photographs",
        ],

        careerOpportunities: [
          "NExT / FMGE License for Medical Practice in India",
          "USMLE Pathway for USA Residency",
          "PLAB / GMC Pathway for UK",
          "Postgraduate Medical Education Worldwide",
        ],
      },
    },

    {
      id: "kyrgyzstan",
      code: "KG",
      flagCode: "kg",
      title: "MBBS in Kyrgyzstan",
      tagline: "Central Asian Medical Hub",
      accentColor: "#0ea5e9",
      badge: "High ROI",
      meta: {
        duration: "5 to 6 Years",
        recognition: "WHO / NMC / FAIMER",
        medium: "English",
        admission: "Direct / NEET",
      },
      content: {
        intro:
          "Kyrgyzstan provides budget-friendly medical education with English-medium MBBS programs, affordable living expenses and international student support.",

        whyStudy: [
          "Highly Affordable Tuition & Living Expenses",
          "English-Medium Medical Curriculum",
          "WHO, NMC & International Recognition",
          "Experienced Medical Faculty",
          "Indian Food & Student Support",
          "Safe Student Environment",
        ],

        eligibility: [
          "Minimum 50% PCB in 12th Standard",
          "NEET qualification for Indian students",
          "Minimum age 17 years",
          "Valid Passport",
        ],

        universities: [
          "International Higher School of Medicine",
          "Kyrgyz State Medical Academy",
          "Jalal-Abad State University",
          "Osh State University",
        ],

        admissionProcess: [
          "Profile Assessment",
          "University Application",
          "Admission Confirmation",
          "Visa & Travel Assistance",
          "Hostel Settlement",
        ],

        documents: [
          "10th & 12th Mark Sheets",
          "NEET Scorecard",
          "Valid Passport",
          "Medical Fitness Report",
          "Passport-size Photos",
        ],

        careerOpportunities: [
          "NExT / FMGE Licensure in India",
          "USMLE / PLAB International Pathways",
          "Postgraduate Medical Specialization",
        ],
      },
    },

    {
      id: "kazakhstan",
      code: "KZ",
      flagCode: "kz",
      title: "MBBS in Kazakhstan",
      tagline: "Modern Medical Education",
      accentColor: "#0284c7",
      badge: "5-Yr Option",
      meta: {
        duration: "5 to 6 Years",
        recognition: "WHO / WFME / NMC",
        medium: "English",
        admission: "Direct / NEET",
      },
      content: {
        intro:
          "Kazakhstan offers modern medical education with advanced infrastructure, clinical rotations and affordable international medical programs.",

        whyStudy: [
          "Direct 5-Year MBBS Program Options",
          "Affordable Tuition Fees",
          "Globally Recognized Degrees",
          "Modern Simulation Centers",
          "Extensive Clinical Training",
          "Safe & Modern Campuses",
        ],

        eligibility: [
          "Minimum 50% aggregate in PCB",
          "Valid NEET qualification",
          "Minimum age 17 years",
          "Valid Passport",
        ],

        universities: [
          "Kazakh National Medical University",
          "Kazakh Russian Medical University",
          "Caspian International School of Medicine",
          "Semey State Medical University",
          "Kokshetau State University",
        ],

        admissionProcess: [
          "Profile Evaluation",
          "Application Submission",
          "Admission & Invitation Letter",
          "Student Visa Processing",
          "Travel & Campus Onboarding",
        ],

        documents: [
          "10th & 12th Mark Sheets",
          "NEET Scorecard",
          "Valid Passport",
          "Medical Certificate",
          "Passport Photographs",
        ],

        careerOpportunities: [
          "NExT / FMGE",
          "USMLE & PLAB Licensing",
          "Postgraduate Medical Specializations",
        ],
      },
    },

    {
      id: "georgia",
      code: "GE",
      flagCode: "ge",
      title: "MBBS in Georgia",
      tagline: "European Medical Education",
      accentColor: "#e11d48",
      badge: "European Standard",
      meta: {
        duration: "6 Years",
        recognition: "EU / WHO / NMC",
        medium: "English",
        admission: "NEET Qualified",
      },
      content: {
        intro:
          "Georgia provides European-standard medical education with English-medium curriculum, modern university hospitals and international student infrastructure.",

        whyStudy: [
          "European Education Standards",
          "Globally Recognized Degrees",
          "English-Medium Education",
          "Strong Clinical Training",
          "Affordable European Tuition",
          "Safe International Student Environment",
        ],

        eligibility: [
          "Minimum 50% aggregate in PCB",
          "NEET qualification required",
          "Minimum age 17 years",
          "Valid Passport",
          "University interview where applicable",
        ],

        universities: [
          "Georgian American University",
          "East European University",
          "Alte University",
          "Batumi Shota Rustaveli State University",
          "New Vision University",
        ],

        admissionProcess: [
          "Profile Assessment",
          "University Application",
          "University Interview",
          "Recognition & Documentation",
          "Visa Processing",
          "Travel & Accommodation Support",
        ],

        documents: [
          "10th & 12th Mark Sheets",
          "NEET Scorecard",
          "Valid Passport",
          "Medical Fitness Certificate",
          "Photographs",
        ],

        careerOpportunities: [
          "NExT / FMGE",
          "EU Medical Licensing",
          "USMLE / PLAB Pathways",
          "International Clinical Education",
        ],
      },
    },

    {
      id: "vietnam",
      code: "VN",
      flagCode: "vn",
      title: "MBBS in Vietnam",
      tagline: "Growing Medical Education Hub",
      accentColor: "#059669",
      badge: "Emerging Hub",
      meta: {
        duration: "6 Years",
        recognition: "WHO / NMC Aligned",
        medium: "English",
        admission: "NEET Qualified",
      },
      content: {
        intro:
          "Vietnam offers growing medical education opportunities with modern university hospitals, affordable costs and increasing international exposure.",

        whyStudy: [
          "Budget-Friendly Medical Education",
          "Modern Medical Universities",
          "High Patient Exposure",
          "Safe Student Environment",
          "Convenient Connectivity to India",
          "International Medical Curriculum",
        ],

        eligibility: [
          "Minimum 50% in PCB",
          "NEET qualification mandatory",
          "Minimum age 17 years",
          "Valid International Passport",
        ],

        universities: [
          "Can Tho University of Medicine and Pharmacy",
          "Duy Tan University",
          "Hong Bang International University",
        ],

        admissionProcess: [
          "Profile Assessment",
          "University Application",
          "Admission Letter",
          "Visa Guidance",
          "Travel & Hostel Support",
        ],

        documents: [
          "10th & 12th Mark Sheets",
          "NEET Scorecard",
          "Valid Passport",
          "Medical Fitness Certificate",
          "Photographs",
        ],

        careerOpportunities: [
          "NExT / FMGE",
          "USMLE / PLAB",
          "Postgraduate Medical Education",
        ],
      },
    },

    {
      id: "nepal",
      code: "NP",
      flagCode: "np",
      title: "MBBS in Nepal",
      tagline: "South Asian Medical Education",
      accentColor: "#ea580c",
      badge: "No Visa Hassle",
      meta: {
        duration: "5.5 Years",
        recognition: "NMC / WHO",
        medium: "English",
        admission: "MEC / NEET",
      },
      content: {
        intro:
          "Nepal is a convenient medical education destination for Indian students with strong cultural familiarity and easy connectivity to India.",

        whyStudy: [
          "Curriculum Similar to Indian Medical Education",
          "No Visa Requirement for Indian Citizens",
          "Strong Clinical Training",
          "Easy Connectivity to India",
          "Familiar Cultural Environment",
        ],

        eligibility: [
          "Valid NEET qualification",
          "Minimum 50% aggregate in PCB",
          "Minimum age 17 years",
          "Valid Passport / Voter ID",
        ],

        admissionProcess: [
          "Medical Counselling",
          "MEC Registration",
          "College Selection",
          "Admission Confirmation",
          "Campus Enrollment",
        ],

        documents: [
          "10th & 12th Mark Sheets",
          "NEET Scorecard",
          "Passport / Indian Voter ID",
          "Medical Fitness Certificate",
          "Photographs",
        ],

        careerOpportunities: [
          "Medical Practice in India",
          "Clinical Practice in Nepal",
          "USMLE / PLAB / AMC Pathways",
          "Postgraduate MD / MS",
        ],
      },
    },

    {
      id: "philippines",
      code: "PH",
      flagCode: "ph",
      title: "MBBS in Philippines",
      tagline: "Asian Medical Opportunities",
      accentColor: "#0891b2",
      badge: "USMD Aligned",
      meta: {
        duration: "5.5 to 6 Years",
        recognition: "US-Based MD / WHO",
        medium: "100% English",
        admission: "NEET Qualified",
      },
      content: {
        intro:
          "The Philippines follows a US-based medical education model with English-medium instruction and international career pathways.",

        whyStudy: [
          "American Medical Education System",
          "100% English Medium",
          "USMLE Pathway",
          "Affordable Tuition",
          "Clinical Hospital Training",
          "International Student Environment",
        ],

        eligibility: [
          "Minimum 50% in PCB",
          "Valid NEET qualification",
          "Minimum age 17 years",
          "Valid Passport",
        ],

        admissionProcess: [
          "Profile Assessment",
          "College Selection",
          "Application Submission",
          "Acceptance Letter",
          "SSP & Visa Guidance",
          "Travel & Hostel Support",
        ],

        documents: [
          "10th & 12th Mark Sheets",
          "NEET Scorecard",
          "Valid Passport",
          "Medical Certificate",
          "Photographs",
        ],

        careerOpportunities: [
          "USMLE Pathways",
          "NExT / FMGE",
          "PLAB / AMC",
          "Global Medical Specialization",
        ],
      },
    },

    {
      id: "usa",
      code: "USA",
      flagCode: "us",
      title: "MBBS in USA & Other Destinations",
      tagline: "Global Medical Education",
      accentColor: "#1d4ed8",
      badge: "Residency Track",
      meta: {
        duration: "Global Pathways",
        recognition: "ECFMG / CAAM-HP",
        medium: "English",
        admission: "Custom Roadmap",
      },
      content: {
        intro:
          "Explore medical education pathways in the USA, Caribbean, UK and other international destinations with personalized admission guidance.",

        whyStudy: [
          "World-Class Medical Education",
          "International Residency Pathways",
          "Advanced Clinical Training",
          "Global Accreditation",
          "Research Opportunities",
          "International Career Options",
        ],

        eligibility: [
          "Varies by university and destination",
          "NEET may be required",
          "Strong academic record",
          "English proficiency where applicable",
          "Valid Passport",
        ],

        admissionProcess: [
          "Profile Assessment",
          "Destination Shortlisting",
          "Application Filing",
          "Interview Preparation",
          "Visa Guidance",
        ],

        careerOpportunities: [
          "US Medical Residency",
          "UK Medical Career",
          "International Fellowships",
          "Global Healthcare Research",
        ],
      },
    },
  ];

  /* =========================================================
     FEES
  ========================================================= */

  const countryFees = {
    india: {
      isDemo: true,
      tuition: {
        usd: "$5,000 – $25,000",
        inr: "₹4.80L – ₹24.00L",
      },
      hostel: {
        usd: "$500 – $1,500",
        inr: "₹48K – ₹1.44L",
      },
      food: {
        usd: "$1,000 – $2,000",
        inr: "₹96K – ₹1.92L",
      },
    },

    russia: {
      isDemo: true,
      tuition: {
        usd: "$3,500 – $6,000",
        inr: "₹3.36L – ₹5.76L",
      },
      hostel: {
        usd: "$800 – $1,500",
        inr: "₹76.8K – ₹1.44L",
      },
      food: {
        usd: "$1,500 – $2,500",
        inr: "₹1.44L – ₹2.40L",
      },
    },

    kyrgyzstan: {
      isDemo: false,
      tuition: {
        usd: "$3,000 – $5,000",
        inr: "₹2.88L – ₹4.80L",
      },
      hostel: {
        usd: "$800 – $1,200",
        inr: "₹76.8K – ₹1.15L",
      },
      food: {
        usd: "$1,500 – $2,000",
        inr: "₹1.44L – ₹1.92L",
      },
    },

    kazakhstan: {
      isDemo: false,
      tuition: {
        usd: "$3,500 – $6,000",
        inr: "₹3.36L – ₹5.76L",
      },
      hostel: {
        usd: "$800 – $1,500",
        inr: "₹76.8K – ₹1.44L",
      },
      food: {
        usd: "$1,500 – $2,500",
        inr: "₹1.44L – ₹2.40L",
      },
    },

    georgia: {
      isDemo: false,
      tuition: {
        usd: "$4,000 – $7,000",
        inr: "₹3.84L – ₹6.72L",
      },
      hostel: {
        usd: "$1,500 – $3,000",
        inr: "₹1.44L – ₹2.88L",
      },
      food: {
        usd: "$2,000 – $3,000",
        inr: "₹1.92L – ₹2.88L",
      },
    },

    vietnam: {
      isDemo: false,
      tuition: {
        usd: "$4,000 – $7,000",
        inr: "₹3.84L – ₹6.72L",
      },
      hostel: {
        usd: "$1,000 – $2,000",
        inr: "₹96K – ₹1.92L",
      },
      food: {
        usd: "$2,000 – $3,000",
        inr: "₹1.92L – ₹2.88L",
      },
    },

    nepal: {
      isDemo: true,
      tuition: {
        usd: "$5,000 – $8,000",
        inr: "₹4.80L – ₹7.68L",
      },
      hostel: {
        usd: "$800 – $1,500",
        inr: "₹76.8K – ₹1.44L",
      },
      food: {
        usd: "$1,200 – $2,000",
        inr: "₹1.15L – ₹1.92L",
      },
    },

    philippines: {
      isDemo: true,
      tuition: {
        usd: "$4,000 – $7,000",
        inr: "₹3.84L – ₹6.72L",
      },
      hostel: {
        usd: "$1,000 – $2,000",
        inr: "₹96K – ₹1.92L",
      },
      food: {
        usd: "$1,500 – $2,500",
        inr: "₹1.44L – ₹2.40L",
      },
    },

    usa: {
      isDemo: true,
      tuition: {
        usd: "$10,000 – $20,000",
        inr: "₹9.60L – ₹19.20L",
      },
      hostel: {
        usd: "$4,000 – $8,000",
        inr: "₹3.84L – ₹7.68L",
      },
      food: {
        usd: "$3,000 – $6,000",
        inr: "₹2.88L – ₹5.76L",
      },
    },
  };



  /* =========================================================
     URL + ACTIVE COUNTRY
  ========================================================= */

  const [searchParams, setSearchParams] = useSearchParams();

  const getCountryFromUrl = () => {
    const countryFromUrl = searchParams.get("country")?.toLowerCase();

    return countries.some(
      (country) => country.id === countryFromUrl
    )
      ? countryFromUrl
      : "india";
  };

  const [activeId, setActiveId] =
    useState(getCountryFromUrl);

  const active =
    countries.find(
      (country) => country.id === activeId
    ) || countries[0];

  const activeFees = countryFees[active.id];

  useEffect(() => {
    const countryFromUrl =
      searchParams.get("country")?.toLowerCase();

    if (
      countryFromUrl &&
      countries.some(
        (country) => country.id === countryFromUrl
      )
    ) {
      setActiveId(countryFromUrl);
    }
  }, [searchParams]);

  /* =========================================================
     ACCORDION
  ========================================================= */

  const sectionOrder = [
    "whyStudy",
    "courseStructure",
    "eligibility",
    "universities",
    "admissionProcess",
    "documents",
    "careerOpportunities",
  ];

  const sectionLabel = {
    whyStudy: "Why Study Here",
    courseStructure: "Course Structure",
    eligibility: "Eligibility Criteria",
    universities: "Featured Universities",
    admissionProcess: "Admission Process",
    documents: "Required Documents",
    careerOpportunities: "Career Opportunities",
  };

  const sectionIcon = {
    whyStudy: Sparkles,
    courseStructure: GraduationCap,
    eligibility: CheckCircle2,
    universities: Building2,
    admissionProcess: ListChecks,
    documents: FileText,
    careerOpportunities: Briefcase,
  };

  const availableSections =
    sectionOrder.filter(
      (key) =>
        Array.isArray(active.content[key]) &&
        active.content[key].length > 0
    );

  const [openSection, setOpenSection] =
    useState(
      availableSections[0] || null
    );

  useEffect(() => {
    setOpenSection(
      availableSections[0] || null
    );
  }, [activeId]);

  /* =========================================================
     COLLEGE LIST
  ========================================================= */

  const activeColleges =
    countryCollegesMap[active.id] || [];

  /* =========================================================
     FEE TABLE
  ========================================================= */

  function FeeTable({ fees }) {
    if (!fees) return null;

    const feeRows = [
      {
        label: "Tuition Fees",
        icon: GraduationCap,
        data: fees.tuition,
      },
      {
        label: "Hostel / Accommodation",
        icon: Home,
        data: fees.hostel,
      },
      {
        label: "Food & Living",
        icon: UtensilsCrossed,
        data: fees.food,
      },
    ];

    return (
      <div className="fee-table-panel">

        <div className="fee-table-top">

          <div className="fee-table-top-icon">
            <Wallet size={16} />
          </div>

          <div className="fee-table-top-text">
            <p className="fee-table-subtitle">
              Estimated MBBS Fee Structure
            </p>

            <p className="fee-table-sub2">
              Approximate annual expenses
            </p>
          </div>

          <span className="fee-table-badge">
            {fees.isDemo
              ? "DEMO ESTIMATE"
              : "INDICATIVE FEES"}
          </span>

        </div>

        <div className="fee-rows">

          {feeRows.map((row) => {
            const Icon = row.icon;

            return (
              <div
                className="fee-row"
                key={row.label}
              >

                <div className="fee-row-left">

                  <span className="ft-expense-icon">
                    <Icon size={15} />
                  </span>

                  <span className="fee-row-label">
                    {row.label}
                  </span>

                </div>

                <div className="fee-row-right">

                  <span className="ft-usd-cell">
                    {row.data.usd}
                    <em>/yr</em>
                  </span>

                  <span className="ft-inr-cell">
                    ≈ {row.data.inr}
                  </span>

                </div>

              </div>
            );
          })}

        </div>

        <div className="fee-table-note">

          <Info size={12} />

          <span>
            {fees.isDemo
              ? "Demo estimate • To be updated"
              : "Indicative fees • Subject to university, city & intake"}
          </span>

        </div>

      </div>
    );
  }

  /* =========================================================
     COUNTRY COLLEGES (REUSABLE FOR ALL DESTINATIONS)
  ========================================================= */

  function CountryColleges() {
    const currentTitle =
      active.id === "usa"
        ? "Colleges in USA & Other Destinations"
        : `Colleges in ${active.title.replace("MBBS in ", "")}`;

    const currentSubtitle =
      active.id === "usa"
        ? "Explore top medical universities across the USA, Caribbean and global destinations."
        : `Explore featured medical colleges and universities in ${active.title.replace("MBBS in ", "")}.`;

    if (!activeColleges || activeColleges.length === 0) return null;

    return (
      <section className="colleges-section">

        <div className="colleges-section-header">

          <div>

            <div className="colleges-eyebrow">
              <Building2 size={13} />
              EXPLORE MEDICAL COLLEGES
            </div>

            <h3>
              {currentTitle}
            </h3>

            <p>
              {currentSubtitle}
            </p>

          </div>

          <button
            type="button"
            className="view-all-colleges"
            onClick={() =>
              navigate(`/university/${activeColleges[0].id}`)
            }
          >
            View All Colleges
            <ArrowRight size={14} />
          </button>

        </div>

        <div className="college-cards-scroll">

          {activeColleges.map(
            (college) => {

              return (
                <motion.article
                  key={college.id}
                  className="college-card"
                  whileHover={{
                    y: -4,
                  }}
                >

                  <div className="college-image-wrap">

                    <img
                      src={college.image}
                      alt={college.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />

                    <div className="college-image-overlay" />

                    <span className="college-type-pill">
                      {college.type}
                    </span>

                  </div>

                  <div className="college-card-content">

                    <h4>
                      {college.name}
                    </h4>

                    <div className="college-location">

                      <MapPin size={13} />

                      <span>
                        {college.location}
                      </span>

                    </div>

                    <div className="college-badges">

                      {college.recognition && (
                        <span className="college-badge green">
                          <CheckCircle2 size={11} />
                          {college.recognition}
                        </span>
                      )}

                    </div>

                    <Link
                      to={`/university/${college.id}`}
                      className="college-details-btn"
                    >

                      <span>
                        View Details
                      </span>

                      <ArrowRight size={14} />

                    </Link>

                  </div>

                </motion.article>
              );
            }
          )}

        </div>

      </section>
    );
  }

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      <style>{`

        /* =====================================================
           GLOBAL SAFETY
        ===================================================== */

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html,
        body {
          max-width: 100%;
          overflow-x: hidden;
        }

        body {
          margin: 0;
          scrollbar-color: #0a78b5 #e8f2f8;
        }

        /* =====================================================
           PAGE
        ===================================================== */

        .programs-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 18px 14px 56px;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 10% 18%,
              rgba(8,168,213,.13),
              transparent 25%
            ),
            radial-gradient(
              circle at 90% 10%,
              rgba(7,59,130,.10),
              transparent 27%
            ),
            linear-gradient(
              180deg,
              #f8fcff 0%,
              #eef6fb 52%,
              #f8fbfe 100%
            );
        }

        .programs-container {
          position: relative;
          z-index: 1;
          width: min(1240px, 100%);
          max-width: 100%;
          margin: 0 auto;
          min-width: 0;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .programs-hero {
          width: 100%;

          margin-bottom: 32px;

          padding:
            clamp(42px, 7vw, 82px)
            20px
            32px;

          text-align: center;

          position: relative;
          overflow: hidden;

          border-radius: 26px;

          background:
            linear-gradient(
              90deg,
              rgba(248,252,255,.98),
              rgba(248,252,255,.72)
            );

          border:
            1px solid #e1edf5;

          box-shadow:
            0 24px 65px -48px rgba(7,59,130,.42);
        }

        .programs-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          color: #079ac7;

          background: #ffffff;

          border:
            1px solid rgba(8,168,213,.25);

          padding:
            7px
            16px;

          border-radius: 999px;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .1em;

          margin-bottom: 17px;
        }

        .programs-hero-eyebrow svg {
          width: 13px;
          height: 13px;
        }

        .programs-hero h1 {
          margin:
            0
            0
            12px;

          color: #09285f;

          font-size:
            clamp(31px, 6vw, 58px);

          line-height: 1.13;

          font-weight: 800;

          letter-spacing: -.035em;
        }

        .programs-hero h1 span {
          display: block;

          background:
            linear-gradient(
              110deg,
              #08a8d5,
              #073b82,
              #08a8d5
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;
        }

        .programs-hero p {
          max-width: 760px;

          margin: 0 auto;

          color: #556987;

          font-size: 14px;

          line-height: 1.75;
        }

        /* =====================================================
           TRUST
        ===================================================== */

        .hero-trust-strip {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 1px;

          max-width: 980px;

          margin:
            30px
            auto
            0;

          background: #e1ebf4;

          border:
            1px solid #ffffff;

          border-radius: 18px;

          overflow: hidden;
        }

        .hero-trust-item {
          min-height: 62px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          padding:
            10px;

          background:
            rgba(255,255,255,.85);

          text-align: center;
        }

        .hero-trust-icon {
          width: 28px;
          height: 28px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: #eff9fd;

          color: #08a8d5;

          flex-shrink: 0;
        }

        .hero-trust-icon svg {
          width: 14px;
          height: 14px;
        }

        .hero-trust-item > span:last-child {
          color: #09285f;

          font-size: 10.5px;

          font-weight: 700;

          line-height: 1.3;
        }

        /* =====================================================
           DESTINATION
        ===================================================== */

        .destinations-bar {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 10px;

          flex-wrap: wrap;

          margin-bottom: 10px;

          padding:
            0
            4px;
        }

        .destinations-bar-label {
          display: flex;

          align-items: center;

          gap: 8px;

          color: #09285f;

          font-size: 12px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: .06em;
        }

        .destinations-bar-label svg {
          color: #08a8d5;
        }

        .destinations-bar-hint {
          display: none;

          color: #7a8da3;

          font-size: 11px;

          font-weight: 600;
        }

        @media (min-width: 560px) {
          .destinations-bar-hint {
            display: block;
          }
        }

        .dest-cards-scroll {
          display: flex;

          gap: 12px;

          width: 100%;
          max-width: 100%;

          overflow-x: auto;
          overflow-y: hidden;

          padding:
            5px
            5px
            15px;

          margin:
            0
            0
            18px;

          scrollbar-width: auto;

          scrollbar-color:
            #0aa8d5
            #e7f1f7;

          -webkit-overflow-scrolling: touch;

          touch-action: pan-x;

          overscroll-behavior-x: contain;
        }

        .dest-cards-scroll::-webkit-scrollbar {
          height: 9px;
        }

        .dest-cards-scroll::-webkit-scrollbar-track {
          background: #e7f1f7;

          border-radius: 999px;
        }

        .dest-cards-scroll::-webkit-scrollbar-thumb {
          background:
            linear-gradient(
              90deg,
              #0aa8d5,
              #073b82
            );

          border-radius: 999px;
        }

        .dest-card {
          position: relative;

          flex:
            0 0 148px;

          min-width: 0;

          min-height: 116px;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 11px;

          padding:
            16px
            15px;

          border-radius: 19px;

          background: #ffffff;

          border:
            1px solid #e5eef5;

          cursor: pointer;

          text-align: left;

          font-family: inherit;

          box-shadow:
            0 12px 25px -18px
            rgba(7,59,130,.38);

          transition:
            .25s ease;
        }

        .dest-card:hover {
          transform: translateY(-3px);

          border-color:
            rgba(8,168,213,.42);
        }

        .dest-card.active {
          background:
            linear-gradient(
              145deg,
              #087fb8,
              #075b91 60%,
              #073b82
            );

          color: #ffffff;

          border-color: transparent;

          transform:
            translateY(-3px);

          box-shadow:
            0 22px 40px -20px
            rgba(7,59,130,.58);
        }

        .dest-card-top {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: space-between;
        }

        .dest-card-flag {
          width: 40px;
          height: 30px;

          border-radius: 9px;

          overflow: hidden;

          border:
            1px solid rgba(255,255,255,.9);

          box-shadow:
            0 6px 14px
            rgba(7,59,130,.14);
        }

        .dest-card-flag img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }

        .dest-card-check {
          width: 18px;
          height: 18px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #ffffff;

          color:
            var(--accent,#08a8d5);

          opacity: 0;

          transform:
            scale(.7);

          transition:
            .2s ease;
        }

        .dest-card.active
        .dest-card-check {
          opacity: 1;
          transform: scale(1);
        }

        .dest-card-title {
          margin:
            0
            0
            5px;

          color: #09285f;

          font-size: 12.5px;

          line-height: 1.3;

          font-weight: 800;
        }

        .dest-card.active
        .dest-card-title {
          color: #ffffff;
        }

        .dest-card-badge {
          display: inline-block;

          color:
            var(--accent,#08a8d5);

          background:
            #eef9fd;

          border-radius: 999px;

          padding:
            4px
            8px;

          font-size: 8.5px;

          font-weight: 800;
        }

        .dest-card.active
        .dest-card-badge {
          color: #ffffff;

          background:
            rgba(255,255,255,.16);
        }

        /* =====================================================
           MAIN DETAIL
           
           IMPORTANT FIX:
           minmax(0, ...) prevents right column overflow.
        ===================================================== */

        .detail-panel {
          position: relative;

          width: 100%;
          max-width: 100%;

          min-width: 0;

          overflow: hidden;

          border:
            1px solid rgba(211,228,240,.92);

          border-radius: 28px;

          background:
            linear-gradient(
              120deg,
              rgba(255,255,255,.98),
              rgba(248,252,255,.96)
            );

          box-shadow:
            0 30px 80px -48px
            rgba(7,59,130,.42);
        }

        .detail-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr);

          width: 100%;
          max-width: 100%;

          min-width: 0;
        }

        .detail-main,
        .detail-side,
        .detail-side-inner {
          min-width: 0;
          max-width: 100%;
        }

        @media (min-width: 900px) {
          .detail-grid {
            grid-template-columns:
              minmax(0, 1.55fr)
              minmax(300px, .95fr);
          }
        }

        @media (min-width: 1200px) {
          .detail-grid {
            grid-template-columns:
              minmax(0, 1.55fr)
              minmax(330px, .90fr);
          }
        }

        .detail-main {
          width: 100%;
          min-width: 0;

          padding:
            22px
            16px
            26px;
        }

        @media (min-width: 640px) {
          .detail-main {
            padding:
              30px
              30px
              28px;
          }
        }

        /* =====================================================
           RIGHT SIDEBAR
        ===================================================== */

        .detail-side {
          width: 100%;
          min-width: 0;
          max-width: 100%;

          padding:
            18px
            16px
            24px;

          background:
            linear-gradient(
              180deg,
              rgba(246,251,255,.86),
              rgba(255,255,255,.95)
            );

          border-top:
            1px solid #e4eef6;
        }

        @media (min-width: 640px) {
          .detail-side {
            padding:
              24px
              24px
              28px;
          }
        }

        @media (min-width: 900px) {
          .detail-side {
            padding:
              30px
              28px
              30px;

            border-top: 0;

            border-left:
              1px solid #e4eef6;
          }
        }

        .detail-side-inner {
          width: 100%;
          min-width: 0;
          max-width: 100%;
        }

        /* =====================================================
           DETAIL HEADER
        ===================================================== */

        .detail-header {
          display: flex;

          align-items: flex-start;

          gap: 14px;

          margin-bottom: 20px;

          padding-bottom: 18px;

          border-bottom:
            1px dashed #e3edf6;

          min-width: 0;
        }

        .detail-flag-big {
          width: 62px;
          height: 46px;

          flex:
            0 0 auto;

          border-radius: 13px;

          overflow: hidden;

          background: #ffffff;

          border:
            1px solid #e9f0f7;

          box-shadow:
            0 12px 26px -18px
            rgba(7,59,130,.5);
        }

        @media (min-width: 640px) {
          .detail-flag-big {
            width: 76px;
            height: 56px;
          }
        }

        .detail-flag-big img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .detail-title-wrap {
          min-width: 0;
          flex: 1;
        }

        .detail-badges {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 6px;

          margin-bottom: 7px;
        }

        .detail-badge,
        .detail-code-pill {
          display: inline-flex;

          align-items: center;

          padding:
            3px
            8px;

          border-radius: 999px;

          font-size: 9px;

          font-weight: 800;
        }

        .detail-code-pill {
          color: #079ac7;

          background:
            rgba(8,168,213,.08);

          border:
            1px solid
            rgba(8,168,213,.24);
        }

        .detail-panel h2 {
          margin:
            0
            0
            3px;

          color: #09285f;

          font-size:
            clamp(24px, 4vw, 38px);

          line-height: 1.15;

          font-weight: 800;

          letter-spacing: -.03em;
        }

        .detail-panel .tagline {
          margin: 0;

          color: #5f7a94;

          font-size: 12px;

          line-height: 1.5;
        }

        /* =====================================================
           META
        ===================================================== */

        .detail-meta-strip {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 1px;

          overflow: hidden;

          width: 100%;
          max-width: 100%;

          border:
            1px solid #e3edf6;

          border-radius: 16px;

          background:
            #e3edf6;

          margin-bottom: 20px;
        }

        @media (min-width: 500px) {
          .detail-meta-strip {
            grid-template-columns:
              repeat(4, 1fr);
          }
        }

        .meta-item {
          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 6px;

          padding:
            12px
            11px;

          background:
            #f8fbfe;
        }

        .meta-item-label {
          display: flex;

          align-items: center;

          gap: 5px;

          color: #7a8da3;

          font-size: 9px;

          font-weight: 700;

          text-transform: uppercase;
        }

        .meta-item-label svg {
          width: 12px;
          height: 12px;

          color:
            var(--accent,#08a8d5);

          flex-shrink: 0;
        }

        .meta-item-value {
          color: #09285f;

          font-size: 12px;

          font-weight: 800;

          line-height: 1.35;

          overflow-wrap: anywhere;
        }

        .detail-intro {
          margin:
            0
            0
            18px;

          color: #45597a;

          font-size: 13px;

          line-height: 1.75;
        }

        /* =====================================================
           ACCORDION
        ===================================================== */

        .accordion {
          width: 100%;

          min-width: 0;

          margin-top: 20px;
        }

        .accordion-item {
          width: 100%;

          min-width: 0;

          margin-bottom: 8px;

          padding:
            0
            9px;

          border:
            1px solid #e5eef5;

          border-radius: 15px;

          background:
            rgba(255,255,255,.76);
        }

        .accordion-trigger {
          width: 100%;

          min-width: 0;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 8px;

          padding:
            11px
            3px;

          border: 0;

          background: transparent;

          cursor: pointer;

          font-family: inherit;

          text-align: left;
        }

        .accordion-trigger-left {
          min-width: 0;

          display: flex;

          align-items: center;

          gap: 8px;

          color: #09285f;

          font-size: 12px;

          font-weight: 800;
        }

        .accordion-icon {
          width: 30px;
          height: 30px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 9px;

          background: #f0f8fd;

          color:
            var(--accent,#08a8d5);
        }

        .accordion-count {
          flex-shrink: 0;

          padding:
            2px
            7px;

          border-radius: 999px;

          color: #9bb0c6;

          background: #f0f4f9;

          font-size: 9px;
        }

        .accordion-chevron {
          flex-shrink: 0;

          color: #9bb0c6;

          transition:
            transform .25s ease;
        }

        .accordion-chevron.rotated {
          transform:
            rotate(180deg);

          color:
            var(--accent,#08a8d5);
        }

        .accordion-list {
          list-style: none;

          margin: 0;

          padding:
            2px
            4px
            15px
            40px;

          display: flex;

          flex-direction: column;

          gap: 8px;
        }

        .accordion-list li {
          display: flex;

          align-items: flex-start;

          gap: 7px;

          color: #47607e;

          font-size: 11.5px;

          line-height: 1.55;
        }

        .accordion-list li svg {
          flex-shrink: 0;

          margin-top: 2px;

          color: #08a8d5;
        }

        /* =====================================================
           COLLEGES
        ===================================================== */

        .colleges-section {
          width: 100%;
          min-width: 0;
          max-width: 100%;

          margin-top: 28px;

          padding-top: 24px;

          border-top:
            1px solid #e7eff6;
        }

        .colleges-section-header {
          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 12px;

          margin-bottom: 14px;
        }

        .colleges-eyebrow {
          display: flex;

          align-items: center;

          gap: 6px;

          margin-bottom: 5px;

          color: #079ac7;

          font-size: 8.5px;

          font-weight: 800;

          letter-spacing: .08em;
        }

        .colleges-section-header h3 {
          margin:
            0
            0
            4px;

          color: #09285f;

          font-size: 22px;

          font-weight: 800;
        }

        .colleges-section-header p {
          margin: 0;

          color: #71859d;

          font-size: 10.5px;

          line-height: 1.5;
        }

        .view-all-colleges {
          flex-shrink: 0;

          display: inline-flex;

          align-items: center;

          gap: 6px;

          padding:
            8px
            10px;

          border:
            1px solid rgba(8,168,213,.25);

          border-radius: 10px;

          background: #f5fbfe;

          color: #087fb8;

          font-size: 9.5px;

          font-weight: 800;

          cursor: pointer;

          font-family: inherit;
        }

        .college-cards-scroll {
          display: flex;

          gap: 11px;

          width: 100%;
          max-width: 100%;

          overflow-x: auto;

          overflow-y: hidden;

          padding:
            4px
            4px
            14px;

          scrollbar-width: thin;

          scrollbar-color:
            #0aa8d5
            #e5f1f7;

          -webkit-overflow-scrolling: touch;

          touch-action: pan-x;
        }

        .college-cards-scroll::-webkit-scrollbar {
          height: 8px;
        }

        .college-cards-scroll::-webkit-scrollbar-track {
          background: #e5f1f7;

          border-radius: 999px;
        }

        .college-cards-scroll::-webkit-scrollbar-thumb {
          background:
            linear-gradient(
              90deg,
              #08a8d5,
              #075b91
            );

          border-radius: 999px;
        }

        .college-card {
          flex:
            0 0 205px;

          min-width: 0;

          overflow: hidden;

          border:
            1px solid #e0ebf3;

          border-radius: 16px;

          background: #ffffff;

          box-shadow:
            0 12px 30px -24px
            rgba(7,59,130,.45);
        }

        .college-card.selected {
          border-color:
            rgba(8,168,213,.55);

          box-shadow:
            0 18px 38px -24px
            rgba(7,59,130,.5);
        }

        .college-image-wrap {
          position: relative;

          height: 120px;

          overflow: hidden;

          background:
            #e9f5fb;
        }

        .college-image-wrap img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .college-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 45%,
              rgba(3,37,78,.48)
            );
        }

        .college-type-pill {
          position: absolute;

          left: 8px;
          bottom: 8px;

          padding:
            4px
            7px;

          border-radius: 999px;

          background:
            rgba(3,37,78,.72);

          color: #ffffff;

          font-size: 7.5px;

          font-weight: 800;
        }

        .college-card-content {
          padding:
            11px
            11px
            12px;
        }

        .college-card-content h4 {
          min-height: 34px;

          margin:
            0
            0
            6px;

          color: #09285f;

          font-size: 11.5px;

          line-height: 1.35;

          font-weight: 800;
        }

        .college-location {
          display: flex;

          align-items: flex-start;

          gap: 5px;

          margin-bottom: 8px;

          color: #7a8da3;

          font-size: 8.5px;

          line-height: 1.4;
        }

        .college-location svg {
          flex-shrink: 0;

          color: #08a8d5;
        }

        .college-badges {
          min-height: 21px;

          margin-bottom: 8px;
        }

        .college-badge {
          display: inline-flex;

          align-items: center;

          gap: 4px;

          padding:
            4px
            7px;

          border-radius: 999px;

          font-size: 7.5px;

          font-weight: 800;
        }

        .college-badge.green {
          color: #087b55;

          background: #eaf9f2;

          border:
            1px solid #d2f1e2;
        }

        .college-details-btn {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 7px;

          padding:
            8px
            0
            0;

          border: 0;

          border-top:
            1px solid #edf2f6;

          background: transparent;

          color: #0788bf;

          cursor: pointer;

          font-family: inherit;

          font-size: 9px;

          font-weight: 800;

          text-align: left;
        }

        /* =====================================================
           SELECTED COLLEGE
        ===================================================== */

        .selected-college-panel {
          width: 100%;

          min-width: 0;

          overflow: hidden;

          margin-top: 13px;
        }

        .selected-college-inner {
          width: 100%;
          min-width: 0;

          padding:
            16px;

          border:
            1px solid rgba(8,168,213,.22);

          border-radius: 18px;

          background:
            linear-gradient(
              135deg,
              #ffffff,
              #f5fbfe
            );

          box-shadow:
            0 18px 40px -28px
            rgba(7,59,130,.42);
        }

        .selected-college-top {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          gap: 10px;

          padding-bottom: 13px;

          margin-bottom: 14px;

          border-bottom:
            1px dashed #dce9f2;
        }

        .selected-college-eyebrow {
          display: flex;

          align-items: center;

          gap: 5px;

          margin-bottom: 4px;

          color: #079ac7;

          font-size: 8px;

          font-weight: 800;

          letter-spacing: .08em;
        }

        .selected-college-top h4 {
          margin:
            0
            0
            4px;

          color: #09285f;

          font-size: 18px;

          line-height: 1.25;

          font-weight: 800;
        }

        .selected-college-location {
          display: flex;

          align-items: center;

          gap: 5px;

          color: #70869e;

          font-size: 9.5px;
        }

        .selected-college-location svg {
          color: #08a8d5;
        }

        .close-college-details {
          width: 30px;
          height: 30px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid #dce9f2;

          border-radius: 9px;

          background: #ffffff;

          color: #6d8299;

          cursor: pointer;
        }

        .selected-college-grid {
          display: grid;

          grid-template-columns:
            1fr;

          gap: 14px;

          min-width: 0;
        }

        @media (min-width: 560px) {
          .selected-college-grid {
            grid-template-columns:
              minmax(160px, .7fr)
              minmax(0, 1.3fr);
          }
        }

        .selected-college-image {
          width: 100%;

          height: 180px;

          overflow: hidden;

          border-radius: 14px;

          background: #e9f5fb;

          border:
            1px solid #dceaf3;
        }

        .selected-college-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .selected-college-info {
          min-width: 0;
        }

        .selected-college-status-row {
          display: flex;

          flex-wrap: wrap;

          gap: 6px;

          margin-bottom: 9px;
        }

        .status-chip {
          display: inline-flex;

          align-items: center;

          gap: 4px;

          padding:
            5px
            7px;

          border-radius: 999px;

          color: #087b55;

          background: #eaf9f2;

          border:
            1px solid #d2f1e2;

          font-size: 7.5px;

          font-weight: 800;
        }

        .selected-college-description {
          margin:
            0
            0
            12px;

          color: #536a83;

          font-size: 10.5px;

          line-height: 1.65;
        }

        .college-stat-grid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 6px;
        }

        @media (min-width: 500px) {
          .college-stat-grid {
            grid-template-columns:
              repeat(3, 1fr);
          }
        }

        .college-stat {
          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 3px;

          padding:
            9px;

          border:
            1px solid #e4eef5;

          border-radius: 10px;

          background: #ffffff;
        }

        .college-stat svg {
          color: #08a8d5;

          width: 14px;
          height: 14px;
        }

        .college-stat span {
          color: #8a9caf;

          font-size: 7px;

          font-weight: 700;

          text-transform: uppercase;
        }

        .college-stat strong {
          color: #09285f;

          font-size: 9px;

          line-height: 1.35;

          overflow-wrap: anywhere;
        }

        .college-highlights {
          margin-top: 15px;

          padding-top: 15px;

          border-top:
            1px solid #e4eef5;
        }

        .college-highlights-heading {
          display: flex;

          align-items: center;

          gap: 6px;

          margin-bottom: 9px;

          color: #09285f;

          font-size: 10.5px;

          font-weight: 800;
        }

        .college-highlights-heading svg {
          color: #08a8d5;
        }

        .college-highlight-grid {
          display: grid;

          grid-template-columns:
            1fr;

          gap: 6px;
        }

        @media (min-width: 500px) {
          .college-highlight-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }

        .college-highlight {
          display: flex;

          align-items: flex-start;

          gap: 6px;

          color: #526b84;

          font-size: 9.5px;

          line-height: 1.45;
        }

        .college-highlight svg {
          flex-shrink: 0;

          margin-top: 1px;

          color: #08a8d5;
        }

        .selected-college-actions {
          display: flex;

          flex-direction: column;

          gap: 7px;

          margin-top: 15px;
        }

        @media (min-width: 480px) {
          .selected-college-actions {
            flex-direction: row;
          }
        }

        .college-action-primary,
        .college-action-secondary {
          min-height: 40px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          padding:
            9px
            13px;

          border-radius: 10px;

          text-decoration: none;

          font-size: 9.5px;

          font-weight: 800;
        }

        .college-action-primary {
          flex: 1;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #073b82,
              #08a8d5
            );
        }

        .college-action-secondary {
          color: #087fb8;

          background: #ffffff;

          border:
            1px solid #d7e8f2;
        }

        /* =====================================================
           FEE TABLE

           IMPORTANT:
           No fixed/min-content width.
           Everything is allowed to shrink.
        ===================================================== */

        .fee-table-panel {
          width: 100%;
          max-width: 100%;
          min-width: 0;

          overflow: hidden;

          border:
            1px solid #d6e7f2;

          border-radius: 20px;

          background:
            rgba(255,255,255,.98);

          box-shadow:
            0 20px 40px -24px
            rgba(7,59,130,.30);

          margin-bottom: 14px;
        }

        .fee-table-top {
          width: 100%;
          min-width: 0;

          display: flex;

          align-items: center;

          gap: 8px;

          padding:
            15px;

          background:
            linear-gradient(
              135deg,
              #073b82,
              #087fb8,
              #08a8d5
            );
        }

        .fee-table-top-icon {
          width: 31px;
          height: 31px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 9px;

          color: #ffffff;

          background:
            rgba(255,255,255,.18);
        }

        .fee-table-top-text {
          flex: 1;

          min-width: 0;
        }

        .fee-table-subtitle {
          margin: 0;

          color: #ffffff;

          font-size: 12.5px;

          font-weight: 800;

          line-height: 1.3;
        }

        .fee-table-sub2 {
          margin:
            2px
            0
            0;

          color:
            rgba(255,255,255,.78);

          font-size: 9.5px;

          line-height: 1.35;
        }

        .fee-table-badge {
          flex-shrink: 0;

          padding:
            4px
            6px;

          border-radius: 6px;

          color: #ffffff;

          background:
            rgba(255,255,255,.18);

          font-size: 7px;

          font-weight: 800;

          white-space: normal;

          text-align: center;

          max-width: 72px;
        }

        .fee-rows {
          width: 100%;
          min-width: 0;

          padding:
            5px
            10px;
        }

        .fee-row {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(110px, auto);

          align-items: center;

          gap: 8px;

          min-height: 65px;

          padding:
            12px
            5px;

          border-bottom:
            1px solid #f0f5fa;
        }

        .fee-row:last-child {
          border-bottom: 0;
        }

        .fee-row-left {
          min-width: 0;

          display: flex;

          align-items: center;

          gap: 7px;
        }

        .ft-expense-icon {
          width: 29px;
          height: 29px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 9px;

          color: #08a8d5;

          background: #f0f8fd;
        }

        .fee-row-label {
          min-width: 0;

          color: #09285f;

          font-size: 10px;

          font-weight: 700;

          line-height: 1.35;
        }

        .fee-row-right {
          min-width: 0;

          display: flex;

          flex-direction: column;

          align-items: flex-end;

          gap: 2px;

          text-align: right;
        }

        .ft-usd-cell {
          color: #09285f;

          font-size: 10.5px;

          font-weight: 800;

          line-height: 1.3;

          overflow-wrap: anywhere;
        }

        .ft-usd-cell em {
          margin-left: 2px;

          color: #9bb0c6;

          font-size: 8px;

          font-style: normal;
        }

        .ft-inr-cell {
          color: #8a9bb2;

          font-size: 8.5px;

          font-weight: 600;

          line-height: 1.3;

          overflow-wrap: anywhere;
        }

        .fee-table-note {
          display: flex;

          align-items: flex-start;

          gap: 6px;

          padding:
            9px
            14px
            12px;

          border-top:
            1px solid #f0f5fa;

          color: #8a9bb2;

          font-size: 8.5px;

          line-height: 1.4;
        }

        .fee-table-note svg {
          flex-shrink: 0;

          margin-top: 1px;
        }

        /* =====================================================
           SIDE CTA
        ===================================================== */

        .side-cta-box {
          width: 100%;
          max-width: 100%;

          margin-top: 14px;

          padding:
            17px;

          border-radius: 18px;

          color: #ffffff;

          background:
            linear-gradient(
              150deg,
              #073b82,
              #08a8d5
            );

          box-shadow:
            0 20px 40px -24px
            rgba(7,59,130,.5);
        }

        .side-cta-box p {
          margin:
            0
            0
            12px;

          color:
            rgba(255,255,255,.9);

          font-size: 10.5px;

          line-height: 1.55;
        }

        .side-cta-buttons {
          display: flex;

          flex-direction: column;

          gap: 7px;
        }

        .side-cta-btn {
          min-height: 39px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 6px;

          padding:
            9px
            12px;

          border-radius: 10px;

          text-decoration: none;

          font-size: 10px;

          font-weight: 800;
        }

        .side-cta-btn.primary {
          color: #073b82;

          background: #ffffff;
        }

        .side-cta-btn.secondary {
          color: #ffffff;

          background:
            rgba(255,255,255,.12);

          border:
            1px solid
            rgba(255,255,255,.28);
        }

        /* =====================================================
           BOTTOM CTA
        ===================================================== */

        .programs-cta {
          width: 100%;

          margin-top: 38px;

          padding:
            34px
            18px;

          border-radius: 24px;

          text-align: center;

          background:
            radial-gradient(
              circle at 85% 10%,
              rgba(8,168,213,.42),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #073b82,
              #075b91 55%,
              #08a8d5
            );

          box-shadow:
            0 30px 70px -38px
            rgba(7,59,130,.55);
        }

        .programs-cta-icon {
          width: 44px;
          height: 44px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin:
            0
            auto
            14px;

          border-radius: 13px;

          color: #7fe0ff;

          background:
            rgba(255,255,255,.12);
        }

        .programs-cta h2 {
          margin:
            0
            0
            12px;

          color: #ffffff;

          font-size:
            clamp(22px, 5vw, 36px);

          line-height: 1.2;

          font-weight: 800;
        }

        .programs-cta p {
          max-width: 700px;

          margin:
            0
            auto
            22px;

          color: #e2f0fb;

          font-size: 12px;

          line-height: 1.7;
        }

        .programs-cta-buttons {
          display: flex;

          align-items: center;
          justify-content: center;

          flex-wrap: wrap;

          gap: 9px;
        }

        .cta-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 7px;

          min-height: 42px;

          padding:
            10px
            17px;

          border-radius: 11px;

          text-decoration: none;

          font-size: 11px;

          font-weight: 800;
        }

        .cta-btn-primary {
          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #0795cc,
              #24c1df
            );
        }

        .cta-btn-secondary {
          color: #ffffff;

          background:
            rgba(255,255,255,.08);

          border:
            1px solid
            rgba(255,255,255,.3);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 768px) {

          .programs-page {
            padding:
              30px
              22px
              70px;
          }

          .hero-trust-strip {
            grid-template-columns:
              repeat(4, 1fr);
          }

          .college-card {
            flex-basis: 210px;
          }

          .selected-college-image {
            height: 200px;
          }
        }

        /* =====================================================
           MOBILE FIRST
        ===================================================== */

        @media (max-width: 767px) {

          .programs-page {
            padding:
              0
              12px
              42px;
          }

          .programs-hero {
            margin-left: -12px;
            margin-right: -12px;

            width:
              calc(100% + 24px);

            border-radius: 0;

            border-left: 0;
            border-right: 0;

            padding:
              42px
              18px
              27px;
          }

          .programs-hero h1 {
            font-size:
              clamp(31px, 10vw, 44px);
          }

          .dest-cards-scroll {
            margin-left: -4px;
            margin-right: -4px;
          }

          .detail-panel {
            border-radius: 21px;
          }

          .detail-main {
            padding:
              21px
              14px
              24px;
          }

          .detail-side {
            padding:
              18px
              14px
              22px;
          }

          .detail-meta-strip {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .colleges-section-header {
            align-items: flex-start;
          }

          .view-all-colleges {
            display: none;
          }

          .college-card {
            flex-basis: 205px;
          }

          .selected-college-inner {
            padding:
              14px;
          }

          .programs-cta {
            border-radius: 21px;
          }

          .cta-btn {
            width: 100%;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .detail-main {
            padding-left: 12px;
            padding-right: 12px;
          }

          .detail-side {
            padding-left: 12px;
            padding-right: 12px;
          }

          .detail-header {
            gap: 10px;
          }

          .detail-flag-big {
            width: 55px;
            height: 42px;
          }

          .detail-panel h2 {
            font-size: 23px;
          }

          .fee-row {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(96px, auto);
          }

          .fee-row-label {
            font-size: 9px;
          }

          .ft-usd-cell {
            font-size: 9px;
          }

          .ft-inr-cell {
            font-size: 8px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }

        }

      `}</style>

      <main className="programs-page">

        <div className="programs-container">

          {/* =================================================
             HERO
          ================================================= */}

          <motion.div
            className="programs-hero"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .5,
            }}
          >

            <div className="programs-hero-eyebrow">
              <Sparkles />
              GLOBAL MEDICAL EDUCATION
            </div>

            <h1>
              Explore MBBS Opportunities{" "}
              <span>Worldwide</span>
            </h1>

            <p>
              Choose the right medical education
              destination with transparent,
              personalized counselling and
              end-to-end admission guidance
              from Kantule Edutech.
            </p>

            <div className="hero-trust-strip">

              <div className="hero-trust-item">
                <span className="hero-trust-icon">
                  <Globe2 />
                </span>
                <span>
                  9 Global Destinations
                </span>
              </div>

              <div className="hero-trust-item">
                <span className="hero-trust-icon">
                  <GraduationCap />
                </span>
                <span>
                  NEET-Based Guidance
                </span>
              </div>

              <div className="hero-trust-item">
                <span className="hero-trust-icon">
                  <ShieldCheck />
                </span>
                <span>
                  NMC &amp; WHO Recognized
                </span>
              </div>

              <div className="hero-trust-item">
                <span className="hero-trust-icon">
                  <MessageCircle />
                </span>
                <span>
                  100% Free Counselling
                </span>
              </div>

            </div>

          </motion.div>

          {/* =================================================
             COUNTRY SELECTOR
          ================================================= */}

          <div className="destinations-bar">

            <div className="destinations-bar-label">
              <Globe2 size={16} />
              <span>
                Explore Programs by Country
              </span>
            </div>

            <div className="destinations-bar-hint">
              Tap a destination to view fees,
              eligibility &amp; course details
            </div>

          </div>

          <motion.div
            className="dest-cards-scroll"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .4,
            }}
          >

            {countries.map(
              (country) => (

                <button
                  key={country.id}
                  type="button"
                  className={`dest-card ${
                    activeId === country.id
                      ? "active"
                      : ""
                  }`}
                  style={{
                    "--accent":
                      country.accentColor,
                  }}
                  onClick={() => {

                    setActiveId(
                      country.id
                    );

                    setSearchParams({
                      country:
                        country.id,
                    });

                  }}
                >

                  <div className="dest-card-top">

                    <span className="dest-card-flag">

                      <img
                        src={`https://flagcdn.com/w80/${country.flagCode}.png`}
                        alt=""
                        loading="lazy"
                      />

                    </span>

                    <span className="dest-card-check">
                      <CheckCircle2
                        size={11}
                      />
                    </span>

                  </div>

                  <div>

                    <p className="dest-card-title">
                      {country.title.replace(
                        "MBBS in ",
                        ""
                      )}
                    </p>

                    <span className="dest-card-badge">
                      {country.badge}
                    </span>

                  </div>

                </button>

              )
            )}

          </motion.div>

          {/* =================================================
             ACTIVE COUNTRY DETAIL
          ================================================= */}

          <AnimatePresence mode="wait">

            <motion.div
              key={active.id}
              className="detail-panel"
              style={{
                borderTop:
                  `3px solid ${active.accentColor}`,
                "--accent":
                  active.accentColor,
              }}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: .32,
              }}
            >

              <div className="detail-grid">

                {/* =================================================
                   LEFT / MAIN COLUMN
                ================================================= */}

                <div className="detail-main">

                  <div className="detail-header">

                    <div className="detail-flag-big">

                      <img
                        src={`https://flagcdn.com/w160/${active.flagCode}.png`}
                        alt=""
                      />

                    </div>

                    <div className="detail-title-wrap">

                      <div className="detail-badges">

                        <span
                          className="detail-badge"
                          style={{
                            color:
                              active.accentColor,
                            backgroundColor:
                              `${active.accentColor}10`,
                            border:
                              `1px solid ${active.accentColor}35`,
                          }}
                        >
                          {active.badge}
                        </span>

                        <span className="detail-code-pill">
                          {active.code}
                        </span>

                      </div>

                      <h2>
                        {active.title}
                      </h2>

                      <p className="tagline">
                        {active.tagline}
                      </p>

                    </div>

                  </div>

                  {/* META */}

                  <div className="detail-meta-strip">

                    <div className="meta-item">

                      <span className="meta-item-label">
                        <Clock3 />
                        Duration
                      </span>

                      <span className="meta-item-value">
                        {active.meta.duration}
                      </span>

                    </div>

                    <div className="meta-item">

                      <span className="meta-item-label">
                        <CheckCircle2 />
                        Recognition
                      </span>

                      <span className="meta-item-value">
                        {active.meta.recognition}
                      </span>

                    </div>

                    <div className="meta-item">

                      <span className="meta-item-label">
                        <Globe2 />
                        Medium
                      </span>

                      <span className="meta-item-value">
                        {active.meta.medium}
                      </span>

                    </div>

                    <div className="meta-item">

                      <span className="meta-item-label">
                        <GraduationCap />
                        Admission
                      </span>

                      <span className="meta-item-value">
                        {active.meta.admission}
                      </span>

                    </div>

                  </div>

                  {/* INTRO */}

                  <p className="detail-intro">
                    {active.content.intro}
                  </p>

                  {/* ACCORDIONS */}

                  <div className="accordion">

                    {availableSections.map(
                      (key) => {

                        const Icon =
                          sectionIcon[key];

                        const isOpen =
                          openSection === key;

                        const items =
                          active.content[key];

                        return (
                          <div
                            className={`accordion-item ${
                              isOpen
                                ? "is-open"
                                : ""
                            }`}
                            key={key}
                          >

                            <button
                              type="button"
                              className="accordion-trigger"
                              onClick={() =>
                                setOpenSection(
                                  isOpen
                                    ? null
                                    : key
                                )
                              }
                            >

                              <span className="accordion-trigger-left">

                                <span className="accordion-icon">
                                  <Icon size={15} />
                                </span>

                                <span>
                                  {
                                    sectionLabel[
                                      key
                                    ]
                                  }
                                </span>

                                <span className="accordion-count">
                                  {items.length}
                                </span>

                              </span>

                              <ChevronDown
                                size={17}
                                className={`accordion-chevron ${
                                  isOpen
                                    ? "rotated"
                                    : ""
                                }`}
                              />

                            </button>

                            <AnimatePresence
                              initial={false}
                            >

                              {isOpen && (

                                <motion.div
                                  initial={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    height: "auto",
                                    opacity: 1,
                                  }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                >

                                  <ul className="accordion-list">

                                    {items.map(
                                      (
                                        item,
                                        index
                                      ) => (

                                        <li
                                          key={
                                            index
                                          }
                                        >

                                          <CheckCircle2
                                            size={13}
                                          />

                                          <span>
                                            {item}
                                          </span>

                                        </li>

                                      )
                                    )}

                                  </ul>

                                </motion.div>

                              )}

                            </AnimatePresence>

                          </div>
                        );
                      }
                    )}

                  </div>

                  {/* COLLEGES IN SELECTED COUNTRY */}

                  <CountryColleges />

                </div>

                {/* =================================================
                   RIGHT SIDEBAR
                   
                   On desktop: visible column.
                   On mobile: naturally stacks below main.
                ================================================= */}

                <aside className="detail-side">

                  <div className="detail-side-inner">

                    <FeeTable
                      fees={activeFees}
                    />

                    <div className="side-cta-box">

                      <p>
                        Free 1-on-1 guidance on
                        eligibility, fees &amp;
                        the right university fit
                        — from our certified
                        admission directors.
                      </p>

                      <div className="side-cta-buttons">

                        <Link
                          to="/contact"
                          className="side-cta-btn primary"
                        >
                          <MessageCircle
                            size={14}
                          />
                          Book Free Counselling
                        </Link>

                        <a
                          href="https://wa.me/918830451660?text=I%20want%20to%20know%20more%20about%20MBBS%20programs"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="side-cta-btn secondary"
                        >
                          💬 WhatsApp Us
                        </a>

                      </div>

                    </div>

                  </div>

                </aside>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* =================================================
             BOTTOM CTA
          ================================================= */}

          <motion.section
            className="programs-cta"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: .15,
            }}
          >

            <div className="programs-cta-icon">
              <MessageCircle size={21} />
            </div>

            <h2>
              Need Help Choosing the
              Right Destination?
            </h2>

            <p>
              Get personalized guidance
              based on your NEET score,
              academic profile, budget and
              career aspirations from our
              medical education directors.
            </p>

            <div className="programs-cta-buttons">

              <Link
                to="/contact"
                className="cta-btn cta-btn-primary"
              >
                <MessageCircle size={16} />
                Book Free Counselling
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/918830451660?text=I%20want%20to%20know%20more%20about%20MBBS%20programs"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn-secondary"
              >
                💬 WhatsApp Us
                <ArrowRight size={15} />
              </a>

            </div>

          </motion.section>

        </div>

      </main>
    </>
  );
}

export default Programs;