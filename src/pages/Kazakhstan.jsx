import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  FileText,
  Globe2,
  Hospital,
  Languages,
  ShieldCheck,
  WalletCards,
  Stethoscope,
  Plane,
  ClipboardCheck,
  Award,
  MessageCircle,
  BookOpen,
  Building2,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

function Kazakhstan() {
  const whatsappNumber = "918830451660";

  const whatsappMessage =
    "I want to know more about MBBS in Kazakhstan";

  const universities = [
    {
      name: "Kazakh Russian Medical University",
      shortName: "KRMU",
      location: "Almaty, Kazakhstan",
      logo: "/images/universities/krmu.png",
      link: "https://www.udaanedutech.in/krmu.php",
    },
    {
      name: "Caspian International School of Medicine",
      shortName: "CISM",
      location: "Almaty, Kazakhstan",
      logo: "/images/universities/cism.png",
      link: "https://www.udaanedutech.in/cism.php",
    },
    {
      name: "Kokshetau State University",
      shortName: "KSU",
      location: "Kokshetau, Kazakhstan",
      logo: "/images/universities/ksu.png",
      link: "https://www.udaanedutech.in/ksu.php",
    },
  ];

  const whyStudy = [
    {
      icon: WalletCards,
      title: "Affordable Tuition Fees",
      text: "MBBS in Kazakhstan is more economical compared to many other countries.",
    },
    {
      icon: Languages,
      title: "English Medium Programs",
      text: "Medical courses are available in English for international students.",
    },
    {
      icon: Globe2,
      title: "Globally Recognized Universities",
      text: "Many universities are recognized by international medical bodies.",
    },
    {
      icon: Building2,
      title: "Modern Medical Infrastructure",
      text: "Universities have advanced laboratories and teaching facilities.",
    },
    {
      icon: Hospital,
      title: "Clinical Training",
      text: "Students receive practical training in affiliated hospitals.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Environment",
      text: "Kazakhstan is known for its safe and welcoming atmosphere for international students.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Free Counseling",
      text: "Get guidance about universities, course details and eligibility.",
    },
    {
      number: "02",
      icon: GraduationCap,
      title: "University Selection",
      text: "Choose the right medical university based on academic profile and budget.",
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Application Submission",
      text: "Submit the required academic and personal documents.",
    },
    {
      number: "04",
      icon: Award,
      title: "Admission Letter",
      text: "Receive official admission confirmation from the university.",
    },
    {
      number: "05",
      icon: FileText,
      title: "Visa Processing",
      text: "Complete the required student visa application process.",
    },
    {
      number: "06",
      icon: Plane,
      title: "Travel to Kazakhstan",
      text: "Travel to Kazakhstan and begin your medical education journey.",
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

  const careerOptions = [
    {
      title: "FMGE / NEXT",
      text: "To pursue medical practice in India, subject to applicable licensing requirements.",
    },
    {
      title: "USMLE",
      text: "Pathway for graduates planning to pursue medical practice in the United States.",
    },
    {
      title: "PLAB",
      text: "Pathway for graduates planning to pursue medical practice in the United Kingdom.",
    },
    {
      title: "Postgraduate Studies",
      text: "Graduates can pursue postgraduate medical education and specialization.",
    },
  ];

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        .kazakhstan-page {
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(13, 166, 211, 0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 35%,
              rgba(10, 63, 130, 0.07),
              transparent 30%
            ),
            #f7fbff;
          color: #09285f;
          overflow: hidden;
        }

        /* ================= HERO ================= */

        .kaz-hero {
          position: relative;
          min-height: 570px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(4, 30, 68, 0.96) 0%,
              rgba(5, 46, 91, 0.86) 42%,
              rgba(5, 46, 91, 0.45) 72%,
              rgba(5, 46, 91, 0.18) 100%
            ),
            url("https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=2000&q=85")
            center / cover;
        }

        .kaz-hero::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          right: -180px;
          top: 50%;
          transform: translateY(-50%);
          box-shadow:
            0 0 0 60px rgba(255,255,255,0.025),
            0 0 0 120px rgba(255,255,255,0.018);
        }

        .kaz-hero-inner {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .kaz-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          margin-bottom: 24px;
        }

        .kaz-breadcrumb span:last-child {
          color: #fff;
          font-weight: 700;
        }

        .kaz-hero-content {
          max-width: 760px;
        }

        .kaz-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          color: #73e5ff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
          margin-bottom: 20px;
        }

        .kaz-hero h1 {
          color: #fff;
          font-size: clamp(44px, 6vw, 76px);
          line-height: 1.02;
          letter-spacing: -0.045em;
          margin: 0;
        }

        .kaz-hero h1 span {
          display: block;
          color: #57d8f3;
        }

        .kaz-hero-description {
          color: rgba(255,255,255,0.82);
          font-size: 17px;
          line-height: 1.8;
          max-width: 700px;
          margin: 24px 0 30px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 22px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: .3s ease;
        }

        .hero-btn-primary {
          background: linear-gradient(135deg, #08a8d7, #24c5df);
          color: #fff;
          box-shadow: 0 14px 35px rgba(0, 174, 220, .25);
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px);
        }

        .hero-btn-secondary {
          color: #fff;
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(10px);
        }

        .hero-btn-secondary:hover {
          background: rgba(255,255,255,.15);
        }

        /* ================= GENERAL ================= */

        .kaz-container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
        }

        .kaz-section {
          padding: 90px 0;
        }

        .section-heading {
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #079fd0;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.1;
          letter-spacing: -.035em;
          color: #09285f;
        }

        .section-heading h2 span {
          color: #079fd0;
        }

        .section-heading p {
          color: #687c98;
          line-height: 1.8;
          margin: 18px auto 0;
          max-width: 680px;
        }

        /* ================= INTRO ================= */

        .intro-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 60px;
          align-items: center;
        }

        .intro-visual {
          min-height: 500px;
          position: relative;
        }

        .intro-image {
          width: 88%;
          height: 450px;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 30px 70px rgba(9,40,95,.16);
        }

        .intro-floating {
          position: absolute;
          right: 0;
          bottom: 20px;
          width: 220px;
          padding: 22px;
          border-radius: 20px;
          background: rgba(255,255,255,.94);
          border: 1px solid rgba(8, 61, 110, .08);
          box-shadow: 0 20px 50px rgba(9,40,95,.15);
          backdrop-filter: blur(15px);
        }

        .intro-floating-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #eaf9fd;
          color: #079fd0;
          margin-bottom: 14px;
        }

        .intro-floating strong {
          display: block;
          font-size: 26px;
          color: #09285f;
        }

        .intro-floating span {
          color: #71839c;
          font-size: 12px;
        }

        .intro-content h2 {
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1.08;
          letter-spacing: -.04em;
          margin: 0 0 20px;
        }

        .intro-content h2 span {
          color: #079fd0;
        }

        .intro-content p {
          color: #667b96;
          line-height: 1.85;
          font-size: 15px;
          margin-bottom: 18px;
        }

        .intro-checks {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 28px;
        }

        .intro-check {
          display: flex;
          gap: 9px;
          color: #36516f;
          font-size: 13px;
          line-height: 1.5;
        }

        .intro-check svg {
          color: #0db1d9;
          min-width: 17px;
          margin-top: 2px;
        }

        /* ================= WHY ================= */

        .why-section {
          background: #fff;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .why-card {
          position: relative;
          padding: 28px;
          min-height: 220px;
          border-radius: 22px;
          background:
            linear-gradient(145deg, #ffffff, #f4fbff);
          border: 1px solid #e4eef6;
          box-shadow: 0 14px 40px rgba(20,65,110,.055);
          transition: .35s ease;
          overflow: hidden;
        }

        .why-card::after {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          right: -45px;
          bottom: -45px;
          border-radius: 50%;
          background: rgba(7,159,208,.06);
        }

        .why-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 25px 55px rgba(20,65,110,.11);
          border-color: rgba(7,159,208,.22);
        }

        .why-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: linear-gradient(135deg, #e7f8fd, #f3fcff);
          color: #079fd0;
          margin-bottom: 20px;
        }

        .why-card h3 {
          margin: 0 0 10px;
          color: #09285f;
          font-size: 17px;
        }

        .why-card p {
          margin: 0;
          color: #6c809a;
          font-size: 13px;
          line-height: 1.7;
        }

        /* ================= PROGRAM ================= */

        .program-box {
          padding: 40px;
          border-radius: 28px;
          background: linear-gradient(135deg, #062c60, #0b4b88);
          color: #fff;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(6,44,96,.18);
        }

        .program-box::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.10);
          right: -100px;
          top: -150px;
        }

        .program-top {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: center;
          margin-bottom: 35px;
        }

        .program-top h2 {
          margin: 0 0 8px;
          font-size: 32px;
        }

        .program-top p {
          margin: 0;
          color: rgba(255,255,255,.7);
          line-height: 1.6;
        }

        .duration-pill {
          flex-shrink: 0;
          padding: 18px 24px;
          border-radius: 16px;
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(255,255,255,.15);
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .duration-pill strong {
          display: block;
          font-size: 30px;
          color: #65e0f7;
        }

        .duration-pill span {
          font-size: 11px;
          color: rgba(255,255,255,.7);
        }

        .course-years {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .year-card {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255,255,255,.075);
          border: 1px solid rgba(255,255,255,.10);
        }

        .year-card span {
          display: inline-flex;
          padding: 6px 10px;
          border-radius: 8px;
          background: rgba(83,217,243,.14);
          color: #6be0f7;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .year-card h3 {
          margin: 0 0 8px;
          font-size: 16px;
        }

        .year-card p {
          color: rgba(255,255,255,.67);
          font-size: 13px;
          line-height: 1.65;
          margin: 0;
        }

        /* ================= ELIGIBILITY ================= */

        .eligibility-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .eligibility-card {
          padding: 32px;
          border-radius: 24px;
          background: #fff;
          border: 1px solid #e4eef6;
          box-shadow: 0 16px 45px rgba(15,60,100,.06);
        }

        .eligibility-card h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #09285f;
          margin: 0 0 22px;
          font-size: 20px;
        }

        .eligibility-card h3 svg {
          color: #079fd0;
        }

        .eligibility-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 13px;
        }

        .eligibility-list li {
          display: flex;
          gap: 10px;
          color: #667b96;
          font-size: 14px;
          line-height: 1.5;
        }

        .eligibility-list svg {
          color: #0bb0d7;
          min-width: 18px;
          margin-top: 1px;
        }

        /* ================= UNIVERSITIES ================= */

        .universities-section {
          background: #fff;
        }

        .university-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .university-card {
          position: relative;
          padding: 28px;
          border-radius: 24px;
          background: linear-gradient(145deg, #fff, #f7fcff);
          border: 1px solid #e2edf5;
          box-shadow: 0 16px 45px rgba(15,60,100,.065);
          transition: .35s ease;
          overflow: hidden;
        }

        .university-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 60px rgba(15,60,100,.12);
        }

        .university-number {
          position: absolute;
          right: 20px;
          top: 20px;
          font-size: 12px;
          color: #a0b4c8;
          font-weight: 800;
        }

        .university-logo {
          width: 82px;
          height: 82px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 1px solid #e5eef5;
          box-shadow: 0 12px 30px rgba(20,60,100,.08);
          margin-bottom: 22px;
          overflow: hidden;
        }

        .university-logo img {
          width: 72px;
          height: 72px;
          object-fit: contain;
        }

        .university-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #087faf;
          font-size: 20px;
          font-weight: 900;
          background: linear-gradient(135deg, #eaf9fd, #f8fdff);
        }

        .university-card h3 {
          margin: 0 0 8px;
          color: #09285f;
          font-size: 18px;
          line-height: 1.35;
          min-height: 49px;
        }

        .university-location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #71849d;
          font-size: 12px;
          margin-bottom: 20px;
        }

        .university-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #078fc2;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .university-link:hover {
          color: #056f98;
        }

        /* ================= PROCESS ================= */

        .process-section {
          background: #f5faff;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .process-card {
          position: relative;
          padding: 28px;
          background: #fff;
          border-radius: 22px;
          border: 1px solid #e4eef6;
          box-shadow: 0 14px 40px rgba(15,60,100,.055);
        }

        .process-number {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #d7e7f1;
          font-size: 30px;
          font-weight: 900;
        }

        .process-icon {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e9f9fd;
          color: #079fd0;
          margin-bottom: 18px;
        }

        .process-card h3 {
          color: #09285f;
          font-size: 17px;
          margin: 0 0 9px;
        }

        .process-card p {
          color: #6b8099;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        /* ================= DOCUMENTS + FEES ================= */

        .documents-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .documents-card {
          padding: 35px;
          background: #fff;
          border-radius: 25px;
          border: 1px solid #e3edf5;
          box-shadow: 0 16px 45px rgba(15,60,100,.06);
        }

        .documents-card h3 {
          margin: 0 0 22px;
          font-size: 21px;
          color: #09285f;
        }

        .document-list {
          display: grid;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .document-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #647a94;
          font-size: 14px;
        }

        .document-list svg {
          color: #0aaad3;
        }

        .fee-table {
          width: 100%;
          border-collapse: collapse;
          overflow: hidden;
          border-radius: 14px;
        }

        .fee-table tr {
          border-bottom: 1px solid #e8f0f5;
        }

        .fee-table tr:last-child {
          border-bottom: 0;
        }

        .fee-table td {
          padding: 16px 10px;
          color: #647a94;
          font-size: 13px;
        }

        .fee-table td:last-child {
          text-align: right;
          font-weight: 800;
          color: #09285f;
        }

        .fee-note {
          margin-top: 18px;
          padding: 14px;
          border-radius: 12px;
          background: #f2faff;
          color: #6c8098;
          font-size: 12px;
          line-height: 1.6;
        }

        /* ================= CAREER ================= */

        .career-section {
          background: #fff;
        }

        .career-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .career-card {
          padding: 25px;
          border-radius: 20px;
          background: linear-gradient(145deg, #f8fcff, #eef8fd);
          border: 1px solid #dfeef5;
        }

        .career-card h3 {
          color: #09285f;
          font-size: 16px;
          margin: 0 0 9px;
        }

        .career-card p {
          color: #6c819a;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }

        /* ================= CTA ================= */

        .final-cta {
          padding: 70px 0 100px;
        }

        .cta-box {
          position: relative;
          overflow: hidden;
          padding: 55px;
          border-radius: 30px;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(72,218,246,.22),
              transparent 28%
            ),
            linear-gradient(135deg, #052b5c, #0873a8);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          box-shadow: 0 30px 80px rgba(6,54,100,.20);
        }

        .cta-box h2 {
          margin: 0 0 12px;
          font-size: clamp(30px, 4vw, 44px);
          letter-spacing: -.03em;
        }

        .cta-box p {
          margin: 0;
          color: rgba(255,255,255,.72);
          line-height: 1.7;
          max-width: 650px;
        }

        .cta-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 15px 22px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: .3s ease;
          white-space: nowrap;
        }

        .cta-contact {
          background: #fff;
          color: #07518b;
        }

        .cta-whatsapp {
          background: #25d366;
          color: #fff;
        }

        .cta-button:hover {
          transform: translateY(-3px);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 950px) {

          .intro-grid {
            grid-template-columns: 1fr;
          }

          .intro-visual {
            max-width: 600px;
            width: 100%;
            margin: auto;
          }

          .why-grid,
          .university-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .career-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-box {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 700px) {

          .kaz-hero {
            min-height: 650px;
          }

          .kaz-container,
          .kaz-hero-inner {
            width: min(100% - 30px, 1180px);
          }

          .kaz-section {
            padding: 65px 0;
          }

          .kaz-hero h1 {
            font-size: 48px;
          }

          .kaz-hero-description {
            font-size: 15px;
          }

          .intro-image {
            width: 100%;
            height: 350px;
          }

          .intro-floating {
            right: 10px;
            bottom: -20px;
          }

          .intro-checks {
            grid-template-columns: 1fr;
          }

          .why-grid,
          .university-grid,
          .process-grid,
          .eligibility-grid,
          .documents-grid,
          .career-grid {
            grid-template-columns: 1fr;
          }

          .program-box {
            padding: 27px;
          }

          .program-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .course-years {
            grid-template-columns: 1fr;
          }

          .cta-box {
            padding: 35px 25px;
          }

          .cta-actions {
            width: 100%;
            flex-direction: column;
          }

          .cta-button {
            width: 100%;
          }
        }

      `}</style>

      <main className="kazakhstan-page">

        {/* ================= HERO ================= */}

        <section className="kaz-hero">
          <div className="kaz-hero-inner">

            <div className="kaz-breadcrumb">
              <span>Home</span>
              <span>›</span>
              <span>MBBS Programs</span>
              <span>›</span>
              <span>Kazakhstan</span>
            </div>

            <motion.div
              className="kaz-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
            >

              <div className="kaz-eyebrow">
                <Globe2 size={14} />
                MBBS PROGRAM ABROAD
              </div>

              <h1>
                Study MBBS
                <span>in Kazakhstan</span>
              </h1>

              <p className="kaz-hero-description">
                Kazakhstan has become a popular destination for international
                students who want to pursue MBBS abroad at an affordable cost.
                Explore modern medical universities, experienced faculty and
                globally recognized medical programs.
              </p>

              <div className="hero-actions">

                <Link
                  to="/contact"
                  className="hero-btn hero-btn-primary"
                >
                  Book Free Counselling
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn hero-btn-secondary"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>

              </div>

            </motion.div>

          </div>
        </section>

        {/* ================= INTRODUCTION ================= */}

        <section className="kaz-section">

          <div className="kaz-container">

            <div className="intro-grid">

              <motion.div
                className="intro-visual"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .7 }}
              >

                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85"
                  alt="Medical education"
                  className="intro-image"
                />

                <div className="intro-floating">

                  <div className="intro-floating-icon">
                    <GraduationCap size={24} />
                  </div>

                  <strong>5–6 Years</strong>

                  <span>
                    Typical MBBS program duration
                  </span>

                </div>

              </motion.div>

              <motion.div
                className="intro-content"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .7 }}
              >

                <div className="section-label">
                  <span>◆</span>
                  ABOUT KAZAKHSTAN
                </div>

                <h2>
                  A Smart Choice for
                  <span> Medical Education Abroad</span>
                </h2>

                <p>
                  Kazakhstan has become a popular destination for international
                  students who want to pursue MBBS abroad at an affordable cost.
                  The country offers modern medical universities, experienced
                  faculty, and globally recognized medical programs that attract
                  thousands of international students every year.
                </p>

                <p>
                  Many medical universities in Kazakhstan provide English-medium
                  MBBS programs, making it convenient for students from India and
                  other countries. These universities focus on both theoretical
                  education and clinical training, ensuring that students gain
                  the necessary knowledge and practical skills required for a
                  successful medical career.
                </p>

                <p>
                  Kazakhstan is known for its safe environment, modern
                  infrastructure, and multicultural student community. With
                  affordable tuition fees and quality education, it has become
                  one of the preferred destinations for students seeking
                  international medical education.
                </p>

                <div className="intro-checks">

                  <div className="intro-check">
                    <CheckCircle2 size={17} />
                    Affordable medical education
                  </div>

                  <div className="intro-check">
                    <CheckCircle2 size={17} />
                    English-medium programs
                  </div>

                  <div className="intro-check">
                    <CheckCircle2 size={17} />
                    Modern infrastructure
                  </div>

                  <div className="intro-check">
                    <CheckCircle2 size={17} />
                    International student community
                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ================= WHY STUDY ================= */}

        <section className="kaz-section why-section">

          <div className="kaz-container">

            <div className="section-heading">

              <div className="section-label">
                <span>◆</span>
                WHY KAZAKHSTAN
              </div>

              <h2>
                Why Study MBBS
                <span> in Kazakhstan?</span>
              </h2>

              <p>
                Discover the key advantages that make Kazakhstan an attractive
                destination for international medical students.
              </p>

            </div>

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
                      duration: .5,
                      delay: index * .06,
                    }}
                  >

                    <div className="why-icon">
                      <Icon size={23} />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </motion.div>
                );

              })}

            </div>

          </div>

        </section>

        {/* ================= COURSE DURATION ================= */}

        <section className="kaz-section">

          <div className="kaz-container">

            <div className="program-box">

              <div className="program-top">

                <div>
                  <div className="section-label">
                    <Clock3 size={14} />
                    PROGRAM STRUCTURE
                  </div>

                  <h2>MBBS Course Duration</h2>

                  <p>
                    The MBBS program in Kazakhstan typically lasts
                    5 to 6 years.
                  </p>
                </div>

                <div className="duration-pill">
                  <strong>5–6</strong>
                  <span>YEARS</span>
                </div>

              </div>

              <div className="course-years">

                <div className="year-card">

                  <span>YEARS 1–2</span>

                  <h3>Basic Medical Sciences</h3>

                  <p>
                    Anatomy, physiology, biochemistry, histology and other
                    foundational medical subjects.
                  </p>

                </div>

                <div className="year-card">

                  <span>YEARS 3–4</span>

                  <h3>Pre-Clinical Subjects</h3>

                  <p>
                    Pathology, microbiology, pharmacology, internal medicine
                    and related medical subjects.
                  </p>

                </div>

                <div className="year-card">

                  <span>YEARS 5–6</span>

                  <h3>Clinical Training</h3>

                  <p>
                    Students gain practical experience in hospitals under
                    the supervision of experienced doctors.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= ELIGIBILITY ================= */}

        <section className="kaz-section">

          <div className="kaz-container">

            <div className="section-heading">

              <div className="section-label">
                <span>◆</span>
                ADMISSION REQUIREMENTS
              </div>

              <h2>
                Eligibility for
                <span> MBBS in Kazakhstan</span>
              </h2>

              <p>
                Students must meet the following requirements to apply for
                MBBS in Kazakhstan.
              </p>

            </div>

            <div className="eligibility-grid">

              <div className="eligibility-card">

                <h3>
                  <ClipboardCheck size={22} />
                  Eligibility Criteria
                </h3>

                <ul className="eligibility-list">

                  <li>
                    <CheckCircle2 size={18} />
                    Minimum 50% marks in Physics, Chemistry and Biology in 12th grade
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    NEET qualification required for Indian students
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Minimum age 17 years at the time of admission
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Valid passport
                  </li>

                </ul>

              </div>

              <div className="eligibility-card">

                <h3>
                  <Stethoscope size={22} />
                  Academic Focus
                </h3>

                <ul className="eligibility-list">

                  <li>
                    <CheckCircle2 size={18} />
                    Physics, Chemistry and Biology background
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Medical and clinical education
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Theoretical and practical learning
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Hospital-based clinical exposure
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>

        {/* ================= UNIVERSITIES ================= */}

        <section className="kaz-section universities-section">

          <div className="kaz-container">

            <div className="section-heading">

              <div className="section-label">
                <span>◆</span>
                FEATURED UNIVERSITIES
              </div>

              <h2>
                Top Medical Universities
                <span> in Kazakhstan</span>
              </h2>

              <p>
                Explore selected medical universities and learn more about
                their admission opportunities.
              </p>

            </div>

            <div className="university-grid">

              {universities.map((university, index) => (

                <motion.div
                  key={university.name}
                  className="university-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .08,
                  }}
                >

                  <div className="university-number">
                    0{index + 1}
                  </div>

                  <div className="university-logo">

                    <img
                      src={university.logo}
                      alt={`${university.name} logo`}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement
                          .querySelector(".university-fallback")
                          .style.display = "flex";
                      }}
                    />

                    <div
                      className="university-fallback"
                      style={{ display: "none" }}
                    >
                      {university.shortName}
                    </div>

                  </div>

                  <h3>{university.name}</h3>

                  <div className="university-location">
                    <Globe2 size={13} />
                    {university.location}
                  </div>

                  <a
                    href={university.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                  >
                    Explore University
                    <ArrowUpRight size={15} />
                  </a>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= ADMISSION PROCESS ================= */}

        <section className="kaz-section process-section">

          <div className="kaz-container">

            <div className="section-heading">

              <div className="section-label">
                <span>◆</span>
                SIMPLE PROCESS
              </div>

              <h2>
                Admission Process
                <span> Made Simple</span>
              </h2>

              <p>
                From your first counselling session to your journey to
                Kazakhstan, we guide you through every important step.
              </p>

            </div>

            <div className="process-grid">

              {processSteps.map((step, index) => {

                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    className="process-card"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: .5,
                      delay: index * .06,
                    }}
                  >

                    <div className="process-number">
                      {step.number}
                    </div>

                    <div className="process-icon">
                      <Icon size={22} />
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.text}</p>

                  </motion.div>
                );

              })}

            </div>

          </div>

        </section>

        {/* ================= DOCUMENTS & FEES ================= */}

        <section className="kaz-section">

          <div className="kaz-container">

            <div className="section-heading">

              <div className="section-label">
                <span>◆</span>
                PLAN YOUR ADMISSION
              </div>

              <h2>
                Documents &
                <span> Approximate Fees</span>
              </h2>

            </div>

            <div className="documents-grid">

              <div className="documents-card">

                <h3>
                  Required Documents
                </h3>

                <ul className="document-list">

                  {documents.map((document) => (

                    <li key={document}>
                      <CheckCircle2 size={17} />
                      {document}
                    </li>

                  ))}

                </ul>

                <div className="fee-note">
                  Additional documents may be required depending on the
                  university.
                </div>

              </div>

              <div className="documents-card">

                <h3>
                  Approximate MBBS Fees in Kazakhstan
                </h3>

                <table className="fee-table">

                  <tbody>

                    <tr>
                      <td>Tuition Fees</td>
                      <td>$3,500 – $6,000 / year</td>
                    </tr>

                    <tr>
                      <td>Hostel / Accommodation</td>
                      <td>$800 – $1,500 / year</td>
                    </tr>

                    <tr>
                      <td>Food & Living</td>
                      <td>$1,500 – $2,500 / year</td>
                    </tr>

                  </tbody>

                </table>

                <div className="fee-note">
                  Costs may vary depending on the university and city.
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= CAREER ================= */}

        <section className="kaz-section career-section">

          <div className="kaz-container">

            <div className="section-heading">

              <div className="section-label">
                <span>◆</span>
                AFTER MBBS
              </div>

              <h2>
                Career Opportunities
                <span> After MBBS</span>
              </h2>

              <p>
                Graduates can explore medical practice and postgraduate
                opportunities in different countries, subject to applicable
                licensing and regulatory requirements.
              </p>

            </div>

            <div className="career-grid">

              {careerOptions.map((career, index) => (

                <motion.div
                  key={career.title}
                  className="career-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .06,
                  }}
                >

                  <h3>{career.title}</h3>

                  <p>{career.text}</p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="final-cta">

          <div className="kaz-container">

            <motion.div
              className="cta-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
            >

              <div>

                <div className="section-label">
                  <MessageCircle size={14} />
                  START YOUR JOURNEY
                </div>

                <h2>
                  Planning MBBS in Kazakhstan?
                </h2>

                <p>
                  Get personalized guidance on university selection,
                  eligibility, documentation, admission and the next steps.
                </p>

              </div>

              <div className="cta-actions">

                <Link
                  to="/contact"
                  className="cta-button cta-contact"
                >
                  Book Free Counselling
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button cta-whatsapp"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>

              </div>

            </motion.div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Kazakhstan;