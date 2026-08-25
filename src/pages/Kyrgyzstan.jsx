import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Globe2,
  Hospital,
  FileText,
  Plane,
  Stethoscope,
  BookOpen,
  BadgeCheck,
  WalletCards,
  Users,
  ShieldCheck,
  ClipboardCheck,
  MapPin,
  MessageCircle,
  Clock3,
  Building2,
  BriefcaseMedical,
} from "lucide-react";
import { Link } from "react-router-dom";

function Kyrgyzstan() {
  const whatsappNumber = "918830451660";

  const whatsappMessage =
    "Hello Kantule Edutech, I want to know more about MBBS in Kyrgyzstan.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const whyStudy = [
    {
      icon: WalletCards,
      title: "Affordable Tuition Fees",
      text: "Kyrgyzstan is considered a cost-effective destination for students planning to pursue MBBS abroad.",
    },
    {
      icon: BookOpen,
      title: "English Medium Education",
      text: "Several medical programs are offered in English, making education convenient for international students.",
    },
    {
      icon: Globe2,
      title: "Globally Oriented Education",
      text: "Medical institutions provide programs designed for international students and global medical careers.",
    },
    {
      icon: Stethoscope,
      title: "Experienced Faculty",
      text: "Students learn from qualified professors and medical professionals through academic and clinical training.",
    },
    {
      icon: Hospital,
      title: "Clinical Training",
      text: "Students receive practical exposure through hospital-based and supervised clinical learning.",
    },
    {
      icon: Users,
      title: "Multicultural Environment",
      text: "International students experience a diverse campus environment with students from different countries.",
    },
  ];

  const universities = [
    {
      name: "International Higher School of Medicine",
      shortName: "IHSM",
      location: "Bishkek, Kyrgyzstan",
      logo:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/International%20Higher%20School%20of%20Medicine.jpg",
      website: "https://ism.edu.kg/",
      description:
        "An international medical institution offering medical education and clinical learning opportunities for international students.",
    },
    {
      name: "Kyrgyz State Medical University",
      shortName: "KSMU",
      location: "Kyrgyzstan",
      logo:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/KGMA%20logo.png",
      website: "https://www.smu.edu.kg/",
      description:
        "A medical education institution offering academic, clinical and research-oriented medical training.",
    },
  ];

  const admissionSteps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Free Counseling",
      text: "Get personalized guidance regarding universities, course details, eligibility and budget.",
    },
    {
      number: "02",
      icon: GraduationCap,
      title: "University Selection",
      text: "Choose a suitable medical university based on your academic profile, preferences and budget.",
    },
    {
      number: "03",
      icon: FileText,
      title: "Application Submission",
      text: "Submit the required academic, identity and admission documents for application processing.",
    },
    {
      number: "04",
      icon: BadgeCheck,
      title: "Admission Letter",
      text: "Receive the official admission confirmation from the selected university.",
    },
    {
      number: "05",
      icon: ClipboardCheck,
      title: "Visa Processing",
      text: "Complete the student visa documentation and application process with proper guidance.",
    },
    {
      number: "06",
      icon: Plane,
      title: "Travel to Kyrgyzstan",
      text: "Prepare for departure, complete university formalities and begin your medical education journey.",
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
      icon: Stethoscope,
      title: "Medical Practice",
      text: "Pursue medical practice after completing the applicable licensing requirements.",
    },
    {
      icon: GraduationCap,
      title: "Postgraduate Studies",
      text: "Continue your medical education through postgraduate and specialization programs.",
    },
    {
      icon: Globe2,
      title: "International Opportunities",
      text: "Explore international career pathways subject to the licensing rules of the target country.",
    },
    {
      icon: BriefcaseMedical,
      title: "Healthcare Careers",
      text: "Explore opportunities across hospitals, healthcare organizations, research and academics.",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .kg-page {
          background:
            radial-gradient(circle at 10% 10%, rgba(10, 166, 211, 0.06), transparent 28%),
            radial-gradient(circle at 90% 35%, rgba(9, 40, 95, 0.05), transparent 30%),
            #f7fbff;
          min-height: 100vh;
          color: #09285f;
          overflow: hidden;
        }

        .kg-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* ================= HERO ================= */

        .kg-hero {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(4, 28, 65, 0.94) 0%,
              rgba(5, 43, 83, 0.80) 42%,
              rgba(5, 43, 83, 0.35) 100%
            ),
            url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85")
            center / cover;
        }

        .kg-hero::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          right: -120px;
          top: -140px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.16);
          box-shadow:
            0 0 0 35px rgba(255,255,255,.035),
            0 0 0 70px rgba(255,255,255,.025);
        }

        .kg-hero-content {
          position: relative;
          z-index: 2;
          padding: 75px 0;
          max-width: 790px;
        }

        .kg-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,.75);
          font-size: 13px;
          margin-bottom: 24px;
        }

        .kg-breadcrumb span:last-child {
          color: #5edcff;
          font-weight: 700;
        }

        .kg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border: 1px solid rgba(94,220,255,.25);
          background: rgba(94,220,255,.09);
          color: #71e2ff;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .1em;
          text-transform: uppercase;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }

        .kg-hero h1 {
          color: white;
          font-size: clamp(42px, 6vw, 72px);
          line-height: .98;
          letter-spacing: -0.04em;
          margin: 0;
          max-width: 760px;
        }

        .kg-hero h1 span {
          display: block;
          color: #55d8f2;
        }

        .kg-hero-description {
          color: rgba(255,255,255,.78);
          max-width: 690px;
          line-height: 1.8;
          font-size: 16px;
          margin: 25px 0 0;
        }

        .kg-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 32px;
        }

        .kg-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 20px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: .3s ease;
        }

        .kg-btn-primary {
          color: white;
          background: linear-gradient(135deg, #0b91d1, #16bfd9);
          box-shadow: 0 12px 30px rgba(8, 163, 211, .25);
        }

        .kg-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 17px 38px rgba(8, 163, 211, .35);
        }

        .kg-btn-outline {
          color: white;
          border: 1px solid rgba(255,255,255,.28);
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(12px);
        }

        .kg-btn-outline:hover {
          background: rgba(255,255,255,.15);
          transform: translateY(-3px);
        }

        /* ================= QUICK STATS ================= */

        .kg-stats-wrap {
          position: relative;
          z-index: 5;
          margin-top: -45px;
        }

        .kg-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: rgba(255,255,255,.96);
          border: 1px solid rgba(8, 52, 110,.08);
          box-shadow: 0 22px 60px rgba(15, 55, 95,.12);
          border-radius: 22px;
          overflow: hidden;
          backdrop-filter: blur(18px);
        }

        .kg-stat {
          min-height: 115px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
          border-right: 1px solid #e8f0f6;
        }

        .kg-stat:last-child {
          border-right: none;
        }

        .kg-stat-icon {
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #e7f8fd, #f3fbff);
          color: #078dcc;
        }

        .kg-stat strong {
          display: block;
          color: #09285f;
          font-size: 17px;
          margin-bottom: 4px;
        }

        .kg-stat span {
          display: block;
          color: #71829a;
          font-size: 12px;
          line-height: 1.5;
        }

        /* ================= SECTION ================= */

        .kg-section {
          padding: 90px 0 0;
        }

        .kg-section-heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 48px;
        }

        .kg-section-label {
          color: #0a9fd0;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .kg-section-heading h2 {
          margin: 0;
          color: #09285f;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.08;
          letter-spacing: -.035em;
        }

        .kg-section-heading h2 span {
          color: #0a98cf;
        }

        .kg-section-heading p {
          margin: 17px auto 0;
          color: #6d7f96;
          line-height: 1.8;
          font-size: 15px;
        }

        /* ================= INTRO ================= */

        .kg-intro {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 65px;
          align-items: center;
        }

        .kg-intro-image {
          position: relative;
        }

        .kg-intro-image-main {
          width: 100%;
          height: 470px;
          object-fit: cover;
          border-radius: 28px;
          display: block;
          box-shadow: 0 25px 60px rgba(15,55,95,.15);
        }

        .kg-image-badge {
          position: absolute;
          right: -25px;
          bottom: 30px;
          width: 205px;
          padding: 20px;
          background: rgba(255,255,255,.97);
          border: 1px solid rgba(8,52,110,.08);
          border-radius: 19px;
          box-shadow: 0 18px 45px rgba(15,55,95,.16);
        }

        .kg-image-badge-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #e8f9fd;
          color: #0b9ed1;
          margin-bottom: 13px;
        }

        .kg-image-badge strong {
          display: block;
          color: #09285f;
          font-size: 17px;
          margin-bottom: 4px;
        }

        .kg-image-badge span {
          color: #73849a;
          font-size: 12px;
        }

        .kg-intro-content .kg-section-label {
          text-align: left;
        }

        .kg-intro-content h2 {
          margin: 0;
          color: #09285f;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.08;
          letter-spacing: -.04em;
        }

        .kg-intro-content h2 span {
          color: #0b99cf;
        }

        .kg-intro-content p {
          color: #6c7e95;
          line-height: 1.85;
          font-size: 15px;
          margin: 20px 0 0;
        }

        .kg-check-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .kg-check {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          color: #425875;
          font-size: 13px;
          line-height: 1.55;
        }

        .kg-check svg {
          color: #12b5d6;
          flex: 0 0 auto;
          margin-top: 2px;
        }

        /* ================= WHY STUDY ================= */

        .kg-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .kg-feature-card {
          position: relative;
          padding: 28px;
          border-radius: 22px;
          background: white;
          border: 1px solid #e5eef5;
          box-shadow: 0 12px 35px rgba(15,55,95,.055);
          overflow: hidden;
          transition: .35s ease;
        }

        .kg-feature-card::before {
          content: "";
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          right: -35px;
          top: -35px;
          background: rgba(9,169,211,.06);
        }

        .kg-feature-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 45px rgba(15,55,95,.11);
          border-color: rgba(9,169,211,.18);
        }

        .kg-feature-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          color: #079ad0;
          background: linear-gradient(135deg,#e8f9fd,#f5fcff);
          border-radius: 16px;
          margin-bottom: 20px;
        }

        .kg-feature-card h3 {
          margin: 0 0 9px;
          color: #09285f;
          font-size: 17px;
        }

        .kg-feature-card p {
          margin: 0;
          color: #72839a;
          font-size: 13px;
          line-height: 1.75;
        }

        /* ================= PROGRAM ================= */

        .kg-program-box {
          background: linear-gradient(135deg,#062d63,#0a477d);
          border-radius: 30px;
          padding: 45px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .kg-program-box::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          right: -150px;
          top: -200px;
          border: 1px solid rgba(255,255,255,.12);
          box-shadow:
            0 0 0 45px rgba(255,255,255,.025),
            0 0 0 90px rgba(255,255,255,.02);
        }

        .kg-program-top {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 25px;
          margin-bottom: 35px;
        }

        .kg-program-top h2 {
          margin: 0;
          font-size: clamp(28px,4vw,42px);
          letter-spacing: -.03em;
        }

        .kg-program-top p {
          max-width: 480px;
          color: rgba(255,255,255,.67);
          line-height: 1.7;
          font-size: 14px;
          margin: 8px 0 0;
        }

        .kg-duration {
          flex: 0 0 auto;
          min-width: 150px;
          padding: 17px 20px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.07);
          border-radius: 17px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .kg-duration strong {
          display: block;
          font-size: 27px;
          color: #64ddf7;
        }

        .kg-duration span {
          color: rgba(255,255,255,.62);
          font-size: 11px;
        }

        .kg-course-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 15px;
        }

        .kg-course-card {
          padding: 24px;
          border-radius: 18px;
          background: rgba(255,255,255,.075);
          border: 1px solid rgba(255,255,255,.10);
        }

        .kg-course-number {
          color: #62dcf7;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .1em;
          margin-bottom: 13px;
        }

        .kg-course-card h3 {
          font-size: 16px;
          margin: 0 0 8px;
        }

        .kg-course-card p {
          color: rgba(255,255,255,.65);
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        /* ================= ELIGIBILITY ================= */

        .kg-info-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 20px;
        }

        .kg-info-card {
          background: white;
          border-radius: 23px;
          padding: 32px;
          border: 1px solid #e5eef5;
          box-shadow: 0 12px 35px rgba(15,55,95,.055);
        }

        .kg-info-card h3 {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #09285f;
          font-size: 20px;
          margin: 0 0 20px;
        }

        .kg-info-card h3 svg {
          color: #0a9ed0;
        }

        .kg-bullet-list {
          display: grid;
          gap: 13px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .kg-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #687c95;
          font-size: 14px;
          line-height: 1.6;
        }

        .kg-bullet-list svg {
          flex: 0 0 auto;
          color: #15b9d6;
          margin-top: 3px;
        }

        /* ================= UNIVERSITIES ================= */

        .kg-university-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 22px;
        }

        .kg-university-card {
          position: relative;
          background: white;
          border-radius: 25px;
          border: 1px solid #e4edf4;
          padding: 27px;
          display: flex;
          gap: 22px;
          box-shadow: 0 15px 40px rgba(15,55,95,.07);
          transition: .35s ease;
          overflow: hidden;
        }

        .kg-university-card::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          right: -100px;
          bottom: -100px;
          background: #eefaff;
        }

        .kg-university-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 24px 50px rgba(15,55,95,.12);
          border-color: rgba(9,166,211,.22);
        }

        .kg-university-logo {
          position: relative;
          z-index: 2;
          width: 92px;
          height: 92px;
          flex: 0 0 92px;
          border-radius: 20px;
          background: #f5fbff;
          border: 1px solid #e1edf5;
          padding: 10px;
          display: grid;
          place-items: center;
        }

        .kg-university-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 12px;
        }

        .kg-university-content {
          position: relative;
          z-index: 2;
        }

        .kg-university-tag {
          display: inline-flex;
          padding: 5px 9px;
          border-radius: 999px;
          background: #e8f9fd;
          color: #078fc6;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
          margin-bottom: 9px;
        }

        .kg-university-content h3 {
          margin: 0;
          color: #09285f;
          font-size: 18px;
          line-height: 1.3;
        }

        .kg-university-location {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #8292a6;
          font-size: 11px;
          margin-top: 7px;
        }

        .kg-university-content p {
          color: #71839a;
          font-size: 13px;
          line-height: 1.65;
          margin: 12px 0 15px;
        }

        .kg-university-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #078fc6;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
        }

        /* ================= PROCESS ================= */

        .kg-process {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        .kg-process-line {
          position: absolute;
          left: 8%;
          right: 8%;
          top: 48px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #b9e9f5,
            #b9e9f5,
            transparent
          );
          z-index: 0;
        }

        .kg-step {
          position: relative;
          z-index: 1;
          background: white;
          border-radius: 22px;
          padding: 25px;
          border: 1px solid #e4edf4;
          box-shadow: 0 12px 35px rgba(15,55,95,.05);
        }

        .kg-step-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .kg-step-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          background: linear-gradient(135deg,#e7f9fd,#f5fcff);
          color: #079bd0;
        }

        .kg-step-number {
          color: #b5c2d1;
          font-size: 25px;
          font-weight: 900;
        }

        .kg-step h3 {
          margin: 0 0 8px;
          color: #09285f;
          font-size: 16px;
        }

        .kg-step p {
          margin: 0;
          color: #71839a;
          font-size: 13px;
          line-height: 1.7;
        }

        /* ================= DOCUMENTS + FEES ================= */

        .kg-doc-fee {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 22px;
        }

        .kg-doc-card,
        .kg-fee-card {
          background: white;
          border-radius: 25px;
          padding: 34px;
          border: 1px solid #e4edf4;
          box-shadow: 0 13px 38px rgba(15,55,95,.055);
        }

        .kg-doc-card h2,
        .kg-fee-card h2 {
          color: #09285f;
          font-size: 24px;
          margin: 0 0 22px;
        }

        .kg-doc-list {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .kg-doc-list li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #697c94;
          font-size: 13px;
          line-height: 1.5;
        }

        .kg-doc-list svg {
          color: #11b6d6;
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .kg-fee-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          overflow: hidden;
          border: 1px solid #e3edf4;
          border-radius: 15px;
        }

        .kg-fee-table th,
        .kg-fee-table td {
          text-align: left;
          padding: 15px;
          font-size: 13px;
          border-bottom: 1px solid #e8f0f5;
        }

        .kg-fee-table th {
          background: #f0f9fd;
          color: #09285f;
          font-weight: 800;
        }

        .kg-fee-table td {
          color: #70839a;
        }

        .kg-fee-table tr:last-child td {
          border-bottom: none;
        }

        .kg-fee-note {
          margin-top: 15px;
          padding: 13px 15px;
          border-radius: 12px;
          background: #f7fbff;
          color: #8090a4;
          font-size: 11px;
          line-height: 1.6;
        }

        /* ================= CAREER ================= */

        .kg-career-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 16px;
        }

        .kg-career-card {
          background: white;
          border: 1px solid #e4edf4;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 12px 30px rgba(15,55,95,.05);
        }

        .kg-career-card svg {
          color: #0a9fd0;
          margin-bottom: 17px;
        }

        .kg-career-card h3 {
          color: #09285f;
          font-size: 15px;
          margin: 0 0 8px;
        }

        .kg-career-card p {
          color: #72839a;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }

        /* ================= CTA ================= */

        .kg-final-cta {
          margin: 90px 0 80px;
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          padding: 60px;
          background:
            linear-gradient(115deg, rgba(4,36,77,.97), rgba(5,92,135,.94)),
            url("https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1800&q=80")
            center / cover;
          text-align: center;
        }

        .kg-final-cta::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.12);
          left: -120px;
          bottom: -180px;
          box-shadow:
            0 0 0 35px rgba(255,255,255,.025),
            0 0 0 70px rgba(255,255,255,.02);
        }

        .kg-final-cta-content {
          position: relative;
          z-index: 2;
          max-width: 750px;
          margin: auto;
        }

        .kg-final-cta h2 {
          color: white;
          font-size: clamp(30px,4vw,45px);
          line-height: 1.1;
          letter-spacing: -.035em;
          margin: 0;
        }

        .kg-final-cta p {
          color: rgba(255,255,255,.7);
          font-size: 14px;
          line-height: 1.7;
          margin: 17px auto 27px;
          max-width: 600px;
        }

        .kg-final-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 950px) {
          .kg-intro {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .kg-intro-image-main {
            height: 420px;
          }

          .kg-why-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .kg-course-grid {
            grid-template-columns: 1fr;
          }

          .kg-process {
            grid-template-columns: repeat(2,1fr);
          }

          .kg-process-line {
            display: none;
          }

          .kg-career-grid {
            grid-template-columns: repeat(2,1fr);
          }
        }

        @media (max-width: 750px) {
          .kg-container {
            width: min(100% - 28px, 1180px);
          }

          .kg-hero {
            min-height: 580px;
          }

          .kg-hero-content {
            padding: 65px 0;
          }

          .kg-stats {
            grid-template-columns: repeat(2,1fr);
          }

          .kg-stat:nth-child(2) {
            border-right: none;
          }

          .kg-stat:nth-child(-n+2) {
            border-bottom: 1px solid #e8f0f6;
          }

          .kg-section {
            padding-top: 65px;
          }

          .kg-why-grid,
          .kg-info-grid,
          .kg-university-grid,
          .kg-doc-fee {
            grid-template-columns: 1fr;
          }

          .kg-process {
            grid-template-columns: 1fr;
          }

          .kg-program-box {
            padding: 28px 22px;
          }

          .kg-program-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .kg-check-list {
            grid-template-columns: 1fr;
          }

          .kg-career-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .kg-final-cta {
            padding: 42px 22px;
            margin-top: 65px;
          }
        }

        @media (max-width: 520px) {
          .kg-hero h1 {
            font-size: 43px;
          }

          .kg-hero-actions {
            flex-direction: column;
          }

          .kg-btn {
            width: 100%;
          }

          .kg-stats {
            grid-template-columns: 1fr;
          }

          .kg-stat {
            border-right: none !important;
            border-bottom: 1px solid #e8f0f6;
          }

          .kg-stat:last-child {
            border-bottom: none;
          }

          .kg-intro-image-main {
            height: 340px;
          }

          .kg-image-badge {
            right: 12px;
            bottom: 15px;
          }

          .kg-university-card {
            flex-direction: column;
          }

          .kg-university-logo {
            width: 78px;
            height: 78px;
            flex-basis: 78px;
          }

          .kg-doc-list {
            grid-template-columns: 1fr;
          }

          .kg-career-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main className="kg-page">

        {/* ================= HERO ================= */}

        <section className="kg-hero">
          <div className="kg-container">
            <motion.div
              className="kg-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="kg-breadcrumb">
                <span>Home</span>
                <span>›</span>
                <span>MBBS Programs</span>
                <span>›</span>
                <span>Kyrgyzstan</span>
              </div>

              <div className="kg-eyebrow">
                <Globe2 size={14} />
                MBBS PROGRAM ABROAD
              </div>

              <h1>
                Study MBBS in
                <span>Kyrgyzstan</span>
              </h1>

              <p className="kg-hero-description">
                Explore affordable medical education opportunities in
                Kyrgyzstan with guidance on university selection, eligibility,
                documentation, admission, visa processing and more.
              </p>

              <div className="kg-hero-actions">
                <Link to="/contact" className="kg-btn kg-btn-primary">
                  Book Free Counselling
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kg-btn kg-btn-outline"
                >
                  <MessageCircle size={17} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= QUICK STATS ================= */}

        <div className="kg-container kg-stats-wrap">
          <motion.div
            className="kg-stats"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="kg-stat">
              <div className="kg-stat-icon">
                <Clock3 size={22} />
              </div>
              <div>
                <strong>5–6 Years</strong>
                <span>Typical MBBS duration</span>
              </div>
            </div>

            <div className="kg-stat">
              <div className="kg-stat-icon">
                <BookOpen size={22} />
              </div>
              <div>
                <strong>English Medium</strong>
                <span>Programs for international students</span>
              </div>
            </div>

            <div className="kg-stat">
              <div className="kg-stat-icon">
                <WalletCards size={22} />
              </div>
              <div>
                <strong>Affordable</strong>
                <span>Cost-effective study destination</span>
              </div>
            </div>

            <div className="kg-stat">
              <div className="kg-stat-icon">
                <Hospital size={22} />
              </div>
              <div>
                <strong>Clinical Training</strong>
                <span>Practical medical exposure</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= INTRO ================= */}

        <section className="kg-section">
          <div className="kg-container">
            <div className="kg-intro">

              <motion.div
                className="kg-intro-image"
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img
                  className="kg-intro-image-main"
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
                  alt="Medical education and healthcare"
                />

                <div className="kg-image-badge">
                  <div className="kg-image-badge-icon">
                    <Stethoscope size={20} />
                  </div>
                  <strong>Medical Education</strong>
                  <span>International student pathway</span>
                </div>
              </motion.div>

              <motion.div
                className="kg-intro-content"
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="kg-section-label">
                  ABOUT MBBS IN KYRGYZSTAN
                </div>

                <h2>
                  Build Your Medical
                  <span>Career Abroad</span>
                </h2>

                <p>
                  Kyrgyzstan has become one of the preferred destinations for
                  international students who want to pursue MBBS abroad at an
                  affordable cost. The country offers medical education,
                  modern infrastructure and a multicultural student
                  environment.
                </p>

                <p>
                  Many institutions provide medical education for international
                  students, including English-medium programs. Students can
                  combine classroom learning with practical clinical exposure
                  as they progress through their medical studies.
                </p>

                <div className="kg-check-list">
                  <div className="kg-check">
                    <CheckCircle2 size={16} />
                    Affordable education
                  </div>

                  <div className="kg-check">
                    <CheckCircle2 size={16} />
                    English-medium options
                  </div>

                  <div className="kg-check">
                    <CheckCircle2 size={16} />
                    International student community
                  </div>

                  <div className="kg-check">
                    <CheckCircle2 size={16} />
                    Practical clinical training
                  </div>

                  <div className="kg-check">
                    <CheckCircle2 size={16} />
                    Experienced faculty
                  </div>

                  <div className="kg-check">
                    <CheckCircle2 size={16} />
                    Admission guidance
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ================= WHY STUDY ================= */}

        <section className="kg-section">
          <div className="kg-container">

            <div className="kg-section-heading">
              <div className="kg-section-label">
                WHY KYRGYZSTAN
              </div>

              <h2>
                Why Study MBBS in
                <span> Kyrgyzstan?</span>
              </h2>

              <p>
                Discover the key factors that make Kyrgyzstan an attractive
                option for students planning their medical education abroad.
              </p>
            </div>

            <div className="kg-why-grid">
              {whyStudy.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="kg-feature-card"
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                  >
                    <div className="kg-feature-icon">
                      <Icon size={22} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= PROGRAM DETAILS ================= */}

        <section className="kg-section">
          <div className="kg-container">

            <motion.div
              className="kg-program-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="kg-program-top">
                <div>
                  <h2>MBBS Course Structure</h2>

                  <p>
                    The medical program combines foundational medical sciences,
                    pre-clinical subjects and clinical training to develop
                    strong academic and practical medical knowledge.
                  </p>
                </div>

                <div className="kg-duration">
                  <strong>5–6</strong>
                  <span>Years typical duration</span>
                </div>
              </div>

              <div className="kg-course-grid">

                <div className="kg-course-card">
                  <div className="kg-course-number">
                    YEARS 01–02
                  </div>

                  <h3>Basic Medical Sciences</h3>

                  <p>
                    Anatomy, physiology, biochemistry, histology and other
                    foundational medical subjects.
                  </p>
                </div>

                <div className="kg-course-card">
                  <div className="kg-course-number">
                    YEARS 03–04
                  </div>

                  <h3>Pre-Clinical Subjects</h3>

                  <p>
                    Pathology, microbiology, pharmacology and other important
                    pre-clinical medical disciplines.
                  </p>
                </div>

                <div className="kg-course-card">
                  <div className="kg-course-number">
                    YEARS 05–06
                  </div>

                  <h3>Clinical Training</h3>

                  <p>
                    Practical hospital training and supervised clinical
                    exposure with patients.
                  </p>
                </div>

              </div>

            </motion.div>

          </div>
        </section>

        {/* ================= ELIGIBILITY ================= */}

        <section className="kg-section">
          <div className="kg-container">

            <div className="kg-section-heading">
              <div className="kg-section-label">
                ADMISSION REQUIREMENTS
              </div>

              <h2>
                Check Your
                <span> Eligibility</span>
              </h2>

              <p>
                Students should meet the applicable academic and admission
                requirements before applying.
              </p>
            </div>

            <div className="kg-info-grid">

              <motion.div
                className="kg-info-card"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3>
                  <BadgeCheck size={22} />
                  Eligibility Criteria
                </h3>

                <ul className="kg-bullet-list">
                  <li>
                    <CheckCircle2 size={16} />
                    Minimum 50% marks in Physics, Chemistry and Biology in
                    12th grade
                  </li>

                  <li>
                    <CheckCircle2 size={16} />
                    NEET qualification required for Indian students
                  </li>

                  <li>
                    <CheckCircle2 size={16} />
                    Minimum age of 17 years at the time of admission
                  </li>

                  <li>
                    <CheckCircle2 size={16} />
                    Valid passport
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="kg-info-card"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3>
                  <ShieldCheck size={22} />
                  Important Guidance
                </h3>

                <ul className="kg-bullet-list">
                  <li>
                    <CheckCircle2 size={16} />
                    University requirements may differ.
                  </li>

                  <li>
                    <CheckCircle2 size={16} />
                    Students should verify current admission requirements.
                  </li>

                  <li>
                    <CheckCircle2 size={16} />
                    Recognition and licensing should be checked for the target
                    country of practice.
                  </li>

                  <li>
                    <CheckCircle2 size={16} />
                    Our counsellors can guide students through the admission
                    journey.
                  </li>
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ================= UNIVERSITIES ================= */}

        <section className="kg-section">
          <div className="kg-container">

            <div className="kg-section-heading">
              <div className="kg-section-label">
                FEATURED UNIVERSITIES
              </div>

              <h2>
                Top Medical Universities in
                <span> Kyrgyzstan</span>
              </h2>

              <p>
                Explore selected medical institutions and speak with our
                counsellors before making your final university decision.
              </p>
            </div>

            <div className="kg-university-grid">

              {universities.map((university, index) => (
                <motion.div
                  className="kg-university-card"
                  key={university.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                >

                  <div className="kg-university-logo">
                    <img
                      src={university.logo}
                      alt={`${university.name} logo`}
                    />
                  </div>

                  <div className="kg-university-content">

                    <div className="kg-university-tag">
                      Featured University
                    </div>

                    <h3>{university.name}</h3>

                    <div className="kg-university-location">
                      <MapPin size={12} />
                      {university.location}
                    </div>

                    <p>{university.description}</p>

                    <a
                      href={university.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kg-university-link"
                    >
                      Visit University
                      <ArrowUpRight size={14} />
                    </a>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= ADMISSION PROCESS ================= */}

        <section className="kg-section">
          <div className="kg-container">

            <div className="kg-section-heading">
              <div className="kg-section-label">
                ADMISSION PROCESS
              </div>

              <h2>
                Your Journey to
                <span> Medical Education</span>
              </h2>

              <p>
                Kantule Edutech supports students from the first counselling
                session through admission and travel preparation.
              </p>
            </div>

            <div className="kg-process">

              <div className="kg-process-line" />

              {admissionSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    className="kg-step"
                    key={step.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                  >

                    <div className="kg-step-top">
                      <div className="kg-step-icon">
                        <Icon size={22} />
                      </div>

                      <div className="kg-step-number">
                        {step.number}
                      </div>
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.text}</p>

                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>

        {/* ================= DOCUMENTS + FEES ================= */}

        <section className="kg-section">
          <div className="kg-container">

            <div className="kg-doc-fee">

              <motion.div
                className="kg-doc-card"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <h2>Required Documents</h2>

                <ul className="kg-doc-list">
                  {documents.map((document) => (
                    <li key={document}>
                      <CheckCircle2 size={16} />
                      {document}
                    </li>
                  ))}
                </ul>

                <div className="kg-fee-note">
                  Additional documents may be required depending on the
                  selected university and current admission requirements.
                </div>

              </motion.div>

              <motion.div
                className="kg-fee-card"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <h2>Approximate MBBS Fees</h2>

                <table className="kg-fee-table">
                  <thead>
                    <tr>
                      <th>Expense</th>
                      <th>Estimated Cost</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Tuition Fees</td>
                      <td>$3,000 – $5,000 / year</td>
                    </tr>

                    <tr>
                      <td>Hostel / Accommodation</td>
                      <td>$800 – $1,200 / year</td>
                    </tr>

                    <tr>
                      <td>Food & Living</td>
                      <td>$1,500 – $2,000 / year</td>
                    </tr>
                  </tbody>
                </table>

                <div className="kg-fee-note">
                  Fees are approximate and may vary depending on university,
                  course, accommodation, facilities, exchange rates and
                  current intake. Contact Kantule Edutech for current
                  university-specific fee details.
                </div>

              </motion.div>

            </div>

          </div>
        </section>

        {/* ================= CAREER ================= */}

        <section className="kg-section">
          <div className="kg-container">

            <div className="kg-section-heading">
              <div className="kg-section-label">
                AFTER MBBS
              </div>

              <h2>
                Career Opportunities
                <span> After MBBS</span>
              </h2>

              <p>
                Graduates can explore medical practice, postgraduate education
                and international career pathways subject to the applicable
                licensing and regulatory requirements.
              </p>
            </div>

            <div className="kg-career-grid">

              {careerOptions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="kg-career-card"
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                  >
                    <Icon size={23} />

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>

        {/* ================= LICENSING ================= */}

        <section className="kg-section">
          <div className="kg-container">

            <motion.div
              className="kg-info-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h3>
                <Globe2 size={22} />
                Global Medical Career Pathways
              </h3>

              <ul className="kg-bullet-list">

                <li>
                  <CheckCircle2 size={16} />
                  <strong>FMGE / NEXT:</strong>&nbsp; For applicable medical
                  practice pathways in India.
                </li>

                <li>
                  <CheckCircle2 size={16} />
                  <strong>USMLE:</strong>&nbsp; For medical practice pathways
                  in the United States.
                </li>

                <li>
                  <CheckCircle2 size={16} />
                  <strong>PLAB:</strong>&nbsp; For medical practice pathways
                  in the United Kingdom.
                </li>

                <li>
                  <CheckCircle2 size={16} />
                  Licensing requirements vary by country and should be checked
                  with the relevant medical regulatory authority.
                </li>

              </ul>

            </motion.div>

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <div className="kg-container">

          <motion.section
            className="kg-final-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="kg-final-cta-content">

              <h2>
                Planning to Study MBBS in Kyrgyzstan?
              </h2>

              <p>
                Get personalized guidance on universities, eligibility,
                documentation, fees and the admission process from Kantule
                Edutech.
              </p>

              <div className="kg-final-buttons">

                <Link
                  to="/contact"
                  className="kg-btn kg-btn-primary"
                >
                  Book Free Counselling
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kg-btn kg-btn-outline"
                >
                  <MessageCircle size={17} />
                  WhatsApp Us
                </a>

              </div>

            </div>

          </motion.section>

        </div>

      </main>
    </>
  );
}

export default Kyrgyzstan;