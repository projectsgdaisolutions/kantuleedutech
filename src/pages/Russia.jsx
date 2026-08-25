import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Globe2,
  Building2,
  FileCheck2,
  Plane,
  Stethoscope,
  BookOpen,
  ShieldCheck,
  WalletCards,
  Users,
  Clock3,
  MapPin,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Russia() {
  const universities = [
    {
      name: "Bashkir State Medical University",
      shortName: "BSMU",
      city: "Ufa, Russia",
      link: "https://www.udaanedutech.in/bsmu.php",
      logo: "https://www.google.com/s2/favicons?domain=bashgmu.ru&sz=128",
      description:
        "A leading medical university offering comprehensive medical education and clinical training.",
    },
    {
      name: "South Ural State Medical University",
      shortName: "SUSMU",
      city: "Chelyabinsk, Russia",
      link: "https://www.udaanedutech.in/susmu.php",
      logo: "https://www.google.com/s2/favicons?domain=chelsma.ru&sz=128",
      description:
        "An established medical institution offering medical education for international students.",
    },
    {
      name: "North Caucasus State Academy",
      shortName: "NCSA",
      city: "Cherkessk, Russia",
      link: "https://www.udaanedutech.in/ncsa.php",
      logo: "https://www.google.com/s2/favicons?domain=ncsa.ru&sz=128",
      description:
        "A Russian higher education institution with opportunities for international medical students.",
    },
    {
      name: "Ryazan State Medical University",
      shortName: "RSMU",
      city: "Ryazan, Russia",
      link: "https://www.udaanedutech.in/rsmu.php",
      logo: "https://www.google.com/s2/favicons?domain=rzgmu.ru&sz=128",
      description:
        "A recognized medical education institution with academic and clinical learning opportunities.",
    },
    {
      name: "Voronezh State Medical University",
      shortName: "VSMU",
      city: "Voronezh, Russia",
      link: "https://www.udaanedutech.in/vsmu.php",
      logo: "https://www.google.com/s2/favicons?domain=vrngmu.ru&sz=128",
      description:
        "A long-established medical university known for medical education, research and clinical training.",
    },
    {
      name: "Yaroslavl State Medical University",
      shortName: "YSMU",
      city: "Yaroslavl, Russia",
      link: "https://www.udaanedutech.in/ysmu.php",
      logo: "https://www.google.com/s2/favicons?domain=ysmu.ru&sz=128",
      description:
        "A medical university providing education and clinical learning opportunities for students.",
    },
  ];

  const whyRussia = [
    {
      icon: Globe2,
      title: "Globally Oriented Education",
      text: "Russian medical universities attract students from different countries and offer internationally oriented medical education.",
    },
    {
      icon: WalletCards,
      title: "Affordable Education",
      text: "Tuition fees can be comparatively affordable depending on the university, course and living arrangements.",
    },
    {
      icon: BookOpen,
      title: "English Medium Options",
      text: "Several universities offer medical programs in English for international students.",
    },
    {
      icon: Building2,
      title: "Modern Infrastructure",
      text: "Students can access laboratories, academic facilities and clinical training environments.",
    },
    {
      icon: Stethoscope,
      title: "Clinical Training",
      text: "The curriculum combines theoretical medical knowledge with practical and clinical learning.",
    },
    {
      icon: Users,
      title: "International Community",
      text: "Russia has a diverse international student population, creating a multicultural learning environment.",
    },
  ];

  const courseYears = [
    {
      year: "01–02",
      title: "Basic Medical Sciences",
      subjects: "Anatomy • Physiology • Biochemistry • Histology",
    },
    {
      year: "03–04",
      title: "Pre-Clinical Studies",
      subjects: "Pathology • Pharmacology • Microbiology • Medical Subjects",
    },
    {
      year: "05–06",
      title: "Clinical Training",
      subjects: "Hospital Training • Practical Exposure • Clinical Experience",
    },
  ];

  const admissionSteps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Free Counselling",
      text: "Discuss your NEET score, academic profile, budget and career goals with our counsellors.",
    },
    {
      number: "02",
      icon: GraduationCap,
      title: "University Selection",
      text: "Shortlist suitable Russian medical universities according to your profile.",
    },
    {
      number: "03",
      icon: FileCheck2,
      title: "Application Submission",
      text: "Prepare and submit the required academic and personal documents.",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Admission Letter",
      text: "Receive admission confirmation from the selected university.",
    },
    {
      number: "05",
      icon: Plane,
      title: "Visa Processing",
      text: "Get guidance for visa documentation and the application process.",
    },
    {
      number: "06",
      icon: ShieldCheck,
      title: "Pre-Departure Support",
      text: "Receive important guidance before travelling to Russia.",
    },
  ];

  const documents = [
    "10th Marksheet",
    "12th Marksheet",
    "NEET Scorecard",
    "Valid Passport",
    "Passport-size Photographs",
    "Medical Fitness Certificate",
    "Admission Application Form",
    "Other university-specific documents",
  ];

  const careerOptions = [
    "Medical Practice",
    "Postgraduate Medical Education",
    "Clinical Specialization",
    "Hospitals & Healthcare",
    "Research",
    "Academics",
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .russia-page {
          background:
            radial-gradient(circle at 10% 10%, rgba(9, 143, 201, 0.06), transparent 30%),
            radial-gradient(circle at 90% 30%, rgba(7, 59, 120, 0.05), transparent 28%),
            #f7fbff;
          color: #0b2d61;
          overflow: hidden;
        }

        .russia-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .russia-hero {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(4, 35, 75, 0.94) 0%,
              rgba(4, 35, 75, 0.78) 43%,
              rgba(4, 35, 75, 0.34) 75%,
              rgba(4, 35, 75, 0.16) 100%
            ),
            url("https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=2000&q=90")
            center/cover no-repeat;
        }

        .russia-hero::after {
          content: "";
          position: absolute;
          right: -160px;
          bottom: -160px;
          width: 460px;
          height: 460px;
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 50%;
          box-shadow:
            0 0 0 45px rgba(255,255,255,.035),
            0 0 0 90px rgba(255,255,255,.025);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
          padding: 100px 0;
        }

        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid rgba(255,255,255,.2);
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(10px);
          border-radius: 999px;
          color: #7fe7ff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .hero-content h1 {
          margin: 0;
          color: white;
          font-size: clamp(44px, 6vw, 76px);
          line-height: .98;
          letter-spacing: -.045em;
          font-weight: 850;
        }

        .hero-content h1 span {
          display: block;
          color: #58d5f1;
        }

        .hero-description {
          max-width: 650px;
          margin: 26px 0 0;
          color: rgba(255,255,255,.82);
          font-size: 16px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 32px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 21px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: .3s ease;
        }

        .hero-btn-primary {
          color: white;
          background: linear-gradient(135deg, #0795cc, #24c1df);
          box-shadow: 0 14px 30px rgba(0,0,0,.2);
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px);
        }

        .hero-btn-secondary {
          color: white;
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(10px);
        }

        .hero-btn-secondary:hover {
          background: rgba(255,255,255,.14);
        }

        /* STATS */

        .russia-stats {
          position: relative;
          z-index: 5;
          margin-top: -55px;
        }

        .stats-card {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: white;
          border: 1px solid #e4edf5;
          border-radius: 24px;
          box-shadow: 0 25px 70px rgba(8, 46, 88, .12);
          overflow: hidden;
        }

        .stat-item {
          padding: 26px 24px;
          border-right: 1px solid #e7eef4;
        }

        .stat-item:last-child {
          border-right: 0;
        }

        .stat-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: #078fca;
          background: #eaf8fd;
          margin-bottom: 14px;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 850;
          color: #092d65;
        }

        .stat-label {
          margin-top: 4px;
          font-size: 12px;
          line-height: 1.5;
          color: #73859a;
        }

        /* SECTION */

        .russia-section {
          padding: 95px 0 0;
        }

        .section-heading {
          max-width: 760px;
          margin-bottom: 38px;
        }

        .section-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #078fc9;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 13px;
        }

        .section-eyebrow::before {
          content: "";
          width: 28px;
          height: 3px;
          border-radius: 10px;
          background: #14b7db;
        }

        .section-heading h2 {
          margin: 0;
          color: #092d65;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.08;
          letter-spacing: -.035em;
        }

        .section-heading h2 span {
          color: #078fc9;
        }

        .section-heading p {
          color: #6c8097;
          line-height: 1.8;
          margin: 17px 0 0;
          font-size: 15px;
        }

        /* INTRO */

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
        }

        .intro-image {
          position: relative;
          min-height: 470px;
          border-radius: 28px;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(4,35,75,.05), rgba(4,35,75,.25)),
            url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85")
            center/cover no-repeat;
          box-shadow: 0 25px 65px rgba(15, 55, 95, .14);
        }

        .intro-badge {
          position: absolute;
          right: 22px;
          bottom: 22px;
          background: rgba(255,255,255,.96);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.8);
          border-radius: 18px;
          padding: 18px 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,.15);
        }

        .intro-badge strong {
          display: block;
          color: #092d65;
          font-size: 22px;
        }

        .intro-badge span {
          color: #73859a;
          font-size: 11px;
        }

        .intro-copy h3 {
          color: #092d65;
          font-size: 30px;
          line-height: 1.2;
          margin: 0 0 17px;
        }

        .intro-copy p {
          color: #6c8097;
          line-height: 1.85;
          font-size: 14px;
          margin: 0 0 17px;
        }

        .check-list {
          display: grid;
          gap: 12px;
          margin-top: 25px;
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #425a74;
          font-size: 13px;
          line-height: 1.55;
        }

        .check-item svg {
          flex-shrink: 0;
          color: #0aa8d2;
          margin-top: 2px;
        }

        /* WHY */

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .why-card {
          padding: 26px;
          border-radius: 20px;
          background: white;
          border: 1px solid #e2edf5;
          transition: .3s ease;
          box-shadow: 0 12px 35px rgba(20, 60, 100, .045);
        }

        .why-card:hover {
          transform: translateY(-5px);
          border-color: #bce5f2;
          box-shadow: 0 20px 45px rgba(20, 60, 100, .09);
        }

        .why-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: #078fc9;
          background: linear-gradient(135deg, #edfaff, #e2f6fc);
          margin-bottom: 18px;
        }

        .why-card h3 {
          margin: 0 0 9px;
          color: #092d65;
          font-size: 17px;
        }

        .why-card p {
          margin: 0;
          color: #70849b;
          font-size: 13px;
          line-height: 1.7;
        }

        /* PROGRAM */

        .program-panel {
          padding: 38px;
          border-radius: 26px;
          background: linear-gradient(135deg, #062f67, #075b91);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .program-panel::after {
          content: "";
          position: absolute;
          right: -100px;
          top: -120px;
          width: 350px;
          height: 350px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 50px rgba(255,255,255,.025),
            0 0 0 100px rgba(255,255,255,.02);
        }

        .program-top {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          gap: 25px;
          align-items: flex-end;
          margin-bottom: 35px;
        }

        .program-top h2 {
          margin: 0;
          color: white;
          font-size: 32px;
        }

        .program-top p {
          max-width: 570px;
          margin: 10px 0 0;
          color: rgba(255,255,255,.7);
          line-height: 1.7;
          font-size: 14px;
        }

        .duration-pill {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          padding: 14px 18px;
          border-radius: 14px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.15);
          text-align: center;
        }

        .duration-pill strong {
          display: block;
          font-size: 22px;
        }

        .duration-pill span {
          font-size: 10px;
          color: rgba(255,255,255,.65);
        }

        .years-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .year-card {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          backdrop-filter: blur(10px);
        }

        .year-number {
          display: inline-flex;
          padding: 5px 9px;
          border-radius: 7px;
          background: #4bd4ee;
          color: #073b78;
          font-size: 10px;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .year-card h3 {
          margin: 0 0 9px;
          color: white;
          font-size: 16px;
        }

        .year-card p {
          margin: 0;
          color: rgba(255,255,255,.65);
          font-size: 12px;
          line-height: 1.7;
        }

        /* ELIGIBILITY */

        .eligibility-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 20px;
        }

        .eligibility-card {
          padding: 32px;
          background: white;
          border: 1px solid #e1edf5;
          border-radius: 24px;
          box-shadow: 0 15px 45px rgba(20,60,100,.05);
        }

        .eligibility-card.highlight {
          background: linear-gradient(135deg, #effaff, #f8fcff);
        }

        .eligibility-card h3 {
          margin: 0 0 20px;
          color: #092d65;
          font-size: 20px;
        }

        .eligibility-list {
          display: grid;
          gap: 14px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .eligibility-list li {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: #60758c;
          font-size: 13px;
          line-height: 1.6;
        }

        .eligibility-list svg {
          flex-shrink: 0;
          color: #0798ce;
          margin-top: 2px;
        }

        /* UNIVERSITIES */

        .university-section {
          padding-bottom: 20px;
        }

        .university-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .university-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 25px;
          background: white;
          border: 1px solid #e1ebf3;
          border-radius: 22px;
          min-height: 285px;
          overflow: hidden;
          transition: .3s ease;
        }

        .university-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #073b78, #16b7db);
        }

        .university-card:hover {
          transform: translateY(-6px);
          border-color: #bde4f0;
          box-shadow: 0 22px 55px rgba(20,60,100,.1);
        }

        .university-head {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .university-logo {
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border-radius: 16px;
          background: #f5faff;
          border: 1px solid #e4eef6;
        }

        .university-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .university-short {
          color: #078fc9;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: .08em;
          margin-bottom: 4px;
        }

        .university-card h3 {
          margin: 0;
          color: #092d65;
          font-size: 16px;
          line-height: 1.35;
        }

        .university-location {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #8394a7;
          font-size: 11px;
          margin-top: 5px;
        }

        .university-description {
          color: #70849b;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
          flex: 1;
        }

        .university-link {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #edf2f6;
          color: #078fc9;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
        }

        .university-link:hover {
          color: #073b78;
        }

        /* ADMISSION */

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .step-card {
          position: relative;
          padding: 26px;
          background: white;
          border: 1px solid #e1ebf3;
          border-radius: 20px;
          transition: .3s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 45px rgba(20,60,100,.08);
        }

        .step-number {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #dceaf2;
          font-size: 28px;
          font-weight: 900;
        }

        .step-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #078fc9;
          background: #eaf8fd;
          border-radius: 13px;
          margin-bottom: 18px;
        }

        .step-card h3 {
          color: #092d65;
          margin: 0 0 8px;
          font-size: 16px;
        }

        .step-card p {
          color: #70849b;
          margin: 0;
          font-size: 12px;
          line-height: 1.7;
        }

        /* DOCUMENTS */

        .documents-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .documents-card {
          padding: 32px;
          border-radius: 24px;
          background: white;
          border: 1px solid #e1ebf3;
        }

        .documents-card h3 {
          margin: 0 0 22px;
          color: #092d65;
          font-size: 21px;
        }

        .documents-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .documents-list li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #60758c;
          font-size: 12px;
          line-height: 1.5;
        }

        .documents-list svg {
          flex-shrink: 0;
          color: #0798ce;
        }

        .career-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .career-list li {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px;
          background: #f5faff;
          border-radius: 11px;
          color: #47627d;
          font-size: 12px;
        }

        .career-list svg {
          color: #078fc9;
        }

        /* CTA */

        .final-cta {
          margin: 85px 0 90px;
          padding: 55px;
          border-radius: 30px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(110deg, rgba(3,37,78,.97), rgba(5,93,139,.92)),
            url("https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85")
            center/cover;
        }

        .final-cta::after {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          right: -100px;
          top: -180px;
          border: 1px solid rgba(255,255,255,.13);
          box-shadow:
            0 0 0 50px rgba(255,255,255,.025),
            0 0 0 100px rgba(255,255,255,.02);
        }

        .final-cta-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
        }

        .final-cta h2 {
          color: white;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.1;
          margin: 0 0 15px;
        }

        .final-cta p {
          color: rgba(255,255,255,.7);
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 27px;
        }

        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 800;
          transition: .3s ease;
        }

        .cta-link-primary {
          color: #073b78;
          background: white;
        }

        .cta-link-primary:hover {
          transform: translateY(-3px);
        }

        .cta-link-whatsapp {
          color: white;
          background: #19b95b;
        }

        .cta-link-whatsapp:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 950px) {
          .why-grid,
          .university-grid,
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .intro-grid,
          .eligibility-grid,
          .documents-layout {
            grid-template-columns: 1fr;
          }

          .intro-image {
            min-height: 390px;
          }

          .stats-card {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-item:nth-child(2) {
            border-right: 0;
          }

          .stat-item:nth-child(-n+2) {
            border-bottom: 1px solid #e7eef4;
          }
        }

        @media (max-width: 700px) {
          .russia-container {
            width: min(100% - 28px, 1180px);
          }

          .russia-hero {
            min-height: 620px;
          }

          .hero-content {
            padding: 80px 0;
          }

          .hero-content h1 {
            font-size: 48px;
          }

          .russia-stats {
            margin-top: -35px;
          }

          .stats-card {
            grid-template-columns: 1fr 1fr;
            border-radius: 19px;
          }

          .stat-item {
            padding: 20px 15px;
          }

          .stat-value {
            font-size: 19px;
          }

          .stat-label {
            font-size: 10px;
          }

          .russia-section {
            padding-top: 70px;
          }

          .why-grid,
          .university-grid,
          .steps-grid,
          .years-grid {
            grid-template-columns: 1fr;
          }

          .intro-image {
            min-height: 330px;
          }

          .program-panel {
            padding: 25px;
          }

          .program-top {
            display: block;
          }

          .duration-pill {
            display: inline-block;
            margin-top: 20px;
          }

          .documents-list,
          .career-list {
            grid-template-columns: 1fr;
          }

          .final-cta {
            padding: 32px 25px;
            margin: 65px 0;
            border-radius: 23px;
          }
        }
      `}</style>

      <main className="russia-page">

        {/* ================= HERO ================= */}
        <section className="russia-hero">
          <div className="russia-container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="hero-kicker">
                <Globe2 size={14} />
                MBBS ABROAD • RUSSIA
              </div>

              <h1>
                Study MBBS
                <span>in Russia</span>
              </h1>

              <p className="hero-description">
                Explore quality medical education opportunities in Russia
                with guidance for university selection, admission,
                documentation, visa processing and your complete journey
                towards medical education abroad.
              </p>

              <div className="hero-actions">
                <Link to="/contact" className="hero-btn hero-btn-primary">
                  Book Free Counselling
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/918830451660?text=Hello%20Kantule%20Edutech%2C%20I%20want%20to%20know%20more%20about%20MBBS%20in%20Russia."
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

        {/* ================= STATS ================= */}
        <section className="russia-stats">
          <div className="russia-container">
            <div className="stats-card">

              <div className="stat-item">
                <div className="stat-icon">
                  <Clock3 size={20} />
                </div>
                <div className="stat-value">6 Years</div>
                <div className="stat-label">
                  Typical MBBS program duration
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <BookOpen size={20} />
                </div>
                <div className="stat-value">English</div>
                <div className="stat-label">
                  English-medium options available
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <Building2 size={20} />
                </div>
                <div className="stat-value">6+</div>
                <div className="stat-label">
                  Featured university options
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <Globe2 size={20} />
                </div>
                <div className="stat-value">Global</div>
                <div className="stat-label">
                  International student environment
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="russia-section">
          <div className="russia-container">
            <div className="intro-grid">

              <motion.div
                className="intro-image"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="intro-badge">
                  <strong>MBBS</strong>
                  <span>Medical Education in Russia</span>
                </div>
              </motion.div>

              <motion.div
                className="intro-copy"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="section-eyebrow">
                  Study Medicine Abroad
                </div>

                <h3>
                  A Complete Pathway to
                  <br />
                  <span style={{ color: "#078fc9" }}>
                    Medical Education in Russia
                  </span>
                </h3>

                <p>
                  Russia is one of the popular destinations for international
                  students who want to pursue medical education abroad. The
                  country has a long tradition of medical education and
                  several universities provide modern academic and clinical
                  learning environments.
                </p>

                <p>
                  Many universities offer English-medium programs for
                  international students. Students can combine theoretical
                  medical knowledge with practical clinical training during
                  their academic journey.
                </p>

                <p>
                  Kantule Edutech helps students and parents understand
                  university options, eligibility, documentation, admission
                  procedures and other important aspects before making a
                  decision.
                </p>

                <div className="check-list">
                  <div className="check-item">
                    <CheckCircle2 size={17} />
                    University selection based on student profile
                  </div>

                  <div className="check-item">
                    <CheckCircle2 size={17} />
                    Admission and application assistance
                  </div>

                  <div className="check-item">
                    <CheckCircle2 size={17} />
                    Documentation and visa guidance
                  </div>

                  <div className="check-item">
                    <CheckCircle2 size={17} />
                    Pre-departure and post-admission support
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ================= WHY RUSSIA ================= */}
        <section className="russia-section">
          <div className="russia-container">

            <div className="section-heading">
              <div className="section-eyebrow">
                Why Choose Russia
              </div>

              <h2>
                Why Study <span>MBBS in Russia?</span>
              </h2>

              <p>
                Russia offers several options for international students
                looking for medical education abroad. The right university
                should always be selected after considering academic,
                financial and regulatory requirements.
              </p>
            </div>

            <div className="why-grid">
              {whyRussia.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="why-card"
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                  >
                    <div className="why-icon">
                      <Icon size={21} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= PROGRAM ================= */}
        <section className="russia-section">
          <div className="russia-container">

            <div className="program-panel">

              <div className="program-top">
                <div>
                  <div className="section-eyebrow" style={{ color: "#64def4" }}>
                    Academic Journey
                  </div>

                  <h2>MBBS Course Structure</h2>

                  <p>
                    The MBBS program in Russia typically spans around six
                    years, with students progressing from foundational medical
                    sciences to clinical training.
                  </p>
                </div>

                <div className="duration-pill">
                  <strong>6</strong>
                  <span>YEARS</span>
                </div>
              </div>

              <div className="years-grid">
                {courseYears.map((item) => (
                  <div className="year-card" key={item.year}>
                    <div className="year-number">
                      YEARS {item.year}
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.subjects}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ================= ELIGIBILITY ================= */}
        <section className="russia-section">
          <div className="russia-container">

            <div className="section-heading">
              <div className="section-eyebrow">
                Admission Requirements
              </div>

              <h2>
                Eligibility & <span>Program Details</span>
              </h2>
            </div>

            <div className="eligibility-grid">

              <div className="eligibility-card highlight">
                <h3>Eligibility Criteria</h3>

                <ul className="eligibility-list">
                  <li>
                    <CheckCircle2 size={17} />
                    Minimum 50% marks in Physics, Chemistry and Biology in
                    12th grade, subject to applicable requirements.
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    NEET qualification required for Indian students as per
                    applicable regulations.
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    Minimum age requirement generally 17 years at the time
                    of admission.
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    Valid passport and university-specific documents.
                  </li>
                </ul>
              </div>

              <div className="eligibility-card">
                <h3>What Students Should Consider</h3>

                <ul className="eligibility-list">
                  <li>
                    <CheckCircle2 size={17} />
                    University recognition and current regulatory requirements.
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    Tuition fees, hostel and living expenses.
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    Language and medium of instruction.
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    Clinical training arrangements.
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    Current admission and licensing requirements for the
                    country where the student intends to practice.
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ================= UNIVERSITIES ================= */}
        <section className="russia-section university-section">
          <div className="russia-container">

            <div className="section-heading">
              <div className="section-eyebrow">
                University Options
              </div>

              <h2>
                Featured Medical <span>Universities in Russia</span>
              </h2>

              <p>
                Explore selected university options. Students should compare
                current course details, fees, eligibility, recognition and
                admission requirements before final selection.
              </p>
            </div>

            <div className="university-grid">

              {universities.map((university, index) => (
                <motion.div
                  className="university-card"
                  key={university.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                >

                  <div className="university-head">

                    <div className="university-logo">
                      <img
                        src={university.logo}
                        alt={`${university.name} logo`}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement.innerHTML =
                            `<span style="
                              font-size:18px;
                              font-weight:900;
                              color:#078fc9;
                            ">${university.shortName}</span>`;
                        }}
                      />
                    </div>

                    <div>
                      <div className="university-short">
                        {university.shortName}
                      </div>

                      <h3>{university.name}</h3>

                      <div className="university-location">
                        <MapPin size={11} />
                        {university.city}
                      </div>
                    </div>

                  </div>

                  <p className="university-description">
                    {university.description}
                  </p>

                  <a
                    href={university.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                  >
                    View University Details
                    <ChevronRight size={16} />
                  </a>

                </motion.div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= ADMISSION PROCESS ================= */}
        <section className="russia-section">
          <div className="russia-container">

            <div className="section-heading">
              <div className="section-eyebrow">
                Simple Admission Journey
              </div>

              <h2>
                From Counselling to <span>Russia</span>
              </h2>

              <p>
                Our counselling process is designed to make the admission
                journey easier for students and parents.
              </p>
            </div>

            <div className="steps-grid">

              {admissionSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    className="step-card"
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                  >
                    <div className="step-number">
                      {step.number}
                    </div>

                    <div className="step-icon">
                      <Icon size={20} />
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.text}</p>
                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>

        {/* ================= DOCUMENTS ================= */}
        <section className="russia-section">
          <div className="russia-container">

            <div className="documents-layout">

              <div className="documents-card">
                <h3>Required Documents</h3>

                <ul className="documents-list">
                  {documents.map((document) => (
                    <li key={document}>
                      <CheckCircle2 size={15} />
                      {document}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="documents-card">
                <h3>Career Opportunities After MBBS</h3>

                <ul className="career-list">
                  {careerOptions.map((career) => (
                    <li key={career}>
                      <Stethoscope size={15} />
                      {career}
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    color: "#70849b",
                    fontSize: "12px",
                    lineHeight: "1.75",
                    marginTop: "22px",
                    marginBottom: 0,
                  }}
                >
                  Graduates may pursue medical careers or postgraduate
                  education after fulfilling the applicable licensing and
                  regulatory requirements of the country where they intend
                  to practice.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <div className="russia-container">

          <motion.section
            className="final-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="final-cta-content">

              <h2>
                Planning MBBS in Russia?
                <br />
                Let's Plan Your Journey.
              </h2>

              <p>
                Get personalised guidance for university selection,
                eligibility, admission, documentation and the next steps
                towards studying medicine in Russia.
              </p>

              <div className="cta-actions">

                <Link
                  to="/contact"
                  className="cta-link cta-link-primary"
                >
                  Book Free Counselling
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/918830451660?text=Hello%20Kantule%20Edutech%2C%20I%20am%20interested%20in%20MBBS%20in%20Russia.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-link cta-link-whatsapp"
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

export default Russia;