import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Globe2,
  Hospital,
  FileText,
  WalletCards,
  Stethoscope,
  Plane,
  MessageCircle,
  ShieldCheck,
  Building2,
  Microscope,
  Award,
  BookOpen,
  BadgeCheck,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

function Vietnam() {
  const whatsappNumber = "918830451660";

  const whatsappMessage = encodeURIComponent(
    "Hello Kantule Edutech, I would like to know more about MBBS in Vietnam."
  );

  const whyStudy = [
    {
      icon: WalletCards,
      title: "Affordable Education",
      text: "MBBS programs are cost-effective compared to many countries.",
    },
    {
      icon: Building2,
      title: "Modern Medical Universities",
      text: "Universities offer advanced laboratories and teaching facilities.",
    },
    {
      icon: Hospital,
      title: "Clinical Training Opportunities",
      text: "Students gain practical experience through hospital-based training.",
    },
    {
      icon: Globe2,
      title: "International Exposure",
      text: "Universities welcome students from different countries.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Environment",
      text: "Vietnam is known for its safe and welcoming culture.",
    },
    {
      icon: Microscope,
      title: "Growing Medical Education",
      text: "Universities continue to improve their academic standards.",
    },
  ];

  const courseYears = [
    {
      year: "01–02",
      title: "Basic Medical Sciences",
      text: "Subjects include anatomy, physiology, biochemistry, and histology.",
    },
    {
      year: "03–04",
      title: "Pre-Clinical Subjects",
      text: "Students study pathology, microbiology, pharmacology, and internal medicine.",
    },
    {
      year: "05–06",
      title: "Clinical Training",
      text: "Students gain hands-on experience in hospitals under experienced doctors.",
    },
  ];

  const universities = [
    {
      name: "Can Tho University of Medicine and Pharmacy",
      short: "CTUMP",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=90",
      description:
        "A medical education institution offering healthcare-focused academic and clinical learning opportunities.",
      link: "https://www.udaanedutech.in/ctump.php",
    },
    {
      name: "Duy Tan University",
      short: "DTU",
      image:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=90",
      description:
        "A modern university environment with health sciences education and practical learning facilities.",
      link: "https://www.udaanedutech.in/dtu.php",
    },
  ];

  const admissionSteps = [
    {
      number: "01",
      title: "Free Counselling",
      text: "Students receive guidance about universities, course details, and eligibility.",
      icon: MessageCircle,
    },
    {
      number: "02",
      title: "University Selection",
      text: "Choose a suitable medical university based on academic profile and budget.",
      icon: GraduationCap,
    },
    {
      number: "03",
      title: "Application Submission",
      text: "Submit required academic certificates, passport, and other documents.",
      icon: FileText,
    },
    {
      number: "04",
      title: "Admission Letter",
      text: "Receive official admission confirmation from the university.",
      icon: Award,
    },
    {
      number: "05",
      title: "Visa Processing",
      text: "Complete the required visa application and documentation process.",
      icon: Globe2,
    },
    {
      number: "06",
      title: "Travel to Vietnam",
      text: "Complete pre-departure preparations and begin your medical education.",
      icon: Plane,
    },
  ];

  const documents = [
    "10th and 12th mark sheets",
    "NEET scorecard",
    "Valid passport",
    "Passport-size photographs",
    "Medical fitness certificate",
    "Admission application form",
  ];

  const careers = [
    "Medical practice",
    "Postgraduate medical education",
    "Medical specialization",
    "Hospitals and healthcare organizations",
    "Medical research",
    "Academic and teaching opportunities",
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .vietnam-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 8% 4%,
              rgba(14, 165, 233, 0.08),
              transparent 28%
            ),
            radial-gradient(
              circle at 92% 12%,
              rgba(37, 99, 235, 0.08),
              transparent 30%
            ),
            #f8fafc;
          color: #172033;
          overflow: hidden;
        }

        .vietnam-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .v-section {
          padding: 42px 0 95px;
        }

        /* ================= HERO ================= */

        .vietnam-hero {
          position: relative;
          min-height: 680px;
          display: flex;
          align-items: center;
          padding: 75px 0 95px;
        }

        .hero-glow {
          position: absolute;
          width: 520px;
          height: 520px;
          right: -180px;
          top: 30px;
          border-radius: 50%;
          background: rgba(14, 165, 233, 0.09);
          filter: blur(55px);
          pointer-events: none;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          align-items: center;
          gap: 70px;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border: 1px solid rgba(14, 165, 233, 0.18);
          background: rgba(255,255,255,.82);
          color: #087da8;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
          box-shadow: 0 10px 30px rgba(15,23,42,.05);
          backdrop-filter: blur(10px);
        }

        .hero-title {
          margin: 20px 0 0;
          font-size: clamp(42px, 6vw, 74px);
          line-height: .98;
          letter-spacing: -.055em;
          font-weight: 900;
          color: #0b1f44;
        }

        .hero-title span {
          display: block;
          background: linear-gradient(
            100deg,
            #0b5fa5,
            #078fc9,
            #16a3d9
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          max-width: 670px;
          margin: 24px 0 0;
          color: #64748b;
          font-size: 16px;
          line-height: 1.85;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 20px;
          border-radius: 13px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: .3s ease;
        }

        .hero-btn-primary {
          color: white;
          background: linear-gradient(
            135deg,
            #087da8,
            #075985
          );
          box-shadow: 0 14px 30px rgba(8,125,168,.22);
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(8,125,168,.3);
        }

        .hero-btn-secondary {
          color: #0b1f44;
          background: white;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(15,23,42,.06);
        }

        .hero-btn-secondary:hover {
          transform: translateY(-3px);
          border-color: #8ed7ee;
        }

        .hero-visual {
          position: relative;
        }

        .hero-image-wrap {
          position: relative;
          height: 510px;
          border-radius: 36px;
          padding: 9px;
          background: linear-gradient(
            135deg,
            rgba(8,125,168,.8),
            rgba(255,255,255,.95),
            rgba(14,165,233,.65)
          );
          box-shadow: 0 35px 80px rgba(15,23,42,.15);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 29px;
          display: block;
          filter: saturate(.92);
        }

        .hero-overlay {
          position: absolute;
          inset: 9px;
          border-radius: 29px;
          background:
            linear-gradient(
              180deg,
              rgba(3,15,35,.02) 35%,
              rgba(3,15,35,.72) 100%
            );
        }

        .country-pill {
          position: absolute;
          top: 28px;
          right: 27px;
          padding: 10px 14px;
          border-radius: 14px;
          background: rgba(255,255,255,.94);
          color: #075985;
          font-size: 11px;
          font-weight: 900;
          box-shadow: 0 12px 30px rgba(0,0,0,.12);
          backdrop-filter: blur(12px);
        }

        .hero-floating-card {
          position: absolute;
          left: -28px;
          bottom: 35px;
          width: 250px;
          padding: 18px;
          border-radius: 20px;
          background: rgba(255,255,255,.95);
          border: 1px solid rgba(255,255,255,.9);
          box-shadow: 0 25px 55px rgba(15,23,42,.18);
          backdrop-filter: blur(16px);
        }

        .floating-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #e8f8fd;
          color: #078fc9;
          margin-bottom: 11px;
        }

        .hero-floating-card strong {
          display: block;
          color: #0b1f44;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .hero-floating-card span {
          color: #64748b;
          font-size: 11px;
          line-height: 1.5;
        }

        /* ================= SECTION HEADING ================= */

        .section-heading {
          max-width: 760px;
          margin-bottom: 34px;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #078fc9;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .section-heading h2 {
          margin: 0;
          color: #0b1f44;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.08;
          letter-spacing: -.04em;
        }

        .section-heading p {
          margin: 14px 0 0;
          color: #64748b;
          line-height: 1.85;
          font-size: 14px;
        }

        /* ================= WHY ================= */

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .why-card {
          position: relative;
          padding: 26px;
          min-height: 190px;
          background: rgba(255,255,255,.9);
          border: 1px solid #e8eef5;
          border-radius: 22px;
          box-shadow: 0 14px 40px rgba(15,23,42,.055);
          transition: .35s ease;
          overflow: hidden;
        }

        .why-card::after {
          content: "";
          position: absolute;
          width: 110px;
          height: 110px;
          right: -55px;
          bottom: -55px;
          border-radius: 50%;
          background: rgba(14,165,233,.06);
        }

        .why-card:hover {
          transform: translateY(-6px);
          border-color: rgba(14,165,233,.25);
          box-shadow: 0 22px 50px rgba(15,23,42,.1);
        }

        .why-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(
            135deg,
            #e8f8fd,
            #eff8ff
          );
          color: #078fc9;
          margin-bottom: 18px;
        }

        .why-card h3 {
          margin: 0 0 8px;
          color: #0b1f44;
          font-size: 16px;
        }

        .why-card p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        }

        /* ================= PREMIUM CARD ================= */

        .premium-card {
          background: rgba(255,255,255,.94);
          border: 1px solid #e6edf5;
          border-radius: 30px;
          padding: 38px;
          box-shadow: 0 22px 65px rgba(15,23,42,.065);
          margin-bottom: 25px;
        }

        .premium-card h2 {
          margin: 0;
          color: #0b1f44;
          font-size: 29px;
          letter-spacing: -.025em;
        }

        .premium-card > p {
          color: #64748b;
          line-height: 1.85;
          font-size: 14px;
          margin: 15px 0 0;
        }

        /* ================= TIMELINE ================= */

        .timeline {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          position: relative;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 25px;
          left: 12%;
          right: 12%;
          height: 1px;
          background: linear-gradient(
            90deg,
            #bae6fd,
            #38bdf8,
            #bae6fd
          );
        }

        .timeline-item {
          position: relative;
          z-index: 2;
          padding: 0 15px;
          text-align: center;
        }

        .timeline-number {
          width: 52px;
          height: 52px;
          margin: 0 auto 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #075985,
            #078fc9
          );
          color: white;
          font-size: 12px;
          font-weight: 900;
          box-shadow: 0 12px 25px rgba(8,125,168,.2);
          border: 4px solid white;
        }

        .timeline-item h3 {
          margin: 0 0 7px;
          color: #0b1f44;
          font-size: 15px;
        }

        .timeline-item p {
          margin: 0;
          color: #64748b;
          font-size: 12px;
          line-height: 1.7;
        }

        /* ================= ELIGIBILITY ================= */

        .split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .dark-panel {
          position: relative;
          overflow: hidden;
          padding: 38px;
          border-radius: 30px;
          color: white;
          background:
            radial-gradient(
              circle at 85% 10%,
              rgba(56,189,248,.25),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #062d4b,
              #075985 55%,
              #087da8
            );
          box-shadow: 0 22px 65px rgba(7,89,133,.18);
        }

        .dark-panel::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -90px;
          bottom: -100px;
          border-radius: 50%;
          border: 35px solid rgba(255,255,255,.06);
        }

        .dark-panel h2 {
          margin: 0;
          font-size: 30px;
          letter-spacing: -.03em;
        }

        .dark-panel > p {
          color: rgba(255,255,255,.72);
          line-height: 1.8;
          font-size: 13px;
          margin: 14px 0 0;
        }

        .check-list {
          display: grid;
          gap: 13px;
          margin-top: 23px;
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: rgba(255,255,255,.88);
          font-size: 12px;
          line-height: 1.6;
        }

        .check-item svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: #67e8f9;
        }

        .light-check {
          color: #475569;
        }

        .light-check svg {
          color: #078fc9;
        }

        /* ================= UNIVERSITIES ================= */

        .university-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .university-card {
          overflow: hidden;
          background: white;
          border: 1px solid #e4ebf2;
          border-radius: 25px;
          box-shadow: 0 18px 50px rgba(15,23,42,.07);
          transition: .35s ease;
        }

        .university-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 28px 65px rgba(15,23,42,.12);
        }

        .university-image-wrap {
          position: relative;
          height: 235px;
          overflow: hidden;
        }

        .university-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s ease;
        }

        .university-card:hover .university-image {
          transform: scale(1.05);
        }

        .university-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 35%,
            rgba(3,15,35,.62)
          );
        }

        .university-logo {
          position: absolute;
          left: 18px;
          bottom: 17px;
          width: 58px;
          height: 58px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,.96);
          color: #075985;
          font-weight: 900;
          font-size: 13px;
          box-shadow: 0 12px 30px rgba(0,0,0,.16);
        }

        .university-content {
          padding: 24px;
        }

        .university-tag {
          display: inline-flex;
          padding: 6px 9px;
          border-radius: 999px;
          background: #e8f8fd;
          color: #087da8;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .06em;
        }

        .university-content h3 {
          margin: 12px 0 8px;
          color: #0b1f44;
          font-size: 18px;
          line-height: 1.35;
        }

        .university-content p {
          color: #64748b;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }

        .university-actions {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .university-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 13px;
          border-radius: 11px;
          background: #078fc9;
          color: white;
          font-size: 11px;
          font-weight: 800;
          text-decoration: none;
          transition: .25s ease;
        }

        .university-link:hover {
          background: #075985;
          transform: translateY(-2px);
        }

        .university-info-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 13px;
          border-radius: 11px;
          border: 1px solid #dce7ef;
          color: #0b1f44;
          font-size: 11px;
          font-weight: 800;
          text-decoration: none;
        }

        /* ================= PROCESS ================= */

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 28px;
        }

        .process-card {
          position: relative;
          padding: 24px;
          min-height: 205px;
          border: 1px solid #e6edf5;
          background: #fff;
          border-radius: 21px;
          box-shadow: 0 13px 35px rgba(15,23,42,.055);
          transition: .3s ease;
        }

        .process-card:hover {
          transform: translateY(-5px);
          border-color: #b7e4f4;
        }

        .process-number {
          position: absolute;
          top: 17px;
          right: 18px;
          color: #dcebf3;
          font-size: 27px;
          font-weight: 900;
        }

        .process-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e8f8fd;
          color: #078fc9;
          margin-bottom: 20px;
        }

        .process-card h3 {
          margin: 0 0 8px;
          color: #0b1f44;
          font-size: 15px;
        }

        .process-card p {
          margin: 0;
          color: #64748b;
          font-size: 12px;
          line-height: 1.7;
        }

        /* ================= DOCUMENTS + FEES ================= */

        .document-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .document-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
          margin-top: 23px;
        }

        .document-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px;
          border-radius: 12px;
          background: #f8fafc;
          color: #475569;
          font-size: 12px;
          line-height: 1.4;
          border: 1px solid #edf2f7;
        }

        .document-item svg {
          color: #078fc9;
          flex: 0 0 auto;
        }

        .fee-table-wrap {
          overflow-x: auto;
          margin-top: 22px;
          border: 1px solid #e6edf5;
          border-radius: 15px;
        }

        .fee-table {
          width: 100%;
          min-width: 440px;
          border-collapse: collapse;
        }

        .fee-table th,
        .fee-table td {
          padding: 14px;
          text-align: left;
          border-bottom: 1px solid #e9eef4;
          font-size: 12px;
        }

        .fee-table tr:last-child td {
          border-bottom: none;
        }

        .fee-table th {
          color: #0b1f44;
          background: #f1f8fc;
          font-weight: 800;
        }

        .fee-table td {
          color: #64748b;
        }

        .fee-note {
          margin-top: 14px !important;
          font-size: 11px !important;
          padding: 12px 14px;
          border-radius: 12px;
          background: #eefaff;
          color: #075985 !important;
          border: 1px solid #cceefa;
        }

        /* ================= CAREER ================= */

        .career-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 13px;
          margin-top: 25px;
        }

        .career-item {
          padding: 17px;
          border-radius: 15px;
          background: linear-gradient(
            135deg,
            #f8fafc,
            #eef8fc
          );
          color: #475569;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          gap: 9px;
          align-items: center;
          border: 1px solid #e5eef4;
        }

        .career-item svg {
          color: #078fc9;
          flex: 0 0 auto;
        }

        /* ================= FINAL CTA ================= */

        .final-cta {
          position: relative;
          overflow: hidden;
          padding: 55px;
          border-radius: 32px;
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(56,189,248,.35),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #062d4b,
              #075985 52%,
              #087da8
            );
          color: white;
          box-shadow: 0 30px 75px rgba(7,89,133,.2);
        }

        .final-cta::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          right: -100px;
          bottom: -130px;
          border-radius: 50%;
          border: 45px solid rgba(255,255,255,.07);
        }

        .final-cta-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
        }

        .final-cta h2 {
          margin: 0;
          font-size: clamp(28px,4vw,43px);
          letter-spacing: -.035em;
        }

        .final-cta p {
          color: rgba(255,255,255,.78);
          line-height: 1.8;
          font-size: 14px;
          margin: 13px 0 0;
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 25px;
        }

        .final-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 18px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          transition: .3s ease;
        }

        .final-btn-white {
          background: white;
          color: #075985;
        }

        .final-btn-whatsapp {
          background: #22c55e;
          color: white;
        }

        .final-btn:hover {
          transform: translateY(-3px);
        }

        /* ================= MOBILE ================= */

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-image-wrap {
            height: 420px;
          }

          .why-grid,
          .process-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .timeline {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .timeline::before {
            display: none;
          }

          .timeline-item {
            text-align: left;
            display: grid;
            grid-template-columns: 52px 1fr;
            gap: 15px;
          }

          .timeline-number {
            margin: 0;
          }
        }

        @media (max-width: 700px) {
          .vietnam-container {
            width: min(100% - 28px, 1180px);
          }

          .vietnam-hero {
            padding: 55px 0 65px;
          }

          .hero-image-wrap {
            height: 350px;
            border-radius: 27px;
          }

          .hero-floating-card {
            left: 12px;
            bottom: 18px;
            width: 215px;
          }

          .why-grid,
          .split-grid,
          .university-grid,
          .process-grid,
          .document-grid {
            grid-template-columns: 1fr;
          }

          .premium-card,
          .dark-panel {
            padding: 25px;
            border-radius: 23px;
          }

          .document-list {
            grid-template-columns: 1fr;
          }

          .career-grid {
            grid-template-columns: 1fr;
          }

          .final-cta {
            padding: 32px 24px;
            border-radius: 25px;
          }

          .hero-actions,
          .cta-actions {
            flex-direction: column;
          }

          .hero-btn,
          .final-btn {
            width: 100%;
          }

          .country-pill {
            top: 20px;
            right: 20px;
          }

          .university-image-wrap {
            height: 210px;
          }
        }
      `}</style>

      <main className="vietnam-page">

        {/* ================= HERO ================= */}

        <section className="vietnam-hero">
          <div className="hero-glow" />

          <div className="vietnam-container hero-grid">

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="hero-badge">
                <Globe2 size={13} />
                MBBS PROGRAM ABROAD
              </div>

              <h1 className="hero-title">
                Study MBBS
                <span>in Vietnam</span>
              </h1>

              <p className="hero-description">
                Vietnam is emerging as a promising destination for students
                who want to pursue MBBS abroad. The country is known for its
                growing education system, modern universities, affordable
                medical programs and practical clinical training.
              </p>

              <div className="hero-actions">

                <Link
                  to="/contact"
                  className="hero-btn hero-btn-primary"
                >
                  Get Free Counselling
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn hero-btn-secondary"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>

              </div>

            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="hero-image-wrap">

                <img
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=90"
                  alt="Vietnam"
                  className="hero-image"
                />

                <div className="hero-overlay" />

                <div className="country-pill">
                  🇻🇳 VIETNAM
                </div>

                <div className="hero-floating-card">

                  <div className="floating-icon">
                    <Stethoscope size={20} />
                  </div>

                  <strong>
                    Medical Education Abroad
                  </strong>

                  <span>
                    Explore medical education opportunities,
                    universities and admission guidance in Vietnam.
                  </span>

                </div>

              </div>

            </motion.div>

          </div>
        </section>

        {/* ================= INTRO ================= */}

        <section className="v-section">

          <div className="vietnam-container">

            <motion.div
              className="section-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="section-kicker">
                <Globe2 size={13} />
                Why Vietnam
              </span>

              <h2>
                A promising destination for
                <br />
                international medical education.
              </h2>

              <p>
                Vietnam is emerging as a promising destination for students
                who want to pursue MBBS abroad. The country is known for its
                growing education system, modern universities, and affordable
                medical programs. Vietnamese medical universities focus on
                providing strong academic knowledge along with practical
                clinical training, helping students build a solid foundation
                in medicine.
              </p>

              <p style={{ marginTop: 12 }}>
                Many universities in Vietnam offer medical programs in English
                for international students. Students receive practical
                experience through clinical training in affiliated hospitals,
                which enhances their medical skills and real-world exposure.
              </p>

            </motion.div>

            <div className="why-grid">

              {whyStudy.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="why-card"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                  >

                    <div className="why-icon">
                      <Icon size={20} />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </motion.div>
                );

              })}

            </div>

          </div>

        </section>

        {/* ================= COURSE ================= */}

        <section className="v-section">

          <div className="vietnam-container">

            <motion.div
              className="premium-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="section-kicker">
                <BookOpen size={13} />
                Academic Journey
              </span>

              <h2>
                MBBS Course Duration & Structure
              </h2>

              <p>
                The MBBS program in Vietnam typically lasts{" "}
                <strong>6 years</strong>.
                Students progress from basic medical sciences to
                pre-clinical subjects and practical clinical training.
              </p>

              <div className="timeline">

                {courseYears.map((item) => (

                  <div
                    className="timeline-item"
                    key={item.year}
                  >

                    <div className="timeline-number">
                      {item.year}
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

            {/* ELIGIBILITY */}

            <div className="split-grid">

              <motion.div
                className="dark-panel"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span
                  className="section-kicker"
                  style={{ color: "#67e8f9" }}
                >
                  <BadgeCheck size={13} />
                  Eligibility
                </span>

                <h2>
                  Who Can Apply?
                </h2>

                <p>
                  Students must meet the following requirements to apply
                  for MBBS in Vietnam.
                </p>

                <div className="check-list">

                  <div className="check-item">
                    <CheckCircle2 size={17} />
                    Minimum 50% marks in Physics, Chemistry and Biology
                    in 12th grade.
                  </div>

                  <div className="check-item">
                    <CheckCircle2 size={17} />
                    NEET qualification required for Indian students.
                  </div>

                  <div className="check-item">
                    <CheckCircle2 size={17} />
                    Minimum age of 17 years at the time of admission.
                  </div>

                  <div className="check-item">
                    <CheckCircle2 size={17} />
                    Valid passport required.
                  </div>

                </div>

              </motion.div>

              <motion.div
                className="premium-card"
                style={{ marginBottom: 0 }}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span className="section-kicker">
                  <Hospital size={13} />
                  Student Experience
                </span>

                <h2>
                  Learning Beyond the Classroom
                </h2>

                <p>
                  Students receive academic knowledge together with practical
                  exposure through affiliated hospitals and healthcare
                  environments.
                </p>

                <div className="check-list">

                  {[
                    "Strong academic foundation",
                    "Practical clinical exposure",
                    "Modern learning environments",
                    "International student exposure",
                    "Healthcare-focused education",
                  ].map((text) => (

                    <div
                      className="check-item light-check"
                      key={text}
                    >
                      <CheckCircle2 size={17} />
                      {text}
                    </div>

                  ))}

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ================= UNIVERSITIES ================= */}

        <section className="v-section">

          <div className="vietnam-container">

            <div className="section-heading">

              <span className="section-kicker">
                <GraduationCap size={13} />
                Featured Universities
              </span>

              <h2>
                Explore medical university
                <br />
                opportunities in Vietnam.
              </h2>

              <p>
                Kantule Edutech can help students explore suitable university
                options based on academic profile, eligibility, budget and
                individual career goals.
              </p>

            </div>

            <div className="university-grid">

              {universities.map((university, index) => (

                <motion.div
                  className="university-card"
                  key={university.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >

                  <div className="university-image-wrap">

                    <img
                      src={university.image}
                      alt={university.name}
                      className="university-image"
                    />

                    <div className="university-image-overlay" />

                    <div className="university-logo">
                      {university.short}
                    </div>

                  </div>

                  <div className="university-content">

                    <div className="university-tag">
                      {university.short} • Vietnam
                    </div>

                    <h3>
                      {university.name}
                    </h3>

                    <p>
                      {university.description}
                    </p>

                    <div className="university-actions">

                      <a
                        href={university.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="university-info-link"
                      >
                        University Details
                        <ArrowUpRight size={13} />
                      </a>

                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          `Hello Kantule Edutech, I want information about ${university.name} for MBBS in Vietnam.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="university-link"
                      >
                        Enquire Now
                        <ArrowRight size={13} />
                      </a>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= ADMISSION PROCESS ================= */}

        <section className="v-section">

          <div className="vietnam-container">

            <motion.div
              className="premium-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div
                className="section-heading"
                style={{ marginBottom: 0 }}
              >

                <span className="section-kicker">
                  <FileText size={13} />
                  Admission Process
                </span>

                <h2>
                  From counselling to
                  <br />
                  your journey to Vietnam.
                </h2>

              </div>

              <div className="process-grid">

                {admissionSteps.map((step, index) => {

                  const Icon = step.icon;

                  return (
                    <motion.div
                      className="process-card"
                      key={step.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >

                      <div className="process-number">
                        {step.number}
                      </div>

                      <div className="process-icon">
                        <Icon size={19} />
                      </div>

                      <h3>{step.title}</h3>

                      <p>{step.text}</p>

                    </motion.div>
                  );

                })}

              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= DOCUMENTS + FEES ================= */}

        <section className="v-section">

          <div className="vietnam-container">

            <div className="document-grid">

              <motion.div
                className="premium-card"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span className="section-kicker">
                  <FileText size={13} />
                  Documentation
                </span>

                <h2>
                  Required Documents
                </h2>

                <p>
                  Students usually need the following documents while
                  preparing their application.
                </p>

                <div className="document-list">

                  {documents.map((document) => (

                    <div
                      className="document-item"
                      key={document}
                    >
                      <CheckCircle2 size={15} />
                      {document}
                    </div>

                  ))}

                </div>

                <p
                  style={{
                    marginTop: 18,
                    fontSize: 11,
                  }}
                >
                  Additional documents may be required depending on the
                  university and applicable admission requirements.
                </p>

              </motion.div>

              <motion.div
                className="premium-card"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span className="section-kicker">
                  <WalletCards size={13} />
                  Cost Overview
                </span>

                <h2>
                  Approximate MBBS Fees
                </h2>

                <p>
                  The following figures are approximate and may vary depending
                  on the university and city.
                </p>

                <div className="fee-table-wrap">

                  <table className="fee-table">

                    <thead>
                      <tr>
                        <th>Expense</th>
                        <th>Estimated Cost</th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>Tuition Fees</td>
                        <td>$4,000 – $7,000 per year</td>
                      </tr>

                      <tr>
                        <td>Hostel / Accommodation</td>
                        <td>$1,000 – $2,000 per year</td>
                      </tr>

                      <tr>
                        <td>Food & Living</td>
                        <td>$2,000 – $3,000 per year</td>
                      </tr>

                    </tbody>

                  </table>

                </div>

                <p className="fee-note">
                  <strong>
                    Costs may vary depending on the university and city.
                  </strong>
                </p>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ================= CAREER ================= */}

        <section className="v-section">

          <div className="vietnam-container">

            <motion.div
              className="premium-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="section-kicker">
                <Stethoscope size={13} />
                Opportunities
              </span>

              <h2>
                Career Opportunities After MBBS
              </h2>

              <p>
                After completing MBBS in Vietnam, students can pursue medical
                careers worldwide by fulfilling the applicable licensing and
                regulatory requirements of their chosen country.
              </p>

              <div className="career-grid">

                {careers.map((career) => (

                  <div
                    className="career-item"
                    key={career}
                  >
                    <CheckCircle2 size={16} />
                    {career}
                  </div>

                ))}

              </div>

              <div
                style={{
                  marginTop: 25,
                  padding: 18,
                  borderRadius: 16,
                  background: "#eefaff",
                  border: "1px solid #cceefa",
                  color: "#075985",
                  fontSize: 12,
                  lineHeight: 1.7,
                }}
              >
                <strong>Licensing & Recognition:</strong>{" "}
                Students planning to practice in India, the USA, the UK or
                another country should verify the current recognition and
                licensing requirements applicable to their chosen pathway.
              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="v-section">

          <div className="vietnam-container">

            <motion.div
              className="final-cta"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="final-cta-content">

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#a5f3fc",
                    marginBottom: 10,
                  }}
                >
                  <Stethoscope size={14} />
                  Kantule Edutech
                </span>

                <h2>
                  Planning MBBS in Vietnam?
                </h2>

                <p>
                  Get personalized guidance on university selection,
                  eligibility, documentation, fees and the complete admission
                  journey from Kantule Edutech.
                </p>

                <div className="cta-actions">

                  <Link
                    to="/contact"
                    className="final-btn final-btn-white"
                  >
                    Book Free Counselling
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="final-btn final-btn-whatsapp"
                  >
                    <MessageCircle size={15} />
                    Chat on WhatsApp
                  </a>

                </div>

              </div>

            </motion.div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Vietnam;