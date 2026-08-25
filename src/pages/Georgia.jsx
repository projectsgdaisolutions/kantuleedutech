import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Globe2,
  FileText,
  Plane,
  ShieldCheck,
  Building2,
  Stethoscope,
  BookOpen,
  Hospital,
  WalletCards,
  ClipboardCheck,
  Award,
  MessageCircle,
} from "lucide-react";

const Georgia = () => {
  const whatsappNumber = "918830451660";

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Kantule Edutech, I would like to know more about MBBS in Georgia."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const whyStudy = [
    {
      icon: Award,
      title: "Globally Recognized Universities",
      text: "Many universities are recognized by international medical bodies.",
    },
    {
      icon: BookOpen,
      title: "English Medium Programs",
      text: "Medical courses are taught in English for international students.",
    },
    {
      icon: WalletCards,
      title: "Affordable Tuition Fees",
      text: "MBBS in Georgia is more affordable compared to many Western countries.",
    },
    {
      icon: Globe2,
      title: "European Education System",
      text: "Universities follow modern European teaching standards.",
    },
    {
      icon: ShieldCheck,
      title: "Safe and Friendly Environment",
      text: "Georgia is known for its welcoming culture and safe cities.",
    },
    {
      icon: Hospital,
      title: "High-Quality Infrastructure",
      text: "Modern laboratories, hospitals, and research facilities.",
    },
  ];

  const courseStructure = [
    {
      year: "01–02",
      title: "Basic Medical Sciences",
      text: "Subjects include anatomy, physiology, biochemistry, and histology.",
    },
    {
      year: "03–04",
      title: "Pre-Clinical & Medical Subjects",
      text: "Students study pathology, microbiology, pharmacology, and internal medicine.",
    },
    {
      year: "05–06",
      title: "Clinical Training",
      text: "Practical hospital training where students gain hands-on experience with patients under supervision.",
    },
  ];

  const eligibility = [
    "Minimum 50% marks in Physics, Chemistry, and Biology in 12th grade",
    "NEET qualification required for Indian students",
    "Minimum age 17 years at the time of admission",
    "Valid passport",
    "Some universities may conduct interviews or additional assessments",
  ];

  const universities = [
    {
      name: "Georgian American University",
      short: "GAU",
      link: "/gau.php",
    },
    {
      name: "East European University",
      short: "EEU",
      link: "/eeu.php",
    },
    {
      name: "Alte University",
      short: "ALTE",
      link: "/alte_university.php",
    },
  ];

  const admissionSteps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Free Counseling",
      text: "Students receive guidance about universities, course details, and eligibility.",
    },
    {
      number: "02",
      icon: Building2,
      title: "University Selection",
      text: "Choose the best medical university based on academic profile and budget.",
    },
    {
      number: "03",
      icon: FileText,
      title: "Application Submission",
      text: "Submit required documents such as academic certificates and passport.",
    },
    {
      number: "04",
      icon: ClipboardCheck,
      title: "Admission Letter",
      text: "Receive official admission confirmation from the university.",
    },
    {
      number: "05",
      icon: Globe2,
      title: "Visa Processing",
      text: "Complete the visa application process.",
    },
    {
      number: "06",
      icon: Plane,
      title: "Travel to Georgia",
      text: "Students travel to Georgia and begin their medical education.",
    },
  ];

  const documents = [
    "10th and 12th mark sheets",
    "NEET scorecard",
    "Valid passport",
    "Passport-size photographs",
    "Medical fitness certificate",
    "Admission application form",
  ];

  const careers = [
    {
      title: "FMGE / NEXT",
      text: "To practice medicine in India",
    },
    {
      title: "USMLE",
      text: "To practice medicine in the United States",
    },
    {
      title: "PLAB",
      text: "To practice medicine in the United Kingdom",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061A33] via-[#073B78] to-[#087FAE] py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-[18%] top-[20%] h-32 w-32 rounded-full border border-white/10" />
          <div className="absolute right-[12%] top-[28%] h-52 w-52 rounded-full border border-white/10" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-cyan-100 backdrop-blur-md">
              <Globe2 size={15} />
              MBBS ABROAD
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Study MBBS in{" "}
              <span className="text-cyan-300">Georgia</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Georgia has become one of the most popular destinations for
              international students who wish to pursue MBBS abroad. The
              country offers globally recognized medical education, modern
              infrastructure, and affordable tuition fees compared to many
              other countries. Many Georgian medical universities are
              recognized by international organizations and follow European
              standards of education.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              For Indian students, Georgia provides an excellent opportunity
              to study medicine in English-medium programs with high-quality
              teaching and clinical training. Universities focus on both
              theoretical knowledge and practical medical skills, helping
              students build a strong foundation for their future careers as
              doctors.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#073B78] shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                Book Free Counselling
                <ArrowRight size={17} />
              </button>

              <a
                href="#universities"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Explore Universities
              </a>
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[350px] items-center justify-center"
          >
            <div className="absolute h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute h-40 w-40 rounded-full border border-white/10" />

            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-white to-cyan-50 shadow-2xl">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#073B78] text-white shadow-lg">
                    <Stethoscope size={34} />
                  </div>
                  <p className="text-sm font-extrabold text-[#073B78]">
                    MBBS
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    GEORGIA
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute left-2 top-12 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-lg">
              <p className="text-[10px] uppercase tracking-wider text-white/60">
                Education
              </p>
              <p className="mt-1 text-sm font-bold">European Standards</p>
            </div>

            <div className="absolute bottom-10 right-0 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-lg">
              <p className="text-[10px] uppercase tracking-wider text-white/60">
                Medium
              </p>
              <p className="mt-1 text-sm font-bold">English Programs</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="mx-auto max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            With a safe environment, modern campuses, and a growing
            international student community, Georgia has become a preferred
            destination for students who want to pursue a successful career
            in medicine.
          </p>
        </div>
      </section>

      {/* =========================================================
          WHY GEORGIA
      ========================================================= */}
      <section className="bg-[#F7FAFC] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#078FC9]">
              Why Georgia?
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#073B78] sm:text-4xl">
              Why Study MBBS in Georgia?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Georgia offers a combination of international medical education,
              modern infrastructure and a supportive environment for students.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyStudy.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(7,59,120,0.10)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF8FC] text-[#078FC9] transition group-hover:bg-[#078FC9] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-bold text-[#073B78]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE DURATION
      ========================================================= */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] bg-gradient-to-br from-[#073B78] to-[#078FC9] p-8 text-white shadow-[0_25px_60px_rgba(7,59,120,0.18)] sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <GraduationCap size={30} />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                Course Duration
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                MBBS Course Duration in Georgia
              </h2>

              <div className="mt-8 flex items-end gap-3">
                <span className="text-6xl font-black">6</span>
                <span className="pb-2 text-lg text-white/80">Years</span>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/75">
                The MBBS program in Georgia usually follows the European
                medical education system.
              </p>
            </motion.div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#078FC9]">
                Course Structure
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-[#073B78]">
                Learn. Train. Become a Doctor.
              </h2>

              <div className="mt-8 space-y-4">
                {courseStructure.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex gap-5 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#073B78] text-xs font-extrabold text-white">
                      {item.year}
                    </div>

                    <div>
                      <h3 className="font-bold text-[#073B78]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          ELIGIBILITY
      ========================================================= */}
      <section className="bg-[#F7FAFC] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#078FC9]">
                Eligibility
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-[#073B78] sm:text-4xl">
                Eligibility Criteria
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Students must meet the following requirements to apply for
                MBBS in Georgia.
              </p>

              <button
                onClick={openWhatsApp}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#073B78] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#078FC9]"
              >
                Check Your Eligibility
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {eligibility.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#078FC9]"
                  />
                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          UNIVERSITIES
      ========================================================= */}
      <section
        id="universities"
        className="bg-white py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#078FC9]">
              Featured Universities
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#073B78] sm:text-4xl">
              Top Medical Universities in Georgia
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Explore selected medical university opportunities in Georgia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {universities.map((university, index) => (
              <motion.div
                key={university.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(7,59,120,0.12)]"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#F1FAFD] to-[#EAF2FA]">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-lg">
                    <span className="text-xl font-black tracking-tight text-[#073B78]">
                      {university.short}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#078FC9]">
                    <Building2 size={14} />
                    Medical University
                  </div>

                  <h3 className="min-h-[56px] text-lg font-extrabold leading-7 text-[#073B78]">
                    {university.name}
                  </h3>

                  <a
                    href={university.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#078FC9] transition hover:text-[#073B78]"
                  >
                    View University
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ADMISSION PROCESS
      ========================================================= */}
      <section className="bg-[#F7FAFC] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#078FC9]">
              Process
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#073B78] sm:text-4xl">
              Admission Process
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF8FC] text-[#078FC9]">
                      <Icon size={22} />
                    </div>

                    <span className="text-3xl font-black text-slate-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold text-[#073B78]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DOCUMENTS
      ========================================================= */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#078FC9]">
              Documents
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#073B78] sm:text-4xl">
              Required Documents
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Students typically need the following documents:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((document, index) => (
              <motion.div
                key={document}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#078FC9] shadow-sm">
                  <FileText size={19} />
                </div>

                <span className="text-sm font-semibold text-slate-600">
                  {document}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 px-5 py-4 text-center text-xs font-medium text-amber-700">
            Some universities may request additional documents.
          </div>
        </div>
      </section>

      {/* =========================================================
          FEES
      ========================================================= */}
      <section className="bg-[#F7FAFC] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#078FC9]">
              Fees
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#073B78] sm:text-4xl">
              Approximate MBBS Fees in Georgia
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] border border-slate-100 bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8FC] text-[#078FC9]">
                <GraduationCap size={25} />
              </div>

              <h3 className="mt-5 font-bold text-[#073B78]">
                Tuition Fees
              </h3>

              <p className="mt-3 text-2xl font-black text-[#078FC9]">
                $4,000 – $7,000
              </p>

              <p className="mt-1 text-xs text-slate-400">
                per year
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-100 bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8FC] text-[#078FC9]">
                <Building2 size={25} />
              </div>

              <h3 className="mt-5 font-bold text-[#073B78]">
                Hostel / Accommodation
              </h3>

              <p className="mt-3 text-2xl font-black text-[#078FC9]">
                $1,500 – $3,000
              </p>

              <p className="mt-1 text-xs text-slate-400">
                per year
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-100 bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8FC] text-[#078FC9]">
                <WalletCards size={25} />
              </div>

              <h3 className="mt-5 font-bold text-[#073B78]">
                Food & Living
              </h3>

              <p className="mt-3 text-2xl font-black text-[#078FC9]">
                $2,000 – $3,000
              </p>

              <p className="mt-1 text-xs text-slate-400">
                per year
              </p>
            </div>
          </div>

          <p className="mt-7 text-center text-xs text-slate-400">
            Costs may vary depending on the university and city.
          </p>
        </div>
      </section>

      {/* =========================================================
          CAREER OPPORTUNITIES
      ========================================================= */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#078FC9]">
                Opportunities
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-[#073B78] sm:text-4xl">
                Career Opportunities After MBBS
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                After completing MBBS in Georgia, students can pursue medical
                careers globally by clearing licensing exams such as:
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Graduates can also pursue postgraduate medical specialization
                in different countries.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {careers.map((career, index) => (
                <motion.div
                  key={career.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#073B78] text-white">
                    <Stethoscope size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-[#073B78]">
                    {career.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {career.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#061A33] via-[#073B78] to-[#078FC9] py-16 lg:py-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
            <GraduationCap size={32} />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold text-white sm:text-4xl">
            Start Your Medical Journey in Georgia
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Get expert guidance about universities, eligibility, admission
            process and MBBS opportunities in Georgia.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#073B78] shadow-lg transition hover:-translate-y-1"
            >
              Book Free Counselling
              <ArrowRight size={17} />
            </button>

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Chat on WhatsApp
              <MessageCircle size={17} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Georgia;