import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function OtherDestinations() {
  return (
    <>
      <style>{`
        .country-page {
          background: #f7fbff;
          padding: 60px 20px 90px;
        }

        .country-container {
          max-width: 1180px;
          margin: auto;
        }

        .country-hero {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 45px;
        }

        .country-label {
          color: #08a6d3;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .08em;
          margin-bottom: 12px;
        }

        .country-hero h1 {
          margin: 0;
          color: #09285f;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.05;
        }

        .country-hero h1 span {
          color: #08a6d3;
        }

        .country-description {
          color: #64748b;
          line-height: 1.7;
          margin-top: 18px;
        }

        .country-card {
          background: white;
          border-radius: 28px;
          padding: 38px;
          border: 1px solid rgba(8, 52, 110, .08);
          box-shadow: 0 20px 60px rgba(20, 60, 110, .09);
          margin-bottom: 32px;
        }

        .country-card h2 {
          color: #09285f;
          font-size: 30px;
          margin: 0 0 12px;
        }

        .country-card > p {
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .country-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .country-info {
          padding: 24px;
          border-radius: 18px;
          background: linear-gradient(135deg, #f5fbff, #eef7fc);
          border: 1px solid #e2edf5;
        }

        .country-info h3 {
          color: #09285f;
          font-size: 17px;
          margin: 0 0 13px;
        }

        .country-info p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        .country-list {
          margin: 0;
          padding-left: 18px;
        }

        .country-list li {
          color: #64748b;
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 5px;
        }

        .destinations-list {
          background: linear-gradient(135deg, #f5fbff, #eef7fc);
          border: 1px solid #e2edf5;
          border-radius: 18px;
          padding: 24px;
          margin-bottom: 32px;
        }

        .destinations-list h3 {
          color: #09285f;
          font-size: 17px;
          margin: 0 0 16px;
        }

        .destinations-list ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .destinations-list li {
          color: #64748b;
          font-size: 14px;
          line-height: 1.8;
          padding: 8px 12px;
          background: white;
          border-radius: 8px;
          border-left: 3px solid #0B8FD3;
        }

        .cta-section {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 32px;
        }

        .cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 28px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-primary {
          background: linear-gradient(135deg, #0B8FD3, #16B9D9);
          color: white;
          box-shadow: 0 10px 25px rgba(11, 143, 211, 0.2);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 35px rgba(11, 143, 211, 0.3);
        }

        .cta-secondary {
          background: #25D366;
          color: white;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.2);
        }

        .cta-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 35px rgba(37, 211, 102, 0.3);
        }

        @media (max-width: 700px) {
          .country-page {
            padding: 45px 16px 60px;
          }

          .country-card {
            padding: 24px;
            border-radius: 22px;
          }

          .country-card h2 {
            font-size: 25px;
          }

          .country-grid {
            grid-template-columns: 1fr;
          }

          .destinations-list ul {
            grid-template-columns: 1fr;
          }

          .cta-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main className="country-page">
        <div className="country-container">

          <motion.div
            className="country-hero"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <div className="country-label">
              ✦ INTERNATIONAL MEDICAL EDUCATION
            </div>

            <h1>
              MBBS in <span>USA & Other Destinations</span>
            </h1>

            <p className="country-description">
              Explore diverse medical education opportunities beyond traditional MBBS countries.
              International medical education varies significantly in structure, requirements, and practice pathways.
            </p>
          </motion.div>

          {/* INTRODUCTION */}
          <motion.section
            className="country-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <h2>Medical Education in USA & Other Destinations</h2>
            <p>
              Medical education structures and pathways differ significantly across countries.
              While some countries offer MBBS degrees, others like the USA follow different medical education systems (MD, DO).
              International medical students must understand that medical education, licensing requirements, and practice pathways
              vary considerably by country. Each destination has unique eligibility criteria, curriculum structure, and licensing requirements.
            </p>
          </motion.section>

          {/* EDUCATION SYSTEMS */}
          <motion.section
            className="country-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .1 }}
          >
            <h2>Understanding Different Medical Systems</h2>
            <p>
              Medical education systems vary globally. While countries like Russia, Kyrgyzstan, and India follow the MBBS (Bachelor of Medicine, Bachelor of Surgery) model,
              countries like the USA, Canada, and some European nations have different systems:
            </p>

            <div className="destinations-list">
              <h3>Common Medical Education Models</h3>
              <ul>
                <li><strong>MBBS Model:</strong> 5-6 years, standard in Commonwealth countries</li>
                <li><strong>MD/DO System:</strong> Typically 4 years in USA (after pre-med)</li>
                <li><strong>European System:</strong> Varies, typically 6 years, Bologna Process</li>
                <li><strong>Integrated Programs:</strong> Some countries combine foundation + medical studies</li>
                <li><strong>Distance/Alternative Routes:</strong> Caribbean medical schools, online components</li>
                <li><strong>Licensing Requirements:</strong> Vary by country and state/region</li>
              </ul>
            </div>

            <div className="country-grid">

              <div className="country-info">
                <h3>USA Medical Education</h3>
                <p>
                  The USA primarily offers MD (Doctor of Medicine) and DO (Doctor of Osteopathic Medicine) degrees.
                  Medical education typically requires 4 years of medical school preceded by pre-medical undergraduate studies.
                  Licensing requires passing USMLE (United States Medical Licensing Examination).
                  International students face additional requirements including visa sponsorship and specific exam scores.
                </p>
              </div>

              <div className="country-info">
                <h3>Other International Destinations</h3>
                <p>
                  Countries including Canada, Australia, UK, Germany, and others offer medical degrees with varying structures.
                  Some are MBBS-based, others follow different models.
                  Entry requirements, program duration, and licensing vary significantly.
                  International recognition and practice rights depend on destination country regulations.
                </p>
              </div>

            </div>
          </motion.section>

          {/* ELIGIBILITY & REQUIREMENTS */}
          <motion.section
            className="country-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .2 }}
          >
            <h2>General Eligibility & Licensing Considerations</h2>

            <div className="country-grid">

              <div className="country-info">
                <h3>Eligibility Typically Requires</h3>
                <ul className="country-list">
                  <li>12th Science pass / High school diploma</li>
                  <li>Standardized test scores (varies by country)</li>
                  <li>English language proficiency</li>
                  <li>Medical entrance exams (USMLE, IELTS, etc.)</li>
                  <li>Valid visa/immigration status</li>
                  <li>Medical fitness certification</li>
                </ul>
              </div>

              <div className="country-info">
                <h3>Critical Licensing Information</h3>
                <p>
                  <strong>Important:</strong> Medical licensing and practice rights are NOT automatic upon graduation.
                  Each country has specific requirements including:
                  - Licensing exams and certification
                  - Credential evaluation and recognition
                  - Residency training requirements
                  - State/regional medical board approval
                  - Work visa and immigration status
                </p>
              </div>

            </div>
          </motion.section>

          {/* IMPORTANT NOTICE */}
          <motion.section
            className="country-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .3 }}
            style={{ backgroundColor: '#FEF3CD', borderColor: '#FFE69C' }}
          >
            <h2 style={{ color: '#856404' }}>⚠ Important Disclaimer</h2>
            <p style={{ color: '#856404' }}>
              Medical education is subject to strict regulatory requirements worldwide. Before pursuing medical education abroad:
            </p>
            <ul style={{ color: '#856404', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Verify that your chosen institution is recognized by your country's medical regulatory body</li>
              <li>Confirm licensing requirements in your intended country of practice</li>
              <li>Understand that medical degrees from some countries may not be automatically recognized</li>
              <li>Consult with professional educational counselors and regulatory authorities</li>
              <li>Do not assume that graduating with an MBBS or MD automatically grants practice rights</li>
              <li>Be aware of visa, work permit, and immigration regulations</li>
            </ul>
          </motion.section>

          {/* CONSULTATION CTA */}
          <motion.section
            className="country-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .4 }}
          >
            <h2>Need Personalized Guidance?</h2>
            <p>
              Each international destination has unique requirements and opportunities.
              Our counselors can help you understand the specific pathways, requirements, and challenges for your chosen destination.
              We provide personalized guidance based on your qualifications, goals, and circumstances.
            </p>

            <div className="country-info" style={{ marginTop: '24px' }}>
              <h3>Our Counseling Services Include</h3>
              <ul className="country-list">
                <li>Destination selection guidance</li>
                <li>Eligibility and requirement assessment</li>
                <li>University selection and application support</li>
                <li>Visa and documentation assistance</li>
                <li>Post-admission support and guidance</li>
                <li>Career planning and licensing pathway information</li>
              </ul>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .5 }}
            style={{ marginTop: '50px' }}
          >
            <div className="cta-section">
              <Link to="/contact" className="cta-button cta-primary">
                <MessageCircle size={18} />
                Book Free Counselling
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/918830451660?text=I%20want%20to%20know%20more%20about%20medical%20education%20abroad"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-secondary"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </main>
    </>
  );
}

export default OtherDestinations;
