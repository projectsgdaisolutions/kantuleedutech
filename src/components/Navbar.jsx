import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo/logo.jpeg";

function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/programs", label: "MBBS Programs" },
    { to: "/admissions", label: "Admissions & Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(8,47,91,0.06)]"
            : "border-b border-transparent bg-white"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="flex h-[72px] items-center justify-between lg:h-[88px]">

            {/* LOGO + KANTULE EDUTECH NAME */}
            <Link
              to="/"
              onClick={closeMobile}
              className="z-10 flex shrink-0 items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={logo}
                alt="Kantule Edutech"
                className="h-[52px] w-auto object-contain sm:h-[60px] lg:h-[72px]"
              />

              {/* Added Kantule Edutech Name */}
             <div className="flex flex-col leading-none">
  <span className="font-serif text-[17px] font-extrabold tracking-[0.08em] text-[#C62828] sm:text-[19px] lg:text-[23px]">
    KANTULE
  </span>

  <span className="font-serif text-[17px] font-extrabold tracking-[0.08em] text-[#C62828] sm:text-[19px] lg:text-[23px]">    EDUTECH
  </span>
</div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center lg:flex">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    active={location.pathname === link.to}
                  />
                ))}
              </div>
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#071F3D] to-[#0B2E52] px-6 py-3 text-[12px] font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(8,47,91,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(11,143,211,0.25)]"
              >
                <MessageCircle size={16} className="text-[#16B9D9]" />
                Book Free Counselling
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#082F5B] shadow-sm transition-colors hover:bg-slate-50 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">

            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="absolute inset-0 bg-[#040814]/60 backdrop-blur-md"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-[400px] flex-col bg-white shadow-2xl"
            >
              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="Kantule Edutech"
                    className="h-12 w-auto object-contain"
                  />

                  {/* Added Kantule Edutech Name */}
                  <span className="text-[15px] font-bold tracking-wide text-red-600">
                    KANTULE EDUTECH
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeMobile}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#082F5B] transition-colors hover:bg-slate-50"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              {/* MENU */}
              <div className="flex-1 overflow-y-auto px-5 py-6">
                <motion.div
                  className="space-y-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                >
                  {navLinks.map((link) => (
                    <MobileLink
                      key={link.to}
                      to={link.to}
                      label={link.label}
                      active={location.pathname === link.to}
                      onClick={closeMobile}
                    />
                  ))}
                </motion.div>
              </div>

              {/* MOBILE CTA */}
              <div className="border-t border-slate-100 bg-slate-50/50 p-5">
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B8FD3] to-[#16B9D9] px-5 py-4 text-sm font-bold text-white shadow-lg transition-transform active:scale-[0.98]"
                >
                  <MessageCircle size={18} />
                  Book Free Counselling
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ to, label, active }) {
  return (
    <Link
      to={to}
      className="group relative flex items-center px-4 py-2 text-[13.5px] font-semibold transition-colors"
    >
      <span
        className={`relative z-10 ${
          active
            ? "text-[#0B5EA8]"
            : "text-slate-600 group-hover:text-[#082F5B]"
        }`}
      >
        {label}
      </span>

      {/* Animated Underline */}
      <span
        className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0B8FD3] to-[#16B9D9] transition-all duration-300 ease-out ${
          active
            ? "w-1/2 opacity-100"
            : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100"
        }`}
      />
    </Link>
  );
}

function MobileLink({ to, label, active, onClick }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={to}
        onClick={onClick}
        className={`group flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-200 ${
          active
            ? "bg-gradient-to-r from-[#071F3D] to-[#0B2E52] text-white shadow-md"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        <span className="text-[15px] font-semibold">{label}</span>

        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
            active
              ? "bg-white/20 text-white"
              : "bg-slate-100 text-slate-400 group-hover:bg-[#0B8FD3] group-hover:text-white"
          }`}
        >
          <ArrowRight size={16} />
        </span>
      </Link>
    </motion.div>
  );
}

export default Navbar;