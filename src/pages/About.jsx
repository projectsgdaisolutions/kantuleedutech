import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  GraduationCap,
  Globe2,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Users,
  Building2,
  Target,
  Eye,
  FileCheck,
  ShieldCheck,
  Quote,
} from "lucide-react";

import logo from "../assets/logo/logo.jpeg";
import img1 from "../assets/about/about1.png";
import img2 from "../assets/about/about2.png";
import img3 from "../assets/images/img3.png";
import founderImage from "../assets/founder/Swapnil R. Kantule.jpg";
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const SectionLabel = ({ children }) => (
  <div className="section-label">
    <span className="label-line" />
    <span>{children}</span>
  </div>
);

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      value: "150+",
      title: "Students Guided",
      text: "Students guided for MBBS abroad",
    },
    {
      icon: Building2,
      value: "4",
      title: "Counselling Centres",
      text: "Across Maharashtra",
    },
    {
      icon: Globe2,
      value: "10+",
      title: "Years Experience",
      text: "In the education sector",
    },
    {
      icon: MapPin,
      value: "Multiple",
      title: "Regions Served",
      text: "Across Maharashtra",
    },
  ];

  const missionPoints = [
    "To provide transparent and reliable education counselling.",
    "To help students select the right medical education option.",
    "To provide personalized guidance to every student.",
    "To simplify the admission process for students and parents.",
    "To connect students with suitable educational opportunities in India and abroad.",
    "To support students throughout their admission journey.",
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Transparent Guidance",
      text: "Clear, practical and reliable information for informed decisions.",
    },
    {
      icon: Users,
      title: "Personalized Counselling",
      text: "Guidance based on each student's profile, goals and requirements.",
    },
    {
      icon: HeartHandshake,
      title: "Student & Parent Focus",
      text: "A supportive counselling approach for students and their parents.",
    },
    {
      icon: FileCheck,
      title: "Complete Support",
      text: "Guidance throughout the medical admission journey.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap');

        :root {
          --navy: #092b63;
          --navy-dark: #061f49;
          --blue: #0b72b9;
          --cyan: #13b8d1;
          --text: #13284b;
          --muted: #64748b;
          --light: #f5f9fd;
          --border: #e4edf5;
          --white: #ffffff;
        }

        * {
          box-sizing: border-box;
        }

        .about-page {
          width: 100%;
          overflow: hidden;
          background: #fff;
          color: var(--text);
          font-family: "DM Sans", sans-serif;
        }

        .about-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .about-hero {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(5, 31, 70, 0.88) 0%,
              rgba(5, 31, 70, 0.68) 48%,
              rgba(5, 31, 70, 0.38) 100%
            ),
            url(${img1}) center / cover no-repeat;
        }

        .hero-glow {
          position: absolute;
          width: 480px;
          height: 480px;
          right: -180px;
          top: -160px;
          border-radius: 50%;
          background: rgba(25, 190, 216, 0.16);
          filter: blur(5px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          color: white;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-size: 14px;
          color: rgba(255,255,255,.78);
        }

        .breadcrumb span:last-child {
          color: #fff;
          font-weight: 600;
        }

        .hero-content h1 {
          margin: 0 0 16px;
          font-family: "Manrope", sans-serif;
          font-size: clamp(42px, 6vw, 68px);
          line-height: 1.05;
          letter-spacing: -2.5px;
          font-weight: 800;
        }

        .hero-content h1 span {
          display: block;
          color: #58d8e9;
        }

        .hero-description {
          max-width: 680px;
          margin: 0;
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255,255,255,.86);
        }

        .hero-decoration {
          position: absolute;
          right: 7%;
          bottom: 38px;
          width: 110px;
          height: 110px;
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,.7);
        }

        .hero-decoration::before,
        .hero-decoration::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
        }

        .hero-decoration::before {
          inset: 14px;
        }

        .hero-decoration::after {
          inset: 29px;
        }

        /* INTRO */

        .intro-section {
          padding: 110px 0 90px;
          background: #fff;
        }

        /* INTRO — image first, content underneath on every screen size */
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 52px;
          align-items: start;
        }

        .image-stack {
          position: relative;
          width: min(100%, 900px);
          margin: 0 auto;
          padding: 0 0 42px;
        }

        .main-image {
          position: relative;
          width: 100%;
          height: auto;
          min-height: 0;
          overflow: hidden;
          border-radius: 24px;
          background: #f4f8fb;
          box-shadow: 0 25px 65px rgba(8, 46, 93, 0.14);
        }

        .main-image img {
          width: 100%;
          height: auto;
          min-height: 0;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .image-accent {
          position: absolute;
          width: 180px;
          height: 180px;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--cyan), var(--blue));
          border-radius: 22px;
          z-index: -1;
        }

        .experience-card {
          position: absolute;
          left: -28px;
          bottom: 0;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 24px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 18px 45px rgba(8, 46, 93, 0.16);
        }

        .experience-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: white;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
        }

        .experience-card strong {
          display: block;
          font-family: "Manrope", sans-serif;
          font-size: 21px;
          color: var(--navy);
        }

        .experience-card span {
          font-size: 12px;
          color: var(--muted);
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
          color: var(--blue);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .label-line {
          width: 27px;
          height: 3px;
          border-radius: 10px;
          background: var(--cyan);
        }

        .intro-content h2,
        .vision-card h2,
        .mission-content h2,
        .values-heading h2 {
          margin: 0 0 22px;
          font-family: "Manrope", sans-serif;
          color: var(--navy);
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.14;
          letter-spacing: -1.6px;
        }

        .gradient-text {
          color: var(--blue);
        }

        .intro-content p,
        .mission-content p {
          margin: 0 0 18px;
          color: #5d6c81;
          font-size: 15.5px;
          line-height: 1.85;
        }

        .intro-highlight {
          margin-top: 30px;
          padding: 20px 22px;
          border-left: 4px solid var(--cyan);
          background: #f3f9fc;
          border-radius: 0 12px 12px 0;
          color: var(--navy);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.65;
        }

        /* Marathi content only for the About introduction */

        .marathi-only-block {
          margin-top: 30px;
          padding-top: 2px;
        }

        .marathi-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 22px;
          color: var(--blue);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .5px;
        }

        .marathi-content p {
          margin: 0 0 18px;
          color: #5d6c81;
          font-size: 15.5px;
          line-height: 1.85;
          font-family: "DM Sans", "Noto Sans Devanagari", sans-serif;
        }

        .marathi-highlight {
          margin-top: 26px;
          border-left-color: var(--blue);
        }

        @media (min-width: 701px) {
          .intro-content {
            width: min(100%, 980px);
            margin: 0 auto;
          }

          .image-stack {
            width: min(100%, 920px);
          }

          .main-image {
            border-radius: 26px;
          }
        }

        @media (max-width: 700px) {
          .marathi-only-block {
            margin-top: 26px;
          }

          .marathi-content p {
            font-size: 14px;
            line-height: 1.8;
          }

          .marathi-highlight {
            padding: 17px 18px;
            font-size: 14px;
            line-height: 1.7;
          }
        }

        /* STATS */

        .stats-section {
          padding: 30px 0 100px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          background: white;
          box-shadow: 0 20px 55px rgba(8, 46, 93, 0.07);
        }

        .stat-card {
          position: relative;
          padding: 34px 25px;
          border-right: 1px solid var(--border);
        }

        .stat-card:last-child {
          border-right: none;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin-bottom: 22px;
          border-radius: 13px;
          color: var(--blue);
          background: #eaf7fb;
        }

        .stat-value {
          display: block;
          margin-bottom: 5px;
          font-family: "Manrope", sans-serif;
          font-size: 31px;
          font-weight: 800;
          color: var(--navy);
        }

        .stat-title {
          display: block;
          margin-bottom: 7px;
          font-weight: 700;
          color: var(--text);
        }

        .stat-text {
          font-size: 13px;
          line-height: 1.5;
          color: var(--muted);
        }

        /* VISION MISSION */

        .vision-section {
          padding: 100px 0;
          background: linear-gradient(180deg, #f7fbfe 0%, #eef7fb 100%);
        }

        .vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .vision-card,
        .mission-card {
          position: relative;
          min-height: 390px;
          padding: 48px;
          overflow: hidden;
          border-radius: 24px;
        }

        .vision-card {
          color: white;
          background:
            linear-gradient(135deg, rgba(5,29,65,.96), rgba(7,91,148,.92)),
            url(${img2}) center / cover;
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 28px 65px rgba(5, 40, 85, .20);
          isolation: isolate;
        }

        .vision-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(19,184,209,.16) 1px, transparent 1px),
            linear-gradient(rgba(19,184,209,.10) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,.35), transparent 75%);
          opacity: .45;
        }

        .vision-card::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          right: -105px;
          top: -105px;
          border: 1px solid rgba(91,225,239,.22);
          border-radius: 50%;
          box-shadow:
            0 0 0 22px rgba(91,225,239,.035),
            0 0 0 45px rgba(91,225,239,.025);
          pointer-events: none;
        }

        .vision-card .section-label {
          position: relative;
          z-index: 2;
          color: #72e3ef;
          margin-bottom: 20px;
        }

        .vision-card h2 {
          position: relative;
          z-index: 2;
          max-width: 600px;
          margin: 0 0 24px;
          color: white;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(44px, 5vw, 68px);
          line-height: .96;
          letter-spacing: -1.2px;
          font-style: italic;
          font-weight: 700;
          text-wrap: balance;
          text-shadow: 0 8px 30px rgba(0,0,0,.18);
        }

        .vision-key {
          position: relative;
          display: inline;
          color: #5de0ef;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-style: italic;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .vision-key::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 3px;
          border-radius: 8px;
          background: linear-gradient(90deg, #5de0ef, rgba(93,224,239,0));
          opacity: .8;
        }

        .vision-card p {
          position: relative;
          z-index: 2;
          max-width: 540px;
          margin: 0;
          color: rgba(255,255,255,.84);
          line-height: 1.85;
          font-size: 15.5px;
        }

        .vision-watermark {
          position: absolute;
          right: -25px;
          bottom: -45px;
          z-index: 1;
          color: rgba(255,255,255,.055);
          transform: rotate(-8deg);
        }

        .mission-card {
          background:
            radial-gradient(circle at 100% 0%, rgba(19,184,209,.09), transparent 30%),
            #ffffff;
          border: 1px solid var(--border);
          box-shadow: 0 24px 55px rgba(8, 46, 93, .09);
        }

        .mission-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 28px;
          bottom: 28px;
          width: 4px;
          border-radius: 0 8px 8px 0;
          background: linear-gradient(180deg, var(--cyan), var(--blue));
        }

        .mission-card .section-label {
          margin-bottom: 14px;
        }

        .mission-card h2 {
          position: relative;
          z-index: 2;
          margin-bottom: 28px;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(34px, 3.8vw, 48px);
          line-height: 1;
          letter-spacing: -.8px;
          font-style: italic;
          font-weight: 700;
          color: var(--navy);
          text-wrap: balance;
        }

        .mission-key {
          color: var(--blue);
          font-family: "Cormorant Garamond", Georgia, serif;
          font-style: italic;
          font-weight: 700;
        }

        .mission-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .mission-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 10px 12px;
          border: 1px solid transparent;
          border-radius: 11px;
          color: #53647b;
          font-size: 14px;
          line-height: 1.55;
          transition: .25s ease;
        }

        .mission-list li:hover {
          border-color: #dcecf4;
          background: #f7fbfd;
          transform: translateX(4px);
        }

        .mission-list li svg {
          flex: 0 0 auto;
          margin-top: 2px;
          padding: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          color: var(--blue);
          background: #e7f8fb;
          stroke-width: 3;
        }

        /* VALUES */

        .values-section {
          padding: 110px 0;
          background: white;
        }

        .values-heading {
          max-width: 720px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .values-heading .section-label {
          justify-content: center;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .value-card {
          position: relative;
          padding: 32px 26px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: white;
          transition: .35s ease;
        }

        .value-card:hover {
          transform: translateY(-8px);
          border-color: rgba(13, 184, 209, .3);
          box-shadow: 0 20px 45px rgba(7, 54, 99, .10);
        }

        .value-icon {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          margin-bottom: 24px;
          border-radius: 15px;
          color: var(--blue);
          background: linear-gradient(135deg, #e9f8fb, #edf5ff);
        }

        .value-card h3 {
          margin: 0 0 11px;
          font-family: "Manrope", sans-serif;
          font-size: 18px;
          color: var(--navy);
        }

        .value-card p {
          margin: 0;
          color: var(--muted);
          font-size: 13.5px;
          line-height: 1.7;
        }

        /* FOUNDER */

        .founder-section {
          padding: 100px 0;
          background: #f7fafc;
        }

        .founder-grid {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 75px;
          align-items: center;
        }

       .founder-visual {
  position: relative;
  min-height: 440px;
  overflow: hidden;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 25px 60px rgba(7, 43, 86, .15);
}

.founder-visual img {
  width: 100%;
  height: 100%;
  min-height: 440px;
  object-fit: cover;
  opacity: 1;
  mix-blend-mode: normal;
  display: block;
}

        .founder-symbol {
          position: absolute;
          left: 35px;
          bottom: 32px;
          color: white;
        }

        .founder-symbol svg {
          margin-bottom: 14px;
        }

        .founder-symbol small {
          display: block;
          margin-bottom: 4px;
          color: #6ee0ed;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .founder-symbol strong {
          font-family: "Manrope", sans-serif;
          font-size: 25px;
        }

        .founder-content h2 {
          margin: 0 0 10px;
          font-family: "Manrope", sans-serif;
          font-size: clamp(30px, 4vw, 45px);
          line-height: 1.15;
          color: var(--navy);
          letter-spacing: -1.3px;
        }

        .founder-role {
          display: inline-block;
          margin-bottom: 24px;
          color: var(--blue);
          font-size: 14px;
          font-weight: 700;
        }

        .founder-content p {
          margin: 0;
          color: #5d6c81;
          font-size: 15.5px;
          line-height: 1.85;
        }

        /* JOURNEY */

        .journey-section {
          position: relative;
          padding: 105px 0;
          color: white;
          background:
            linear-gradient(120deg, rgba(4, 28, 62, .96), rgba(7, 77, 119, .92)),
            url(${img3}) center / cover;
        }

        .journey-content {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
        }

        .journey-content .section-label {
          justify-content: center;
          color: #67dce9;
        }

        .journey-content h2 {
          margin: 0 0 20px;
          font-family: "Manrope", sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: -1.4px;
        }

        .journey-content p {
          max-width: 680px;
          margin: 0 auto 35px;
          color: rgba(255,255,255,.78);
          line-height: 1.8;
        }

        .journey-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 24px;
          border: none;
          border-radius: 50px;
          color: white;
          background: linear-gradient(135deg, #11b7cf, #0b82ba);
          font: inherit;
          font-weight: 700;
          cursor: pointer;
          transition: .3s ease;
          box-shadow: 0 12px 30px rgba(0, 174, 204, .22);
        }

        .journey-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 35px rgba(0, 174, 204, .35);
        }

        /* MOBILE */

        @media (max-width: 1000px) {
          .intro-grid,
          .founder-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .intro-content {
            max-width: 760px;
          }

          .image-stack {
            height: auto;
            min-height: 0;
            width: 100%;
            padding-right: 0;
          }

          .main-image {
            width: 100%;
            height: auto;
            min-height: 0;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-card:nth-child(2) {
            border-right: none;
          }

          .stat-card:nth-child(-n+2) {
            border-bottom: 1px solid var(--border);
          }

          .vision-grid {
            grid-template-columns: 1fr;
          }

          .founder-visual {
            max-width: 600px;
            width: 100%;
          }
        }

        @media (max-width: 700px) {
          .about-container,
          .hero-content {
            width: min(100% - 30px, 1180px);
          }

          .about-hero {
            min-height: 410px;
            background-position: 60% center;
          }

          .hero-decoration {
            display: none;
          }

          .hero-content h1 {
            font-size: 42px;
            letter-spacing: -1.7px;
          }

          .hero-description {
            font-size: 14px;
            line-height: 1.7;
          }

          .intro-section,
          .values-section,
          .founder-section {
            padding: 75px 0;
          }

          .stats-section {
            padding: 10px 0 75px;
          }

          .intro-grid {
            gap: 38px;
          }

          .image-stack {
            width: 100%;
            padding: 0 0 38px;
          }

          .main-image {
            width: 100%;
            height: auto;
            min-height: 0;
          }

          .experience-card {
            left: 10px;
            padding: 14px 17px;
          }

          .experience-card strong {
            font-size: 18px;
          }

          .vision-section,
          .journey-section {
            padding: 75px 0;
          }

          .vision-card,
          .mission-card {
            min-height: auto;
            padding: 34px 25px;
          }

          .vision-card h2 {
            font-size: 46px;
            line-height: .98;
            letter-spacing: -.8px;
          }

          .vision-card p {
            font-size: 14px;
          }

          .mission-card h2 {
            font-size: 38px;
            line-height: 1;
          }

          .mission-list {
            gap: 8px;
          }

          .mission-list li {
            padding: 9px 8px;
            font-size: 13.5px;
          }

          .values-grid,
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }

          .stat-card:last-child {
            border-bottom: none;
          }

          .value-card {
            padding: 26px 22px;
          }

          .founder-visual,
          .founder-visual img {
            min-height: 360px;
          }

          .founder-content p {
            font-size: 14px;
          }
        }

        @media (max-width: 430px) {
          .about-hero {
            min-height: 380px;
          }

          .hero-content h1 {
            font-size: 37px;
          }

          .breadcrumb {
            font-size: 12px;
          }

          .intro-content h2,
          .values-heading h2 {
            font-size: 31px;
          }

          .vision-card h2 {
            font-size: 42px;
            line-height: .98;
          }

          .mission-card h2 {
            font-size: 35px;
            line-height: 1;
          }

          .image-stack {
            padding-bottom: 34px;
          }

          .main-image {
            width: 100%;
            height: auto;
            min-height: 0;
            border-radius: 20px;
          }

          .experience-card {
            left: 0;
            bottom: 0;
          }

          .experience-icon {
            width: 40px;
            height: 40px;
          }

        @media (max-width: 360px) {
          .vision-card h2 {
            font-size: 38px;
          }

          .mission-card h2 {
            font-size: 32px;
          }
        }
        }
      `}</style>

      <main className="about-page">

        {/* HERO */}
        <section className="about-hero">
          <div className="hero-glow" />

          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="breadcrumb">
              <span>Home</span>
              <span>›</span>
              <span>About Us</span>
            </div>

            <h1>
              About
              <span>Kantule Edutech</span>
            </h1>

            <p className="hero-description">
              A trusted education consultancy helping students achieve
              their dreams of pursuing medical education in India and abroad.
            </p>
          </motion.div>

          <div className="hero-decoration">
            <Globe2 size={32} />
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="intro-section">
          <div className="about-container">
            <div className="intro-grid">

              <motion.div
                className="image-stack"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeLeft}
              >
                <div className="main-image">
                  <img
                    src={img2}
                    alt="Kantule Edutech medical education guidance"
                  />
                </div>

                <div className="image-accent" />

                <div className="experience-card">
                  <div className="experience-icon">
                    <GraduationCap size={25} />
                  </div>

                  <div>
                    <strong>10+ Years</strong>
                    <span>Experience in Education</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="intro-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeRight}
              >
                <SectionLabel>About Kantule Edutech</SectionLabel>

                <h2>
                  Guiding Students Towards
                  <span className="gradient-text"> The Right Future</span>
                </h2>

                <p>
                  Kantule Edutech Pvt. Ltd. is a trusted education consultancy
                  based in Maharashtra, dedicated to helping students achieve
                  their dreams of pursuing medical education.
                </p>

                <p>
                  With around 10 years of experience in the education field,
                  Kantule Edutech has been providing career guidance and
                  admission counselling to students and parents.
                </p>

                <p>
                  Our primary focus is MBBS admission counselling in India and
                  abroad. We help students understand their available options
                  based on their NEET score, academic profile, budget and career
                  goals.
                </p>

                <div className="intro-highlight">
                  We believe that choosing a medical college is one of the most
                  important decisions in a student's career. Our counselling
                  process focuses on clear, practical and transparent
                  information so students and parents can make informed
                  decisions.
                </div>

                <div className="marathi-only-block">
                  <div className="marathi-divider">

                  </div>

                  <div className="marathi-content">
                    <p>
                      कांतुले एडुटेक प्रा. लि. ही महाराष्ट्रातील एक विश्वासार्ह
                      शैक्षणिक कन्सल्टन्सी आहे. विद्यार्थ्यांना वैद्यकीय शिक्षण
                      घेण्याचे त्यांचे स्वप्न पूर्ण करण्यासाठी आम्ही मार्गदर्शन करतो.
                    </p>

                    <p>
                      शैक्षणिक क्षेत्रातील सुमारे १० वर्षांच्या अनुभवासह, कांतुले
                      एडुटेक विद्यार्थ्यांना आणि पालकांना करिअर मार्गदर्शन व प्रवेश
                      समुपदेशन सेवा प्रदान करत आहे.
                    </p>

                    <p>
                      आमचे प्रमुख उद्दिष्ट भारत आणि परदेशातील MBBS प्रवेशासाठी
                      समुपदेशन करणे आहे. NEET गुण, शैक्षणिक प्रोफाइल, बजेट आणि
                      करिअरच्या उद्दिष्टांनुसार उपलब्ध पर्याय समजून घेण्यासाठी आम्ही
                      विद्यार्थ्यांना मदत करतो.
                    </p>

                    <div className="intro-highlight marathi-highlight">
                      वैद्यकीय महाविद्यालयाची निवड हा विद्यार्थ्याच्या करिअरमधील
                      अत्यंत महत्त्वाचा निर्णय आहे, असे आम्ही मानतो. विद्यार्थ्यांनी
                      आणि पालकांनी योग्य निर्णय घेण्यासाठी आमची समुपदेशन प्रक्रिया
                      स्पष्ट, व्यावहारिक आणि पारदर्शक माहितीवर आधारित असते.
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="stats-section">
          <div className="about-container">
            <motion.div
              className="stats-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              {achievements.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="stat-card"
                    key={index}
                    variants={fadeUp}
                  >
                    <div className="stat-icon">
                      <Icon size={23} />
                    </div>

                    <span className="stat-value">{item.value}</span>
                    <span className="stat-title">{item.title}</span>
                    <span className="stat-text">{item.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* VISION + MISSION */}
        <section className="vision-section">
          <div className="about-container">
            <div className="vision-grid">

              <motion.div
                className="vision-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeLeft}
              >
                <SectionLabel>Our Vision</SectionLabel>

                <h2>
                  Creating The <span className="vision-key">Right Opportunities</span> For Every Student
                </h2>

                <p>
                  To become a trusted and leading education consultancy that
                  helps students achieve their academic and professional dreams
                  through the right guidance and opportunities.
                </p>

                <div className="vision-watermark">
                  <Eye size={180} strokeWidth={1} />
                </div>
              </motion.div>

              <motion.div
                className="mission-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeRight}
              >
                <SectionLabel>Our Mission</SectionLabel>

                <h2>
                  Simplifying The <span className="mission-key">Medical Admission Journey</span>
                </h2>

                <ul className="mission-list">
                  {missionPoints.map((point, index) => (
                    <li key={index}>
                      <Check size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="values-section">
          <div className="about-container">

            <motion.div
              className="values-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SectionLabel>What We Believe In</SectionLabel>

              <h2>
                Guidance Built Around
                <span className="gradient-text"> Trust & Clarity</span>
              </h2>
            </motion.div>

            <motion.div
              className="values-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="value-card"
                    key={index}
                    variants={fadeUp}
                  >
                    <div className="value-icon">
                      <Icon size={25} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </section>

        {/* FOUNDER */}
        <section className="founder-section">
          <div className="about-container">
            <div className="founder-grid">

              <motion.div
                className="founder-visual"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeLeft}
              >
                <img
                  src={founderImage}
                  alt="Mr. Swapnil R. Kantule - Founder and Director of Kantule Edutech"
                />

                <div className="founder-symbol">
                  <GraduationCap size={45} />
                  <small>Leadership</small>
                  <strong>Kantule Edutech</strong>
                </div>
              </motion.div>

              <motion.div
                className="founder-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeRight}
              >
                <SectionLabel>Founder / Director</SectionLabel>

                <h2>Mr. Swapnil R. Kantule</h2>

                <span className="founder-role">
                  Director – Kantule Edutech Pvt. Ltd.
                </span>

                <p>
                  Mr. Swapnil R. Kantule is associated with the education
                  counselling sector and works towards providing students with
                  reliable career and admission guidance, particularly in the
                  field of medical education.
                </p>

                <div className="intro-highlight">
                  Approximately 10 years of experience in the education sector,
                  with a focus on reliable guidance and student-centric
                  counselling.
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS / ESTABLISHMENT */}
        <section className="stats-section">
          <div className="about-container">

            <motion.div
              className="values-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SectionLabel>Our Journey</SectionLabel>

              <h2>
                Experience That
                <span className="gradient-text"> Builds Confidence</span>
              </h2>
            </motion.div>

            <motion.div
              className="stats-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="stat-card">
                <div className="stat-icon">
                  <Lightbulb size={23} />
                </div>
                <span className="stat-value">10+</span>
                <span className="stat-title">
                  Years in Education
                </span>
                <span className="stat-text">
                  Approximately 10 years of experience in the education sector.
                </span>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <GraduationCap size={23} />
                </div>
                <span className="stat-value">150+</span>
                <span className="stat-title">
                  Students Guided
                </span>
                <span className="stat-text">
                  Students guided for MBBS abroad.
                </span>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Building2 size={23} />
                </div>
                <span className="stat-value">4</span>
                <span className="stat-title">
                  Counselling Centres
                </span>
                <span className="stat-text">
                  Counselling centres across Maharashtra.
                </span>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <MapPin size={23} />
                </div>
                <span className="stat-value">MH</span>
                <span className="stat-title">
                  Regions Served
                </span>
                <span className="stat-text">
                  Beed, Jalna, Parbhani, Chhatrapati Sambhajinagar and
                  surrounding areas.
                </span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* CTA */}
        <section className="journey-section">
          <motion.div
            className="journey-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>Start Your Journey</SectionLabel>

            <h2>Your Medical Career Starts With The Right Guidance</h2>

            <p>
              Kantule Edutech supports students throughout their admission
              journey with personalized counselling and reliable guidance for
              medical education in India and abroad.
            </p>

            <button
              className="journey-button"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Get Expert Guidance
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </section>

      </main>
    </>
  );
};

export default About;