import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUp,
  Send,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import logo from "../assets/logo/logo.jpeg";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "MBBS Programs", href: "/programs" },
  { label: "Admissions & Services", href: "/admissions" },
  { label: "Contact Us", href: "/contact" },
];

const programs = [
  { label: "MBBS in India", href: "/programs?country=India" },
  { label: "MBBS in Russia", href: "/programs?country=Russia" },
  { label: "MBBS in Kyrgyzstan", href: "/programs?country=Kyrgyzstan" },
  { label: "MBBS in Kazakhstan", href: "/programs?country=Kazakhstan" },
  { label: "MBBS in Georgia", href: "/programs?country=Georgia" },
  { label: "MBBS in Vietnam", href: "/programs?country=Vietnam" },
  { label: "MBBS in Nepal", href: "/programs?country=Nepal" },
  { label: "MBBS in Philippines", href: "/programs?country=Philippines" },
];
/* Verified contact info only — no placeholder / unconfirmed social links. */
const contactItems = [
  {
    icon: MapPin,
    content: (
      <>
        Rukmini Complex, Pachod Road,
        <br />
        Ambad, District Jalna,
        <br />
        Maharashtra – 431204
      </>
    ),
  },
  {
    icon: Phone,
    content: (
      <>
        <a href="tel:8830451660">8830451660</a>
        <br />
        <a href="tel:8237794917">8237794917</a>
      </>
    ),
  },
  {
    icon: MessageCircle,
    content: (
      <a href="https://wa.me/918830451660" target="_blank" rel="noreferrer">
        8830451660 / 8237794917
      </a>
    ),
  },
  {
    icon: Mail,
    content: (
      <a href="mailto:kantuleedutech@gmail.com">kantuleedutech@gmail.com</a>
    ),
  },
];

const WHATSAPP_NUMBER = "918830451660";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const mobile = form.mobile.value.trim();
    const neet = form.neet.value.trim();
    const interest = form.interest.value;

    const interestLabel =
      interest === "india"
        ? "MBBS in India"
        : interest === "abroad"
        ? "MBBS Abroad"
        : "Not specified";

    const lines = [
      "Hello Kantule Edutech, I'd like a free counselling session.",
      `Name: ${name || "-"}`,
      `Mobile: ${mobile || "-"}`,
      neet ? `NEET Score: ${neet}` : null,
      `Interested In: ${interestLabel}`,
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join("\n"));

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noreferrer"
    );

    form.reset();
  };

  return (
    <>
      <style>{`
        .ke-footer {
          background: #051c40;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .ke-footer::before {
          content: "";
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(22,183,215,.09), transparent 70%);
          top: -260px;
          right: -140px;
          pointer-events: none;
        }

        .ke-footer::after {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,.03), transparent 70%);
          bottom: -220px;
          left: -160px;
          pointer-events: none;
        }

        .ke-footer-main {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 66px 0 52px;
          display: grid;
          grid-template-columns: 1.15fr 0.75fr 0.85fr 1.15fr;
          gap: 40px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        /* ============ BRAND + CONTACT (merged so this column carries
           enough content to balance the taller Quick Enquiry column) ============ */

        .ke-footer-brand {
          max-width: 300px;
        }

        .ke-footer-logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .ke-footer-logo {
          width: 54px;
          height: 54px;
          object-fit: cover;
          border-radius: 50%;
          background: #ffffff;
          padding: 3px;
          box-shadow: 0 0 0 1.5px rgba(255,255,255,.22);
        }

        .ke-footer-logo-text strong {
          display: block;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: .2px;
        }

        .ke-footer-logo-text span {
          display: block;
          margin-top: 2px;
          font-size: 11px;
          color: #9fb8dc;
          letter-spacing: .4px;
        }

        .ke-footer-tagline {
          margin: 0 0 24px;
          color: #cddef4;
          font-size: 13.5px;
          line-height: 1.85;
        }

        .ke-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .ke-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #cddef4;
          font-size: 13px;
          line-height: 1.6;
        }

        .ke-footer-contact-icon {
          flex: 0 0 auto;
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.09);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4fc9e8;
        }

        .ke-footer-contact a {
          color: #cddef4;
          text-decoration: none;
          transition: color .2s ease;
        }

        .ke-footer-contact a:hover {
          color: #4fc9e8;
        }

        /* ============ COLUMN TITLES ============ */

        .ke-footer-title {
          font-size: 15px;
          font-weight: 700;
          margin: 3px 0 22px;
          position: relative;
          padding-bottom: 12px;
        }

        .ke-footer-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 26px;
          height: 2px;
          background: #16b7d7;
          border-radius: 10px;
        }

        .ke-footer-links {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .ke-footer-link {
          position: relative;
          width: fit-content;
          color: #cddef4;
          text-decoration: none;
          font-size: 13px;
          line-height: 1.5;
          transition: color .2s ease, transform .2s ease;
        }

        .ke-footer-link::before {
          content: "›";
          margin-right: 6px;
          color: #16b7d7;
          opacity: 0;
          transition: opacity .2s ease;
        }

        .ke-footer-link:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .ke-footer-link:hover::before {
          opacity: 1;
        }

        /* ============ QUICK ENQUIRY — highlighted glass card so this
           column doesn't read as bare empty space next to the form ============ */

        .ke-footer-enquiry {
          padding: 24px;
          border-radius: 16px;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.09);
          backdrop-filter: blur(6px);
        }

        .ke-footer-enquiry .ke-footer-title {
          margin-top: 0;
        }

        .ke-footer-enquiry-sub {
          margin: -14px 0 18px;
          color: #9fb8dc;
          font-size: 12px;
          line-height: 1.6;
        }

        .ke-footer-form {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .ke-footer-input {
          width: 100%;
          box-sizing: border-box;
          height: 40px;
          padding: 0 4px;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,.22);
          background: transparent;
          color: #ffffff;
          outline: none;
          font-size: 12.5px;
          border-radius: 0;
          transition: border-color .2s ease;
        }

        .ke-footer-input::placeholder {
          color: #8ba3c4;
        }

        .ke-footer-input:focus {
          border-color: #16b7d7;
        }

        .ke-footer-select {
          appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%238ba3c4'><path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/></svg>");
          background-repeat: no-repeat;
          background-position: right 4px center;
          background-size: 14px;
        }

        .ke-footer-select option {
          color: #111827;
          background: #ffffff;
        }

        .ke-footer-submit {
          margin-top: 6px;
          height: 44px;
          border: 0;
          border-radius: 8px;
          background: linear-gradient(90deg, #0d8fb8, #16b7d7);
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 10px 26px rgba(11,150,192,.28);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .ke-footer-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(11,150,192,.4);
        }

        /* ============ BOTTOM BAR ============ */

        .ke-footer-bottom {
          border-top: 1px solid rgba(255,255,255,.08);
          position: relative;
          z-index: 1;
        }

        .ke-footer-bottom-inner {
          width: min(1180px, calc(100% - 40px));
          min-height: 60px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .ke-footer-copy {
          color: #9fb8dc;
          font-size: 12px;
        }

        .ke-footer-legal {
          display: flex;
          gap: 22px;
        }

        .ke-footer-legal a {
          color: #9fb8dc;
          text-decoration: none;
          font-size: 12px;
          transition: color .2s ease;
        }

        .ke-footer-legal a:hover {
          color: #ffffff;
        }

        .ke-footer-credit {
          border-top: 1px solid rgba(255,255,255,.06);
          background: rgba(0,0,0,.18);
          position: relative;
          z-index: 1;
        }

        .ke-footer-credit-inner {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 16px 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes creditFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        @keyframes creditShine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes creditPulse {
          0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(79,201,232,.55); }
          50% { transform: scale(1.15); opacity: .85; box-shadow: 0 0 0 4px rgba(79,201,232,0); }
        }

        .ke-footer-credit-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 16px 8px 13px;
          border-radius: 100px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.1);
          animation: creditFloat 4s ease-in-out infinite;
          transition: border-color .3s ease, background .3s ease, box-shadow .3s ease;
        }

        .ke-footer-credit-badge:hover {
          border-color: rgba(79,201,232,.4);
          background: rgba(79,201,232,.06);
          box-shadow: 0 8px 26px rgba(22,183,215,.18);
        }

        .ke-footer-credit-dot {
          flex: 0 0 auto;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4fc9e8;
          animation: creditPulse 2.2s ease-in-out infinite;
        }

        .ke-footer-credit a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #9fb8dc;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: .2px;
          transition: color .25s ease;
        }

        .ke-footer-credit a strong {
          background: linear-gradient(90deg, #4fc9e8, #16b7d7, #7fe3f7, #16b7d7, #4fc9e8);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 800;
          animation: creditShine 5s linear infinite;
        }

        .ke-footer-credit-badge:hover a {
          color: #cddef4;
        }

        .ke-footer-credit-spark {
          color: #4fc9e8;
          transition: transform .4s ease;
        }

        .ke-footer-credit-badge:hover .ke-footer-credit-spark {
          transform: rotate(180deg) scale(1.2);
        }

        @media (max-width: 1000px) {
          .ke-footer-main {
            grid-template-columns: repeat(2, 1fr);
            gap: 44px 32px;
          }

          .ke-footer-brand {
            max-width: 100%;
          }

          .ke-footer-enquiry {
            grid-column: 1 / -1;
            max-width: 480px;
          }
        }

        @media (max-width: 640px) {
          .ke-footer-main {
            width: min(100% - 30px, 480px);
            padding: 48px 0 36px;
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .ke-footer-enquiry {
            max-width: 100%;
            padding: 20px;
          }

          .ke-footer-title {
            margin-bottom: 16px;
          }

          .ke-footer-bottom-inner {
            width: min(100% - 30px, 480px);
            padding: 18px 0;
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .ke-footer-legal {
            gap: 16px;
          }

          .ke-footer-top {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <footer className="ke-footer">

        <div className="ke-footer-main">

          {/* BRAND + CONTACT */}
          <div className="ke-footer-brand">

            <div className="ke-footer-logo-row">
              <img
                src={logo}
                alt="Kantule Edutech Pvt. Ltd."
                className="ke-footer-logo"
              />

              <div className="ke-footer-logo-text">
                <strong>Kantule Edutech</strong>
                <span>Pvt. Ltd.</span>
              </div>
            </div>

            <p className="ke-footer-tagline">
              Your Trusted Partner for Medical Education & Career Guidance
            </p>

            <div className="ke-footer-contact">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="ke-footer-contact-item" key={index}>
                    <span className="ke-footer-contact-icon">
                      <Icon size={15} />
                    </span>

                    <span>{item.content}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="ke-footer-title">Quick Links</h3>

            <div className="ke-footer-links">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="ke-footer-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* PROGRAMS */}
          <div>
            <h3 className="ke-footer-title">Our Programs</h3>

            <div className="ke-footer-links">
              {programs.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="ke-footer-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK ENQUIRY */}
          <div className="ke-footer-enquiry">
            <h3 className="ke-footer-title">Quick Enquiry</h3>

            <p className="ke-footer-enquiry-sub">
              Share your details, our team will get back to you shortly.
            </p>

            <form
              className="ke-footer-form"
              onSubmit={handleEnquirySubmit}
            >
              <input
                className="ke-footer-input"
                type="text"
                name="name"
                placeholder="Student Name"
                required
              />

              <input
                className="ke-footer-input"
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                pattern="[0-9]{10}"
                required
              />

              <input
                className="ke-footer-input"
                type="number"
                name="neet"
                placeholder="NEET Score"
              />

              <select
                className="ke-footer-input ke-footer-select"
                name="interest"
                defaultValue=""
              >
                <option value="" disabled>
                  Interested In
                </option>
                <option value="india">MBBS in India</option>
                <option value="abroad">MBBS Abroad</option>
              </select>

              <button className="ke-footer-submit" type="submit">
                Get Free Counselling
                <Send size={15} />
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="ke-footer-bottom">
          <div className="ke-footer-bottom-inner">

            <div className="ke-footer-copy">
              © 2026 Kantule Edutech Pvt. Ltd. All Rights Reserved.
            </div>

            <div className="ke-footer-legal">
             
            </div>

          </div>
        </div>

        {/* CREDIT */}
        <div className="ke-footer-credit">
          <div className="ke-footer-credit-inner">
            <div className="ke-footer-credit-badge">
              <span className="ke-footer-credit-dot" />

              <a
                href="https://www.gdaisolutions.com/"
                target="_blank"
                rel="noreferrer"
              >
              
                Designed by <strong>GD AI Solutions</strong>
              </a>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;