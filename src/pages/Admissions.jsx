import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ClipboardList,
  FileText,
  MessageCircle,
  Phone,
  Send,
  UserRound,
  GraduationCap,
  MapPin,
  FileCheck,
  Plane,
  Headphones,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_NUMBER = "918830451660";

const steps = [
  {
    number: "01",
    title: "Counselling",
    text: "Student's academic profile, NEET score, budget and career goals are discussed thoroughly with certified counsellors.",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Course & University Selection",
    text: "Suitable colleges, universities and destination countries are shortlisted based on merit and individual preferences.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Application & Documentation",
    text: "Required application forms, transcripts and verification documents are prepared and submitted directly.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Admission Confirmation",
    text: "Official admission letter is received and seat allocation is confirmed according to university regulations.",
    icon: FileCheck,
  },
  {
    number: "05",
    title: "Visa Processing & Stamping",
    text: "Students receive complete guidance and support regarding student visa paperwork and embassy appointments.",
    icon: ClipboardList,
  },
  {
    number: "06",
    title: "Pre-Departure Briefing",
    text: "Students and parents receive essential travel, accommodation, currency exchange and cultural onboarding guidance.",
    icon: Plane,
  },
  {
    number: "07",
    title: "Post-Admission & On-Campus Support",
    text: "Continuous guidance, airport pickup, hostel settlement and Indian mess assistance throughout the course.",
    icon: Headphones,
  },
];

const documents = [
  "10th Marksheet & Passing Certificate",
  "12th Marksheet & Passing Certificate",
  "NEET Score Card",
  "Valid International Passport",
  "Passport-size Photographs (White Background)",
  "Other documents as required by university/country",
];

const enquiryMethods = [
  {
    title: "Phone Support",
    subtitle: "+91 8830451660 / 8237794917",
    icon: Phone,
    action: "tel:+918830451660",
    actionText: "Call Directly",
  },
  {
    title: "WhatsApp Chat",
    subtitle: "Instant 1-on-1 Guidance",
    icon: MessageCircle,
    action: `https://wa.me/${WHATSAPP_NUMBER}`,
    actionText: "Chat on WhatsApp",
  },
  {
    title: "Online Enquiry Form",
    subtitle: "Fast Response within 2 Hours",
    icon: FileText,
    action: "#enquiry",
    actionText: "Fill Form Below",
  },
  {
    title: "Direct Office Visit",
    subtitle: "Ambad, Jalna, Maharashtra",
    icon: MapPin,
    action: "/contact",
    actionText: "View Office Location",
  },
];

function Admissions() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    score: "",
    interestedIn: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Ensure page starts at top 0 on initial load and navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.mobile || !form.score || !form.interestedIn) return;

    const message = `Hello Kantule Edutech,

I would like to get free MBBS counselling.

Student Name: ${form.name}
Mobile Number: ${form.mobile}
NEET Score: ${form.score}
Interested In: ${form.interestedIn}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="overflow-hidden bg-[#f8fbff] text-[#09285f]">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .ke-hero-section {
          position: relative;
          background: linear-gradient(135deg, #061938 0%, #09285f 55%, #073b82 100%);
          color: #ffffff;
          overflow: hidden;
        }

        .ke-hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 12% 18%, rgba(8, 168, 213, 0.16), transparent 35%),
            radial-gradient(circle at 85% 15%, rgba(56, 189, 248, 0.12), transparent 38%),
            radial-gradient(circle at 80% 85%, rgba(7, 59, 130, 0.25), transparent 40%),
            radial-gradient(circle at 15% 85%, rgba(8, 168, 213, 0.1), transparent 35%);
          pointer-events: none;
        }

        /* Subtle dot matrix with cyan tint */
        .ke-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(8, 168, 213, 0.14) 1.2px, transparent 1.2px);
          background-size: 24px 24px;
          mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 80%);
          pointer-events: none;
        }

        .ke-card-sheen {
          position: relative;
          overflow: hidden;
        }

        .ke-card-sheen::after {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 45%;
          height: 100%;
          background: linear-gradient(115deg, transparent, rgba(255, 255, 255, 0.14), transparent);
          transform: skewX(-18deg);
          animation: ke-sheen 6s ease-in-out infinite;
        }

        @keyframes ke-sheen {
          0% { left: -60%; }
          45%, 100% { left: 130%; }
        }

        .ke-corner-fold {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 20px 20px 0;
          border-color: transparent rgba(8, 168, 213, 0.2) transparent transparent;
          transition: border-color 0.3s ease;
        }

        .group:hover .ke-corner-fold {
          border-color: transparent #08a8d5 transparent transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .ke-card-sheen::after {
            animation: none !important;
          }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="ke-hero-section">
        <div className="ke-dot-grid" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            {/* LEFT HERO CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#08a8d5]/40 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#38bdf8] shadow-[0_4px_14px_-4px_rgba(8,168,213,0.35)] backdrop-blur-md">
                <Sparkles size={13} className="text-[#08a8d5]" />
                Admissions &amp; Services
              </div>

              <h1 className="max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
                Your Admission
                <span className="mt-1 block bg-gradient-to-r from-[#38bdf8] via-[#08a8d5] to-[#00c2ff] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(8,168,213,0.35)]">
                  Journey, Simplified.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-blue-100/85 sm:text-base">
                Get complete, transparent guidance through profile assessment,
                university shortlisting, documentation, visa processing, and
                continuous post-admission on-campus support.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#079ac7] via-[#08a8d5] to-[#00c2ff] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_28px_-6px_rgba(8,168,213,0.5)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-4px_rgba(8,168,213,0.65)] hover:brightness-105"
                >
                  Get Free Counselling
                  <ArrowRight size={17} />
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  <MessageCircle size={17} className="text-[#38bdf8]" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Subdued Trust Indicators */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#08a8d5]/15 text-[#38bdf8]">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-xs font-semibold text-blue-100/90">
                    100% Free Guidance
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#08a8d5]/15 text-[#38bdf8]">
                    <GraduationCap size={16} />
                  </div>
                  <span className="text-xs font-semibold text-blue-100/90">
                    NMC &amp; WHO Verified
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#08a8d5]/15 text-[#38bdf8]">
                    <Plane size={16} />
                  </div>
                  <span className="text-xs font-semibold text-blue-100/90">
                    Visa &amp; Travel Assist
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: 7 SIMPLE STEPS CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[440px]"
            >
              <div className="ke-card-sheen relative rounded-[26px] border border-[#08a8d5]/35 bg-gradient-to-br from-[#072654]/95 via-[#08336d]/90 to-[#073b82]/95 p-6 shadow-[0_24px_60px_-10px_rgba(3,18,44,0.6)] backdrop-blur-xl sm:p-7">
                <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#38bdf8]">
                      ADMISSION SUPPORT
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-white">
                      7 Simple Steps
                    </h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#08a8d5]/30 bg-[#08a8d5]/15 text-[#38bdf8] shadow-[0_4px_14px_rgba(8,168,213,0.25)]">
                    <GraduationCap size={22} />
                  </div>
                </div>

                {/* Progress-Connected Step List */}
                <div className="relative mt-5 space-y-2.5">
                  {/* Subtle Vertical Progress Connector Line */}
                  <div
                    className="absolute bottom-5 left-[19px] top-4 w-0.5 bg-gradient-to-b from-[#08a8d5]/50 via-[#38bdf8]/30 to-transparent"
                    aria-hidden="true"
                  />

                  {steps.slice(0, 4).map((step) => (
                    <div
                      key={step.number}
                      className="group relative flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] px-3.5 py-2.5 transition duration-200 hover:border-[#08a8d5]/35 hover:bg-white/[0.08]"
                    >
                      <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#08a8d5]/40 bg-[#08a8d5]/20 text-[11px] font-extrabold text-[#38bdf8] shadow-[0_2px_8px_rgba(8,168,213,0.3)]">
                        {step.number}
                      </span>
                      <span className="text-xs font-semibold text-blue-50">
                        {step.title}
                      </span>
                      <Check
                        size={14}
                        className="ml-auto shrink-0 text-[#38bdf8]"
                      />
                    </div>
                  ))}
                </div>

                <div className="relative mt-4 flex items-center gap-2 rounded-xl border border-[#08a8d5]/25 bg-[#08a8d5]/10 px-3.5 py-3 text-xs font-medium leading-5 text-blue-100">
                  <CheckCircle2 size={15} className="shrink-0 text-[#38bdf8]" />
                  <span>
                    Complete guidance from counselling to post-admission settlement.
                  </span>
                </div>
              </div>

              {/* Card Ambient Glow */}
              <div className="pointer-events-none absolute -bottom-4 left-1/2 h-10 w-[85%] -translate-x-1/2 rounded-full bg-[#08a8d5]/20 blur-2xl" />
            </motion.div>
          </div>
        </div>

        {/* MODERN MINIMAL SECTION DIVIDER */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#08a8d5]/40 to-transparent" />
      </section>

      {/* ================= ADMISSION PROCESS SECTION ================= */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="ADMISSION PROCESS"
            title="A Clear Path From Counselling to Admission"
            description="Our structured 7-step admission process is designed to provide complete clarity and transparency at every milestone."
          />

          <div className="relative mt-14">
            {/* Modern vertical timeline line */}
            <div className="absolute bottom-6 left-5 top-6 w-0.5 bg-gradient-to-b from-[#08a8d5] via-[#073b82] to-[#08a8d5] sm:left-6" />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="relative flex gap-4 pl-12 sm:pl-16"
                  >
                    {/* Timeline Node Badge */}
                    <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#08a8d5] bg-white text-[12px] font-extrabold text-[#09285f] shadow-[0_4px_14px_rgba(8,168,213,0.25)] sm:h-12 sm:w-12 sm:text-[13px]">
                      {step.number}
                    </span>

                    {/* Timeline Step Card */}
                    <div className="flex-1 rounded-2xl border border-[#e2ecf5] bg-white p-5 shadow-[0_8px_24px_-6px_rgba(9,40,95,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#08a8d5]/40 hover:shadow-[0_16px_36px_-6px_rgba(8,168,213,0.14)] sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#08a8d5]/20 bg-[#f0f8fd] text-[#08a8d5]">
                          <Icon size={21} />
                        </div>
                        <div>
                          <h3 className="text-base font-extrabold text-[#09285f] sm:text-lg">
                            {step.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#556987]">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#08a8d5]/20 to-transparent" />

      {/* ================= REQUIRED DOCUMENTS ================= */}
      <section className="bg-[#f8fbff] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="REQUIRED DOCUMENTS"
            title="Documents You May Need"
            description="Keep the following original documents and photocopies ready for hassle-free MBBS application and visa processing:"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((document, index) => (
              <motion.div
                key={document}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-[#e2ecf5] bg-white p-4.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#08a8d5]/45 hover:shadow-[0_12px_28px_-6px_rgba(8,168,213,0.15)]"
              >
                <span className="ke-corner-fold" />
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#08a8d5]/20 bg-[#f0f8fd] text-[#08a8d5] transition group-hover:bg-[#08a8d5] group-hover:text-white">
                  <Check size={16} />
                </div>
                <span className="text-sm font-bold text-[#09285f]">
                  {document}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#08a8d5]/20 to-transparent" />

      {/* ================= ENQUIRY METHODS ================= */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="ENQUIRY PROCESS"
            title="Connect With Kantule Edutech"
            description="Choose your preferred channel to consult directly with our senior medical admission counsellors:"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {enquiryMethods.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group flex flex-col justify-between rounded-2xl border border-[#e2ecf5] bg-white p-6 text-center shadow-[0_8px_24px_-6px_rgba(9,40,95,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#08a8d5]/45 hover:shadow-[0_16px_36px_-6px_rgba(8,168,213,0.16)]"
                >
                  <div>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#08a8d5]/20 bg-[#f0f8fd] text-[#08a8d5] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#079ac7] group-hover:to-[#08a8d5] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(8,168,213,0.35)]">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-4 text-base font-extrabold text-[#09285f]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#556987]">
                      {item.subtitle}
                    </p>
                  </div>

                  <a
                    href={item.action}
                    className="mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#079ac7] transition group-hover:text-[#08a8d5]"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight size={13} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ENQUIRY FORM SECTION ================= */}
      <section
        id="enquiry"
        className="relative overflow-hidden bg-gradient-to-br from-[#061938] via-[#09285f] to-[#073b82] px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="ke-dot-grid" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#08a8d5]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#073b82]/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          {/* FORM LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#08a8d5]/40 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#38bdf8] backdrop-blur-md">
              <MessageCircle size={14} className="text-[#08a8d5]" />
              Free Medical Counselling
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.65rem]">
              Get Expert
              <span className="block bg-gradient-to-r from-[#38bdf8] to-[#00c2ff] bg-clip-text text-transparent">
                MBBS Counselling
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-blue-100/85 sm:text-base">
              Please fill in your details below and our senior medical admission
              director will connect with you shortly for a personalized roadmap.
            </p>

            <div className="mt-8 space-y-3.5">
              {[
                "Personalized NEET score analysis & college matching",
                "Transparent tuition fee & hostel breakdown",
                "Direct university admission & documentation support",
                "Instant WhatsApp enquiry & status tracking",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-white"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#08a8d5]/30 bg-[#08a8d5]/20 text-[#38bdf8]">
                    <Check size={14} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FORM RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[26px] border border-[#08a8d5]/30 bg-white/[0.07] p-6 shadow-[0_24px_60px_-10px_rgba(3,18,44,0.6)] backdrop-blur-xl sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4.5">
              <div className="grid gap-4.5 sm:grid-cols-2">
                <FormField
                  label="Student Name *"
                  name="name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={handleChange}
                />
                <FormField
                  label="Mobile Number (WhatsApp) *"
                  name="mobile"
                  type="tel"
                  placeholder="e.g. 8830451660"
                  value={form.mobile}
                  onChange={handleChange}
                />
                <FormField
                  label="NEET Score / Expected Score *"
                  name="score"
                  type="text"
                  placeholder="e.g. 450 / Qualified"
                  value={form.score}
                  onChange={handleChange}
                />

                <div>
                  <label className="mb-2 block text-xs font-bold text-white/90">
                    Interested Destination *
                  </label>
                  <select
                    name="interestedIn"
                    value={form.interestedIn}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition focus:border-[#08a8d5] focus:ring-4 focus:ring-[#08a8d5]/20"
                  >
                    <option value="" className="text-[#09285f]">
                      Select Destination Program
                    </option>
                    <option value="MBBS in India" className="text-[#09285f]">
                      MBBS in India
                    </option>
                    <option value="MBBS in Russia" className="text-[#09285f]">
                      MBBS in Russia
                    </option>
                    <option
                      value="MBBS in Kyrgyzstan"
                      className="text-[#09285f]"
                    >
                      MBBS in Kyrgyzstan
                    </option>
                    <option
                      value="MBBS in Kazakhstan"
                      className="text-[#09285f]"
                    >
                      MBBS in Kazakhstan
                    </option>
                    <option value="MBBS in Georgia" className="text-[#09285f]">
                      MBBS in Georgia
                    </option>
                    <option value="MBBS in Vietnam" className="text-[#09285f]">
                      MBBS in Vietnam
                    </option>
                    <option value="MBBS in Nepal" className="text-[#09285f]">
                      MBBS in Nepal
                    </option>
                    <option
                      value="MBBS in Philippines"
                      className="text-[#09285f]"
                    >
                      MBBS in Philippines
                    </option>
                    <option
                      value="MBBS in USA &amp; Other Destinations"
                      className="text-[#09285f]"
                    >
                      MBBS in USA &amp; Other Destinations
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#079ac7] via-[#08a8d5] to-[#00c2ff] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(8,168,213,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(8,168,213,0.6)] hover:brightness-105"
              >
                {submitted ? (
                  <>
                    <Check size={18} />
                    <span>Enquiry Sent to WhatsApp</span>
                  </>
                ) : (
                  <>
                    <span>Get Free Counselling</span>
                    <Send size={17} />
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-[11px] leading-5 text-blue-100/60">
                Your enquiry will be connected directly with our senior counselling
                team via WhatsApp.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= WHATSAPP CTA ================= */}
      <section className="bg-[#f8fbff] px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-5 rounded-[24px] border border-[#e2ecf5] bg-white p-6 text-center shadow-[0_8px_24px_-6px_rgba(9,40,95,0.06)] sm:flex-row sm:p-8 sm:text-left">
            <div>
              <h3 className="text-xl font-extrabold text-[#09285f]">
                Need immediate admission assistance?
              </h3>
              <p className="mt-1 text-sm text-[#556987]">
                Connect with our medical counselling directors on WhatsApp for real-time answers.
              </p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#16C47F] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(22,196,127,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(22,196,127,0.45)]"
            >
              <MessageCircle size={18} />
              WhatsApp Us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#079ac7]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#08a8d5]" />
        {eyebrow}
      </div>
      <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#09285f] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-[#556987] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function FormField({ label, name, type, placeholder, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold text-white/90">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-blue-100/40 focus:border-[#08a8d5] focus:ring-4 focus:ring-[#08a8d5]/20"
      />
    </div>
  );
}

export default Admissions;