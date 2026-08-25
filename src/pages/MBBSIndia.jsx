import { motion } from "framer-motion";

function MBBSIndia() {
  return (
    <>
      <style>{`
        .india-page {
          background: #f7fbff;
          padding: 60px 20px 90px;
        }

        .india-container {
          max-width: 1180px;
          margin: auto;
        }

        .india-hero {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 45px;
        }

        .india-label {
          color: #08a6d3;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .08em;
          margin-bottom: 12px;
        }

        .india-hero h1 {
          margin: 0;
          color: #09285f;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.05;
        }

        .india-hero h1 span {
          color: #08a6d3;
        }

        .india-description {
          color: #64748b;
          line-height: 1.7;
          margin-top: 18px;
        }

        .india-card {
          background: white;
          border-radius: 28px;
          padding: 38px;
          border: 1px solid rgba(8, 52, 110, .08);
          box-shadow: 0 20px 60px rgba(20, 60, 110, .09);
        }

        .india-card h2 {
          color: #09285f;
          font-size: 30px;
          margin: 0 0 12px;
        }

        .india-card > p {
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .india-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .india-info {
          padding: 24px;
          border-radius: 18px;
          background: linear-gradient(135deg, #f5fbff, #eef7fc);
          border: 1px solid #e2edf5;
        }

        .india-info h3 {
          color: #09285f;
          font-size: 17px;
          margin: 0 0 13px;
        }

        .india-info p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        .india-list {
          margin: 0;
          padding-left: 18px;
        }

        .india-list li {
          color: #64748b;
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 5px;
        }

        @media (max-width: 700px) {
          .india-page {
            padding: 45px 16px 60px;
          }

          .india-card {
            padding: 24px;
            border-radius: 22px;
          }

          .india-card h2 {
            font-size: 25px;
          }

          .india-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main className="india-page">
        <div className="india-container">

          <motion.div
            className="india-hero"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <div className="india-label">
              ✦ MBBS PROGRAM
            </div>

            <h1>
              MBBS <span>in India</span>
            </h1>

            <p className="india-description">
              Guidance for students seeking MBBS admission in India
              through government, private and deemed medical colleges.
            </p>
          </motion.div>

          <motion.section
            className="india-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >

            <h2>MBBS in India</h2>

            <p>
              Guidance for students seeking MBBS admission in India
              through government, private and deemed medical colleges.
            </p>

            <div className="india-grid">

              <div className="india-info">
                <h3>Duration</h3>
                <p>
                  5.5 years including internship, as applicable
                  under current regulations.
                </p>
              </div>

              <div className="india-info">
                <h3>Mode</h3>
                <p>
                  Offline / Regular
                </p>
              </div>

              <div className="india-info">
                <h3>Eligibility</h3>

                <ul className="india-list">
                  <li>12th Science with Physics, Chemistry and Biology</li>
                  <li>NEET qualification</li>
                  <li>
                    Other eligibility criteria as prescribed by
                    the concerned authorities
                  </li>
                </ul>
              </div>

              <div className="india-info">
                <h3>Career Opportunities</h3>

                <ul className="india-list">
                  <li>Doctor / Medical Practitioner</li>
                  <li>Postgraduate Medical Education</li>
                  <li>MD/MS</li>
                  <li>Clinical & Non-clinical Specializations</li>
                  <li>Healthcare sector</li>
                  <li>Research and academics</li>
                </ul>
              </div>

            </div>

          </motion.section>

        </div>
      </main>
    </>
  );
}

export default MBBSIndia;