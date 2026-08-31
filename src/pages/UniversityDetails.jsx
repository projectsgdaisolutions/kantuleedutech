import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import { motion } from "framer-motion";

import {
  MapPin,
  Building2,
  GraduationCap,
  ArrowLeft,
  Clock,
  BookOpen,
  Shield,
  ClipboardCheck,
  CheckCircle2,
  MessageCircle,
  WalletCards,
  Images,
  CalendarDays,
} from "lucide-react";

import {
  universitiesData,
} from "../data/universitiesData";

import {
  getCollegeDetailById,
} from "../data/collegesData";

// ============================================================
// LOCAL KYRGYZSTAN IMAGES
// ============================================================

import ihsmImage from "../assets/images/universities/ihsm.png";

import oshStateUniversityImage from "../assets/images/universities/osh-state-university.png";

import asianMedicalInstituteImage from "../assets/images/universities/asian-medical-institute.png";

// ============================================================
// IMAGE OVERRIDES
// ============================================================

const UNIVERSITY_IMAGE_OVERRIDES = {

  // International Higher School of Medicine, Issyk-Kul
  ihsm:
    "https://th.bing.com/th/id/OIP.vSeOPrF6sN5qo0WpP9k8rQHaFj?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  "kyrgyzstan-ihsm":
    "https://th.bing.com/th/id/OIP.vSeOPrF6sN5qo0WpP9k8rQHaFj?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

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

  // UP Manila
  "up-manila":

    "https://th.bing.com/th/id/OIP.cR84ZeNJRaEsg2MPc8bQ3wHaFj?w=198&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  "up-manila-college-of-medicine":

    "https://th.bing.com/th/id/OIP.cR84ZeNJRaEsg2MPc8bQ3wHaFj?w=198&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

  // ==========================================================
  // TRIBHUVAN UNIVERSITY INSTITUTE OF MEDICINE
  // ==========================================================

  "tribhuvan-iom":

    "https://th.bing.com/th/id/OIP.97VIS6CI6q0r8nLiqPjIqwHaFj?w=215&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
};

// ============================================================
// KYRGYZSTAN UNIVERSITIES
// ============================================================

const kyrgyzstanUniversities = [

  {
    id: "kyrgyzstan-osh-state-university",
    name: "Osh State University",
    country: "Kyrgyzstan",
    city: "Osh",

    image:
      oshStateUniversityImage,
  },

  {
    id: "kyrgyzstan-asian-medical-institute",
    name: "Asian Medical Institute",
    country: "Kyrgyzstan",
    city: "Kant",

    image:
      asianMedicalInstituteImage,
  },
];

// ============================================================
// TRIBHUVAN UNIVERSITY
// ============================================================

const nepalUniversities = [

  {
    id: "tribhuvan-iom",

    name:
      "Tribhuvan University Institute of Medicine",

    country: "Nepal",

    city: "Kathmandu",

    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  },

];

// ============================================================
// HELPERS
// ============================================================

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

// ============================================================
// GET UNIVERSITY IMAGE
// ============================================================

function getUniversityImage(
  university,
  detailInfo
) {

  const id =
    university?.id ||
    detailInfo?.id ||
    "";

  const directId =
    String(id)
      .trim()
      .toLowerCase();

  const normalizedId =
    normalizeId(id);

  // Exact override
  if (
    UNIVERSITY_IMAGE_OVERRIDES[
    directId
    ]
  ) {
    return UNIVERSITY_IMAGE_OVERRIDES[
      directId
    ];
  }

  // Normalized override
  if (
    UNIVERSITY_IMAGE_OVERRIDES[
    normalizedId
    ]
  ) {
    return UNIVERSITY_IMAGE_OVERRIDES[
      normalizedId
    ];
  }

  // University data image
  if (
    university?.image
  ) {
    return university.image;
  }

  // Detail data image
  if (
    detailInfo?.image
  ) {
    return detailInfo.image;
  }

  return "";
}

// ============================================================
// CREATE BASIC INFO FROM DETAIL
// ============================================================

function createBasicInfoFromDetail(
  detailInfo,
  universityId
) {

  if (!detailInfo) {
    return null;
  }

  const location =
    String(
      detailInfo.location || ""
    ).trim();

  const locationParts =
    location
      .split(",")
      .map(
        (item) =>
          item.trim()
      )
      .filter(Boolean);

  const city =
    locationParts.length > 1
      ? locationParts
        .slice(0, -1)
        .join(", ")
      : locationParts[0] || "";

  const country =
    locationParts.length > 1
      ? locationParts[
      locationParts.length - 1
      ]
      : "";

  return {

    id:
      universityId,

    name:
      detailInfo.name ||
      "University",

    country:
      country ||
      "International",

    city,

    image:
      detailInfo.image ||
      "",
  };
}

// ============================================================
// USD TO INR
// ============================================================

const USD_TO_INR = 83;

function getInrAmount(
  value
) {

  if (!value) {
    return null;
  }

  const match =
    String(value).match(
      /\$?\s*([\d,]+(?:\.\d+)?)/
    );

  if (!match) {
    return null;
  }

  const usd =
    Number(
      match[1].replace(
        /,/g,
        ""
      )
    );

  if (
    !Number.isFinite(
      usd
    )
  ) {
    return null;
  }

  return Math.round(
    usd * USD_TO_INR
  ).toLocaleString(
    "en-IN"
  );
}

// ============================================================
// FEE WITH INR
// ============================================================

function FeeWithINR({
  value,
}) {

  const inr =
    getInrAmount(
      value
    );

  return (
    <div>

      <div>
        {value}
      </div>

      {inr && (
        <div className="mt-1 text-xs sm:text-sm font-semibold text-[#1455A0]">

          ≈ ₹{inr}

        </div>
      )}

    </div>
  );
}

// ============================================================
// YEAR COUNT
// ============================================================

function getYearCount(
  duration
) {

  if (!duration) {
    return 5;
  }

  const text =
    String(duration);

  if (
    /6\s*Years/i.test(
      text
    )
  ) {
    return 6;
  }

  if (
    /5\s*to\s*6\s*Years/i.test(
      text
    )
  ) {
    return 5;
  }

  if (
    /5\s*Years/i.test(
      text
    )
  ) {
    return 5;
  }

  return 5;
}

// ============================================================
// YEAR LABEL
// ============================================================

function getYearLabel(
  year
) {

  if (year === 1)
    return "1st Year";

  if (year === 2)
    return "2nd Year";

  if (year === 3)
    return "3rd Year";

  return `${year}th Year`;
}

// ============================================================
// TUITION BY YEAR
// ============================================================

function getTuitionForYear(
  fees,
  year
) {

  if (!fees) {
    return null;
  }

  const tuition =
    fees.tuition;

  if (!tuition) {
    return null;
  }

  const tuitionText =
    String(tuition);

  if (
    /1st\s*Year\s*:/i.test(
      tuitionText
    )
  ) {

    if (year === 1) {

      const firstYearMatch =
        tuitionText.match(
          /1st\s*Year\s*:\s*([^|]+)/i
        );

      return firstYearMatch
        ? firstYearMatch[1].trim()
        : tuitionText;
    }

    const laterYearMatch =
      tuitionText.match(
        /2nd[–-](?:5th|6th)\s*Year\s*:\s*([^|]+)/i
      ) ||
      tuitionText.match(
        /2nd[–-]6th\s*Year\s*:\s*([^|]+)/i
      );

    return laterYearMatch
      ? laterYearMatch[1].trim()
      : tuitionText;
  }

  return tuitionText;
}


// ============================================================
// YEAR-WISE FEE VALUES
// ============================================================

function getCollegeFeeForYear(
  detailInfo,
  year
) {

  const fees =
    detailInfo?.fees;

  if (fees?.tuition) {
    return getTuitionForYear(
      fees,
      year
    );
  }

  return (
    detailInfo?.annualTuitionFee ||
    fees?.annualTuitionFee ||
    null
  );
}

function getHostelAndMessForYear(
  detailInfo
) {

  const fees =
    detailInfo?.fees;

  if (!fees) {
    return null;
  }

  if (fees.hostelAndMess) {
    return fees.hostelAndMess;
  }

  if (fees.hostel && fees.food) {
    return `${fees.hostel} + ${fees.food}`;
  }

  return (
    fees.hostel ||
    fees.food ||
    null
  );
}

function hasYearWiseFeeData(
  detailInfo
) {

  return Boolean(
    detailInfo?.fees?.tuition ||
    detailInfo?.fees?.annualTuitionFee ||
    detailInfo?.annualTuitionFee
  );
}

// ============================================================
// SECTION CARD
// ============================================================

function SectionCard({
  title,
  icon: Icon,
  children,
}) {

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#e2edf8] shadow-[0_8px_30px_rgba(11,45,92,0.03)]">

      <div className="flex items-center gap-3">

        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-[#eef7fc] text-[#1455A0] flex items-center justify-center">

            <Icon
              size={19}
            />

          </div>
        )}

        <h2 className="text-xl sm:text-2xl font-bold text-[#0B2D5C]">
          {title}
        </h2>

      </div>

      <div className="w-12 h-1 bg-[#18B8D4] rounded mt-3 mb-5" />

      {children}

    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function UniversityDetails() {

  const {
    universityId,
  } = useParams();

  const [
    imageError,
    setImageError,
  ] = useState(false);

  const [
    activeGalleryImage,
    setActiveGalleryImage,
  ] = useState(null);

  // ==========================================================
  // RESET
  // ==========================================================

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    setImageError(false);

    setActiveGalleryImage(
      null
    );

  }, [
    universityId,
  ]);

  // ==========================================================
  // ALL BASIC UNIVERSITIES
  // ==========================================================

  const allBasicUniversities =
    useMemo(
      () => [
        ...universitiesData,
        ...kyrgyzstanUniversities,
        ...nepalUniversities,
      ],
      []
    );

  // ==========================================================
  // NORMALIZED ID
  // ==========================================================

  const normalizedUniversityId =
    normalizeId(
      universityId
    );

  // ==========================================================
  // DETAIL INFO
  // ==========================================================

  let detailInfo =
    getCollegeDetailById(
      universityId
    );

  if (
    !detailInfo &&
    normalizedUniversityId
  ) {

    detailInfo =
      getCollegeDetailById(
        normalizedUniversityId
      );
  }

  // ==========================================================
  // BASIC INFO
  // ==========================================================

  let basicInfo =
    allBasicUniversities.find(
      (university) =>
        university.id ===
        universityId
    );

  if (
    !basicInfo &&
    normalizedUniversityId
  ) {

    basicInfo =
      allBasicUniversities.find(
        (university) =>
          normalizeId(
            university.id
          ) ===
          normalizedUniversityId
      );
  }

  // ==========================================================
  // CREATE BASIC INFO IF NEEDED
  // ==========================================================

  if (
    !basicInfo &&
    detailInfo
  ) {

    basicInfo =
      createBasicInfoFromDetail(
        detailInfo,
        universityId
      );
  }

  // ==========================================================
  // NOT FOUND
  // ==========================================================

  if (
    !detailInfo ||
    !basicInfo
  ) {

    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#f8fbfe] px-4 py-16 text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-[#dce8f5] shadow-[0_10px_40px_rgba(11,45,92,0.06)]"
        >

          <div className="w-16 h-16 rounded-2xl bg-[#eef7fc] text-[#1455A0] flex items-center justify-center mx-auto mb-6 border border-[#d2e7f8]">

            <Building2
              size={32}
              className="text-[#18B8D4]"
            />

          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D5C] tracking-tight">
            University Not Found
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-500 leading-relaxed">

            The university you are looking for does not exist or may have been updated. Please return to the homepage to explore all choices.

          </p>

          <div className="mt-8">

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0B2D5C] to-[#1455A0] hover:shadow-lg hover:shadow-blue-900/20 text-white text-sm font-bold transition-all duration-200"
            >

              <ArrowLeft
                size={16}
              />

              Back to Universities

            </Link>

          </div>

        </motion.div>

      </div>
    );
  }

  // ==========================================================
  // MAIN IMAGE
  // ==========================================================

  const primaryImage =
    getUniversityImage(
      basicInfo,
      detailInfo
    );

  const fallbackImage =
    detailInfo.image ||
    basicInfo.image ||
    "";

  const displayImage =
    imageError &&
      fallbackImage &&
      fallbackImage !==
      primaryImage
      ? fallbackImage
      : primaryImage;

  // ==========================================================
  // LOCATION
  // ==========================================================

  const displayLocation =
    basicInfo.city &&
      basicInfo.country
      ? `${basicInfo.city}, ${basicInfo.country}`
      : detailInfo.location ||
      basicInfo.country ||
      "Location not available";

  // ==========================================================
  // WHATSAPP
  // ==========================================================

  const whatsappMsg =
    encodeURIComponent(
      `Hi, I want to get admission details for ${basicInfo.name} in ${basicInfo.country}. Please guide me.`
    );

  // ==========================================================
  // GALLERY
  // ==========================================================

  const galleryImages = [
    ...(detailInfo.gallery?.main ||
      []),

    ...(detailInfo.gallery?.campus ||
      []),
  ];

  // ==========================================================
  // YEAR COUNT
  // ==========================================================

  const yearCount =
    getYearCount(
      detailInfo.duration ||
      detailInfo.courseDuration
    );

  // ==========================================================
  // IMAGE ERROR
  // ==========================================================

  const handleMainImageError =
    () => {

      if (
        fallbackImage &&
        fallbackImage !==
        primaryImage
      ) {

        setImageError(
          true
        );

        return;
      }

      setImageError(
        true
      );
    };

  // ==========================================================
  // RETURN
  // ==========================================================

  return (
    <div className="bg-[#f8fbfe] min-h-screen pb-16 sm:pb-24">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="bg-white border-b border-slate-100 py-4 sm:py-5 sticky top-0 z-30 shadow-[0_1px_3px_rgba(11,45,92,0.02)]">

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1455A0] hover:text-[#0B2D5C] transition-colors duration-150"
          >

            <ArrowLeft
              size={16}
            />

            <span>
              Back to Universities
            </span>

          </Link>

        </div>

      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="bg-gradient-to-b from-white to-[#f8fbfe] pt-8 sm:pt-12 pb-6 border-b border-slate-100">

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
          >

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d6e6f5] text-[#1455A0] text-xs font-extrabold tracking-widest uppercase mb-4 shadow-sm">

              <span className="w-2 h-2 rounded-full bg-[#18B8D4]" />

              {basicInfo.country}

            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2D5C] leading-tight">

              {basicInfo.name}

            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-slate-500 font-medium">

              <div className="flex items-center gap-1.5">

                <MapPin
                  size={15}
                  className="text-[#18B8D4] shrink-0"
                />

                <span>
                  {displayLocation}
                </span>

              </div>

              {detailInfo.established && (
                <div className="flex items-center gap-1.5">

                  <CalendarDays
                    size={15}
                    className="text-[#18B8D4]"
                  />

                  <span>
                    Established{" "}
                    {
                      detailInfo.established
                    }
                  </span>

                </div>
              )}

              {detailInfo.duration && (
                <div className="flex items-center gap-1.5">

                  <Clock
                    size={15}
                    className="text-[#18B8D4]"
                  />

                  <span>
                    {
                      detailInfo.duration
                    }
                  </span>

                </div>
              )}

            </div>

            <div className="mt-4 flex flex-wrap gap-2">

              {detailInfo.type && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#eef7fc] text-[#0B2D5C] border border-[#d2e7f8]">

                  <Building2
                    size={12}
                  />

                  {
                    detailInfo.type
                  }

                </span>
              )}

              {detailInfo.recognition && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e6faf0] text-[#047857] border border-[#a7f3d0]">

                  <Shield
                    size={12}
                  />

                  {
                    detailInfo.recognition
                  }

                </span>
              )}

            </div>

          </motion.div>

        </div>

      </section>

      {/* ======================================================
          MAIN
      ====================================================== */}

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ==================================================
              LEFT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="lg:col-span-8 space-y-6 sm:space-y-8"
          >

            {/* MAIN IMAGE */}

            <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e2edf8] shadow-[0_8px_30px_rgba(11,45,92,0.03)] overflow-hidden">

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f0f6fc]">

                {displayImage ? (

                  <img
                    src={displayImage}
                    alt={
                      basicInfo.name
                    }
                    onError={
                      handleMainImageError
                    }
                    className="w-full h-full object-cover"
                  />

                ) : (

                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B2D5C] to-[#1455A0] text-white p-8 text-center">

                    <Building2
                      size={48}
                      className="text-[#18B8D4] mb-3"
                    />

                    <h3 className="text-xl font-bold">

                      {
                        basicInfo.name
                      }

                    </h3>

                    <p className="text-sm text-cyan-200 mt-1">

                      {
                        basicInfo.country
                      }

                    </p>

                  </div>

                )}

              </div>

            </div>

            {/* OVERVIEW */}

            {detailInfo.description && (
              <SectionCard
                title="University Overview"
                icon={BookOpen}
              >

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">

                  {
                    detailInfo.description
                  }

                </p>

              </SectionCard>
            )}

            {/* HIGHLIGHTS */}

            {detailInfo.highlights?.length >
              0 && (

                <SectionCard
                  title="Key Highlights"
                  icon={
                    CheckCircle2
                  }
                >

                  <div className="grid sm:grid-cols-2 gap-3">

                    {detailInfo.highlights.map(
                      (
                        item,
                        index
                      ) => (

                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100"
                        >

                          <CheckCircle2
                            size={17}
                            className="text-[#18B8D4] shrink-0 mt-0.5"
                          />

                          <span className="text-sm text-slate-600">
                            {item}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </SectionCard>
              )}

            {/* ADVANTAGES */}

            {detailInfo.advantages?.length >
              0 && (

                <SectionCard
                  title="Advantages"
                  icon={Shield}
                >

                  <div className="grid sm:grid-cols-2 gap-3">

                    {detailInfo.advantages.map(
                      (
                        item,
                        index
                      ) => (

                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100"
                        >

                          <CheckCircle2
                            size={17}
                            className="text-[#18B8D4] shrink-0 mt-0.5"
                          />

                          <span className="text-sm text-slate-600">
                            {item}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </SectionCard>
              )}

            {/* COURSE STRUCTURE */}

            {detailInfo.courseStructure?.length >
              0 && (

                <SectionCard
                  title="Course Structure"
                  icon={
                    GraduationCap
                  }
                >

                  {detailInfo.courseStructureDescription && (
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">

                      {
                        detailInfo.courseStructureDescription
                      }

                    </p>
                  )}

                  <div className="space-y-3">

                    {detailInfo.courseStructure.map(
                      (
                        item,
                        index
                      ) => (

                        <div
                          key={index}
                          className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                        >

                          <div className="flex items-start gap-3">

                            <div className="w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0">

                              <BookOpen
                                size={17}
                              />

                            </div>

                            <div>

                              <p className="text-sm font-extrabold text-[#0B2D5C]">

                                {
                                  item.year
                                }

                              </p>

                              <p className="mt-1 text-sm text-slate-600 leading-relaxed">

                                {
                                  item.description
                                }

                              </p>

                            </div>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                </SectionCard>
              )}

            {/* YEAR WISE TUITION */}

            {hasYearWiseFeeData(
              detailInfo
            ) && (

                <SectionCard
                  title="Year-wise Tuition"
                  icon={
                    WalletCards
                  }
                >

                  <div className="overflow-x-auto -mx-1 px-1">

                    <table className="w-full min-w-[520px] border-collapse">

                      <thead>

                        <tr className="border-b border-slate-200">

                          <th className="px-3 py-3 text-left text-[11px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wide">
                            Year
                          </th>

                          <th className="px-3 py-3 text-right text-[11px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wide">
                            College Fees
                          </th>

                          <th className="px-3 py-3 text-right text-[11px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wide">
                            Hostel + Mess
                          </th>

                        </tr>

                      </thead>

                      <tbody>

                        {Array.from({
                          length:
                            yearCount,
                        }).map(
                          (
                            _,
                            index
                          ) => {

                            const year =
                              index + 1;

                            const collegeFee =
                              getCollegeFeeForYear(
                                detailInfo,
                                year
                              );

                            const hostelAndMess =
                              getHostelAndMessForYear(
                                detailInfo
                              );

                            if (
                              !collegeFee &&
                              !hostelAndMess
                            ) {
                              return null;
                            }

                            return (
                              <tr
                                key={
                                  year
                                }
                                className="border-b border-slate-100 last:border-0"
                              >

                                <td className="px-3 py-4 text-sm font-extrabold text-[#0B2D5C] whitespace-nowrap">
                                  {
                                    getYearLabel(
                                      year
                                    )
                                  }
                                </td>

                                <td className="px-3 py-4 text-right text-sm font-bold text-[#1455A0] whitespace-nowrap">

                                  {collegeFee ? (
                                    <FeeWithINR
                                      value={
                                        collegeFee
                                      }
                                    />
                                  ) : (
                                    "—"
                                  )}

                                </td>

                                <td className="px-3 py-4 text-right text-sm font-bold text-[#1455A0] whitespace-nowrap">

                                  {hostelAndMess ? (
                                    hostelAndMess
                                  ) : (
                                    "—"
                                  )}

                                </td>

                              </tr>
                            );
                          }
                        )}

                      </tbody>

                    </table>

                  </div>

                </SectionCard>
              )}


            {/* RECOGNITION */}

            {detailInfo.recognitionDetails?.length >
              0 && (

                <SectionCard
                  title="Recognition & Accreditation"
                  icon={Shield}
                >

                  <div className="grid sm:grid-cols-2 gap-3">

                    {detailInfo.recognitionDetails.map(
                      (
                        item,
                        index
                      ) => (

                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100"
                        >

                          <CheckCircle2
                            size={17}
                            className="text-[#18B8D4] shrink-0 mt-0.5"
                          />

                          <span className="text-sm text-slate-600">
                            {item}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </SectionCard>
              )}

            {/* CAMPUS */}

            {detailInfo.campusFacilities?.length >
              0 && (

                <SectionCard
                  title="Campus Facilities"
                  icon={
                    Building2
                  }
                >

                  <div className="grid sm:grid-cols-2 gap-3">

                    {detailInfo.campusFacilities.map(
                      (
                        item,
                        index
                      ) => (

                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100"
                        >

                          <CheckCircle2
                            size={17}
                            className="text-[#18B8D4] shrink-0 mt-0.5"
                          />

                          <span className="text-sm text-slate-600">
                            {item}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </SectionCard>
              )}

            {/* HOSTEL */}

            {detailInfo.hostelFacilities?.length >
              0 && (

                <SectionCard
                  title="Hostel Facilities"
                  icon={
                    Building2
                  }
                >

                  <div className="grid sm:grid-cols-2 gap-3">

                    {detailInfo.hostelFacilities.map(
                      (
                        item,
                        index
                      ) => (

                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100"
                        >

                          <CheckCircle2
                            size={17}
                            className="text-[#18B8D4] shrink-0 mt-0.5"
                          />

                          <span className="text-sm text-slate-600">
                            {item}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </SectionCard>
              )}

            {/* STAFF */}

            {detailInfo.staff?.length >
              0 && (

                <SectionCard
                  title="Staff"
                  icon={
                    GraduationCap
                  }
                >

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

                    {detailInfo.staff.map(
                      (
                        member,
                        index
                      ) => (

                        <div
                          key={`${member.name}-${index}`}
                          className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100"
                        >

                          {member.image && (
                            <img
                              src={
                                member.image
                              }
                              alt={
                                member.name
                              }
                              loading="lazy"
                              className="w-full aspect-square object-cover"
                            />
                          )}

                          <div className="p-3">

                            <p className="text-sm font-bold text-[#0B2D5C] leading-snug">

                              {
                                member.name
                              }

                            </p>

                            <p className="mt-1 text-xs text-slate-500 leading-5">

                              {
                                member.role
                              }

                            </p>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                </SectionCard>
              )}

            {/* GALLERY */}

            {galleryImages.length >
              0 && (

                <SectionCard
                  title="University Gallery"
                  icon={
                    Images
                  }
                >

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                    {galleryImages.map(
                      (
                        image,
                        index
                      ) => (

                        <button
                          key={`${image}-${index}`}
                          type="button"
                          onClick={() =>
                            setActiveGalleryImage(
                              image
                            )
                          }
                          className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 aspect-[4/3]"
                        >

                          <img
                            src={image}
                            alt={`${basicInfo.name} gallery ${index + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />

                        </button>

                      )
                    )}

                  </div>

                </SectionCard>
              )}

            {/* FAQ */}

            {detailInfo.faqs?.length >
              0 && (

                <SectionCard
                  title="Frequently Asked Questions"
                  icon={
                    ClipboardCheck
                  }
                >

                  <div className="space-y-3">

                    {detailInfo.faqs.map(
                      (
                        faq,
                        index
                      ) => (

                        <details
                          key={index}
                          className="group rounded-xl border border-slate-100 bg-slate-50 p-4"
                        >

                          <summary className="cursor-pointer list-none flex items-start justify-between gap-4">

                            <span className="text-sm font-bold text-[#0B2D5C]">

                              {
                                faq.q
                              }

                            </span>

                            <span className="text-[#18B8D4] text-lg leading-none">
                              +
                            </span>

                          </summary>

                          <p className="mt-3 text-sm text-slate-600 leading-relaxed">

                            {
                              faq.a
                            }

                          </p>

                        </details>

                      )
                    )}

                  </div>

                </SectionCard>
              )}

          </motion.div>

          {/* ==================================================
              RIGHT SIDEBAR
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="lg:col-span-4 lg:sticky lg:top-24 space-y-5"
          >

            {/* QUICK INFORMATION */}

            <div className="bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#e2edf8] shadow-[0_8px_30px_rgba(11,45,92,0.04)]">

              <h3 className="text-lg sm:text-xl font-bold text-[#0B2D5C]">
                Quick Information
              </h3>

              <div className="w-10 h-1 bg-[#18B8D4] rounded mt-2 mb-5" />

              <div className="space-y-3">

                {detailInfo.course && (
                  <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">

                    <div className="w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0">

                      <GraduationCap
                        size={18}
                      />

                    </div>

                    <div>

                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Course
                      </span>

                      <span className="text-sm font-bold text-[#0B2D5C]">

                        {
                          detailInfo.course
                        }

                      </span>

                    </div>

                  </div>
                )}

                {(detailInfo.duration ||
                  detailInfo.courseDuration) && (

                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">

                      <div className="w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0">

                        <Clock
                          size={18}
                        />

                      </div>

                      <div>

                        <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          Duration
                        </span>

                        <span className="text-sm font-bold text-[#0B2D5C]">

                          {
                            detailInfo.duration ||
                            detailInfo.courseDuration
                          }

                        </span>

                      </div>

                    </div>
                  )}

                {detailInfo.medium && (
                  <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">

                    <div className="w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0">

                      <BookOpen
                        size={18}
                      />

                    </div>

                    <div>

                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Medium
                      </span>

                      <span className="text-sm font-bold text-[#0B2D5C]">

                        {
                          detailInfo.medium
                        }

                      </span>

                    </div>

                  </div>
                )}

                {detailInfo.admission && (
                  <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">

                    <div className="w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0">

                      <ClipboardCheck
                        size={18}
                      />

                    </div>

                    <div>

                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Admission
                      </span>

                      <span className="text-sm font-bold text-[#0B2D5C]">

                        {
                          detailInfo.admission
                        }

                      </span>

                    </div>

                  </div>
                )}

                {detailInfo.eligibility && (
                  <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">

                    <div className="w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0">

                      <ClipboardCheck
                        size={18}
                      />

                    </div>

                    <div>

                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Eligibility
                      </span>

                      <span className="text-sm font-bold text-[#0B2D5C]">

                        {
                          detailInfo.eligibility
                        }

                      </span>

                    </div>

                  </div>
                )}


              </div>

            </div>

            {/* CTA */}

            <div className="bg-[#0B2D5C] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#0F366D] shadow-[0_8px_30px_rgba(11,45,92,0.15)] relative overflow-hidden">

              <div className="absolute -right-16 -bottom-16 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />

              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Interested in this University?
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">

                Connect directly with our counseling experts to get complete guidance on admission eligibility, fee structures, and application procedures.

              </p>

              <div className="mt-6 space-y-3.5">

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-[#0B2D5C] text-xs sm:text-sm font-bold shadow-md transition-all duration-200"
                >

                  <GraduationCap
                    size={16}
                  />

                  Get Free Guidance

                </Link>

                <a
                  href={`https://wa.me/918830451660?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white text-xs sm:text-sm font-bold shadow-md transition-all duration-200"
                >

                  <MessageCircle
                    size={16}
                  />

                  WhatsApp Consultation

                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </main>

      {/* ======================================================
          GALLERY LIGHTBOX
      ====================================================== */}

      {activeGalleryImage && (

        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() =>
            setActiveGalleryImage(
              null
            )
          }
        >

          <div
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={
                activeGalleryImage
              }
              alt={
                basicInfo.name
              }
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />

            <button
              type="button"
              onClick={() =>
                setActiveGalleryImage(
                  null
                )
              }
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition"
              aria-label="Close gallery"
            >
              ×
            </button>

          </div>

        </div>

      )}

    </div>
  );
}