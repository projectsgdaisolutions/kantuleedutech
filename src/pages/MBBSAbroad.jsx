import { motion } from "framer-motion";

function MBBSAbroad() {
  const countries = [
    "Russia",
    "Kyrgyzstan",
    "Kazakhstan",
    "Georgia",
    "Philippines",
    "Nepal",
    "Vietnam",
    "USA and other destinations"
  ];

  const services = [
    "University selection",
    "Admission counselling",
    "Application assistance",
    "Documentation guidance",
    "Visa guidance",
    "Pre-departure guidance",
    "Parent/student counselling",
    "Post-admission support"
  ];

  const career = [
    "Medical practice",
    "Postgraduate studies",
    "Hospitals",
    "Healthcare organisations",
    "Research",
    "Academics"
  ];

  return (
    <>
      <style>{`
        .abroad-page {
          background: #f7fbff;
          padding: 60px 20px 90px;
        }

        .abroad-container {
          max-width: 1180px;
          margin: auto;
        }

        .abroad-hero {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 45px;
        }

        .abroad-label {
          color: #08a6d3;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .08em;
          margin-bottom: 12px;
        }

        .abroad-hero h1 {
          margin: 0;
          color: #09285f;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.05;
        }

        .abroad-hero h1 span {
          color: #08a6d3;
        }

        .abroad-hero p {
          color: #64748b;
          line-height: 1.7;
          margin-top: 18px;
        }

        .abroad-card {
          background: white;
          border-radius: 28px;
          padding: 38px;
          border: 1px solid rgba(8, 52, 110, .08);
          box-shadow: 0 20px 60px rgba(20, 60, 110, .09);
        }

        .abroad-card h2 {
          color: #09285f;
          font-size: 30px;
          margin: 0 0 12px;
        }

        .abroad-card > p {
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .abroad-countries {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 35px;
        }

        .country {
          padding: 18px 12px;
          text-align: center;
          border-radius: 16px;
          background: linear-gradient(135deg, #f5fbff, #edf7fc);
          border: 1px solid #e0edf5;
          color: #09285f;
          font-size: 14px;
          font-weight: 700;
          transition: .3s ease;
        }

        .country:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(20, 80, 130, .10);
        }

        .abroad-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .abroad-info {
          padding: 24px;
          border-radius: 18px;
          background: linear-gradient(135deg, #f5fbff, #eef7fc);
          border: 1px solid #e2edf5;
        }

        .abroad-info h3 {
          color: #09285f;
          font-size: 17px;
          margin: 0 0 13px;
        }

        .abroad-info p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        .abroad-list {
          margin: 0;
          padding-left: 18px;
        }

        .abroad-list li {
          color: #64748b;
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 5px;
        }

        @media (max-width: 850px) {
          .abroad-countries {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .abroad-page {
            padding: 45px 16px 60px;
          }

          .abroad-card {
            padding: 24px;
            border-radius: 22px;
          }

          .abroad-card h2 {
            font-size: 25px;
          }

          .abroad-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 420px) {
          .abroad-countries {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .country {
            padding: 15px 8px;
            font-size: 12px;
          }
        }
      `}</style>

      <main className="abroad-page">
        <div className="abroad-container">

          <motion.div
            className="abroad-hero"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <div className="abroad-label">
              ✦ MBBS PROGRAM
            </div>

            <h1>
              MBBS <span>Abroad</span>
            </h1>

            <p>
              Kantule Edutech provides counselling and admission guidance
              for MBBS opportunities in various countries.
            </p>
          </motion.div>

          <motion.section
            className="abroad-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >

            <h2>MBBS Abroad</h2>

            <p>
              Kantule Edutech provides counselling and admission guidance
              for MBBS opportunities in various countries.
            </p>

            <div className="abroad-countries">
              {countries.map((country) => (
                <div className="country" key={country}>
                  {country}
                </div>
              ))}
            </div>

            <div className="abroad-grid">

              <div className="abroad-info">
                <h3>Course Duration</h3>

                <p>
                  Duration varies depending on the country
                  and university.
                </p>
              </div>

              <div className="abroad-info">
                <h3>Eligibility</h3>

                <ul className="abroad-list">
                  <li>12th Science with PCB</li>
                  <li>NEET qualification as applicable</li>
                  <li>
                    Fulfilment of university/country-specific requirements
                  </li>
                </ul>
              </div>

              <div className="abroad-info">
                <h3>Services</h3>

                <ul className="abroad-list">
                  {services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>

              <div className="abroad-info">
                <h3>Career Opportunities</h3>

                <p style={{ marginBottom: "12px" }}>
                  After completing the required medical education
                  and fulfilling applicable licensing/regulatory
                  requirements, students can pursue opportunities in:
                </p>

                <ul className="abroad-list">
                  {career.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>

          </motion.section>

        </div>
      </main>
    </>
  );
}

export default MBBSAbroad;