import { motion } from "framer-motion";
import {
  ArrowRight,
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
  BookOpen,
  BadgeCheck,
  ClipboardCheck,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

function Philippines() {
  const whatsappNumber = "918830451660";

  const whatsappMessage = encodeURIComponent(
    "Hello Kantule Edutech, I would like to know more about MBBS in Philippines."
  );

  const whyStudy = [
    {
      icon: WalletCards,
      title: "Affordable Education",
      text: "Medical education in the Philippines can be an affordable option for international students.",
    },
    {
      icon: Globe2,
      title: "English-Medium Education",
      text: "Medical education is available through English-medium programs for international students.",
    },
    {
      icon: Hospital,
      title: "Clinical Exposure",
      text: "Students can gain practical exposure through clinical training and healthcare environments.",
    },
    {
      icon: GraduationCap,
      title: "Quality Medical Training",
      text: "Medical institutions provide academic learning together with practical medical training.",
    },
    {
      icon: ShieldCheck,
      title: "Welcoming Environment",
      text: "The Philippines offers a multicultural environment for international students.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Opportunities",
      text: "Students can explore different medical and healthcare career pathways after graduation.",
    },
  ];

  const programDetails = [
    {
      icon: BookOpen,
      title: "Course Duration",
      text: "4 years, plus applicable internship or residency requirements.",
    },
    {
      icon: Globe2,
      title: "Medium of Instruction",
      text: "English-medium medical education is available for international students.",
    },
    {
      icon: BadgeCheck,
      title: "Academic Eligibility",
      text: "Students should have completed 12th grade with Science subjects including Physics, Chemistry and Biology.",
    },
    {
      icon: ClipboardCheck,
      title: "Admission Process",
      text: "Application submission, entrance examination, document verification and medical fitness requirements may apply.",
    },
  ];

  const eligibility = [
    "12th Science pass",
    "Physics, Chemistry and Biology",
    "Minimum 50–60% aggregate",
    "Valid passport",
  ];

  const admissionSteps = [
    {
      number: "01",
      title: "Application Submission",
      text: "Submit the required application and academic documents.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Entrance Examination",
      text: "Complete the applicable entrance examination requirements.",
      icon: BookOpen,
    },
    {
      number: "03",
      title: "Document Verification",
      text: "University authorities verify the submitted documents.",
      icon: ClipboardCheck,
    },
    {
      number: "04",
      title: "Medical Fitness",
      text: "Complete the required medical fitness verification.",
      icon: Hospital,
    },
    {
      number: "05",
      title: "Admission Confirmation",
      text: "Complete the applicable admission formalities.",
      icon: Award,
    },
    {
      number: "06",
      title: "Journey to Philippines",
      text: "Complete pre-departure preparations and begin your education.",
      icon: Plane,
    },
  ];

  const documents = [
    "Completed application form",
    "12th mark sheet and certificate",
    "Valid passport",
    "Medical certificate",
    "Character certificate",
    "Proof of English proficiency",
    "Recent photographs",
  ];

  const careers = [
    "Medical practice",
    "Postgraduate studies",
    "Hospital management",
    "Medical research",
    "Public health programs",
    "Medical education",
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .philippines-page {
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

        .philippines-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .ph-section {
          padding: 42px 0 95px;
        }

        /* ================= HERO ================= */

        .ph-hero {
          position: relative;
          min-height: 650px;
          display: flex;
          align-items: center;
          padding: 75px 0 95px;
        }

        .ph-hero-glow {
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

        .ph-hero-grid {
          display: grid;
          grid-template-columns: 1.02fr .98fr;
          align-items: center;
          gap: 70px;
          position: relative;
          z-index: 2;
        }

        .ph-badge {
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

        .ph-title {
          margin: 20px 0 0;
          font-size: clamp(42px, 6vw, 74px);
          line-height: .98;
          letter-spacing: -.055em;
          font-weight: 900;
          color: #0b1f44;
        }

        .ph-title span {
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

        .ph-description {
          max-width: 670px;
          margin: 24px 0 0;
          color: #64748b;
          font-size: 16px;
          line-height: 1.85;
        }

        .ph-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .ph-btn {
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

        .ph-btn-primary {
          color: white;
          background: linear-gradient(
            135deg,
            #087da8,
            #075985
          );
          box-shadow: 0 14px 30px rgba(8,125,168,.22);
        }

        .ph-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(8,125,168,.3);
        }

        .ph-btn-secondary {
          color: #0b1f44;
          background: white;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(15,23,42,.06);
        }

        .ph-btn-secondary:hover {
          transform: translateY(-3px);
          border-color: #8ed7ee;
        }

        .ph-hero-visual {
          position: relative;
        }

        .ph-image-wrap {
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

        .ph-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 29px;
          display: block;
        }

        .ph-image-overlay {
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

        .ph-country-pill {
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

        .ph-floating-card {
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

        .ph-floating-icon {
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

        .ph-floating-card strong {
          display: block;
          color: #0b1f44;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .ph-floating-card span {
          color: #64748b;
          font-size: 11px;
          line-height: 1.5;
        }

        /* ================= SECTION ================= */

        .ph-heading {
          max-width: 760px;
          margin-bottom: 34px;
        }

        .ph-kicker {
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

        .ph-heading h2 {
          margin: 0;
          color: #0b1f44;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.08;
          letter-spacing: -.04em;
        }

        .ph-heading p {
          margin: 14px 0 0;
          color: #64748b;
          line-height: 1.85;
          font-size: 14px;
        }

        /* ================= WHY ================= */

        .ph-why-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 17px;
        }

        .ph-why-card {
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

        .ph-why-card:hover {
          transform: translateY(-6px);
          border-color: rgba(14,165,233,.25);
          box-shadow: 0 22px 50px rgba(15,23,42,.1);
        }

        .ph-why-icon {
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

        .ph-why-card h3 {
          margin: 0 0 8px;
          color: #0b1f44;
          font-size: 16px;
        }

        .ph-why-card p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        }

        /* ================= CARD ================= */

        .ph-card {
          background: rgba(255,255,255,.94);
          border: 1px solid #e6edf5;
          border-radius: 30px;
          padding: 38px;
          box-shadow: 0 22px 65px rgba(15,23,42,.065);
          margin-bottom: 25px;
        }

        .ph-card h2 {
          margin: 0;
          color: #0b1f44;
          font-size: 29px;
          letter-spacing: -.025em;
        }

        .ph-card > p {
          color: #64748b;
          line-height: 1.85;
          font-size: 14px;
          margin: 15px 0 0;
        }

        /* ================= PROGRAM DETAILS ================= */

        .ph-info-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 18px;
          margin-top: 28px;
        }

        .ph-info-box {
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

        .ph-info-box:hover {
          transform: translateY(-4px);
          border-color: #b9e4f3;
        }

        .ph-info-icon {
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

        .ph-info-box h3 {
          color: #0b1f44;
          font-size: 16px;
          margin: 0 0 8px;
        }

        .ph-info-box p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        /* ================= ELIGIBILITY ================= */

        .ph-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .ph-dark-panel {
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

        .ph-dark-panel::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -90px;
          bottom: -100px;
          border-radius: 50%;
          border: 35px solid rgba(255,255,255,.06);
        }

        .ph-dark-panel h2 {
          margin: 0;
          font-size: 30px;
          letter-spacing: -.03em;
        }

        .ph-dark-panel > p {
          color: rgba(255,255,255,.72);
          line-height: 1.8;
          font-size: 13px;
          margin: 14px 0 0;
        }

        .ph-check-list {
          display: grid;
          gap: 13px;
          margin-top: 23px;
        }

        .ph-check-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: rgba(255,255,255,.88);
          font-size: 12px;
          line-height: 1.6;
        }

        .ph-check-item svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: #67e8f9;
        }

        .ph-light-check {
          color: #475569;
        }

        .ph-light-check svg {
          color: #078fc9;
        }

        /* ================= ADMISSION ================= */

        .ph-process-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
          margin-top: 28px;
        }

        .ph-process-card {
          position: relative;
          padding: 24px;
          min-height: 200px;
          border: 1px solid #e6edf5;
          background: #fff;
          border-radius: 21px;
          box-shadow: 0 13px 35px rgba(15,23,42,.055);
          transition: .3s ease;
        }

        .ph-process-card:hover {
          transform: translateY(-5px);
          border-color: #b7e4f4;
        }

        .ph-process-number {
          position: absolute;
          top: 17px;
          right: 18px;
          color: #dcebf3;
          font-size: 27px;
          font-weight: 900;
        }

        .ph-process-icon {
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

        .ph-process-card h3 {
          margin: 0 0 8px;
          color: #0b1f44;
          font-size: 15px;
        }

        .ph-process-card p {
          margin: 0;
          color: #64748b;
          font-size: 12px;
          line-height: 1.7;
        }

        /* ================= DOCUMENTS ================= */

        .ph-document-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .ph-document-list {
          display: grid;
          gap: 11px;
          margin-top: 23px;
        }

        .ph-document-item {
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

        .ph-document-item svg {
          color: #078fc9;
          flex: 0 0 auto;
        }

        /* ================= FEES ================= */

        .ph-fee-box {
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

        .ph-fee-highlight {
          font-size: 30px;
          font-weight: 900;
          color: #075985;
          letter-spacing: -.03em;
        }

        .ph-fee-label {
          color: #64748b;
          font-size: 12px;
          margin-top: 4px;
        }

        .ph-fee-note {
          margin-top: 17px;
          color: #64748b;
          font-size: 11px;
          line-height: 1.7;
        }

        /* ================= CAREER ================= */

        .ph-career-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 13px;
          margin-top: 25px;
        }

        .ph-career-item {
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

        .ph-career-item svg {
          color: #078fc9;
          flex: 0 0 auto;
        }

        /* ================= CTA ================= */

        .ph-final-cta {
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

        .ph-final-cta::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          right: -100px;
          bottom: -130px;
          border-radius: 50%;
          border: 45px solid rgba(255,255,255,.07);
        }

        .ph-final-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
        }

        .ph-final-cta h2 {
          margin: 0;
          font-size: clamp(28px,4vw,43px);
          letter-spacing: -.035em;
        }

        .ph-final-cta p {
          color: rgba(255,255,255,.78);
          line-height: 1.8;
          font-size: 14px;
          margin: 13px 0 0;
        }

        .ph-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 25px;
        }

        .ph-final-btn {
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

        .ph-final-btn-white {
          background: white;
          color: #075985;
        }

        .ph-final-btn-whatsapp {
          background: #22c55e;
          color: white;
        }

        .ph-final-btn:hover {
          transform: translateY(-3px);
        }

        /* ================= MOBILE ================= */

        @media (max-width: 900px) {

          .ph-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .ph-image-wrap {
            height: 420px;
          }

          .ph-why-grid,
          .ph-process-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .ph-career-grid {
            grid-template-columns: repeat(2,1fr);
          }

        }

        @media (max-width: 700px) {

          .philippines-container {
            width: min(100% - 28px, 1180px);
          }

          .ph-hero {
            padding: 55px 0 65px;
          }

          .ph-image-wrap {
            height: 350px;
            border-radius: 27px;
          }

          .ph-floating-card {
            left: 12px;
            bottom: 18px;
            width: 215px;
          }

          .ph-why-grid,
          .ph-info-grid,
          .ph-split-grid,
          .ph-process-grid,
          .ph-document-grid,
          .ph-career-grid {
            grid-template-columns: 1fr;
          }

          .ph-card,
          .ph-dark-panel {
            padding: 25px;
            border-radius: 23px;
          }

          .ph-final-cta {
            padding: 32px 24px;
            border-radius: 25px;
          }

          .ph-actions,
          .ph-cta-actions {
            flex-direction: column;
          }

          .ph-btn,
          .ph-final-btn {
            width: 100%;
          }

          .ph-country-pill {
            top: 20px;
            right: 20px;
          }
        }
      `}</style>

      <main className="philippines-page">

        {/* ================= HERO ================= */}

        <section className="ph-hero">

          <div className="ph-hero-glow" />

          <div className="philippines-container ph-hero-grid">

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
            >

              <div className="ph-badge">
                <Globe2 size={13} />
                MBBS PROGRAM ABROAD
              </div>

              <h1 className="ph-title">
                Study MBBS
                <span>in Philippines</span>
              </h1>

              <p className="ph-description">
                Pursue medicine in the Philippines with English-medium
                education, practical clinical exposure, quality medical
                training and an international student environment.
              </p>

              <div className="ph-actions">

                <Link
                  to="/contact"
                  className="ph-btn ph-btn-primary"
                >
                  Get Free Counselling
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ph-btn ph-btn-secondary"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>

              </div>

            </motion.div>

            <motion.div
              className="ph-hero-visual"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <div className="ph-image-wrap">

                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=90"
                  alt="Philippines"
                  className="ph-hero-image"
                />

                <div className="ph-image-overlay" />

                <div className="ph-country-pill">
                  🇵🇭 PHILIPPINES
                </div>

                <div className="ph-floating-card">

                  <div className="ph-floating-icon">
                    <Stethoscope size={20} />
                  </div>

                  <strong>
                    Medical Education Abroad
                  </strong>

                  <span>
                    Explore MBBS opportunities, admission guidance
                    and medical education pathways in Philippines.
                  </span>

                </div>

              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= INTRO ================= */}

        <section className="ph-section">

          <div className="philippines-container">

            <motion.div
              className="ph-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="ph-kicker">
                <Globe2 size={13} />
                Why Philippines
              </span>

              <h2>
                A practical pathway for
                <br />
                international medical education.
              </h2>

              <p>
                The Philippines is a leading destination for medical
                education with a strong healthcare system. Medical
                institutions offer English-medium programs, modern
                facilities and practical training opportunities for
                international students.
              </p>

              <p style={{ marginTop: 12 }}>
                The country also provides a welcoming student environment,
                affordable education options and opportunities for practical
                clinical exposure.
              </p>

            </motion.div>

            <div className="ph-why-grid">

              {whyStudy.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="ph-why-card"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: .45,
                      delay: index * .06,
                    }}
                  >

                    <div className="ph-why-icon">
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

        <section className="ph-section">

          <div className="philippines-container">

            <motion.div
              className="ph-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="ph-kicker">
                <BookOpen size={13} />
                Program Details
              </span>

              <h2>
                MBBS Program Overview
              </h2>

              <p>
                The medical education pathway in the Philippines combines
                academic learning with practical training. Program structure
                and admission requirements can vary depending on the
                institution.
              </p>

              <div className="ph-info-grid">

                {programDetails.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      className="ph-info-box"
                      key={item.title}
                    >

                      <div className="ph-info-icon">
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

        <section className="ph-section">

          <div className="philippines-container">

            <div className="ph-split-grid">

              <motion.div
                className="ph-dark-panel"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span
                  className="ph-kicker"
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

                <div className="ph-check-list">

                  {eligibility.map((item) => (

                    <div
                      className="ph-check-item"
                      key={item}
                    >
                      <CheckCircle2 size={17} />
                      {item}
                    </div>

                  ))}

                </div>

              </motion.div>

              <motion.div
                className="ph-card"
                style={{ marginBottom: 0 }}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span className="ph-kicker">
                  <Stethoscope size={13} />
                  Medical Education
                </span>

                <h2>
                  Clinical Learning
                </h2>

                <p>
                  Medical education in the Philippines includes academic
                  learning together with practical exposure. Students can
                  develop medical knowledge and clinical understanding through
                  appropriate healthcare and training environments.
                </p>

                <div className="ph-check-list">

                  {[
                    "Academic medical education",
                    "English-medium learning",
                    "Practical clinical exposure",
                    "Healthcare environment",
                    "International student experience",
                  ].map((item) => (

                    <div
                      className="ph-check-item ph-light-check"
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

        <section className="ph-section">

          <div className="philippines-container">

            <motion.div
              className="ph-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div
                className="ph-heading"
                style={{ marginBottom: 0 }}
              >

                <span className="ph-kicker">
                  <ClipboardCheck size={13} />
                  Admission Process
                </span>

                <h2>
                  Your journey to
                  <br />
                  medical education in Philippines.
                </h2>

              </div>

              <div className="ph-process-grid">

                {admissionSteps.map((step, index) => {

                  const Icon = step.icon;

                  return (
                    <motion.div
                      className="ph-process-card"
                      key={step.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * .05,
                      }}
                    >

                      <div className="ph-process-number">
                        {step.number}
                      </div>

                      <div className="ph-process-icon">
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

        {/* ================= DOCUMENTS + FEES ================= */}

        <section className="ph-section">

          <div className="philippines-container">

            <div className="ph-document-grid">

              <motion.div
                className="ph-card"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span className="ph-kicker">
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

                <div className="ph-document-list">

                  {documents.map((document) => (

                    <div
                      className="ph-document-item"
                      key={document}
                    >
                      <CheckCircle2 size={15} />
                      {document}
                    </div>

                  ))}

                </div>

              </motion.div>

              <motion.div
                className="ph-card"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span className="ph-kicker">
                  <WalletCards size={13} />
                  Cost Overview
                </span>

                <h2>
                  Approximate Fees
                </h2>

                <p>
                  Annual tuition ranges from approximately
                  <strong> $4,000 to $8,000 USD</strong>.
                </p>

                <div className="ph-fee-box">

                  <div className="ph-fee-highlight">
                    $4,000 – $8,000
                  </div>

                  <div className="ph-fee-label">
                    Approximate annual tuition
                  </div>

                  <div className="ph-fee-note">
                    Living expenses are moderate and may include
                    accommodation, food and transportation. Total costs
                    vary depending on university and lifestyle.
                  </div>

                </div>

                <p
                  style={{
                    marginTop: 15,
                    fontSize: 11,
                  }}
                >
                  <strong>
                    Contact our counsellor for exact fees and payment
                    schedule details.
                  </strong>
                </p>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ================= CAREER ================= */}

        <section className="ph-section">

          <div className="philippines-container">

            <motion.div
              className="ph-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="ph-kicker">
                <Stethoscope size={13} />
                Career & Licensing
              </span>

              <h2>
                Career Opportunities After MBBS
              </h2>

              <p>
                MBBS graduates from Philippine medical universities can
                pursue medical careers domestically and internationally.
                Medical practice and licensing rights vary by country.
                Graduates should verify recognition and licensing
                requirements with the relevant medical regulatory authority
                before making practice plans.
              </p>

              <div className="ph-career-grid">

                {careers.map((career) => (

                  <div
                    className="ph-career-item"
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
                Recognition and licensing requirements can differ depending
                on the country where a graduate intends to practice.
                Students should verify the current requirements before
                enrollment and career planning.
              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="ph-section">

          <div className="philippines-container">

            <motion.div
              className="ph-final-cta"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="ph-final-content">

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
                  Planning MBBS in Philippines?
                </h2>

                <p>
                  Get personalized guidance on eligibility, documentation,
                  fees, admission requirements and your medical education
                  journey from Kantule Edutech.
                </p>

                <div className="ph-cta-actions">

                  <Link
                    to="/contact"
                    className="ph-final-btn ph-final-btn-white"
                  >
                    Book Free Counselling
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ph-final-btn ph-final-btn-whatsapp"
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

export default Philippines;