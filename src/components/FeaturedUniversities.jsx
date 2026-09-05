import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  MapPin,
  Building2,
  GraduationCap,
  ArrowUpRight,
  ChevronRight,
  Shield,
} from "lucide-react";

import {
  countryFilterTabs,
  universitiesData,
} from "../data/universitiesData";

import { getCollegeDetailById } from "../data/collegesData";

// =========================================================
// LOCAL UNIVERSITY IMAGES
// =========================================================

import ihsmImage from "../assets/images/universities/ihsm.png";
import oshStateUniversityImage from "../assets/images/universities/osh-state-university.png";
import asianMedicalInstituteImage from "../assets/images/universities/asian-medical-institute.png";

// =========================================================
// IMAGE OVERRIDES
// =========================================================

const UNIVERSITY_IMAGE_OVERRIDES = {
  // International Higher School of Medicine, Issyk-Kul
  ihsm:
    "https://th.bing.com/th/id/OIP.vSeOPrF6sN5qo0WpP9k8rQHaFj?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  "kyrgyzstan-ihsm":
    "https://th.bing.com/th/id/OIP.Sg0aEC4YLGauCD6krfC7RgHaFf?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  // International School of Medicine
  ism:
    "https://th.bing.com/th/id/OIP.Sg0aEC4YLGauCD6krfC7RgHaFf?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  "kyrgyzstan-ism":
    "https://th.bing.com/th/id/OIP.Sg0aEC4YLGauCD6krfC7RgHaFf?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  // Kyrgyz State Medical Academy
  "ksmu-kg":
    "https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  ksma:
    "https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  "kyrgyzstan-ksmu-kg":
    "https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  // University of Santo Tomas
  "ust-manila":
    "https://i.pinimg.com/originals/f5/a8/b3/f5a8b368eeb595552172066fe20600df.jpg",

  "university-of-santo-tomas":
    "https://i.pinimg.com/originals/f5/a8/b3/f5a8b368eeb595552172066fe20600df.jpg",

  // University of the Philippines Manila
  "up-manila":

    "https://th.bing.com/th/id/OIP.cR84ZeNJRaEsg2MPc8bQ3wHaFj?w=198&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  "up-manila-college-of-medicine":

    "https://th.bing.com/th/id/OIP.cR84ZeNJRaEsg2MPc8bQ3wHaFj?w=198&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  // =======================================================
  // TRIBHUVAN UNIVERSITY INSTITUTE OF MEDICINE
  // =======================================================
  //
  // Same image that already exists in collegesData for
  // tribhuvan-iom.
  //
  "tribhuvan-iom":

    "https://th.bing.com/th/id/OIP.97VIS6CI6q0r8nLiqPjIqwHaFj?w=215&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
};

// =========================================================
// NORMALIZE ID
// =========================================================

function normalizeId(id) {
  if (!id) return "";

  return String(id)
    .trim()
    .toLowerCase()
    .replace(/^india-/, "")
    .replace(/^russia-/, "")
    .replace(/^kyrgyzstan-/, "")
    .replace(/^kazakhstan-/, "")
    .replace(/^georgia-/, "")
    .replace(/^vietnam-/, "")
    .replace(/^nepal-/, "")
    .replace(/^philippines-/, "")
    .replace(/^usa-/, "");
}

// =========================================================
// GET UNIVERSITY IMAGE
// =========================================================

function getUniversityImage(university) {
  if (!university) return "";

  const directId =
    String(university.id || "")
      .trim()
      .toLowerCase();

  const normalizedId =
    normalizeId(university.id);

  // 1. Exact ID override
  if (
    UNIVERSITY_IMAGE_OVERRIDES[
    directId
    ]
  ) {
    return UNIVERSITY_IMAGE_OVERRIDES[
      directId
    ];
  }

  // 2. Normalized ID override
  if (
    UNIVERSITY_IMAGE_OVERRIDES[
    normalizedId
    ]
  ) {
    return UNIVERSITY_IMAGE_OVERRIDES[
      normalizedId
    ];
  }

  // 3. Existing university image
  if (university.image) {
    return university.image;
  }

  // 4. Existing detail image
  const detail =
    getCollegeDetailById(
      university.id
    );

  return detail?.image || "";
}

// =========================================================
// EXTRA KYRGYZSTAN UNIVERSITIES
// =========================================================

const kyrgyzstanUniversities = [

  {
    id: "kyrgyzstan-osh-state-university",
    name: "Osh State University",
    country: "Kyrgyzstan",
    city: "Osh",
    image: oshStateUniversityImage,
  },

  {
    id: "kyrgyzstan-asian-medical-institute",
    name: "Asian Medical Institute",
    country: "Kyrgyzstan",
    city: "Kant",
    image: asianMedicalInstituteImage,
  },
];

// =========================================================
// TRIBHUVAN UNIVERSITY
// =========================================================

const nepalUniversities = [
  {
    id: "tribhuvan-iom",
    name: "Tribhuvan University Institute of Medicine",
    country: "Nepal",
    city: "Kathmandu",

    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  },
];

// =========================================================
// INLINE CARD STYLES
// =========================================================

const cardStyles = `
.card-meta-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.625rem;
}

.card-meta-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.1875rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.625rem;
  font-weight: 600;
}

.card-meta-pill.type {
  background: #eef7fc;
  color: #1455A0;
  border: 1px solid #d2e7f8;
}

.card-meta-pill.recog {
  background: #e6faf0;
  color: #047857;
  border: 1px solid #a7f3d0;
}

.view-details-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #1455A0;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.375rem 0;
  transition: color 0.2s;
  text-decoration: none;
}

.view-details-trigger:hover {
  color: #0B2D5C;
}
`;

// =========================================================
// UNIVERSITY CARD
// =========================================================

function UniversityImageCard({
  university,
}) {
  const [imageError, setImageError] =
    useState(false);

  const detail =
    getCollegeDetailById(
      university.id
    );

  const primaryImage =
    getUniversityImage(
      university
    );

  const fallbackImage =
    university.fallbackImage ||
    detail?.image ||
    "";

  const imageToShow =
    imageError &&
      fallbackImage &&
      fallbackImage !==
      primaryImage
      ? fallbackImage
      : primaryImage;

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="group relative flex flex-col h-full bg-white rounded-2xl sm:rounded-3xl border border-[#e2edf8] shadow-[0_8px_25px_rgba(11,45,92,0.05)] hover:shadow-[0_22px_45px_rgba(11,45,92,0.12)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
    >

      {/* IMAGE */}

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f0f6fc]">

        {imageToShow ? (
          <img
            src={imageToShow}
            alt={university.name}
            loading="lazy"
            onError={() =>
              setImageError(true)
            }
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B2D5C] to-[#1455A0] text-white p-6 text-center">

            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3 text-[#18B8D4]">
              <Building2 size={24} />
            </div>

            <span className="text-xs uppercase tracking-widest text-cyan-200 font-semibold">
              {university.country}
            </span>

            <span className="text-sm font-bold text-white line-clamp-2 mt-1">
              {university.name}
            </span>

          </div>
        )}

        {/* IMAGE OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

        {/* COUNTRY */}

        <div className="absolute top-3.5 left-3.5 z-10">

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#0B2D5C] backdrop-blur-md shadow-sm border border-white/80">

            <span className="w-2 h-2 rounded-full bg-[#18B8D4]" />

            {university.country}

          </span>

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">

        <div>

          <h3 className="text-lg sm:text-xl font-bold text-[#0B2D5C] group-hover:text-[#1455A0] transition-colors duration-200 leading-snug">
            {university.name}
          </h3>

          <p className="text-sm text-slate-500 mt-2.5 flex items-center gap-1.5 font-medium">

            <MapPin
              size={15}
              className="text-[#18B8D4] shrink-0"
            />

            <span>
              {university.city
                ? `${university.city}, ${university.country}`
                : university.country}
            </span>

          </p>

          {/* TYPE + RECOGNITION */}

          {detail && (
            <div className="card-meta-pills">

              {detail.type && (
                <span className="card-meta-pill type">

                  <Building2
                    size={10}
                  />

                  {detail.type}

                </span>
              )}

              {detail.recognition && (
                <span className="card-meta-pill recog">

                  <Shield
                    size={10}
                  />

                  {detail.recognition}

                </span>
              )}

            </div>
          )}

        </div>

        {/* VIEW DETAILS */}

        <div className="mt-4 pt-1">

          <Link
            to={`/university/${university.id}`}
            className="view-details-trigger"
          >
            View Details
            <ChevronRight size={14} />
          </Link>

        </div>

      </div>

    </motion.div>
  );
}

// =========================================================
// MAIN COMPONENT
// =========================================================

export default function FeaturedUniversities() {

  const [
    activeCountry,
    setActiveCountry,
  ] = useState(
    "All Universities"
  );

  // =======================================================
  // MERGE ALL UNIVERSITIES
  // =======================================================

  const allUniversities = [
    ...universitiesData,

    ...kyrgyzstanUniversities,

    // NEW:
    ...nepalUniversities,
  ];

  // =======================================================
  // REMOVE DUPLICATES
  // =======================================================

  const uniqueUniversities =
    allUniversities.filter(
      (
        university,
        index,
        array
      ) =>
        index ===
        array.findIndex(
          (item) =>
            item.id ===
            university.id
        )
    );

  // =======================================================
  // FILTER
  // =======================================================

  const filteredUniversities =
    activeCountry ===
      "All Universities"
      ? uniqueUniversities
      : uniqueUniversities.filter(
        (university) =>
          university.country ===
          activeCountry
      );

  // =======================================================
  // FILTER TABS
  // =======================================================

  const orderedCountryFilterTabs = [
    "All Universities",

    "Kyrgyzstan",

    ...countryFilterTabs.filter(
      (tab) =>
        tab !==
        "All Universities" &&
        tab !==
        "Kyrgyzstan"
    ),
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#f8fbfe] overflow-hidden border-t border-slate-100">

      <style>
        {cardStyles}
      </style>

      {/* BACKGROUND */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* HEADER */}

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d6e6f5] text-[#1455A0] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">

            <span className="w-2 h-2 rounded-full bg-[#18B8D4]" />

            FEATURED UNIVERSITIES

          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight leading-[1.15]">

            Explore Medical Universities{" "}

            <span className="bg-gradient-to-r from-[#1455A0] to-[#18B8D4] bg-clip-text text-transparent">
              Around the World
            </span>

          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">

            Explore leading medical universities across popular MBBS destinations
            and find the right option based on your academic goals.

          </p>

        </div>

        {/* FILTERS */}

        <div className="mb-10 sm:mb-12">

          <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 pt-1 px-1 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">

            {orderedCountryFilterTabs.map(
              (tab) => {

                const isActive =
                  activeCountry ===
                  tab;

                return (
                  <button
                    key={tab}
                    onClick={() =>
                      setActiveCountry(
                        tab
                      )
                    }
                    className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 select-none ${isActive
                        ? "text-white shadow-md shadow-[#0B2D5C]/15"
                        : "text-slate-600 hover:text-[#0B2D5C] bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm"
                      }`}
                  >

                    {isActive && (
                      <motion.div
                        layoutId="activeCountryPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0B2D5C] to-[#1455A0]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-1.5">
                      {tab}
                    </span>

                  </button>
                );
              }
            )}

          </div>

        </div>

        {/* UNIVERSITY GRID */}

        <AnimatePresence mode="wait">

          {filteredUniversities.length >
            0 ? (

            <motion.div
              key={activeCountry}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >

              {filteredUniversities.map(
                (university) => (
                  <UniversityImageCard
                    key={
                      university.id
                    }
                    university={
                      university
                    }
                  />
                )
              )}

            </motion.div>

          ) : (

            <motion.div
              key="empty-state"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
              }}
              className="max-w-xl mx-auto text-center py-14 px-6 sm:px-10 bg-white rounded-3xl border border-[#dce8f5] shadow-[0_10px_35px_rgba(11,45,92,0.06)]"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#eef7fc] text-[#1455A0] flex items-center justify-center mx-auto mb-5 border border-[#d2e7f8]">

                <GraduationCap
                  size={32}
                  className="text-[#18B8D4]"
                />

              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0B2D5C]">
                Universities Coming Soon
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">

                We are currently updating university information for this
                destination. Please contact our counselling team for guidance.

              </p>

              <div className="mt-6 flex justify-center">

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1455A0] hover:bg-[#0B2D5C] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-900/20 hover:shadow-lg transition-all duration-200"
                >

                  Book Free Counselling

                  <ArrowUpRight
                    size={16}
                  />

                </a>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>
  );
}