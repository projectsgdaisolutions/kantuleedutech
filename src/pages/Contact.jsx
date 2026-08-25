import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Sparkles,
  Globe2,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Contact() {
  const phone1 = "8830451660";
  const phone2 = "8237794917";
  const whatsapp = "918830451660";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const mobile = form.get("mobile");
    const neet = form.get("neet");
    const interested = form.get("interested");

    const message = `Hello Kantule Edutech,

Student Name: ${name}
Mobile Number: ${mobile}
NEET Score: ${neet}
Interested In: ${interested}

I would like to get free MBBS counselling.`;

    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const locations = [
    {
      type: "HEAD OFFICE",
      title: "Kantule Edutech",
      icon: Building2,
      address:
        "Rukmini Complex, Pachod Road, Ambad, District Jalna, Maharashtra – 431204",
      mapQuery:
        "Rukmini Complex, Pachod Road, Ambad, Jalna, Maharashtra 431204",
      mapSearch:
        "https://www.google.com/maps/search/?api=1&query=Rukmini+Complex,+Pachod+Road,+Ambad,+Jalna,+Maharashtra+431204",
      directions:
        "https://www.google.com/maps/dir/?api=1&destination=Rukmini+Complex,+Pachod+Road,+Ambad,+Jalna,+Maharashtra+431204",
      accent: "blue",
    },
    {
      type: "BRANCH OFFICE",
      title: "Beed Branch",
      icon: MapPin,
      address:
        "Akshay Jewellers, Pangari Rd, near Umakiran Complex, Beed, Maharashtra – 431122, India",
      mapQuery:
        "Akshay Jewellers, Pangari Rd, near Umakiran Complex, Beed, Maharashtra 431122",
      mapSearch:
        "https://www.google.com/maps/search/?api=1&query=Akshay+Jewellers,+Pangari+Rd,+near+Umakiran+Complex,+Beed,+Maharashtra+431122",
      directions:
        "https://www.google.com/maps/dir/?api=1&destination=Akshay+Jewellers,+Pangari+Rd,+near+Umakiran+Complex,+Beed,+Maharashtra+431122",
      accent: "cyan",
    },
    {
      type: "BRANCH OFFICE",
      title: "Chhatrapati Sambhaji Nagar",
      icon: MapPin,
      address:
        "Prozone Mall, C-11, 3rd Floor, Prozone Trade Centre, Chhatrapati Sambhaji Nagar, Maharashtra – 431210, India",
      mapQuery:
        "Prozone Mall, C-11, 3rd Floor, Prozone Trade Centre, Chhatrapati Sambhaji Nagar, Maharashtra 431210",
      mapSearch:
        "https://www.google.com/maps/search/?api=1&query=Prozone+Mall,+C-11,+3rd+Floor,+Prozone+Trade+Centre,+Chhatrapati+Sambhaji+Nagar,+Maharashtra+431210",
      directions:
        "https://www.google.com/maps/dir/?api=1&destination=Prozone+Mall,+C-11,+3rd+Floor,+Prozone+Trade+Centre,+Chhatrapati+Sambhaji+Nagar,+Maharashtra+431210",
      accent: "blue",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          background: #f7fbff;
          color: #09285f;
          padding-bottom: 80px;
        }

        .contact-page::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 8% 14%,
              rgba(8, 168, 213, 0.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 92% 8%,
              rgba(7, 59, 130, 0.08),
              transparent 32%
            ),
            radial-gradient(
              circle at 86% 84%,
              rgba(8, 168, 213, 0.07),
              transparent 30%
            );
        }

        .contact-container {
          position: relative;
          z-index: 1;
          width: min(1220px, calc(100% - 24px));
          margin: 0 auto;
        }

        /* ================= HERO ================= */

        .contact-hero {
          position: relative;
          text-align: center;
          padding: 48px 10px 28px;
        }

        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 15px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(8, 168, 213, 0.22);
          color: #079ac7;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 7px 22px rgba(7, 59, 130, 0.07);
          margin-bottom: 17px;
        }

        .contact-eyebrow svg {
          width: 14px;
          height: 14px;
        }

        .contact-hero h1 {
          margin: 0 auto 14px;
          max-width: 850px;
          font-size: clamp(32px, 7vw, 58px);
          line-height: 1.1;
          letter-spacing: -0.035em;
          font-weight: 850;
          color: #09285f;
        }

        .contact-hero h1 span {
          background: linear-gradient(
            120deg,
            #073b82 0%,
            #0874b7 48%,
            #08a8d5 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .contact-hero p {
          max-width: 680px;
          margin: 0 auto;
          color: #5d708d;
          font-size: 14px;
          line-height: 1.7;
        }

        /* ================= MAIN ================= */

        .contact-main {
          padding-top: 8px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.08fr;
            gap: 28px;
          }
        }

        /* ================= INFO CARD ================= */

        .contact-info-card {
          padding: 25px 20px;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid #dfebf5;
          box-shadow:
            0 16px 40px rgba(7, 59, 130, 0.07),
            0 2px 8px rgba(7, 59, 130, 0.03);
        }

        @media (min-width: 600px) {
          .contact-info-card {
            padding: 32px;
          }
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #079ac7;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .section-title {
          margin: 0 0 20px;
          color: #09285f;
          font-size: clamp(23px, 4vw, 29px);
          line-height: 1.2;
          font-weight: 850;
        }

        .company-box {
          position: relative;
          display: flex;
          align-items: center;
          gap: 13px;
          overflow: hidden;
          padding: 15px;
          margin-bottom: 19px;
          border-radius: 17px;
          color: white;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(8, 168, 213, 0.4),
              transparent 32%
            ),
            linear-gradient(135deg, #062d64, #0878ad);
          box-shadow: 0 12px 28px rgba(7, 59, 130, 0.22);
        }

        .company-icon {
          width: 43px;
          height: 43px;
          flex: 0 0 43px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: rgba(255,255,255,0.13);
          border: 1px solid rgba(255,255,255,0.25);
        }

        .company-box strong {
          display: block;
          font-size: 14px;
          margin-bottom: 3px;
          font-weight: 850;
        }

        .company-box span {
          color: #d5effa;
          font-size: 11.5px;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 13px;
          border-radius: 15px;
          background: linear-gradient(135deg, #fbfdff, #f5faff);
          border: 1px solid #e7f0f7;
          transition: 0.25s ease;
        }

        .info-item:hover {
          border-color: rgba(8,168,213,0.3);
          transform: translateY(-2px);
          box-shadow: 0 9px 20px rgba(8,168,213,0.08);
        }

        .info-icon {
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          color: #08a8d5;
          background: #eaf8fd;
          border: 1px solid #d3edf7;
        }

        .info-content {
          min-width: 0;
          flex: 1;
        }

        .info-item small {
          display: block;
          margin-bottom: 4px;
          color: #70809a;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .info-item p,
        .info-item a {
          margin: 0;
          color: #173d70;
          font-size: 13px;
          line-height: 1.55;
          font-weight: 600;
          text-decoration: none;
        }

        .phone-links {
          display: flex;
          flex-wrap: wrap;
          gap: 7px 16px;
        }

        .phone-links a:hover,
        .info-item a:hover {
          color: #08a8d5;
        }

        /* ================= FORM ================= */

        .contact-form-card {
          position: relative;
          overflow: hidden;
          padding: 26px 21px;
          border-radius: 25px;
          color: white;
          background:
            radial-gradient(
              circle at 95% 5%,
              rgba(8,168,213,0.22),
              transparent 30%
            ),
            linear-gradient(145deg, #061938, #0a315f 65%, #0b477b);
          border: 1px solid rgba(8,168,213,0.28);
          box-shadow: 0 22px 55px rgba(6,25,56,0.25);
        }

        @media (min-width: 600px) {
          .contact-form-card {
            padding: 32px;
          }
        }

        .form-top {
          position: relative;
          z-index: 2;
          margin-bottom: 20px;
        }

        .form-top .section-label {
          color: #42c8ee;
        }

        .form-top h2 {
          margin: 5px 0 7px;
          color: #fff;
          font-size: clamp(24px, 4vw, 30px);
          line-height: 1.2;
          font-weight: 850;
        }

        .form-top p {
          margin: 0;
          color: #c5d7eb;
          font-size: 13px;
          line-height: 1.65;
        }

        .contact-form {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 14px;
        }

        .field label {
          display: block;
          margin-bottom: 6px;
          color: #dce9f6;
          font-size: 12px;
          font-weight: 750;
        }

        .field input,
        .field select {
          width: 100%;
          padding: 13px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.17);
          outline: none;
          background: rgba(255,255,255,0.08);
          color: #fff;
          font: inherit;
          font-size: 13px;
          transition: 0.25s ease;
        }

        .field input::placeholder {
          color: #9eb2cb;
        }

        .field select {
          color: #e8f4ff;
        }

        .field select option {
          color: #09285f;
          background: white;
        }

        .field input:focus,
        .field select:focus {
          border-color: #08a8d5;
          background: rgba(255,255,255,0.13);
          box-shadow: 0 0 0 4px rgba(8,168,213,0.18);
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          margin-top: 5px;
          padding: 14px 18px;
          border: 0;
          border-radius: 13px;
          cursor: pointer;
          color: #fff;
          font-size: 13px;
          font-weight: 850;
          background: linear-gradient(135deg, #079ac7, #08b5dd);
          box-shadow: 0 13px 28px rgba(8,168,213,0.3);
          transition: 0.25s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.06);
        }

        .whatsapp-note {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 13px;
          color: #b9d4ed;
          font-size: 11px;
        }

        /* =========================================================
           LOCATIONS
        ========================================================= */

        .locations-section {
          margin-top: 38px;
        }

        .locations-heading {
          text-align: center;
          margin-bottom: 22px;
        }

        .locations-heading .section-label {
          justify-content: center;
        }

        .locations-heading h2 {
          margin: 0;
          color: #09285f;
          font-size: clamp(25px, 5vw, 35px);
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 850;
        }

        .locations-heading p {
          max-width: 620px;
          margin: 8px auto 0;
          color: #687b96;
          font-size: 13px;
          line-height: 1.6;
        }

        .locations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        @media (min-width: 680px) {
          .locations-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1080px) {
          .locations-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
          }
        }

        /* ================= LOCATION CARD ================= */

        .location-card {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-width: 0;
          border-radius: 22px;
          background: rgba(255,255,255,0.98);
          border: 1px solid #deebf5;
          box-shadow:
            0 14px 38px rgba(7,59,130,0.07),
            0 2px 8px rgba(7,59,130,0.025);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .location-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(
            90deg,
            #073b82,
            #08a8d5,
            #55d6ee
          );
          z-index: 5;
        }

        .location-card:hover {
          transform: translateY(-5px);
          border-color: rgba(8,168,213,0.3);
          box-shadow:
            0 24px 52px rgba(7,59,130,0.12),
            0 8px 20px rgba(8,168,213,0.06);
        }

        /* LOCATION HEADER */

        .location-card-top {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 22px 19px 13px;
        }

        .location-card-icon {
          position: relative;
          width: 47px;
          height: 47px;
          flex: 0 0 47px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #08a8d5;
          background:
            linear-gradient(
              145deg,
              #e9f8fd,
              #f5fbff
            );
          border: 1px solid #cfeaf5;
          box-shadow:
            0 7px 18px rgba(8,168,213,0.12),
            inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .location-card-icon::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 17px;
          border: 1px solid rgba(8,168,213,0.08);
          pointer-events: none;
        }

        .location-heading-content {
          min-width: 0;
          padding-top: 1px;
        }

        .location-type {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 4px;
          color: #079ac7;
          font-size: 9.5px;
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0.08em;
        }

        .location-type::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #08a8d5;
          box-shadow: 0 0 0 3px rgba(8,168,213,0.08);
        }

        .location-card-top h3 {
          margin: 0;
          color: #09285f;
          font-size: 16px;
          line-height: 1.28;
          font-weight: 850;
          letter-spacing: -0.01em;
        }

        /* ADDRESS */

        .location-address-box {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin: 0 17px 16px;
          padding: 12px 12px;
          min-height: 72px;
          border-radius: 13px;
          background:
            linear-gradient(
              135deg,
              #f8fbfe,
              #f1f8fc
            );
          border: 1px solid #e4eff7;
        }

        .location-address-icon {
          flex: 0 0 auto;
          margin-top: 1px;
          color: #08a8d5;
        }

        .location-address-text {
          color: #5d708d;
          font-size: 12px;
          line-height: 1.6;
          font-weight: 550;
        }

        /* MAP */

        .location-map-wrapper {
          position: relative;
          overflow: hidden;
          margin: 0 11px;
          border-radius: 15px;
          border: 1px solid #e0eaf2;
          background: #edf5fa;
        }

        .location-map-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 15px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.45);
        }

        .location-map {
          display: block;
          width: 100%;
          height: 205px;
          border: 0;
          background: #edf5fa;
        }

        /* MAP LABEL */

        .map-floating-label {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 10px;
          border-radius: 9px;
          background: rgba(255,255,255,0.94);
          color: #09285f;
          font-size: 10px;
          font-weight: 800;
          box-shadow: 0 5px 16px rgba(7,59,130,0.12);
          backdrop-filter: blur(8px);
        }

        .map-floating-label svg {
          color: #08a8d5;
        }

        /* ACTIONS */

        .location-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          padding: 12px 11px 11px;
        }

        .location-actions a {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 850;
          transition: all 0.22s ease;
        }

        .location-map-btn {
          color: #fff;
          background: linear-gradient(
            135deg,
            #073b82,
            #1455a0
          );
          box-shadow: 0 6px 14px rgba(7,59,130,0.17);
        }

        .location-map-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 9px 18px rgba(7,59,130,0.22);
        }

        .location-directions-btn {
          color: #079ac7;
          background: #effafe;
          border: 1px solid #cdebf6;
        }

        .location-directions-btn:hover {
          color: #fff;
          background: #08a8d5;
          border-color: #08a8d5;
          transform: translateY(-1px);
        }

        /* ================= DETAILS ================= */

        .details-strip {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 22px;
        }

        @media (min-width: 640px) {
          .details-strip {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .detail-card {
          padding: 19px;
          border-radius: 17px;
          background: #fff;
          border: 1px solid #e2ecf5;
          box-shadow: 0 9px 25px rgba(7,59,130,0.05);
        }

        .detail-card h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 9px;
          color: #09285f;
          font-size: 14px;
          font-weight: 850;
        }

        .detail-card h3 svg {
          color: #08a8d5;
        }

        .detail-card p {
          margin: 0;
          color: #617491;
          font-size: 12px;
          line-height: 1.6;
        }

        .social-row {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .social-link-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #173d70;
          font-size: 12px;
          font-weight: 650;
          text-decoration: none;
        }

        .social-link-item:hover {
          color: #08a8d5;
        }

        .social-link-item svg {
          color: #08a8d5;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 520px) {
          .contact-container {
            width: calc(100% - 18px);
          }

          .contact-hero {
            padding: 34px 6px 24px;
          }

          .contact-hero p {
            font-size: 13px;
          }

          .contact-info-card,
          .contact-form-card {
            border-radius: 21px;
          }

          .location-card {
            border-radius: 20px;
          }

          .location-card-top {
            padding: 20px 16px 12px;
          }

          .location-address-box {
            margin: 0 14px 14px;
          }

          .location-map-wrapper {
            margin: 0 9px;
          }

          .location-map {
            height: 190px;
          }

          .location-actions {
            padding: 10px 9px 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <main className="contact-page">

        {/* ================= HERO ================= */}

        <section className="contact-hero">
          <div className="contact-container">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="contact-eyebrow">
                <Sparkles />
                Contact Us
              </div>

              <h1>
                Let’s Start Your{" "}
                <span>Medical Journey.</span>
              </h1>

              <p>
                Connect with Kantule Edutech for MBBS admission
                guidance, counselling and support in India and abroad.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= MAIN CONTACT ================= */}

        <section className="contact-main">
          <div className="contact-container">

            <div className="contact-grid">

              {/* ================= CONTACT INFORMATION ================= */}

              <motion.div
                className="contact-info-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
              >
                <div className="section-label">
                  <ShieldCheck size={14} />
                  Official Admission Support
                </div>

                <h2 className="section-title">
                  Get in Touch With Us
                </h2>

                <div className="company-box">
                  <div className="company-icon">
                    <Building2 size={22} />
                  </div>

                  <div>
                    <strong>
                      Kantule Edutech Pvt. Ltd.
                    </strong>

                    <span>
                      Medical Education &amp; Career Guidance
                    </span>
                  </div>
                </div>

                <div className="info-list">

                  {/* ADDRESS */}

                  <div className="info-item">
                    <div className="info-icon">
                      <MapPin size={18} />
                    </div>

                    <div className="info-content">
                      <small>Head Office Address</small>

                      <p>
                        Rukmini Complex, Pachod Road, Ambad,
                        District Jalna, Maharashtra – 431204
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}

                  <div className="info-item">
                    <div className="info-icon">
                      <Phone size={18} />
                    </div>

                    <div className="info-content">
                      <small>Call Direct Line</small>

                      <div className="phone-links">
                        <a href={`tel:${phone1}`}>
                          +91 {phone1}
                        </a>

                        <a href={`tel:${phone2}`}>
                          +91 {phone2}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WHATSAPP */}

                  <div className="info-item">
                    <div className="info-icon">
                      <MessageCircle size={18} />
                    </div>

                    <div className="info-content">
                      <small>WhatsApp Enquiry</small>

                      <div className="phone-links">
                        <a
                          href={`https://wa.me/91${phone1}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          +91 {phone1}
                        </a>

                        <a
                          href={`https://wa.me/91${phone2}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          +91 {phone2}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div className="info-item">
                    <div className="info-icon">
                      <Mail size={18} />
                    </div>

                    <div className="info-content">
                      <small>Official Email</small>

                      <p>
                        <a href="mailto:kantuleedutec@gmail.com">
                          kantuleedutec@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* HOURS */}

                  <div className="info-item">
                    <div className="info-icon">
                      <Clock3 size={18} />
                    </div>

                    <div className="info-content">
                      <small>Office Working Hours</small>

                      <p>
                        Mon – Sat: 9:30 AM – 7:30 PM
                        (Sun by Appointment)
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* ================= FORM ================= */}

              <motion.div
                className="contact-form-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
              >
                <div className="form-top">
                  <div className="section-label">
                    <Send size={13} />
                    Free Medical Counselling
                  </div>

                  <h2>
                    Get Expert MBBS Counselling
                  </h2>

                  <p>
                    Please fill in your details below and our
                    senior medical admission director will connect
                    with you shortly.
                  </p>
                </div>

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="field">
                    <label htmlFor="name">
                      Student Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="mobile">
                      Mobile Number (WhatsApp) *
                    </label>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="neet">
                      NEET Score / Expected Score
                    </label>

                    <input
                      id="neet"
                      name="neet"
                      type="text"
                      placeholder="e.g. 450 / Qualified / Appearing"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="interested">
                      Interested Destination *
                    </label>

                    <select
                      id="interested"
                      name="interested"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select Destination Program
                      </option>

                      <option value="MBBS in India">
                        MBBS in India
                      </option>

                      <option value="MBBS in Russia">
                        MBBS in Russia
                      </option>

                      <option value="MBBS in Kyrgyzstan">
                        MBBS in Kyrgyzstan
                      </option>

                      <option value="MBBS in Kazakhstan">
                        MBBS in Kazakhstan
                      </option>

                      <option value="MBBS in Georgia">
                        MBBS in Georgia
                      </option>

                      <option value="MBBS in Vietnam">
                        MBBS in Vietnam
                      </option>

                      <option value="MBBS in Nepal">
                        MBBS in Nepal
                      </option>

                      <option value="MBBS in Philippines">
                        MBBS in Philippines
                      </option>

                      <option value="MBBS in USA & Other Destinations">
                        MBBS in USA &amp; Other Destinations
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    <span>
                      Get Free Counselling
                    </span>

                    <ArrowRight size={17} />
                  </button>
                </form>

                <div className="whatsapp-note">
                  <CheckCircle2 size={15} />

                  <span>
                    Instant 1-on-1 response delivered via WhatsApp.
                  </span>
                </div>
              </motion.div>

            </div>

            {/* ==================================================
                LOCATIONS
            ================================================== */}

            <section className="locations-section">

              <motion.div
                className="locations-heading"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
              >
                <div className="section-label">
                  <MapPin size={14} />
                  Our Locations
                </div>

                <h2>
                  Find Kantule Edutech Near You
                </h2>

                <p>
                  Visit our offices for personalised counselling
                  and medical admission guidance.
                </p>
              </motion.div>

              <div className="locations-grid">

                {locations.map((location, index) => {
                  const LocationIcon = location.icon;

                  return (
                    <motion.article
                      key={location.title}
                      className="location-card"
                      initial={{
                        opacity: 0,
                        y: 22,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.12,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                    >

                      {/* CARD HEADER */}

                      <div className="location-card-top">

                        <div className="location-card-icon">
                          <LocationIcon size={21} />
                        </div>

                        <div className="location-heading-content">

                          <div className="location-type">
                            {location.type}
                          </div>

                          <h3>
                            {location.title}
                          </h3>

                        </div>
                      </div>

                      {/* ADDRESS */}

                      <div className="location-address-box">

                        <MapPin
                          className="location-address-icon"
                          size={17}
                        />

                        <div className="location-address-text">
                          {location.address}
                        </div>

                      </div>

                      {/* MAP */}

                      <div className="location-map-wrapper">

                        <div className="map-floating-label">
                          <Navigation size={12} />
                          Location
                        </div>

                        <iframe
                          className="location-map"
                          title={`${location.title} map`}
                          src={`https://www.google.com/maps?q=${encodeURIComponent(
                            location.mapQuery
                          )}&output=embed`}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />

                      </div>

                      {/* ACTIONS */}

                      <div className="location-actions">

                        <a
                          href={location.mapSearch}
                          target="_blank"
                          rel="noreferrer"
                          className="location-map-btn"
                        >
                          <Navigation size={14} />
                          View Map
                          <ExternalLink size={12} />
                        </a>

                        <a
                          href={location.directions}
                          target="_blank"
                          rel="noreferrer"
                          className="location-directions-btn"
                        >
                          <ArrowRight size={14} />
                          Directions
                        </a>

                      </div>

                    </motion.article>
                  );
                })}

              </div>
            </section>

            {/* ================= DETAILS ================= */}

            <div className="details-strip">

              <motion.div
                className="detail-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{ duration: 0.4 }}
              >
                <h3>
                  <Mail size={18} />
                  Official Email
                </h3>

                <p>
                  <a
                    href="mailto:kantuleedutec@gmail.com"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    kantuleedutec@gmail.com
                  </a>
                </p>
              </motion.div>

              <motion.div
                className="detail-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.08,
                }}
              >
                <h3>
                  <Clock3 size={18} />
                  Office Hours
                </h3>

                <p>
                  Mon – Sat: 9:30 AM – 7:30 PM
                  (Sunday by Appointment)
                </p>
              </motion.div>

              <motion.div
                className="detail-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.16,
                }}
              >
                <h3>
                  <Globe2 size={18} />
                  Social Media
                </h3>

                <div className="social-row">

                  <a
                    href="https://www.instagram.com/kantuleedutech/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-item"
                  >
                    <FaInstagram size={14} />
                    @kantuleedutech
                  </a>

                  <a
                    href="https://www.facebook.com/swapyworld/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-item"
                  >
                    <FaFacebookF size={14} />
                    Kantule Edutech Facebook
                  </a>

                </div>
              </motion.div>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default Contact;