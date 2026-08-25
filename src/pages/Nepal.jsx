import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  GraduationCap,
  Globe2,
  Hospital,
  FileText,
  WalletCards,
  Stethoscope,
  Plane,
  ShieldCheck,
  BookOpen,
  BadgeCheck,
  ClipboardCheck,
  Award,
  MapPin,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";

function Nepal() {
  const whatsappNumber = "918830451660";

  const whatsappMessage = encodeURIComponent(
    "Hello Kantule Edutech, I would like to know more about MBBS in Nepal."
  );

  const whyStudy = [
    {
      icon: WalletCards,
      title: "Affordable Education",
      text: "Nepal offers quality medical education at comparatively affordable costs, making it an accessible option for students.",
    },
    {
      icon: GraduationCap,
      title: "Quality Medical Education",
      text: "Medical institutions provide structured academic education with practical clinical training.",
    },
    {
      icon: MapPin,
      title: "Close to India",
      text: "Nepal's geographical proximity to India makes it a convenient destination for Indian students and parents.",
    },
    {
      icon: Globe2,
      title: "International Exposure",
      text: "Students can experience a diverse academic environment while pursuing medical education abroad.",
    },
    {
      icon: HeartPulse,
      title: "Clinical Training",
      text: "Medical education includes practical exposure and clinical training as part of the study journey.",
    },
    {
      icon: ShieldCheck,
      title: "Comfortable Environment",
      text: "The familiar regional and cultural environment can make the transition easier for international students.",
    },
  ];

  const programDetails = [
    {
      icon: BookOpen,
      title: "Course Duration",
      text: "5.5 years including clinical posting and internship.",
    },
    {
      icon: Globe2,
      title: "Medium of Instruction",
      text: "English. Foundation and preparatory courses may also be available.",
    },
    {
      icon: BadgeCheck,
      title: "Eligibility Criteria",
      text: "12th Science with Physics, Chemistry and Biology, along with applicable academic requirements.",
    },
    {
      icon: ClipboardCheck,
      title: "Admission Process",
      text: "Application submission, document review, medical screening and admission confirmation.",
    },
  ];

  const eligibility = [
    "12th Science passed",
    "Physics, Chemistry and Biology",
    "Minimum 40–50% marks",
    "Valid passport",
  ];

  const admissionSteps = [
    {
      number: "01",
      title: "Application Submission",
      text: "Submit the required application form and academic documents.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Document Review",
      text: "The submitted academic and identity documents are reviewed.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "Medical Screening",
      text: "Complete the applicable medical fitness and screening requirements.",
      icon: Hospital,
    },
    {
      number: "04",
      title: "Admission Confirmation",
      text: "Complete the applicable admission formalities and confirmation.",
      icon: Award,
    },
    {
      number: "05",
      title: "Pre-Departure Guidance",
      text: "Prepare the required documents and arrangements before travel.",
      icon: Plane,
    },
    {
      number: "06",
      title: "Begin Medical Education",
      text: "Travel to Nepal and begin your medical education journey.",
      icon: GraduationCap,
    },
  ];

  const documents = [
    "Application form",
    "12th board certificate",
    "12th mark sheet",
    "Passport copy",
    "Medical fitness report",
    "Character letter",
    "Passport-size photographs",
  ];

  const careers = [
    "Medical practice",
    "Further specialization",
    "Medical research",
    "Healthcare administration",
    "Public health services",
    "Medical academics",
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .nepal-page {
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

        .nepal-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .np-section {
          padding: 42px 0 95px;
        }

        /* ================= HERO ================= */

        .np-hero {
          position: relative;
          min-height: 650px;
          display: flex;
          align-items: center;
          padding: 75px 0 95px;
        }

        .np-hero-glow {
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

        .np-hero-grid {
          display: grid;
          grid-template-columns: 1.02fr .98fr;
          align-items: center;
          gap: 70px;
          position: relative;
          z-index: 2;
        }

        .np-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border: 1px solid rgba(14,165,233,.18);
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

        .np-title {
          margin: 20px 0 0;
          font-size: clamp(42px, 6vw, 74px);
          line-height: .98;
          letter-spacing: -.055em;
          font-weight: 900;
          color: #0b1f44;
        }

        .np-title span {
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

        .np-description {
          max-width: 670px;
          margin: 24px 0 0;
          color: #64748b;
          font-size: 16px;
          line-height: 1.85;
        }

        .np-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .np-btn {
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

        .np-btn-primary {
          color: white;
          background: linear-gradient(
            135deg,
            #087da8,
            #075985
          );
          box-shadow: 0 14px 30px rgba(8,125,168,.22);
        }

        .np-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(8,125,168,.3);
        }

        .np-btn-secondary {
          color: #0b1f44;
          background: white;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(15,23,42,.06);
        }

        .np-btn-secondary:hover {
          transform: translateY(-3px);
          border-color: #8ed7ee;
        }

        .np-hero-visual {
          position: relative;
        }

        .np-image-wrap {
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

        .np-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 29px;
          display: block;
        }

        .np-image-overlay {
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

        .np-country-pill {
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

        .np-floating-card {
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

        .np-floating-icon {
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

        .np-floating-card strong {
          display: block;
          color: #0b1f44;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .np-floating-card span {
          color: #64748b;
          font-size: 11px;
          line-height: 1.5;
        }

        /* ================= HEADINGS ================= */

        .np-heading {
          max-width: 760px;
          margin-bottom: 34px;
        }

        .np-kicker {
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

        .np-heading h2 {
          margin: 0;
          color: #0b1f44;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.08;
          letter-spacing: -.04em;
        }

        .np-heading p {
          margin: 14px 0 0;
          color: #64748b;
          line-height: 1.85;
          font-size: 14px;
        }

        /* ================= WHY ================= */

        .np-why-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 17px;
        }

        .np-why-card {
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

        .np-why-card:hover {
          transform: translateY(-6px);
          border-color: rgba(14,165,233,.25);
          box-shadow: 0 22px 50px rgba(15,23,42,.1);
        }

        .np-why-icon {
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

        .np-why-card h3 {
          margin: 0 0 8px;
          color: #0b1f44;
          font-size: 16px;
        }

        .np-why-card p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        }

        /* ================= CARD ================= */

        .np-card {
          background: rgba(255,255,255,.94);
          border: 1px solid #e6edf5;
          border-radius: 30px;
          padding: 38px;
          box-shadow: 0 22px 65px rgba(15,23,42,.065);
          margin-bottom: 25px;
        }

        .np-card h2 {
          margin: 0;
          color: #0b1f44;
          font-size: 29px;
          letter-spacing: -.025em;
        }

        .np-card > p {
          color: #64748b;
          line-height: 1.85;
          font-size: 14px;
          margin: 15px 0 0;
        }

        /* ================= PROGRAM ================= */

        .np-info-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 18px;
          margin-top: 28px;
        }

        .np-info-box {
          padding: 25px;
          border-radius: 19px;
          background: linear-gradient(
            135deg,
            #f5fbff,
            #eef8fc
          );
          border: 1px solid #e2edf5;
          transition: .3s ease;
        }

        .np-info-box:hover {
          transform: translateY(-4px);
          border-color: #b9e4f3;
        }

        .np-info-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: white;
          color: #078fc9;
          box-shadow: 0 8px 20px rgba(15,23,42,.06);
          margin-bottom: 15px;
        }

        .np-info-box h3 {
          color: #0b1f44;
          font-size: 16px;
          margin: 0 0 8px;
        }

        .np-info-box p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        /* ================= ELIGIBILITY ================= */

        .np-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .np-dark-panel {
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

        .np-dark-panel::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -90px;
          bottom: -100px;
          border-radius: 50%;
          border: 35px solid rgba(255,255,255,.06);
        }

        .np-dark-panel h2 {
          margin: 0;
          font-size: 30px;
          letter-spacing: -.03em;
        }

        .np-dark-panel > p {
          color: rgba(255,255,255,.72);
          line-height: 1.8;
          font-size: 13px;
          margin: 14px 0 0;
        }

        .np-check-list {
          display: grid;
          gap: 13px;
          margin-top: 23px;
        }

        .np-check-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: rgba(255,255,255,.88);
          font-size: 12px;
          line-height: 1.6;
        }

        .np-check-item svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: #67e8f9;
        }

        .np-light-check {
          color: #475569;
        }

        .np-light-check svg {
          color: #078fc9;
        }

        /* ================= PROCESS ================= */

        .np-process-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
          margin-top: 28px;
        }

        .np-process-card {
          position: relative;
          padding: 24px;
          min-height: 200px;
          border: 1px solid #e6edf5;
          background: #fff;
          border-radius: 21px;
          box-shadow: 0 13px 35px rgba(15,23,42,.055);
          transition: .3s ease;
        }

        .np-process-card:hover {
          transform: translateY(-5px);
          border-color: #b7e4f4;
        }

        .np-process-number {
          position: absolute;
          top: 17px;
          right: 18px;
          color: #dcebf3;
          font-size: 27px;
          font-weight: 900;
        }

        .np-process-icon {
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

        .np-process-card h3 {
          margin: 0 0 8px;
          color: #0b1f44;
          font-size: 15px;
        }

        .np-process-card p {
          margin: 0;
          color: #64748b;
          font-size: 12px;
          line-height: 1.7;
        }

        /* ================= DOCUMENTS ================= */

        .np-document-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .np-document-list {
          display: grid;
          gap: 11px;
          margin-top: 23px;
        }

        .np-document-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 13px;
          border-radius: 12px;
          background: #f8fafc;
          color: #475569;
          font-size: 12px;
          line-height: 1.4;
          border: 1px solid #edf2f7;
        }

        .np-document-item svg {
          color: #078fc9;
          flex: 0 0 auto;
        }

        /* ================= FEES ================= */

        .np-fee-box {
          padding: 25px;
          border-radius: 20px;
          background:
            linear-gradient(
              135deg,
              #f4fbff,
              #eaf8fd
            );
          border: 1px solid #cfeaf4;
          margin-top: 23px;
        }

        .np-fee-highlight {
          font-size: 30px;
          font-weight: 900;
          color: #075985;
          letter-spacing: -.03em;
        }

        .np-fee-label {
          color: #64748b;
          font-size: 12px;
          margin-top: 4px;
        }

        .np-fee-note {
          margin-top: 17px;
          color: #64748b;
          font-size: 11px;
          line-height: 1.7;
        }

        /* ================= CAREER ================= */

        .np-career-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 13px;
          margin-top: 25px;
        }

        .np-career-item {
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

        .np-career-item svg {
          color: #078fc9;
          flex: 0 0 auto;
        }

        /* ================= CTA ================= */

        .np-final-cta {
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

        .np-final-cta::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          right: -100px;
          bottom: -130px;
          border-radius: 50%;
          border: 45px solid rgba(255,255,255,.07);
        }

        .np-final-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
        }

        .np-final-cta h2 {
          margin: 0;
          font-size: clamp(28px,4vw,43px);
          letter-spacing: -.035em;
        }

        .np-final-cta p {
          color: rgba(255,255,255,.78);
          line-height: 1.8;
          font-size: 14px;
          margin: 13px 0 0;
        }

        .np-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 25px;
        }

        .np-final-btn {
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

        .np-final-btn-white {
          background: white;
          color: #075985;
        }

        .np-final-btn-whatsapp {
          background: #22c55e;
          color: white;
        }

        .np-final-btn:hover {
          transform: translateY(-3px);
        }

        /* ================= MOBILE ================= */

        @media (max-width: 900px) {

          .np-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .np-image-wrap {
            height: 420px;
          }

          .np-why-grid,
          .np-process-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .np-career-grid {
            grid-template-columns: repeat(2,1fr);
          }

        }

        @media (max-width: 700px) {

          .nepal-container {
            width: min(100% - 28px, 1180px);
          }

          .np-hero {
            padding: 55px 0 65px;
          }

          .np-image-wrap {
            height: 350px;
            border-radius: 27px;
          }

          .np-floating-card {
            left: 12px;
            bottom: 18px;
            width: 215px;
          }

          .np-why-grid,
          .np-info-grid,
          .np-split-grid,
          .np-process-grid,
          .np-document-grid,
          .np-career-grid {
            grid-template-columns: 1fr;
          }

          .np-card,
          .np-dark-panel {
            padding: 25px;
            border-radius: 23px;
          }

          .np-final-cta {
            padding: 32px 24px;
            border-radius: 25px;
          }

          .np-actions,
          .np-cta-actions {
            flex-direction: column;
          }

          .np-btn,
          .np-final-btn {
            width: 100%;
          }

          .np-country-pill {
            top: 20px;
            right: 20px;
          }
        }
      `}</style>

      <main className="nepal-page">

        {/* ================= HERO ================= */}

        <section className="np-hero">

          <div className="np-hero-glow" />

          <div className="nepal-container np-hero-grid">

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
            >

              <div className="np-badge">
                <Globe2 size={13} />
                MBBS PROGRAM ABROAD
              </div>

              <h1 className="np-title">
                Study MBBS
                <span>in Nepal</span>
              </h1>

              <p className="np-description">
                Access quality medical education in Nepal at highly
                affordable costs with strong clinical training.
                A neighboring destination offering excellent value
                for aspiring medical students.
              </p>

              <div className="np-actions">

                <Link
                  to="/contact"
                  className="np-btn np-btn-primary"
                >
                  Get Free Counselling
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="np-btn np-btn-secondary"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>

              </div>

            </motion.div>

            <motion.div
              className="np-hero-visual"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <div className="np-image-wrap">

                <img
                  src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=90"
                  alt="Nepal landscape"
                  className="np-hero-image"
                />

                <div className="np-image-overlay" />

                <div className="np-country-pill">
                  🇳🇵 NEPAL
                </div>

                <div className="np-floating-card">

                  <div className="np-floating-icon">
                    <Stethoscope size={20} />
                  </div>

                  <strong>
                    Medical Education in Nepal
                  </strong>

                  <span>
                    Explore affordable MBBS opportunities,
                    admission guidance and medical education
                    pathways in Nepal.
                  </span>

                </div>

              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= WHY STUDY ================= */}

        <section className="np-section">

          <div className="nepal-container">

            <motion.div
              className="np-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="np-kicker">
                <Globe2 size={13} />
                Why Nepal
              </span>

              <h2>
                A convenient and
                <br />
                affordable medical destination.
              </h2>

              <p>
                Nepal is an excellent and affordable alternative for MBBS
                education with recognized medical universities. Its
                proximity to India and familiar cultural environment make
                it a comfortable destination for many Indian students.
              </p>

            </motion.div>

            <div className="np-why-grid">

              {whyStudy.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="np-why-card"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: .45,
                      delay: index * .06,
                    }}
                  >

                    <div className="np-why-icon">
                      <Icon size={20} />
                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </motion.div>
                );

              })}

            </div>

          </div>

        </section>

        {/* ================= PROGRAM DETAILS ================= */}

        <section className="np-section">

          <div className="nepal-container">

            <motion.div
              className="np-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="np-kicker">
                <BookOpen size={13} />
                Program Details
              </span>

              <h2>
                MBBS Program Overview
              </h2>

              <p>
                Nepal provides medical education with academic learning
                and practical clinical training. The study journey
                generally includes clinical posting and internship.
              </p>

              <div className="np-info-grid">

                {programDetails.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      className="np-info-box"
                      key={item.title}
                    >

                      <div className="np-info-icon">
                        <Icon size={19} />
                      </div>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </div>
                  );

                })}

              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= ELIGIBILITY ================= */}

        <section className="np-section">

          <div className="nepal-container">

            <div className="np-split-grid">

              <motion.div
                className="np-dark-panel"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span
                  className="np-kicker"
                  style={{ color: "#67e8f9" }}
                >
                  <BadgeCheck size={13} />
                  Eligibility
                </span>

                <h2>
                  Eligibility Criteria
                </h2>

                <p>
                  Students should meet the applicable academic and
                  admission requirements before applying.
                </p>

                <div className="np-check-list">

                  {eligibility.map((item) => (

                    <div
                      className="np-check-item"
                      key={item}
                    >
                      <CheckCircle2 size={17} />
                      {item}
                    </div>

                  ))}

                </div>

              </motion.div>

              <motion.div
                className="np-card"
                style={{ marginBottom: 0 }}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span className="np-kicker">
                  <Stethoscope size={13} />
                  Medical Training
                </span>

                <h2>
                  Clinical Learning
                </h2>

                <p>
                  Medical universities in Nepal maintain academic
                  standards with practical clinical training facilities.
                  Students can develop their medical knowledge through
                  academic study and practical exposure.
                </p>

                <div className="np-check-list">

                  {[
                    "Academic medical education",
                    "Practical clinical training",
                    "Clinical posting",
                    "Internship experience",
                    "Healthcare environment",
                  ].map((item) => (

                    <div
                      className="np-check-item np-light-check"
                      key={item}
                    >
                      <CheckCircle2 size={17} />
                      {item}
                    </div>

                  ))}

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ================= ADMISSION PROCESS ================= */}

        <section className="np-section">

          <div className="nepal-container">

            <motion.div
              className="np-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div
                className="np-heading"
                style={{ marginBottom: 0 }}
              >

                <span className="np-kicker">
                  <ClipboardCheck size={13} />
                  Admission Process
                </span>

                <h2>
                  Your journey to
                  <br />
                  medical education in Nepal.
                </h2>

              </div>

              <div className="np-process-grid">

                {admissionSteps.map((step, index) => {

                  const Icon = step.icon;

                  return (
                    <motion.div
                      className="np-process-card"
                      key={step.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * .05,
                      }}
                    >

                      <div className="np-process-number">
                        {step.number}
                      </div>

                      <div className="np-process-icon">
                        <Icon size={19} />
                      </div>

                      <h3>
                        {step.title}
                      </h3>

                      <p>
                        {step.text}
                      </p>

                    </motion.div>
                  );

                })}

              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= DOCUMENTS & FEES ================= */}

        <section className="np-section">

          <div className="nepal-container">

            <div className="np-document-grid">

              <motion.div
                className="np-card"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span className="np-kicker">
                  <FileText size={13} />
                  Documentation
                </span>

                <h2>
                  Documents Required
                </h2>

                <p>
                  Students usually need the following documents while
                  preparing their application.
                </p>

                <div className="np-document-list">

                  {documents.map((document) => (

                    <div
                      className="np-document-item"
                      key={document}
                    >
                      <CheckCircle2 size={15} />
                      {document}
                    </div>

                  ))}

                </div>

              </motion.div>

              <motion.div
                className="np-card"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span className="np-kicker">
                  <WalletCards size={13} />
                  Cost Overview
                </span>

                <h2>
                  Approximate Fees
                </h2>

                <p>
                  Annual tuition costs approximately
                  <strong> $1,500 to $3,000 USD</strong>.
                </p>

                <div className="np-fee-box">

                  <div className="np-fee-highlight">
                    $1,500 – $3,000
                  </div>

                  <div className="np-fee-label">
                    Approximate annual tuition
                  </div>

                  <div className="np-fee-note">
                    Living expenses are very affordable and may be
                    approximately $100–$200 per month. Nepal offers
                    a cost-effective option for students seeking
                    medical education abroad.
                  </div>

                </div>

                <p
                  style={{
                    marginTop: 15,
                    fontSize: 11,
                  }}
                >
                  <strong>
                    Contact our counsellor for specific fee details
                    and university options.
                  </strong>
                </p>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ================= CAREER ================= */}

        <section className="np-section">

          <div className="nepal-container">

            <motion.div
              className="np-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="np-kicker">
                <Stethoscope size={13} />
                Career & Licensing
              </span>

              <h2>
                Career Opportunities After MBBS
              </h2>

              <p>
                MBBS graduates from Nepalese medical universities can
                pursue medical careers domestically and abroad. However,
                medical practice eligibility and licensing requirements
                vary by country of practice. Graduates should verify
                recognition of their degree and licensing requirements
                in their target country.
              </p>

              <div className="np-career-grid">

                {careers.map((career) => (

                  <div
                    className="np-career-item"
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
                <strong>
                  Medical Recognition:
                </strong>{" "}
                Verify the university's recognition status before
                enrollment. Medical licensing and practice rights
                are determined by the medical regulatory authority
                of the country where the graduate intends to practice.
              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="np-section">

          <div className="nepal-container">

            <motion.div
              className="np-final-cta"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="np-final-content">

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
                  Planning MBBS in Nepal?
                </h2>

                <p>
                  Get personalized guidance on eligibility, documentation,
                  fees, admission requirements and your medical education
                  journey from Kantule Edutech.
                </p>

                <div className="np-cta-actions">

                  <Link
                    to="/contact"
                    className="np-final-btn np-final-btn-white"
                  >
                    Book Free Counselling
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="np-final-btn np-final-btn-whatsapp"
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

export default Nepal;