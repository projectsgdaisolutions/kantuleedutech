import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Globe2,
  Building2,
  Users,
  FileText,
  Headphones,
  ShieldCheck,
  UserRound,
  BookOpen,
  Plane,
  MessageCircle,
  Stethoscope,
  ClipboardCheck,
  HeartHandshake,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import newImg1 from "../assets/images/img1.jpg";
import newImg2 from "../assets/images/img2.jpg";
import newImg3 from "../assets/images/img3.jpg";
import newImg4 from "../assets/images/img4.jpg";
import newImg5 from "../assets/images/img5.jpg";
import FeaturedUniversities from "../components/FeaturedUniversities";

const heroSlides = [
  {
    image: img1,
    eyebrow: "MEDICAL EDUCATION & CAREER GUIDANCE",
    title: "Your Trusted Partner for Medical Education & Career Guidance",
    marathi:
      "वैद्यकीय शिक्षणासाठी योग्य मार्गदर्शन, योग्य निर्णय आणि उज्ज्वल करिअरची सुरुवात.",
  },
  {
    image: img2,
    eyebrow: "MBBS ADMISSIONS ABROAD",
    title: "Professional Guidance for Your MBBS Journey Abroad",
    marathi:
      "वैद्यकीय शिक्षणासाठी योग्य मार्गदर्शन, योग्य निर्णय आणि उज्ज्वल करिअरची सुरुवात.",
  },
  {
    image: img3,
    eyebrow: "SHAPE YOUR MEDICAL CAREER",
    title: "Build Your Future with the Right Medical Education",
    marathi:
      "वैद्यकीय शिक्षणासाठी योग्य मार्गदर्शन, योग्य निर्णय आणि उज्ज्वल करिअरची सुरुवात.",
  },
];

const countries = [
  { name: "Russia", code: "ru" },
  { name: "Kyrgyzstan", code: "kg" },
  { name: "Kazakhstan", code: "kz" },
  { name: "Georgia", code: "ge" },
  { name: "Philippines", code: "ph" },
  { name: "Nepal", code: "np" },
  { name: "Vietnam", code: "vn" },
  { name: "USA", code: "us" },
];

const whyChoose = [
  {
    icon: Users,
    title: "Experienced Counselling Team",
  },
  {
    icon: GraduationCap,
    title: "10+ Years in Education Sector",
  },
  {
    icon: UserRound,
    title: "Personalized Student Counselling",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Information",
  },
  {
    icon: Globe2,
    title: "Multiple MBBS Destinations",
  },
  {
    icon: ClipboardCheck,
    title: "Complete Admission Guidance",
  },
  {
    icon: FileText,
    title: "Documentation & Application Assistance",
  },
  {
    icon: Headphones,
    title: "Post-Admission Guidance & Support",
  },
  {
    icon: HeartHandshake,
    title: "Parent-Friendly Counselling",
  },
];

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Counselling",
  },
  {
    number: "02",
    icon: Building2,
    title: "Course & University Selection",
  },
  {
    number: "03",
    icon: FileText,
    title: "Application",
  },
  {
    number: "04",
    icon: UserRound,
    title: "Admission",
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Documentation & Visa Guidance",
  },
  {
    number: "06",
    icon: Plane,
    title: "Pre-Departure Guidance",
  },
  {
    number: "07",
    icon: Headphones,
    title: "Post-Admission Support",
  },
];

const testimonials = [
  {
    quote:
      "The best study abroad consultancy i have seen for USA in JALNA & BEED. Highly recommend all genuine students to visit once and feel the difference and honesty in the counselling. When you visit specially ask for Swapnil Sir.",
    name: "Pavan Nilkanth Joshi",
    location: "Google Review",
    reviews: "1 review",
  },
  {
    quote:
      "Best consultancy services for studying MBBS in the best colleges. If you are NEET exam qualify and can't get admission in India then must contact KANTULE EDUTECH.",
    name: "Aniket Patare",
    location: "Google Review",
    reviews: "9 reviews",
  },
  {
    quote:
      "Good edutech organization as flow of all information is transperent and easy to asscable. Working environment is class professional along with that employees with human values.",
    name: "Aniket Kale",
    location: "Google Review",
    reviews: "3 reviews",
  },
  {
    quote:
      "An ideal place for MBBS councelling. Have multiple options to opt in terms of universities.",
    name: "Ajit Pawar",
    location: "Google Review",
    reviews: "Local Guide · 12 reviews",
  },
  {
    quote:
      "Nice guidence, good data and information they have. Trusted genuine sevices for mbbs admission.",
    name: "Sudarshan Deshmukh",
    location: "Google Review",
    reviews: "5 reviews",
  },
  {
    quote:
      "Swapnil sir very helping and humble. Better consultancy service compared to others.",
    name: "Rameshwar Kawale",
    location: "Google Review",
    reviews: "Local Guide · 13 reviews",
  },
  {
    quote:
      "Beat consultant .have multiple options with affordable price Thank you for counseling and admission",
    name: "Anand Shinde",
    location: "Google Review",
    reviews: "2 reviews",
  },
  {
    quote:
      "Best abroad education consultant in beed and jalna",
    name: "Swaraj Kantule",
    location: "Google Review",
    reviews: "2 reviews",
  },
  {
    quote:
      "Amazing councillors u have....thankuu for ur guidance",
    name: "Shubham Bhadalkar",
    location: "Google Review",
    reviews: "11 reviews",
  },
  {
    quote:
      "Whole hearted person dedicated to his clients....",
    name: "Abhi Jadhav",
    location: "Google Review",
    reviews: "3 reviews",
  },
  {
    quote:
      "Nice experience of service",
    name: "Shridhar Waghmare",
    location: "Google Review",
    reviews: "Local Guide · 13 reviews · 42 photos",
  },
  {
    quote:
      "Best MBBS consultant in beed",
    name: "Pavan Rajput",
    location: "Google Review",
    reviews: "2 reviews · 6 photos",
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          --navy: #092d63;
          --navy-dark: #061f48;
          --navy-deep: #041530;
          --blue: #075ca8;
          --cyan: #16b7d7;
          --cyan-bright: #38d4ec;
          --cyan-light: #eafaff;
          --gold: #0d6faf;
          --gold-light: #edf7ff;
          --gold-deep: #075ca8;
          --text: #102d57;
          --muted: #687a93;
          --border: #e2ebf4;
          --white: #ffffff;
          --shadow: 0 18px 55px rgba(7, 48, 89, .10);
          --shadow-hover: 0 28px 75px rgba(7, 48, 89, .17);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scrollbar-width: auto;
          scrollbar-color: #0b76ad #e9f2f8;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: "Manrope", sans-serif;
          background: #fff;
          color: var(--text);
          overflow-x: hidden;
        }

        body::-webkit-scrollbar {
          width: 14px;
        }

        body::-webkit-scrollbar-track {
          background: linear-gradient(#eef6fb, #e5f0f7);
        }

        body::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #16b7d7, #075ca8);
          border: 3px solid #eaf3f8;
          border-radius: 20px;
        }

        body::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #0d8fbd, #043e78);
        }

        button,
        a {
          font-family: inherit;
        }

        a {
          text-decoration: none;
        }

        .home-page {
          width: 100%;
          overflow: hidden;
          background: #fff;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .001ms !important;
            transition-duration: .001ms !important;
          }
        }

        @keyframes shimmerSweep {
          0% { transform: translateX(-140%) skewX(-14deg); }
          100% { transform: translateX(260%) skewX(-14deg); }
        }

        @keyframes softFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: .55; transform: scale(.92); }
          50% { opacity: 1; transform: scale(1); }
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes ambientMove {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(15px, -12px, 0) scale(1.04); }
        }

        @keyframes kenburns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.1) translate(-2%, -2%); }
        }

        /* ========================= HERO (MOBILE FIRST) ========================== */
        .hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          isolation: isolate;
          background: #061d40;
          padding-bottom: 160px; 
        }

        .hero::before,
        .hero::after {
          content: "";
          position: absolute;
          z-index: 2;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(2px);
        }

        .hero::before {
          width: 240px;
          height: 240px;
          right: -120px;
          top: 18%;
          background: rgba(22,183,215,.11);
          box-shadow: 0 0 90px rgba(22,183,215,.18);
          animation: ambientMove 8s ease-in-out infinite;
        }

        .hero::after {
          width: 190px;
          height: 190px;
          left: -100px;
          bottom: 20%;
          background: rgba(13,111,175,.14);
          box-shadow: 0 0 80px rgba(13,111,175,.18);
          animation: ambientMove 10s ease-in-out infinite reverse;
        }

        .hero-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: kenburns 12s ease-in-out infinite alternate;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              90deg,
              rgba(3,18,42,.95) 0%,
              rgba(4,24,53,.86) 35%,
              rgba(5,35,70,.48) 72%,
              rgba(5,35,70,.22) 100%
            );
        }

        .hero-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 78% 22%, rgba(22,183,215,.16), transparent 31%),
            radial-gradient(circle at 15% 80%, rgba(7,92,168,.18), transparent 34%);
        }

        .hero-content {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 1280px;
          height: 100%;
          margin: auto;
          padding: 110px 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-text {
          width: 100%;
          max-width: 720px;
          color: #fff;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          border: 1px solid rgba(87,218,239,.34);
          border-radius: 100px;
          background: rgba(255,255,255,.075);
          backdrop-filter: blur(16px);
          color: #bceff8;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 1.45px;
          margin-bottom: 19px;
          box-shadow: inset 0 1px rgba(255,255,255,.12), 0 10px 30px rgba(0,0,0,.12);
        }

        .hero-eyebrow-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 7px;
          border-radius: 50%;
          background: #49d8ef;
          box-shadow: 0 0 16px rgba(73,216,239,.95);
          animation: glowPulse 2.2s ease-in-out infinite;
        }

        .hero-title {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(32px, 8vw, 48px);
          line-height: 1.08;
          letter-spacing: -1.5px;
          font-weight: 800;
          text-wrap: balance;
        }

        .hero-title span {
          background: linear-gradient(100deg, #58e3f6 5%, #13a5d0 70%, #58cce4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-marathi {
          max-width: 650px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.91);
          font-size: 13px;
          line-height: 1.75;
          font-weight: 600;
        }

        .hero-description {
          max-width: 640px;
          margin: 12px auto 0;
          color: rgba(255,255,255,.68);
          font-size: 11.5px;
          line-height: 1.75;
        }

        .hero-buttons {
          display: flex;
          width: 100%;
          gap: 9px;
          margin-top: 25px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .primary-btn,
        .secondary-btn {
          position: relative;
          min-height: 48px;
          padding: 0 17px;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 800;
          overflow: hidden;
          transition: transform .35s ease, box-shadow .35s ease, background .35s ease, border-color .35s ease;
        }

        .primary-btn {
          color: #fff;
          background: linear-gradient(135deg, #16bfdc, #0878ae);
          box-shadow: 0 12px 30px rgba(8,166,198,.28);
        }

        .primary-btn::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 45%;
          background: linear-gradient(110deg, transparent, rgba(255,255,255,.42), transparent);
          transform: translateX(-140%) skewX(-14deg);
        }

        .primary-btn:hover::before {
          animation: shimmerSweep .9s ease forwards;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(8,166,198,.38);
        }

        .secondary-btn {
          color: #fff;
          border: 1px solid rgba(255,255,255,.30);
          background: rgba(255,255,255,.075);
          backdrop-filter: blur(14px);
        }

        .secondary-btn:hover {
          color: var(--navy);
          background: #fff;
          border-color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,0,0,.15);
        }

        .hero-arrows {
          position: absolute;
          z-index: 8;
          right: 18px;
          bottom: 180px;
          display: flex;
          gap: 7px;
        }

        .hero-arrow {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 50%;
          background: rgba(0,0,0,.15);
          color: #fff;
          display: grid;
          place-items: center;
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: .3s ease;
        }

        .hero-arrow:hover {
          background: linear-gradient(135deg, #16b7d7, #075ca8);
          border-color: transparent;
          transform: scale(1.08);
        }

        .hero-dots {
          position: absolute;
          z-index: 8;
          left: 50%;
          transform: translateX(-50%);
          bottom: 190px;
          display: flex;
          gap: 6px;
        }

        .hero-dot {
          width: 7px;
          height: 7px;
          border: 0;
          padding: 0;
          border-radius: 20px;
          background: rgba(255,255,255,.4);
          cursor: pointer;
          transition: .35s ease;
        }

        .hero-dot.active {
          width: 26px;
          background: linear-gradient(90deg, #53e2f4, #0d6faf);
        }

        .hero-stats {
          position: absolute;
          z-index: 10;
          bottom: 0;
          left: 50%;
          width: calc(100% - 24px);
          transform: translateX(-50%);
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          background: rgba(255,255,255,.975);
          border: 1px solid rgba(255,255,255,.9);
          border-top: 3px solid #12b2d3;
          border-radius: 18px 18px 0 0;
          box-shadow: 0 -18px 55px rgba(4,37,73,.17);
          overflow: hidden;
          backdrop-filter: blur(18px);
        }

        .stat-item {
          min-height: 92px;
          padding: 13px 10px;
          display: flex;
          align-items: center;
          gap: 9px;
          border-right: 1px solid #e7edf4;
          border-bottom: 1px solid #e7edf4;
          transition: background .3s ease, transform .3s ease;
        }

        .stat-item:nth-child(even) {
          border-right: 0;
        }

        .stat-item:nth-last-child(-n+2) {
          border-bottom: 0;
        }

        .stat-item:hover {
          background: linear-gradient(145deg, #fff, #f1faff);
        }

        .stat-icon {
          flex: 0 0 37px;
          width: 37px;
          height: 37px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          color: var(--blue);
          background: #ebf9ff;
          box-shadow: inset 0 0 0 1px rgba(7,92,168,.07);
        }

        .stat-item:nth-child(3) .stat-icon {
          color: #0a91b2;
          background: #e8fbff;
        }

        .stat-number {
          margin: 0;
          font-size: 14px;
          line-height: 1.2;
          font-weight: 800;
          color: var(--navy);
        }

        .stat-label {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 8px;
          line-height: 1.35;
          font-weight: 600;
        }

        /* ========================= COMMON ========================== */
        .section {
          position: relative;
          padding: 60px 16px;
        }

        .section.soft {
          background:
            radial-gradient(circle at 5% 10%, rgba(22,183,215,.075), transparent 28%),
            radial-gradient(circle at 96% 90%, rgba(7,92,168,.06), transparent 28%),
            linear-gradient(180deg, #f9fcff, #f4f9fd);
        }

        .section-container {
          width: 100%;
          max-width: 1180px;
          margin: auto;
        }

        .section-heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 30px;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--blue);
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 1.35px;
          text-transform: uppercase;
          margin-bottom: 11px;
        }

        .section-kicker::before {
          content: "";
          width: 7px;
          height: 7px;
          background: var(--cyan);
          border-radius: 2px;
          transform: rotate(45deg);
          box-shadow: 0 0 0 4px rgba(22,183,215,.08);
        }

        .section-title {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(26px, 6vw, 38px);
          line-height: 1.15;
          letter-spacing: -1px;
          color: var(--navy);
        }

        .section-title span {
          background: linear-gradient(100deg, #075ca8, #16b7d7 70%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .section-description {
          margin: 13px auto 0;
          color: var(--muted);
          font-size: 11.5px;
          line-height: 1.75;
          max-width: 680px;
        }

        /* ========================= INTRO ========================== */
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }

        .intro-visual {
          position: relative;
          min-height: 380px;
        }

        .intro-main-image-wrap {
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 65px rgba(7,6,88,.17);
          outline: 5px solid rgba(255,255,255,.76);
          outline-offset: -5px;
        }

        .intro-main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .intro-floating-card {
          position: absolute;
          right: 10px;
          bottom: -20px;
          width: 155px;
          padding: 16px;
          border-radius: 17px;
          background: rgba(255,255,255,.94);
          box-shadow: 0 22px 55px rgba(5,45,86,.18);
          border: 1px solid rgba(218,229,240,.8);
          backdrop-filter: blur(15px);
          animation: softFloat 5s ease-in-out infinite;
          z-index: 5;
        }

        .intro-floating-card-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #e9faff;
          color: var(--blue);
          margin-bottom: 11px;
        }

        .intro-floating-card strong {
          display: block;
          color: var(--navy);
          font-size: 17px;
        }

        .intro-floating-card span {
          display: block;
          margin-top: 3px;
          color: var(--muted);
          font-size: 9.5px;
        }

        .intro-content h2 {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(26px, 6vw, 38px);
          line-height: 1.15;
          letter-spacing: -1px;
          color: var(--navy);
        }

        .intro-content h2 span {
          background: linear-gradient(100deg, var(--blue), var(--cyan));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .intro-content p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.85;
          margin: 17px 0 0;
        }

        .intro-points {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-top: 23px;
        }

        .intro-point {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          color: #425a76;
          font-size: 11px;
          line-height: 1.55;
          font-weight: 700;
        }

        .check-circle {
          flex: 0 0 19px;
          width: 19px;
          height: 19px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #079bc0;
          background: #e7faff;
        }

        .marathi-info {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e2ebf4;
        }

        .marathi-info p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.85;
          margin: 0 0 13px;
        }

        .marathi-info p:last-child {
          margin-bottom: 0;
        }

        .marathi-points {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid #e2ebf4;
        }

        /* ========================= PROGRAMS ========================== */
        .programs-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .programs-section::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            radial-gradient(circle at 8% 20%, rgba(22,183,215,.10), transparent 28%),
            radial-gradient(circle at 92% 78%, rgba(7,92,168,.08), transparent 30%),
            linear-gradient(180deg, rgba(248,252,255,.96), rgba(241,248,253,.98));
        }

        .programs-bg-image {
          display: none; 
        }

        .programs-content {
          position: relative;
          z-index: 2;
        }

        .program-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .program-card {
          position: relative;
          min-height: 450px;
          padding: 25px;
          border-radius: 20px;
          overflow: hidden;
          color: #fff;
          background-color: #082e61;
          background-size: 150%;
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: var(--shadow);
          isolation: isolate;
          border: 1px solid rgba(255,255,255,.16);
          transition: transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .45s ease, border-color .45s ease, background-size .8s ease;
        }

        .program-card:hover {
          transform: translateY(-7px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(62,215,237,.42);
          background-size: 160%;
        }

        .program-card-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(3,20,47,.54) 0%, rgba(4,27,57,.65) 35%, rgba(3,20,45,.86) 68%, rgba(2,17,38,.96) 100%);
        }

        .program-card-overlay::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 88% 7%, rgba(43,213,239,.24), transparent 30%),
            radial-gradient(circle at 8% 95%, rgba(16,142,193,.20), transparent 34%);
        }

        .program-card > *:not(.program-card-overlay) {
          position: relative;
          z-index: 2;
        }

        .program-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: rgba(255,255,255,.13);
          border: 1px solid rgba(255,255,255,.23);
          color: #66d9ee;
          margin-bottom: 19px;
          box-shadow: 0 10px 25px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.10);
          backdrop-filter: blur(10px);
          transition: transform .4s ease, background .4s ease, border-color .4s ease;
        }

        .program-card:hover .program-icon {
          transform: rotate(-6deg) scale(1.1);
          background: rgba(255,255,255,.18);
          border-color: rgba(101,225,241,.42);
        }

        .program-card h3 {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 22px;
          line-height: 1.2;
          letter-spacing: -.6px;
          text-shadow: 0 4px 18px rgba(0,0,0,.28);
        }

        .program-card p {
          margin: 8px 0 0;
          color: rgba(255,255,255,.76);
          font-size: 11px;
          line-height: 1.6;
          text-shadow: 0 3px 15px rgba(0,0,0,.28);
        }

        .program-list {
          margin: 21px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .program-list li {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.45;
          color: rgba(255,255,255,.94);
          text-shadow: 0 3px 14px rgba(0,0,0,.32);
          transition: transform .3s ease;
        }

        .program-card:hover .program-list li {
          transform: translateX(5px);
        }

        .program-list svg {
          flex: 0 0 17px;
          color: #7bdff0;
          filter: drop-shadow(0 2px 7px rgba(22,183,215,.35));
        }

        /* ========================= COUNTRIES ========================== */
        .country-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 36px 14px;
          align-items: stretch;
        }

        .country-card {
          position: relative;
          min-height: 150px;
          padding: 48px 14px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: visible;
          isolation: isolate;
          border: 1px solid rgba(9,45,99,.12);
          border-radius: 18px;
          background: radial-gradient(circle at 85% 8%, rgba(53,207,231,.17), transparent 32%), linear-gradient(145deg, #0b5794 0%, #092f68 52%, #071f4b 100%);
          box-shadow: 0 14px 34px rgba(7,45,88,.11), inset 0 1px 0 rgba(255,255,255,.12);
          transition: transform .42s cubic-bezier(.2,.8,.2,1), box-shadow .42s ease, border-color .42s ease;
        }

        .country-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,.3), transparent 50%, rgba(47,207,232,.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity .4s ease;
        }

        .country-card:hover::before {
          opacity: 1;
        }

        .country-card:hover {
          transform: translateY(-7px) scale(1.02);
          border-color: rgba(47,207,232,.42);
          box-shadow: 0 24px 52px rgba(7,45,88,.18), 0 0 0 1px rgba(47,207,232,.08);
        }

        .country-flag {
          position: absolute;
          z-index: 4;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          padding: 4px;
          background: #fff;
          border: 1px solid rgba(9,45,99,.08);
          box-shadow: 0 10px 25px rgba(4,30,65,.18), 0 0 0 5px rgba(255,255,255,.86);
          overflow: hidden;
          transition: transform .42s cubic-bezier(.2,.8,.2,1), box-shadow .42s ease;
        }

        .country-card:hover .country-flag {
          transform: translateX(-50%) translateY(-6px) scale(1.15) rotate(-5deg);
          box-shadow: 0 15px 32px rgba(4,30,65,.24), 0 0 0 5px rgba(22,183,215,.2);
        }

        .country-flag img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .country-card h3 {
          position: relative;
          z-index: 3;
          margin: 0;
          color: #fff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: -.15px;
        }

        .country-card h3::after {
          content: "";
          display: block;
          width: 24px;
          height: 2px;
          margin: 9px auto 0;
          border-radius: 10px;
          background: linear-gradient(90deg, #55e0ef, rgba(255,255,255,.55));
          opacity: .8;
          transition: width .35s ease;
        }

        .country-card:hover h3::after {
          width: 40px;
        }

        /* ========================= WHY CHOOSE (PREMIUM GLASSMORPHISM) ========================== */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .why-card {
          position: relative;
          padding: 24px 22px;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 30px rgba(7, 48, 89, 0.06);
          transition: transform .4s cubic-bezier(.2,.8,.2,1), box-shadow .4s ease, border-color .4s ease;
        }

        .why-card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -60px;
          top: -60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(22, 183, 215, 0.15), transparent 70%);
          transition: transform .5s ease;
          z-index: 0;
        }

        .why-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.8), transparent 50%, rgba(22,183,215,0.2));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 1;
          z-index: 1;
        }

        .why-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(7, 48, 89, 0.1), 0 0 0 1px rgba(22, 183, 215, 0.2);
        }

        .why-card:hover::before {
          transform: scale(1.4);
        }

        .why-icon {
          position: relative;
          z-index: 2;
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: linear-gradient(135deg, #16b7d7, #075ca8);
          color: #fff;
          margin-bottom: 18px;
          box-shadow: 0 8px 20px rgba(7, 92, 168, 0.3);
          transition: transform .4s ease, box-shadow .4s ease;
        }

        .why-card:hover .why-icon {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 25px rgba(22, 183, 215, 0.4);
        }

        .why-card h3 {
          position: relative;
          z-index: 2;
          margin: 0;
          color: var(--navy);
          font-size: 14px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: -0.2px;
        }

        /* ========================= PROCESS ========================== */
        .process-wrapper {
          position: relative;
          padding-top: 10px;
        }

        .process-line {
          display: none;
        }

        .process-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 12px;
        }

        .process-item {
          text-align: center;
        }

        .process-circle {
          position: relative;
          z-index: 2;
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(145deg, #fff, #f4fbff);
          border: 1px solid #d8e8f2;
          color: var(--blue);
          box-shadow: 0 10px 30px rgba(7,52,91,.09);
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }

        .process-item:hover .process-circle {
          transform: translateY(-6px) scale(1.08);
          border-color: #7adcec;
          box-shadow: 0 18px 38px rgba(22,183,215,.20);
          color: var(--gold-deep);
        }

        .process-number {
          position: absolute;
          top: -6px;
          right: -2px;
          width: 21px;
          height: 21px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          background: linear-gradient(135deg, var(--navy), #0d83b3);
          font-size: 8px;
          font-weight: 800;
          box-shadow: 0 5px 12px rgba(6,31,72,.18);
        }

        .process-item h4 {
          max-width: 135px;
          margin: auto;
          color: var(--navy);
          font-size: 10px;
          line-height: 1.5;
          font-weight: 700;
        }

        /* ========================= TESTIMONIALS ========================== */
        .testimonials-section {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          padding: 60px 0;
        }

        .testimonials-section::before,
        .testimonials-section::after {
          content: "";
          position: absolute;
          z-index: -2;
          border-radius: 50%;
          pointer-events: none;
          animation: ambientMove 10s ease-in-out infinite;
        }

        .testimonials-section::before {
          width: 300px;
          height: 300px;
          top: 40px;
          left: -180px;
          background: radial-gradient(circle, rgba(22,183,215,.13) 0%, rgba(22,183,215,.035) 45%, transparent 72%);
        }

        .testimonials-section::after {
          width: 360px;
          height: 360px;
          right: -200px;
          bottom: -170px;
          background: radial-gradient(circle, rgba(7,92,168,.10) 0%, rgba(7,92,168,.025) 45%, transparent 72%);
          animation-direction: reverse;
        }

        .testimonials-section .section-heading {
          padding: 0 16px;
          margin-bottom: 30px;
        }

        .testimonial-marquee {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          overflow: hidden;
          padding: 8px 0 18px;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
        }

        .testimonial-track {
          display: flex;
          width: max-content;
          animation: testimonialMarquee 48s linear infinite;
          will-change: transform;
        }

        .testimonial-set {
          display: flex;
          align-items: stretch;
          gap: 16px;
          padding-right: 16px;
        }

        .testimonial-marquee:hover .testimonial-track {
          animation-play-state: paused;
        }

        @keyframes testimonialMarquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .testimonial-card {
          position: relative;
          flex: 0 0 280px;
          width: 280px;
          min-height: 195px;
          padding: 18px 18px 16px;
          border-radius: 18px;
          border: 1px solid rgba(214,228,240,.92);
          background: radial-gradient(circle at 100% 0%, rgba(22,183,215,.075), transparent 31%), linear-gradient(145deg, #ffffff 0%, #f7fbff 100%);
          box-shadow: 0 12px 32px rgba(7,48,89,.07), inset 0 1px 0 rgba(255,255,255,.95);
          overflow: hidden;
          transform: translateZ(0);
          transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, border-color .35s ease;
        }

        .testimonial-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 58px;
          height: 3px;
          background: linear-gradient(90deg, #16b7d7, #075ca8);
          border-radius: 0 0 6px 0;
        }

        .testimonial-card::after {
          content: "";
          position: absolute;
          width: 105px;
          height: 105px;
          right: -60px;
          top: -60px;
          border-radius: 50%;
          border: 1px solid rgba(22,183,215,.13);
          box-shadow: 0 0 0 16px rgba(22,183,215,.025), 0 0 0 32px rgba(22,183,215,.018);
          pointer-events: none;
          transition: transform .5s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 22px 48px rgba(7,48,89,.13);
          border-color: #cce4ef;
        }

        .testimonial-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 7px;
        }

        .testimonial-stars {
          display: flex;
          align-items: center;
          gap: 1px;
          padding: 5px 7px;
          border-radius: 100px;
          background: #effaff;
          border: 1px solid #d8f1f8;
        }

        .testimonial-stars svg {
          color: #0a91b2;
          fill: #16b7d7;
          width: 10px;
          height: 10px;
        }

        .testimonial-card p {
          position: relative;
          z-index: 2;
          margin: 9px 0 14px;
          color: #526984;
          font-size: 10px;
          line-height: 1.62;
          font-weight: 600;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
        }

        .testimonial-user {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          padding-top: 10px;
          border-top: 1px solid #e7eef5;
        }

        .testimonial-user strong {
          display: block;
          color: var(--navy);
          font-size: 10px;
          font-weight: 800;
        }

        /* ========================= GALLERY ========================== */
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 130px;
          gap: 10px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 14px 40px rgba(7,45,88,.09);
        }

        .gallery-item:first-child {
          grid-column: span 2;
          grid-row: span 2;
        }

        .gallery-image-wrap {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .6s cubic-bezier(.2,.8,.2,1), filter .5s ease;
        }

        .gallery-item::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 48%, rgba(4,21,48,.55));
          opacity: .2;
          transition: opacity .4s ease;
          pointer-events: none;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.08);
          filter: saturate(1.08);
        }

        .gallery-item:hover::after {
          opacity: 1;
        }

        /* ========================= CTA ========================== */
        .cta {
          position: relative;
          margin: 0 16px 60px;
          overflow: hidden;
          border-radius: 20px;
          background:
            radial-gradient(circle at 90% 18%, rgba(22,183,215,.22), transparent 34%),
            radial-gradient(circle at 10% 90%, rgba(7,92,168,.22), transparent 35%),
            linear-gradient(135deg, #041530, #0a4f8d);
          box-shadow: 0 25px 65px rgba(5,43,84,.18);
        }

        .cta-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          margin: auto;
          padding: 40px 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 23px;
        }

        .cta h2 {
          margin: 0;
          color: #fff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(24px, 6vw, 36px);
          line-height: 1.15;
          letter-spacing: -1px;
        }

        .cta p {
          margin: 10px 0 0;
          color: rgba(255,255,255,.68);
          font-size: 12px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          width: 100%;
          gap: 9px;
          flex-wrap: wrap;
        }

        .cta-buttons a {
          flex: 1 1 100%;
        }

        /* ========================= TABLET & DESKTOP ========================== */
        @media (min-width: 768px) {
          .hero-content {
            padding: 120px 40px 0;
            text-align: left;
            justify-content: flex-start;
          }
          .hero-buttons {
            justify-content: flex-start;
          }
          .hero-marathi, .hero-description {
            margin-left: 0;
          }
          .hero-arrows {
            right: 40px;
            bottom: 220px;
          }
          .hero-dots {
            left: 40px;
            transform: none;
            bottom: 240px;
          }
          .hero-stats {
            width: calc(100% - 60px);
            grid-template-columns: repeat(4, 1fr);
          }
          .stat-item {
            min-height: 105px;
            padding: 18px 14px;
            border-bottom: 0 !important;
          }
          .stat-item:nth-child(even) {
            border-right: 1px solid #e7edf4;
          }
          .stat-number { font-size: 17px; }
          .stat-label { font-size: 10px; }

          .section { padding: 80px 28px; }

          .intro-grid {
            grid-template-columns: 1fr 1fr;
            gap: 50px;
          }
          .intro-main-image-wrap { height: 460px; }
          .intro-points, .marathi-points {
            grid-template-columns: 1fr 1fr;
          }

          .programs-bg-image {
            display: block;
            position: absolute;
            z-index: -1;
            right: -20px;
            top: 50%;
            width: min(520px, 50vw);
            height: 430px;
            transform: translateY(-50%);
            border-radius: 42px;
            background-size: cover;
            background-position: center;
            opacity: .075;
            filter: saturate(.75) contrast(.95);
            mask-image: linear-gradient(90deg, transparent 0%, #000 28%, #000 82%, transparent 100%);
            -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 28%, #000 82%, transparent 100%);
            pointer-events: none;
          }

          .program-grid { grid-template-columns: 1fr 1fr; }
          .program-card { min-height: 520px; padding: 30px; }
          
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .process-grid { grid-template-columns: repeat(4, 1fr); }
          
          .gallery-grid {
            grid-template-columns: 1.4fr .8fr .8fr;
            grid-template-rows: 230px 230px;
            gap: 12px;
          }
          .gallery-item:first-child {
            grid-column: span 1;
            grid-row: 1 / 3;
          }

          .cta {
            margin: 0 28px 80px;
            border-radius: 25px;
          }
          .cta-inner {
            padding: 50px 40px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .cta-buttons { width: auto; }
          .cta-buttons a { flex: 0 0 auto; width: auto; }
        }

        @media (min-width: 1024px) {
          .hero { min-height: 780px; padding-bottom: 140px; }
          .hero-content { padding: 100px 40px 0; }
          .hero-title { font-size: clamp(48px, 5vw, 72px); letter-spacing: -2.5px; }
          .hero-marathi { font-size: 16px; }
          .hero-description { font-size: 13px; }
          
          .section { padding: 110px 30px; }
          .section-title { font-size: clamp(32px, 4vw, 46px); }
          
          .intro-visual { min-height: 550px; }
          .intro-main-image-wrap { height: 520px; }
          .intro-floating-card { width: 250px; padding: 24px; bottom: 25px; }
          
          .program-card { min-height: 530px; padding: 34px; }
          
          .country-grid { grid-template-columns: repeat(4, 1fr); gap: 40px 16px; }
          
          .why-grid { grid-template-columns: repeat(3, 1fr); }
          .why-card { padding: 32px 26px; }
          .why-card h3 { font-size: 15px; }
          
          .process-line {
            display: block;
            position: absolute;
            top: 69px;
            left: 7%;
            right: 7%;
            height: 2px;
            background: linear-gradient(90deg, #bcecf5, #1bb7d5, #075ca8, #1bb7d5, #bcecf5);
            background-size: 200% 100%;
            animation: borderFlow 7s linear infinite;
          }
          .process-grid { grid-template-columns: repeat(7, 1fr); }
          .process-circle { width: 70px; height: 70px; }
          
          .testimonial-card { flex-basis: 320px; width: 320px; min-height: 205px; padding: 28px; }
          .testimonial-card p { font-size: 12px; }
        }
      `}</style>

      <main className="home-page">

        {/* ========================= HERO ========================== */}
        <section className="hero">
          <div className="hero-image-wrap">
            <AnimatePresence mode="sync">
              <motion.img
                key={activeSlide}
                src={heroSlides[activeSlide].image}
                alt="Kantule Edutech Medical Education"
                className="hero-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          <div className="hero-overlay" />

          <div className="hero-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                className="hero-text"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <motion.div 
                  className="hero-eyebrow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="hero-eyebrow-dot" />
                  {heroSlides[activeSlide].eyebrow}
                </motion.div>

                <h1 className="hero-title">
                  {heroSlides[activeSlide].title
                    .split("Medical Education")
                    .map((part, index) => (
                      <React.Fragment key={index}>
                        {part}

                        {index === 0 && (
                          <>
                            <span>Medical Education</span>
                          </>
                        )}
                      </React.Fragment>
                    ))}
                </h1>

                <p className="hero-marathi">
                  {heroSlides[activeSlide].marathi}
                </p>

                <p className="hero-description">
                  Kantule Edutech is a Maharashtra-based education consultancy
                  specializing in MBBS admission counselling in India and
                  abroad. With around 10 years of experience in the education
                  field, we provide students and parents with transparent,
                  personalized and reliable guidance for medical education.
                </p>

                <div className="hero-buttons">
                  <motion.a 
                    href="#contact" 
                    className="primary-btn"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </motion.a>

                  <motion.a 
                    href="#contact" 
                    className="secondary-btn"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Free Counselling
                    <ArrowUpRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-arrows">
            <button
              className="hero-arrow"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              className="hero-arrow"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight size={19} />
            </button>
          </div>

          <div className="hero-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${activeSlide === index ? "active" : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <GraduationCap size={23} />
              </div>
              <div>
                <p className="stat-number">10+ Years</p>
                <p className="stat-label">Experience in Education</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Users size={22} />
              </div>
              <div>
                <p className="stat-number">150+ Students</p>
                <p className="stat-label">Studying MBBS Abroad</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Building2 size={21} />
              </div>
              <div>
                <p className="stat-number">4 Centres</p>
                <p className="stat-label">Across Maharashtra</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Globe2 size={21} />
              </div>
              <div>
                <p className="stat-number">Multiple Countries</p>
                <p className="stat-label">MBBS Opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= INTRODUCTION ========================== */}
        <section className="section">
          <div className="section-container">
            <div className="intro-grid">
              <motion.div
                className="intro-visual"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="intro-main-image-wrap">
                  <motion.img
                    src={img1}
                    alt="Kantule Edutech"
                    className="intro-main-image"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <motion.div 
                  className="intro-floating-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="intro-floating-card-icon">
                    <Sparkles size={22} />
                  </div>
                  <strong>10+ Years</strong>
                  <span>Experience in Education</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="intro-content"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="section-kicker">ABOUT KANTULE EDUTECH</div>

                <h2>
                  Your Trusted Partner for <span>Medical Education</span>
                </h2>

                <p>
                  Kantule Edutech is a Maharashtra-based education
                  consultancy specializing in MBBS admission counselling
                  in India and abroad. With around 10 years of experience
                  in the education field, we provide students and parents
                  with transparent, personalized and reliable guidance
                  for medical education.
                </p>

                <p>
                  We guide students through the complete admission journey
                  — from course and university selection to documentation,
                  admission procedures and further support.
                </p>

                <div className="marathi-info">
                  <p>
                    Kantule Edutech ही महाराष्ट्रातील शिक्षण सल्लागार
                    संस्था असून भारतात आणि परदेशात MBBS प्रवेशासाठी
                    मार्गदर्शन करते. शिक्षण क्षेत्रातील सुमारे 10 वर्षांच्या
                    अनुभवासह आम्ही विद्यार्थी आणि पालकांना वैद्यकीय
                    शिक्षणासाठी पारदर्शक, वैयक्तिक आणि विश्वासार्ह
                    मार्गदर्शन प्रदान करतो.
                  </p>

                  <p>
                    अभ्यासक्रम आणि विद्यापीठाची निवड करण्यापासून ते
                    कागदपत्रे, प्रवेश प्रक्रिया आणि पुढील मार्गदर्शनापर्यंत
                    आम्ही विद्यार्थ्यांना संपूर्ण प्रवेश प्रक्रियेत
                    मार्गदर्शन करतो.
                  </p>
                </div>

                <div className="intro-points">
                  {[
                    "Professional MBBS admission counselling",
                    "India & Abroad medical admission guidance",
                    "Personalized counselling for students and parents",
                    "Assistance with documentation and admission procedures",
                    "Transparent guidance regarding fees, universities and courses",
                    "Around 10 years of experience in education counselling",
                  ].map((item, index) => (
                    <motion.div 
                      className="intro-point" 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="check-circle">
                        <Check size={12} />
                      </span>
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="marathi-points">
                  {[
                    "व्यावसायिक MBBS प्रवेश मार्गदर्शन",
                    "भारत आणि परदेशातील वैद्यकीय प्रवेशासाठी मार्गदर्शन",
                    "विद्यार्थी आणि पालकांसाठी वैयक्तिक मार्गदर्शन",
                    "कागदपत्रे आणि प्रवेश प्रक्रियेसाठी सहाय्य",
                    "फी, विद्यापीठे आणि अभ्यासक्रमाबाबत पारदर्शक मार्गदर्शन",
                    "शिक्षण क्षेत्रातील सुमारे 10 वर्षांचा अनुभव",
                  ].map((item, index) => (
                    <motion.div 
                      className="intro-point" 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="check-circle">
                        <Check size={12} />
                      </span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================= PROGRAMS ========================== */}
        <section className="section soft programs-section">
          <div
            className="programs-bg-image"
            style={{ backgroundImage: `url(${img2})` }}
            aria-hidden="true"
          />

          <div className="section-container programs-content">
            <div className="section-heading">
              <div className="section-kicker">OUR PROGRAMS</div>
              <h2 className="section-title">
                Medical Education <span>Opportunities</span>
              </h2>
              <p className="section-description">
                We provide transparent, personalized and reliable guidance
                for medical education in India and abroad.
              </p>
            </div>

            <div className="program-grid">
              <motion.div
                className="program-card"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=90)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -7 }}
              >
                <div className="program-card-overlay" aria-hidden="true" />
                <div className="program-icon">
                  <Building2 size={27} />
                </div>
                <h3>MBBS in India</h3>
                <p>Professional MBBS admission counselling</p>
                <ul className="program-list">
                  <li><Check size={18} /> Government Medical Colleges</li>
                  <li><Check size={18} /> Private Medical Colleges</li>
                  <li><Check size={18} /> Deemed Universities</li>
                  <li><Check size={18} /> NEET counselling guidance</li>
                </ul>
              </motion.div>

              <motion.div
                className="program-card"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1800&q=90)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 }}
                whileHover={{ y: -7 }}
              >
                <div className="program-card-overlay" aria-hidden="true" />
                <div className="program-icon">
                  <Globe2 size={27} />
                </div>
                <h3>MBBS Abroad</h3>
                <p>India & Abroad medical admission guidance</p>
                <ul className="program-list">
                  <li><Check size={18} /> Russia</li>
                  <li><Check size={18} /> Kyrgyzstan</li>
                  <li><Check size={18} /> Kazakhstan</li>
                  <li><Check size={18} /> Georgia</li>
                  <li><Check size={18} /> Philippines</li>
                  <li><Check size={18} /> Nepal</li>
                  <li><Check size={18} /> Vietnam</li>
                  <li><Check size={18} /> USA and other international opportunities</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================= COUNTRIES ========================== */}
        <section
          className="section"
          style={{
            background:
              "radial-gradient(circle at 8% 18%, rgba(22,183,215,.045), transparent 26%), radial-gradient(circle at 92% 82%, rgba(7,92,168,.045), transparent 26%), #ffffff",
          }}
        >
          <div className="section-container">
            <div className="section-heading">
              <div className="section-kicker">GLOBAL MBBS OPPORTUNITIES</div>
              <h2 className="section-title">
                Study MBBS in <span>Top Countries</span>
              </h2>
              <p className="section-description">
                Multiple MBBS destinations with professional guidance
                throughout the admission journey.
              </p>
            </div>

            <div className="country-grid">
              {countries.map((country, index) => (
                <motion.div
                  key={country.name}
                  className="country-card"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -7 }}
                >
                  <div className="country-flag">
                    <img
                      src={`https://flagcdn.com/w160/${country.code}.png`}
                      alt={`${country.name} flag`}
                      loading="lazy"
                    />
                  </div>
                  <h3>{country.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================= FEATURED MEDICAL UNIVERSITIES ========================== */}
        <FeaturedUniversities />

        {/* ========================= WHY CHOOSE ========================== */}
        <section className="section soft">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-kicker">WHY CHOOSE KANTULE EDUTECH?</div>
              <h2 className="section-title">
                Guidance You Can <span>Trust</span>
              </h2>
              <p className="section-description">
                Transparent, personalized and reliable guidance for
                students and parents throughout the medical admission journey.
              </p>
            </div>

            <div className="why-grid">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="why-card"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="why-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{item.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================= ADMISSION PROCESS ========================== */}
        <section className="section">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-kicker">COMPLETE ADMISSION GUIDANCE</div>
              <h2 className="section-title">
                Our Admission <span>Process</span>
              </h2>
              <p className="section-description">
                We guide students through the complete admission journey
                from counselling to post-admission support.
              </p>
            </div>

            <div className="process-wrapper">
              <div className="process-line" />
              <div className="process-grid">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.number}
                      className="process-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                      <div className="process-circle">
                        <Icon size={24} />
                        <span className="process-number">{step.number}</span>
                      </div>
                      <h4>{step.title}</h4>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================= TESTIMONIALS ========================== */}
        <section className="section soft testimonials-section">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-kicker">STUDENT & PARENT EXPERIENCES</div>
              <h2 className="section-title">
                What Your Students & <span>Parents Say</span>
              </h2>
            </div>

            <div className="testimonial-marquee">
              <div className="testimonial-track">
                {[0, 1].map((setIndex) => (
                  <div
                    className="testimonial-set"
                    key={setIndex}
                    aria-hidden={setIndex === 1}
                  >
                    {testimonials.map((testimonial, index) => (
                      <motion.div
                        key={`${setIndex}-${testimonial.name}-${index}`}
                        className="testimonial-card"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.08 }}
                        transition={{ duration: 0.45, delay: (index % 4) * 0.04 }}
                      >
                        <div className="testimonial-top">
                          <div className="testimonial-stars" aria-label="5 star review">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} size={10} />
                            ))}
                          </div>
                        </div>
                        <p>{testimonial.quote}</p>
                        <div className="testimonial-user">
                          <strong>{testimonial.name}</strong>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================= VISUAL SECTION ========================== */}
        <section className="section">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-kicker">KANTULE EDUTECH</div>
              <h2 className="section-title">
                Your Medical Career <span>Starts Here</span>
              </h2>
            </div>

            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="gallery-image-wrap">
                  <motion.img 
                    src={newImg1} 
                    alt="Kantule Edutech" 
                    className="gallery-image" 
                    loading="lazy"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-image-wrap">
                  <motion.img 
                    src={newImg2} 
                    alt="Kantule Edutech" 
                    className="gallery-image" 
                    loading="lazy"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-image-wrap">
                  <motion.img 
                    src={newImg3} 
                    alt="Kantule Edutech" 
                    className="gallery-image" 
                    loading="lazy"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-image-wrap">
                  <motion.img 
                    src={newImg4} 
                    alt="Kantule Edutech" 
                    className="gallery-image" 
                    loading="lazy"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-image-wrap">
                  <motion.img 
                    src={newImg5} 
                    alt="Kantule Edutech" 
                    className="gallery-image" 
                    loading="lazy"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= CTA ========================== */}
        <section className="cta" id="contact">
          <div className="cta-inner">
            <div>
              <h2>Start Your Medical Career Today!</h2>
              <p>Get expert guidance for MBBS admission in India and abroad.</p>
            </div>

            <div className="cta-buttons">
              <a
                href="https://wa.me/918830451660?text=Hello%20Kantule%20Edutech%2C%20I%20would%20like%20to%20know%20more%20about%20MBBS%20admission%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                Enquire Now
                <ArrowRight size={16} />
              </a>

              <a href="/contact" className="secondary-btn">
                Book Free Counselling
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;